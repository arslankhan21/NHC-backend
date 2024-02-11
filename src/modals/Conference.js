const mongoose = require("mongoose");
const { conferenceSchema } = require("./schema");

const Conference = mongoose.model("Conference", conferenceSchema);
module.exports = Conference;
