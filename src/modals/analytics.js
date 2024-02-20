const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnalyticsModel = new Schema(
  {
    userId: {
      type: String,
    },
    data: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const analyticSchema = mongoose.model("Analytics", AnalyticsModel);
module.exports = analyticSchema;
