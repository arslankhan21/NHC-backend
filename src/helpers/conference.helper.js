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

const filterConferences = async (filter, projection) => {
  try{
    const projectionFields = projection.filter(Boolean).join(' ') + ' -_id';

    // Dynamically constructing the findQuery based on filter object
    let findQuery = Object.keys(filter).reduce((acc, key) => {
      if (filter[key]) {
        acc[key] = { $regex: new RegExp(filter[key], 'i') };
      }
      return acc;
    }, {});
    return await Conference.find(findQuery ,projectionFields)
  }
  catch (error) {
    console.log(`Failed to filter conference: ${error.message}`);
  }
}

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

const getAllConferences = async (filter={} , projection=[]) => {
  try {
    let findQuery = filter
    // Dynamically constructing the findQuery based on filter object
    if (Object.keys(filter).length !== 0) {
      console.log("getAllConferences -> filters: ",filter)
      findQuery = Object.keys(filter).reduce((acc, key) => {
        if (filter[key]) {
          acc[key] = { $regex: new RegExp(filter[key], 'i') };
        }
        return acc;
      }, {});
    }

    // Constructing the projection fields
    let projectionFields = {};
    if (projection.length !== 0) {
      projectionFields = projection.reduce((acc, field) => {
        acc[field] = 1;
        return acc;
      }, {});
    }
    const conferences = await Conference.find(findQuery,projectionFields);
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
  filterConferences
};
