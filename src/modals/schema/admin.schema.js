const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
    role:{
        type: String,
        default: 'admin'
    },
    email:{
        type: String,
        default: 'admin@example.com'
    },
    password:{
        type: String,
        default: 'admin123'
    },
    token:{
        type: String,
        default: ' '
    }
}, { timestamps: true });

module.exports = adminSchema