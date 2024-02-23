"use strict";

// const { generateRandomId } = require('../../utils/helperFunctions')
const base64id = require("base64id");
const userHelper = require("../../helpers/user.helper");
const boothHelper = require("../../helpers/booth.helper");

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

io.engine.generateId = (req) => {
  const query = require("url").parse(req.url, true).query;
  const prevId = query["socketId"];
  // prevId is either a valid id or an empty string
  if (prevId) {
    return prevId;
  }
  return base64id.generateId();
};

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
function getAllQueuesLength() {
  const queueLengths = Object.entries(queues).map(([boothId, userQueue]) => {
    return { boothId, length: userQueue?.queue.length };
  });
  return queueLengths || [];
}

async function leaveQueue(socket = {}) {
  const { userId, boothId, role } = socket;
  if (!userId || !boothId) {
    io.emit("error", " either userId is missing  or boothId");
    return;
  }
  console.log("start ========= queues: ", queues);
  if (queues[boothId]) {
    if (role == "UserPlayer") {
      if (queues[boothId].queue?.length) {
        queues[boothId].queue = queues[boothId].queue.filter((user) => {
          console.log("item =================> ", user);
          return user.userId !== userId;
        });
      }
      console.log("queues[boothId]: ", queues[boothId]);
    } else {
      console.log("queue is empty");
    }
    console.log("before ------queues[boothId]: ", queues[boothId]);
    if (role !== "UserPlayer") {
      queues[boothId].representative = {};
    }
    console.log("after ------queues[boothId]: ", queues[boothId]);
    io.emit("queueUpdated", {
      boothId,
      representative: queues[boothId].representative,
      queue: queues[boothId].queue,
    });
  }
}
async function enterQueue(socket = {} , username=null) {
  const { userId, boothId, role } = socket;
  try {
    if (!userId || !boothId) {
      io.emit("error", " either userId is missing  or boothId");
      return;
    }
    if (!queues[boothId] || queues[boothId]?.length == 0) {
      console.log("initialized");
      queues[boothId] = { representative: {}, queue: [] };
    }
    console.log("queues[boothId] = ", queues[boothId]);
    let index = -1;
    if (queues[boothId]?.queue?.length) {
      index = queues[boothId]?.queue.findIndex((user) => {
        console.log("filter: ", user);
        return user.userId === userId;
      });
    } else {
      console.log("queue is empty");
    }
    console.log("index: ", index);
    if (index != -1) {
      console.log("index-------------------------: ", index);
      //that user already exist in the queue
    } else {
      if (role == "UserPlayer") {
        console.log("player added to queue");
        queues[boothId].queue.push({ userId, username, role });
      } else {
        queues[boothId].representative = { userId, username, role };
      }
      console.log("queues[boothId]: ", queues[boothId]);
    }

    console.log("queues: ", queues);
      console.log("representative", queues[boothId].representative);
      io.emit("queueUpdated", {
        boothId,
        representative: queues[boothId].representative,
        queue: queues[boothId].queue,
      });
  }
  catch (e) {
    console.log("error -> enterQueue : ", e);
  }
}

