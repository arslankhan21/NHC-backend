const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnalyticsModel = new Schema(
  {
    data: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

const analyticSchema = mongoose.model("Analytics", AnalyticsModel);
module.exports = analyticSchema;
