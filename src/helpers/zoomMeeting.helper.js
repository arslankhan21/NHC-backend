const helperFunctions = require('../utils/helperFunctions');

const createMeeting = async (userId) => {
  try {
    const tokenData = await helperFunctions.getToken();
    const newPayload = {
      settings: {
        allow_multiple_devices: true,
        alternative_hosts_email_notification: true,
        approval_type: 2,
        approved_or_denied_countries_or_regions: {
          approved_list: ["PK"],
          denied_list: ["CA"],
          enable: true,
          method: "approve",
        },
        audio_conference_info: "test",
        authentication_domains: "example.com",
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
        email_notification: true,
        encryption_type: "enhanced_encryption",
        focus_mode: true,
        host_video: false,
        jbh_time: 0,
        join_before_host: true,
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
      type: 2,
    };
    const userResponse = await helperFunctions.postApiCall(
      `/users/${userId}/meetings`,
      { ...newPayload },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );
    return userResponse?.data
  } catch (error) {
    console.log(`Failed to get user details: ${error.message}`);
  }
};

const userMeetings = async (userId) => {
  try{
    const tokenData = await helperFunctions.getToken();
    const userMeets = await helperFunctions.getApiCall(
      `/users/${userId}/meetings` , 
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    )
    console.log("userMeets : ",userMeets)
    return userMeets?.data
  }
  catch (error) {
    console.log("error: ",error)
  };
}

const getMeeting = async (meetingId) => {
  try{
    const tokenData = await helperFunctions.getToken();
    const userMeets = await helperFunctions.getApiCall(
      `/meetings/${meetingId}/` , 
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    )
    console.log("userMeets : ",userMeets)
    return userMeets?.data
  }
  catch (error) {
    console.log("error: ",error)
  }
}

module.exports = {
  createMeeting,
  userMeetings,
  getMeeting
};