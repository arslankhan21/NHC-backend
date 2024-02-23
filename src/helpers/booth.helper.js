const boothSchema = require("../modals/Booth");

const createBooth = async (boothDetails) => {
  try {
    let boothId = boothDetails?.boothId;

    // Check if boothId exists and is not already a string, then convert it to string
    if (boothId !== undefined && typeof boothId !== "string") {
      boothId = String(boothId);
    }

    let checkBoothExist = await boothSchema
      .findOne({ boothId: boothId })
      .exec();
    if (checkBoothExist) {
      throw new Error(`DUPLICATE_BOOTH`);
    }
    let booth = await boothSchema.create(boothDetails);
    return booth._doc;
  } catch (error) {
    if (error.message == "DUPLICATE_BOOTH") {
      throw new Error(`DUPLICATE_BOOTH`);
    }
    throw new Error(`Failed to create Booth details: ${error.message}`);
  }
};

const getBoothByID = async (boothId) => {
  try {
    let query = boothSchema.findOne({ boothId: boothId }).exec();

    return query;
  } catch (error) {
    throw new Error(`Failed to get booth details by this id: ${error.message}`);
  }
};
const filterBooths = async (filter={}, projection=[]) => {
  try{
    const projectionFields = projection.length ? projection.filter(Boolean).join(' ') + ' -_id' : [];

    // Dynamically constructing the findQuery based on filter object
    let findQuery = Object.keys(filter).reduce((acc, key) => {
      if (filter[key]) {
        acc[key] = { $regex: new RegExp(filter[key], 'i') };
      }
      return acc;
    }, {});
    return await boothSchema.find(findQuery ,projectionFields)
  }
  catch (error) {
    console.log(`Failed to filter booths: ${error.message}`);
  }
}
const getBooths = async (filter={}, projection=[]) => {
  try {
    let findQuery = filter
    // Dynamically constructing the findQuery based on filter object
    if (Object.keys(filter).length !== 0) {
      findQuery = Object.keys(filter).reduce((acc, key) => {
        if (filter[key]) {
          if(key === "availabilityStatus"){
            acc[key] = filter[key];
          }
          else{
            acc[key] = { $regex: new RegExp(filter[key], 'i') };
          }
          
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

    let query = boothSchema.find(findQuery,projectionFields).exec();
    return query;
  } catch (error) {
    console.log("heerere error");
    throw new Error(`Failed to get all booth details: ${error.message}`);
  }
};

const updateBooth = async (boothId, updation) => {
  try {
    if (updation?.boothId) {
      let boothIdConverter = updation?.boothId;

      if (
        updation?.boothId !== undefined &&
        typeof updation?.boothId !== "string"
      ) {
        boothIdConverter = String(boothIdConverter);
      }
      let checkBoothExist = await boothSchema
        .findOne({ boothId: boothIdConverter })
        .exec();
      if (checkBoothExist) {
        throw new Error(`DUPLICATE_BOOTH`);
      }
    }
    return boothSchema
      .findOneAndUpdate({ boothId: boothId }, updation, { new: true })
      .exec();
  } catch (error) {
    if (error.message == "DUPLICATE_BOOTH") {
      throw new Error(`DUPLICATE_BOOTH`);
    }
    throw new Error(`Failed to create Booth details_${error.message}`);
  }
};

const deleteBooth = async (boothId) => {
  try {
    return await boothSchema.findOneAndDelete({ boothId: boothId }).exec();
  } catch (error) {
    throw new Error(`Failed to Delete booth: ${error.message}`);
  }
};

module.exports = {
  createBooth,
  getBoothByID,
  getBooths,
  updateBooth,
  deleteBooth,
  filterBooths,
};
