const mongoose = require('mongoose');
const { auctionSchema } = require('./schema');

const auction = mongoose.model('auction', auctionSchema)
module.exports = auction