const mongoose = require('mongoose');
const { adminSchema } = require('./schema');

const admin = mongoose.model('admin', adminSchema)
module.exports = admin