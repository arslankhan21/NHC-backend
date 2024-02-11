const mongoose = require("mongoose");
const { Schema } = mongoose;

const BoothModel = new Schema(
  {
    representative: {
      type: String,
    },

    boothId: {
      type: String,
      required: true,
      unique: true, // Ensure boothId is unique
    },

    boothName: {
      type: String,
      required: true,
    },
    // Adding location field
    availabilityStatus: {
      type: Boolean, // Define as an array of numbers
      default: false,
    },
  },
  { timestamps: true }
);

const boothSchema = mongoose.model("Booth", BoothModel);

module.exports = boothSchema;
