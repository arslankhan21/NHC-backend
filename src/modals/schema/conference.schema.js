const mongoose = require("mongoose");
const { Schema } = mongoose;

const conferenceSchema = new Schema(
  {
    representativeId: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    speakerName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    eventStartTime: {
      type: Date,
      required: true,
    },
    eventEndTime: {
      type: Date,
      required: true,
    },
    logos: {
      type: [String], // Array of strings for picture URLs
      default: [], // Array of strings for picture URLs
    },
    contentImages: {
      type: [String], // Array of strings for picture URLs
      default: [], // Array of strings for picture URLs
    },
    status:{
      type: String, // (pending, approved, started, ended)
      default: "pending",
    }
  },
  { timestamps: true }
);

// If you need to use any validators or plugins, they can be added here
// conferenceSchema.plugin(yourPlugin);
// conferenceSchema.path('path').validate(yourValidator);

module.exports = conferenceSchema;