//----------------------------------------------------------------
io.use(function (socket, next) {
  console.log("someone is trying to connect...");
  console.log("here is his socket.id: ", socket.id);
  const query = socket.handshake.query;
  console.log("socket.handshake: ", socket.handshake.headers);
  console.log("query: ", query, "query.userId: ", query.userId);
  const { userId, role } = query;
  socket.decoded = { userId, role };

  next();
})
  .on("connect", (socket) => {
    console.log("A user connected");
    (async () => {
      await userHelper.updateUser(socket.decoded.userId, { status: true });
    })();

    (async () => {
      try{
        console.log("immediate inovke for representative socket");
        if(socket.decoded.role === "BoothRepresentativePlayer"){
          console.log("role found ---");
          const booth = await boothHelper.filterBooths({ representative: socket.decoded.userId }, []);
          const user = await userHelper.getUserByID(socket.decoded.userId);
          console.log("booth: ", booth , "user: ", user)
          if (booth.length > 0) {
            await boothHelper.updateBooth(booth[0].boothId, {
              availabilityStatus: true,
            });
            socket.decoded.boothId = booth[0].boothId;
            await enterQueue(socket.decoded , user.userName)
          }
        }
      }
      catch(err){
        console.log("Error: ",err);
      }
    })()

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

    socket.on("enterQueue", async ({ boothId, username }) => {
      console.log(" username: ", username);
      console.log("socket.decoded.userId", socket.decoded.userId);

      const { userId, role } = socket.decoded;
      console.log("boothId,: ", boothId, " userId: ", userId , " role: " , role);

      //update the boothId of the connected user
      socket.decoded.boothId = boothId;

      await enterQueue(socket.decoded); // only decoded object needed
      
    });

    socket.on("leaveQueue", async ({ boothId }) => {
      console.log("socket.decoded: ", socket.decoded);
      // const { userId, role } = socket.decoded;

      //update the boothId of the connected user
      socket.decoded.boothId = boothId;
      await leaveQueue({ ...socket.decoded });
    });

    socket.on("getQueueLengths", () => {
      // Emit back to the requester
      socket.emit("queueLengths", getAllQueuesLength());
    });

    /**
     * get all User location from the DB and through the
     * @pram  [{userId ,username , location }, ...{}]
     * @description u can say find() all keys $projection {userId, username ,location}
     */
    socket.on("getAllUser", async (query = {}) => {
      console.log("query: ", query);
      const { floor } = query;
      const filter = { status: true };
      if (floor !== undefined) {
        filter[`location.floor`] = floor;
      }
      io.emit(
        "getAllUserDetails",
        await userHelper.getUsersBySpecificProjection(filter, [
          "userId",
          "userName",
          "location",
        ])
      );
    });

    socket.on("updateUserLocation", async ({ location }) => {
      console.log("socket.decoded.userId", socket.decoded.userId);
      console.log("location==>", location);
      const { userId } = socket.decoded;
      if (!userId) {
        io.emit("error", " userId is missing while connecting to server");
        return;
      }
      const updateUser = await userHelper.updateUser(userId, {
        location: location,
      });
      console.log("updateUser: ", updateUser);

      // Extract the floor from the updated location
      const floor = location?.floor;

      // Prepare the filter for getting users. Start with status = true
      const filter = { status: true };

      // If floor is defined, add it to the filter
      if (floor !== undefined) {
        filter[`location.floor`] = floor;
      }

      // Emit the updated list of users filtered by floor if provided
      io.emit(
        "getAllUserDetails",
        await userHelper.getUsersBySpecificProjection(filter, [
          "userId",
          "userName",
          "location",
        ])
      );
    });

    socket.on("disconnect", async () => {
      if (socket.decoded.userId) {
        //soft- delete from the socket
        console.log("disconnect -> socket.decoded", socket.decoded);

        if (socket.decoded.role === "BoothRepresentativePlayer") {
          console.log();
          await boothHelper.updateBooth(socket.decoded.boothId, {
            availabilityStatus: false,
          });

          // Emit the boothId and availability status to all connected clients
          io.emit("boothDetailsUpdated", {
            boothId: socket.decoded.boothId,
            availabilityStatus: false,
          });
        }
        await userHelper.updateUser(socket.decoded.userId, { status: false });
        console.log("socket.decoded.boothId:  ", socket.decoded.boothId);

        //leaveQueue is called when the boothId is found
        if (socket.decoded.boothId) {
          console.log("leaveQueue =================== on disconection   ");
          await leaveQueue(socket.decoded);
        }
      } else {
        console.log("User ID not found");
      }
    });
  })
  .on("error", (err) => {
    console.log("error: ", err);
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
    nextUser.emit("updateNeighbor", {
      prevUsername: user.prev ? user.prev.username : null,
    });
  }

  if (prevUser) {
    prevUser.emit("updateNeighbor", {
      nextUsername: user.next ? user.next.username : null,
    });
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
