const Conference = require("../modals/Conference");

const createConference = async (conferenceDetails) => {
  try {
    const conference = await Conference.create(conferenceDetails);
    console.log(conference, "<==conference");
    return conference;
  } catch (error) {
    throw new Error(`Failed to create conference: ${error.message}`);
  }
};

const getConferenceById = async (id) => {
  try {
    const conference = await Conference.findById(id);
    console.log(conference, "<=conference");
    if (!conference) {
      console.log("no conference found");
      throw new Error(`OBJECT_NOT_FOUND`);
    }
    return conference;
  } catch (error) {
    if (error.message == "OBJECT_NOT_FOUND") {
      throw new Error(`OBJECT_NOT_FOUND`);
    }
    throw new Error(`Failed to get conference: ${error.message}`);
  }
};

const getAllConferences = async () => {
  try {
    const conferences = await Conference.find();
    return conferences;
  } catch (error) {
    throw new Error(`Failed to get conferences: ${error.message}`);
  }
};

const updateConference = async (id, updateDetails) => {
  try {
    const conference = await Conference.findByIdAndUpdate(id, updateDetails, {
      new: true,
    });
    return conference;
  } catch (error) {
    throw new Error(`Failed to update conference: ${error.message}`);
  }
};

const deleteConference = async (id) => {
  try {
    const conference = await Conference.findByIdAndDelete(id);
    return conference;
  } catch (error) {
    throw new Error(`Failed to delete conference: ${error.message}`);
  }
};

module.exports = {
  createConference,
  getConferenceById,
  getAllConferences,
  updateConference,
  deleteConference,
};
