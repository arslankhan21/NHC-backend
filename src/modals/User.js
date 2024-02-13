const mongoose = require("mongoose");
const { Schema } = mongoose;

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
      required: true,
    },
    // Adding location field
    location: {
      type: 
      {
        position: Schema.Types.Mixed, // Allow any type for position
        rotation: Schema.Types.Mixed, // Allow any type for rotation
        state: { type: String, default: "idle" }
      }
      // type: [Number], // Define as an array of numbers
    },
    status: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const userSchema = mongoose.model("User", UserModel);

module.exports = userSchema;
