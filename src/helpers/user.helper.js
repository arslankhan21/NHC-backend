const axios = require("axios");
const config = require("../config");

const axiosInstance = axios.create({
  baseURL: config.ZOOM_OAUTH_BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const base64Encode = (value) => Buffer.from(value).toString("base64");
const userSchema = require("../modals/User");

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

const createMeetingUser = async (email, first_name, last_name, password) => {
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
      `${config.ZOOM_REST_API_BASE_URL}/users/`,
      { ...userPayload },
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    return userResponse?.data;
  } catch (error) {
    throw new Error(`Failed to get user details: ${error.message}`);
  }
};

const createMeeting = async (userId) => {
  try {
    const tokenData = await getToken();
    const newPayload = {
      //   "agenda": "My Meeting",
      //   "default_password": false,
      //   "duration": 60,
      //   "password": "123456",
      //   "pre_schedule": false,
      // //   "recurrence": {
      // //     "end_date_time": "2024-02-05T10:28:03Z",
      // //     "end_times": 7,
      // //     "monthly_day": 1,
      // //     "monthly_week": 1,
      // //     "monthly_week_day": 1,
      // //     "repeat_interval": 1,
      // //     "type": 1,
      // //     "weekly_days": "1"
      // //   },
      // //   "schedule_for": "taha@narsun.pk",
      settings: {
        // "additional_data_center_regions": [
        //   "TY"
        // ],
        allow_multiple_devices: true,
        // "alternative_hosts": "syed.murtaza@narsunstudios.com;shoaib@narsun.pk",
        alternative_hosts_email_notification: true,
        approval_type: 2,
        approved_or_denied_countries_or_regions: {
          approved_list: ["PK"],
          denied_list: ["CA"],
          enable: true,
          method: "approve",
        },
        // "audio": "telephony",
        audio_conference_info: "test",
        authentication_domains: "example.com",
        // "authentication_exception": [
        //   {
        //     "email": "jchill@example.com",
        //     "name": "Jill Chill"
        //   }
        // ],
        // "authentication_option": "signIn_D8cJuqWVQ623CI4Q8yQK0Q",
        auto_recording: "cloud",
        breakout_room: {
          enable: true,
          rooms: [
            {
              name: "room1",
              participants: ["jchill@example.com"],
            },
          ],
        },
        calendar_type: 1,
        close_registration: false,
        // "contact_email": "jchill@example.com",
        // "contact_name": "Jill Chill",
        email_notification: true,
        encryption_type: "enhanced_encryption",
        focus_mode: true,
        // "global_dial_in_countries": [""],
        host_video: false,
        jbh_time: 0,
        join_before_host: true,
        // "language_interpretation": {
        //   "enable": true,
        //   "interpreters": [
        //     {
        //       "email": "interpreter@example.com",
        //       "languages": "US,FR"
        //     }
        //   ]
        // },
        // "sign_language_interpretation": {
        //   "enable": true,
        //   "interpreters": [
        //     {
        //       "email": "interpreter@example.com",
        //       "sign_language": "American"
        //     }
        //   ]
        // },
        // "meeting_authentication": true,
        // "meeting_invitees": [
        //   {
        //     "email": "jchill@example.com"
        //   }
        // ],
        mute_upon_entry: false,
        participant_video: false,
        private_meeting: false,
        registrants_confirmation_email: true,
        registrants_email_notification: true,
        registration_type: 1,
        show_share_button: true,
        use_pmi: false,
        waiting_room: true,
        watermark: false,
        host_save_video_order: true,
        alternative_host_update_polls: true,
        internal_meeting: false,
        continuous_meeting_chat: {
          enable: true,
          auto_add_invited_external_users: true,
        },
        participant_focused_meeting: false,
        push_change_to_calendar: false,
        resources: [
          {
            resource_type: "whiteboard",
            resource_id: "X4Hy02w3QUOdskKofgb9Jg",
            permission_level: "editor",
          },
        ],
      },
      //   "start_time": "2024-02-05T10:28:03Z",
      // //   "template_id": "Dv4YdINdTk+Z5RToadh5ug==",
      //   "timezone": "Asia/Tashkent",
      //   "topic": "My Meeting",
      // //   "tracking_fields": [
      // //     {
      // //       "field": "field1",
      // //       "value": "value1"
      // //     }
      // //   ],
      type: 2,
    };
    const userResponse = await axiosInstance.post(
      `${config.ZOOM_REST_API_BASE_URL}/users/${userId}/meetings`,
      { ...newPayload },
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );
  } catch (error) {
    console.log(`Failed to get user details: ${error.message}`);
  }
};

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

module.exports = {
  getToken,
  createMeetingUser,
  createMeeting,
  getMe,
  createUser,
  getUserByID,
  getUsers,
  updateUser,
  deleteUser,
};
