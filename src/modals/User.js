const mongoose = require('mongoose')
const { Schema } = mongoose


const UserModel = new Schema(
    {
        role: {
            type: String,
        },

        userId: {
            type: String,
            required: true,
            unique: true, // Ensure userId is unique
        },

        gender: {
            type: String,
        },

        userName: {
            type: String,
            required: true
        },
        // Adding location field
        location: {
            type: [Number], // Define as an array of numbers
        }
    }
)

const userSchema = mongoose.model('User', UserModel);

module.exports = userSchema
