const helperFunctions = require('../utils/helperFunctions');

/**
 * Fetches details of the current user from the Zoom API.
 * Requires a valid access token obtained from the Zoom OAuth flow.
 *
 * @throws {Error} If fetching user details fails.
 * @returns {Promise<Object>} A promise that resolves to an object containing user details.
 * @async
 */
const getMe = async (auth) => {
  try {
    // Get the access token for authorization
    const tokenData = auth || await helperFunctions.getToken().access_token;
    console.log("getMe -> tokenData: ", tokenData);

    const userResponse = await helperFunctions.getApiCall(
      `/users/me`,
      {
        headers: {
          Authorization: `Bearer ${tokenData}`,
        },
      }
    )

    return userResponse.data;
  } catch (error) {
    throw new Error(`Failed to get user details: ${error.message}`);
  }
};

/**
 * Fetches details of a Zoom user by their user ID from the Zoom API.
 * Requires a valid access token obtained from the Zoom OAuth flow.
 *
 * @param {string} userId The unique identifier of the Zoom user.
 * @throws {Error} If fetching user details fails.
 * @returns {Promise<Object>} A promise that resolves to an object containing user details.
 * @async
 */
const getZoomUserById = async (userId , auth) => {
  try {
    // Get the access token for authorization
    const tokenData = auth || await helperFunctions.getToken().access_token;
    // Call the Zoom API to get the user's details by ID
    const userResponse = await helperFunctions.getApiCall(
      `/users/${userId}`, // The API endpoint for fetching user details by ID
      {
        headers: {
          Authorization: `Bearer ${tokenData}`, // Authorization header with access token
        },
      }
    );
    // Return the user details obtained from the API response
    return userResponse.data;
  } catch (error) {
    // If an error occurs during the API call, throw an error with a descriptive message
    throw new Error(`Failed to get user details: ${error.message}`);
  }
};

/**
 * Creates a new Zoom user with the provided details via the Zoom API.
 * Requires a valid access token obtained from the Zoom OAuth flow.
 *
 * @param {string} email The email address of the user to be created.
 * @param {string} first_name The first name of the user.
 * @param {string} last_name The last name of the user.
 * @param {string} password The password for the new user's account.
 * @throws {Error} If creating the user fails.
 * @returns {Promise<Object>} A promise that resolves to an object containing details of the created user.
 * @async
 */
const createZoomUser = async (email, first_name, last_name, password ,auth ) => {
  try {
    // Get the access token for authorization
    const tokenData = auth || await await helperFunctions.getToken().access_token;

    // Construct the payload for creating a new user
    const userPayload = {
      action: "create",
      user_info: {
        email,
        type: 1, // Assuming 'type 1' represents a basic user type
        first_name,
        last_name,
        password,
        feature: {
          zoom_phone: false,
        },
      },
    };

    // Call the Zoom API to create a new user
    const userResponse = await helperFunctions.postApiCall(
      '/users', // The API endpoint for creating a new user
      { ...userPayload }, // The payload containing user details
      {
        headers: {
          "Content-Type": 'application/json', // Set the content type header
          "Accept": 'application/json', // Set the accept header
          Authorization: `Bearer ${tokenData}`, // Authorization header with access token
        },
      }
    )

    // Log the Zoom API response and return the created user's details obtained from the response
    console.log("zoom API resposne: ", userResponse)
    return userResponse?.data;
  } catch (error) {
      console.log("Error: ", error.message);
    throw new Error(`Failed to get user details: ${error.message}`);
  }
};

/**
 * Retrieves a list of Zoom users from the Zoom API.
 * Requires a valid access token obtained from the Zoom OAuth flow.
 *
 * @throws {Error} If fetching the list of users fails.
 * @returns {Promise<Object[]>} A promise that resolves to an array containing details of the Zoom users.
 * Each object in the array represents a single Zoom user.
 * @async
 */
const getUsers = async (auth) => {
  try {
    // Get the access token for authorization
    const tokenData = auth || await helperFunctions.getToken().access_token;
    // Call the Zoom API to fetch the list of users
    const userResponse = await helperFunctions.getApiCall(
      `/users`,
      {
        headers: {
          Authorization: `Bearer ${tokenData}`,
        },
      }
    );
    return userResponse?.data;
  }
  catch (error) {
    console.log("Error: " , error);
    throw new Error(`Failed to get users: ${error.message}`);
  };
}

module.exports = {
  getMe,
  getUsers,
  getZoomUserById,
  createZoomUser
};