const analyticSchema = require("../modals/analytics.js");

const createAnalytics = async (analyticsData) => {
  try {
    const analyticsCreated = await analyticSchema.create(analyticsData);
    return analyticsCreated._doc;
  } catch (error) {
    throw new Error(`Failed to create analytics details: ${error.message}`);
  }
};

const getAnalyticsBySearch = async (options, bySearch) => {
  try {
    const { page, limit } = options;
    const query = {};
    if (page && limit) {
      options.pagination = true;
    }

    if (bySearch.userId) {
      query.userId = String(bySearch.userId);
      delete bySearch.userId;
    }

    if (bySearch) {
      for (const [key, value] of Object.entries(bySearch)) {
        if (value !== undefined && value !== "") {
          query[`data.${key}`] = { $regex: new RegExp(value, "i") };
        } else {
          query[`data.${key}`] = { $exists: true };
        }
      }
    }

    const analyticsData = options.pagination
      ? await analyticSchema
          .find(query)
          .skip((page - 1) * limit)
          .limit(limit)
      : await analyticSchema.find(query);

    return analyticsData;
  } catch (error) {
    throw new Error(`Failed to retrieve analytics data: ${error.message}`);
  }
};

module.exports = { createAnalytics, getAnalyticsBySearch };
