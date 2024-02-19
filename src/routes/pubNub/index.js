const PubNub= require('pubnub');
const config = require('../../config');

// Initialize PubNub with your publish and subscribe keys
const pubnub = new PubNub({
    publishKey: config.PUBNUB_PUBLISH_KEY,
    subscribeKey: config.PUBNUB_SUBSCRIBE_KEY,
    userId:config.PUBNUB_USER_ID,
});

// Publish a message to a channel
pubnub.publish({
    channel: 'my_channel',
    message: {
        text: 'Hello from Node.js!'
    }
}, (status, response) => {
    if (status.error) {
        console.error(status.errorData);
    } else {
        console.log('Message published successfully');
    }
});

// Subscribe to messages on a channel
pubnub.addListener({
    message: function(message) {
        console.log('Received message:', message.message);
    }
});

pubnub.subscribe({
    channels: ['my_channel']
});