'use strict'

const { generateRandomId } = require('../../utils/helperFunctions')
const base64id = require('base64id')
const userHelper = require('../../helpers/user.helper')



/* Socket Room Data Sample
[
    {
        boothId: '33',
        users: [{
            userId: 'BwjY3S6ENmTnK8mqAAAe',
            userName: 'User1',
            location: [ 74.276902754, 31.4573687463 ]
        }]
    }
]
*/

const queues = {}; // Object to hold queues for each booth

/*
|--------------------------------------------------------------------------
| Reuse SocketId
|--------------------------------------------------------------------------
|
| Override thw actuall socket.io engine gernerate Id function
| If user pass the existing socket id it will override the existing one.
|
*/

io.engine.generateId = req => {
    const query = require('url').parse(req.url, true).query
    const prevId = query['socketId']
    // prevId is either a valid id or an empty string
    if (prevId) {
        return prevId
    }
    return base64id.generateId()
}

/*
|--------------------------------------------------------------------------
| Socket Routes
|--------------------------------------------------------------------------
|
| Here you can register Socket routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "socket" middleware group. Enjoy building your Socket Paths!
|
*/

// Maps userId to boothId for quick lookups
const userToBoothMap = new Map();

// Maps userId to their socket connection
const userConnections = new Map();

//methods
    /**
     * ALL queues LENGTH 
     * @param {}
     * @return {Array[ {'booth Id: 'length'}]}
     */
    function getAllQueuesLength(){
        const queueLengths = Object.entries(queues).map(([boothId, userQueue]) => {
            return { boothId, length: userQueue.length };
        });
        return queueLengths || [];
    }

io.use(function (socket, next) {
    console.log('someone is trying to connect...')
    console.log('here is his socket.id: ', socket.id);
    const query = socket.handshake.query
    console.log('query: ', query);
    next();
})
.on('connect', (socket) => {
    console.log('A user connected');
    // socket.on('enterQueue', ({ boothId, userId, username }) => {
    //     const user = { userId, username, socketId: socket.id, next: null, prev: null };

    //     userConnections.set(userId, socket);

    //     if (!queues[boothId]) {
    //         queues[boothId] = { head: null, tail: null };
    //     }

    //     // Add user to the queue
    //     addUserToQueue(boothId, user);

    //     // Notify user about their neighbors
    //     notifyNeighbors(boothId, userId);

    //     // Listen for disconnection
    //     socket.on('disconnect', () => {
    //         removeUserFromQueue(boothId, userId);
    //         notifyNeighbors(boothId, userId);
    //         userConnections.delete(userId);
    //     });
    // });

    socket.on('enterQueue', ({ boothId, userId  , username}) => {
        console.log('boothId,: ', boothId, ' userId: ', userId , ' username: ', username);
      if (!queues[boothId]) queues[boothId] = [];
        const index =queues[boothId].findIndex((user) =>{
            console.log('filter: ',user)
           return user.userId === userId
        } )
        console.log("index: ",index);
      if(index != -1){
        
        //that user already exist in the queue
        queues[boothId][index].username = username

      }
      else{
        queues[boothId].push({userId , username});
        console.log('queues[boothId]: ', queues[boothId]);
      }
      console.log('queues: ', queues);
      io.emit('queueUpdated', { boothId, queue: queues[boothId] });
    });
  
    socket.on('leaveQueue', ({ boothId, userId }) => {
      if (queues[boothId]) {
        queues[boothId] = queues[boothId].filter((user) =>{
            console.log('item => ', user);
           return  user.userId !== userId
        } );
        console.log('queues',  queues[boothId]);
        io.emit('queueUpdated', { boothId, queue: queues[boothId] });
      }
    });



    socket.on('getQueueLengths', () => {
        // Emit back to the requester
        socket.emit('queueLengths', getAllQueuesLength());
    });


    /**
     * get all User location from the DB and through the 
     * @pram  [{userId ,username , location }, ...{}]
     * @description u can say find() all keys $projection {userId, username ,location}
     */
    socket.on('getAllUser', async () =>{
        io.emit('getAllUserDetails', await userHelper.getUsersBySpecificProjection(['userId', 'userName', 'location']))
    });



})
.on('error', (err) => { 
    console.log('error: ', err); 
});

function addUserToQueue(boothId, user) {
    const queue = queues[boothId];
    if (!queue.head) {
        queue.head = queue.tail = user;
    } else {
        queue.tail.next = user;
        user.prev = queue.tail;
        queue.tail = user;
    }
    userToBoothMap.set(user.userId, boothId);
}

function removeUserFromQueue(boothId, userId) {
    const queue = queues[boothId];
    let currentUser = queue.head;
    while (currentUser) {
        if (currentUser.userId === userId) {
            if (currentUser.prev) currentUser.prev.next = currentUser.next;
            if (currentUser.next) currentUser.next.prev = currentUser.prev;
            if (queue.head === currentUser) queue.head = currentUser.next;
            if (queue.tail === currentUser) queue.tail = currentUser.prev;
            userToBoothMap.delete(userId);
            break;
        }
        currentUser = currentUser.next;
    }
}

function notifyNeighbors(boothId, userId) {
    const user = findUserInQueue(boothId, userId);
    if (!user) return;

    const nextUser = user.next ? userConnections.get(user.next.userId) : null;
    const prevUser = user.prev ? userConnections.get(user.prev.userId) : null;

    if (nextUser) {
        nextUser.emit('updateNeighbor', { prevUsername: user.prev ? user.prev.username : null });
    }

    if (prevUser) {
        prevUser.emit('updateNeighbor', { nextUsername: user.next ? user.next.username : null });
    }
}

function findUserInQueue(boothId, userId) {
    let currentUser = queues[boothId].head;
    while (currentUser) {
        if (currentUser.userId === userId) {
            return currentUser;
        }
        currentUser = currentUser.next;
    }
    return null;
}

