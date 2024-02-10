const axios = require("axios");
const config = require("../config");

const axiosInstance = axios.create({
    baseURL: config.ZOOM_OAUTH_BASE_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const base64Encode = (value) => Buffer.from(value).toString("base64");

  const getToken = async () => {
    try {
      const credentials = base64Encode(
        `${config.ZOOM_CLIENT_ID}:${config.ZOOM_CLIENT_SECRET}`
      );
      const params = new URLSearchParams();
      params.append(
        "account_id",
        config.ZOOM_ACCOUNT_ID || "RkbImwWUQBikDKyBzLh8gQ"
      );
      params.append("grant_type", "account_credentials");
  
      const response = await axiosInstance.post("/token", params.toString(), {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      console.log("response.data: ", response.data);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get token: ${error.message}`);
    }
  };

  const getMe = async () => {
    try {
      const tokenData = await getToken();
      const userResponse = await axiosInstance.get(
        `${config.ZOOM_REST_API_BASE_URL}/users/me`,
        {
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
          },
        }
      );
  
      return userResponse.data;
    } catch (error) {
      throw new Error(`Failed to get user details: ${error.message}`);
    }
  };

  const getZoomUserById = async (userId) => {
    try {
      const tokenData = await getToken();
      const userResponse = await axiosInstance.get(
        `${config.ZOOM_REST_API_BASE_URL}/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
          },
        }
      );
  
      return userResponse.data;
    } catch (error) {
      throw new Error(`Failed to get user details: ${error.message}`);
    }
  };

  const createZoomUser = async (email, first_name, last_name, password) => {
    try {
      const tokenData = await getToken();
      const userPayload = {
        action: "create",
        user_info: {
          email,
          type: 1,
          first_name,
          last_name,
          password,
          feature: {
            zoom_phone: false,
          },
        },
      };
      const userResponse = await axiosInstance.post(
        `${config.ZOOM_REST_API_BASE_URL}/users`,
        { ...userPayload },
        {
          headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            Authorization: `Bearer ${tokenData.access_token}`,
          },
        }
      );
        console.log("zoom API resposne: ", userResponse)
      return userResponse?.data;
    } catch (error) {
        console.log("Error: ", error.message);
      throw new Error(`Failed to get user details: ${error.message}`);
    }
  };


module.exports = {
    getToken,
    getMe,
    getZoomUserById,
    createZoomUser
  };