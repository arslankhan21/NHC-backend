const userSchema = require("../modals/User");

const createUser = async (userDetails) => {
  try {
    let userId = userDetails?.userId;

    // Check if boothId exists and is not already a string, then convert it to string
    if (userId !== undefined && typeof userId !== "string") {
      userId = String(userId);
    }

    let checkUserExist = await userSchema.findOne({ userId: userId }).exec();
    if (checkUserExist) {
      throw new Error(`DUPLICATE_USER`);
    }
    let user = await userSchema.create(userDetails);
    return user._doc;
  } catch (error) {
    if (error.message == "DUPLICATE_USER") {
      throw new Error(`DUPLICATE_USER`);
    }
    throw new Error(`Failed to create User details: ${error.message}`);
  }
};

const getUserByID = async (userId) => {
  try {
    let query = userSchema.findOne({ userId: userId }).exec();
    return query;
  } catch (error) {
    throw new Error(`Failed to get user details by this id: ${error.message}`);
  }
};

const getUsers = async () => {
  try {
    let query = userSchema.find().exec();
    return query;
  } catch (error) {
    throw new Error(`Failed to get all user details: ${error.message}`);
  }
};

const updateUser = async (userId, updation) => {
  try {
    if (updation?.userId) {
      let userIdConverter=updation?.userId;

      if (updation?.userId !== undefined && typeof updation?.userId !== "string") {
        userIdConverter = String(userIdConverter);
      }
      let checkUserExist = await userSchema
        .findOne({ userId: userIdConverter })
        .exec();
      if (checkUserExist) {
        throw new Error(`DUPLICATE_USER`);
      }
    }
    return userSchema
      .findOneAndUpdate({ userId: userId }, updation, { new: true })
      .exec();

  } catch (error) {
    if (error.message == "DUPLICATE_USER") {
      throw new Error(`DUPLICATE_USER`);
    }
    throw new Error(`Failed to create User details_${error.message}`);
  }
};

const deleteUser = async (userId) => {
  try {
    return await userSchema.findOneAndDelete({ userId: userId }).exec();
  } catch (error) {
    throw new Error(`Failed to Delete user: ${error.message}`);
  }
};

const getUsersBySpecificProjection = async (where , projection) => {
  try {
    // Construct the projection string dynamically
    const projectionFields = projection.filter(Boolean).join(' ') + ' -_id';
    let query = await userSchema.find({...where}, projectionFields).lean();
    return query;
  } catch (error) {
    throw new Error(`Failed to get all user details: ${error.message}`);
  }
};

module.exports = {
  createUser,
  getUserByID,
  getUsers,
  updateUser,
  deleteUser,
  getUsersBySpecificProjection
};
