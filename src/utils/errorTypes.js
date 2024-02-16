const CONSTANTS = require("../constants");

const RESPONSE_ERRORS = {
  SERVER_SIDE_ERROR: {
    CODE: "SERVER_SIDE_ERROR",
    MESSAGE: "Something went wrong",
    STATUS: 500,
  },
  ZOOM_AXIOS_ERROR: {
    CODE: "ZOOM_AXIOS_ERROR",
    MESSAGE: "ZOOM API failed",
  },
  BAD_REQUEST: {
    CODE: "BAD_REQUEST",
    MESSAGE: "Invalid request",
    STATUS: 400,
  },
  CLIENT_UNAUTHORIZED: {
    CODE: "CLIENT_UNAUTHORIZED",
    MESSAGE: "You are not authorized to request/modify the resource",
    STATUS: 401,
  },

  DUPLICATE_USER: {
    CODE: "DUPLICATE_USER",
    MESSAGE: "User With This ID already Exist",
    // STATUS: 401,
  },

  DUPLICATE_BOOTH: {
    CODE: "DUPLICATE_BOOTH",
    MESSAGE: "Booth With This ID already Exist",
    // STATUS: 401,
  },

  // Common Errors
  INVALID_OBJECT_ID_FORMAT: {
    CODE: "INVALID_OBJECT_ID_FORMAT",
    MESSAGE: "Object id given is invalid",
  },

  INVALID_MODE_FOR_PRIZEPOOL: {
    CODE: "INVALID_MODE_FOR_PRIZEPOOL",
    MESSAGE: "Invalid mood for prizepool",
  },

  INVALID_MODE_FOR_CHCOIN: {
    CODE: "INVALID_MODE_FOR_CHCOIN",
    MESSAGE: "Invalid mood for chcoin",
  },

  INVALID_CHCOIN: {
    CODE: "INVALID_CHCOIN",
    MESSAGE: "Ch coin is required in this type of Mode",
  },
  OBJECT_NOT_FOUND: {
    CODE: "OBJECT_NOT_FOUND",
    MESSAGE: "Object not found",
    // STATUS: 404,
  },
  // Location Errors
  INVALID_COUNTRY_CODE_TYPE: {
    CODE: "INVALID_COUNTRY_CODE_TYPE",
    MESSAGE: "Invalid country type",
  },
  INVALID_COUNTRY_CODE: {
    CODE: "INVALID_COUNTRY_CODE",
    MESSAGE: "Invalid country code",
  },
  COUNTRY_CODE_NOT_GIVEN: {
    CODE: "COUNTRY_CODE_NOT_GIVEN",
    MESSAGE: "Country code is not given",
  },
  INVALID_CITY_TYPE: {
    CODE: "INVALID_CITY_TYPE",
    MESSAGE: "Invalid city type",
  },
  INVALID_CITY_FOR_GIVEN_COUNTRY: {
    CODE: "INVALID_CITY_FOR_GIVEN_COUNTRY",
    MESSAGE: "Invalid city for the given country",
  },
  COUNTRY_DOES_NOT_MATCH_WITH_CITY: {
    CODE: "COUNTRY_DOES_NOT_MATCH_WITH_CITY",
    MESSAGE: "City name does not match with country code",
  },
  INVALID_LONGITUDE_TYPE: {
    CODE: "INVALID_LONGITUDE_TYPE",
    MESSAGE: "Invalid longitude type",
  },
  INVALID_LATITUDE_TYPE: {
    CODE: "INVALID_LATITUDE_TYPE",
    MESSAGE: "Invalid latitude type",
  },
  INCOMPLETE_FIELDS_FOR_CURRENT_LOCATION_OBJECT: {
    CODE: "INCOMPLETE_FIELDS_FOR_CURRENT_LOCATION_OBJECT",
    MESSAGE: "Incomplete fields for current location object given",
  },
  // User Details Errors
  MALFORMED_EMAIL: {
    CODE: "MALFORMED_EMAIL",
    MESSAGE: "Email address is invalid",
  },
  EMAIL_ALREADY_IN_USE: {
    CODE: "EMAIL_ALREADY_IN_USE",
    MESSAGE: "Email address is already in use",
  },
  INVALID_PASSWORD_TYPE: {
    CODE: "INVALID_PASSWORD_TYPE",
    MESSAGE: "Invalid password type",
  },
  INVALID_PASSWORD: {
    CODE: "INVALID_PASSWORD",
    MESSAGE: "Invalid password given",
  },
  INVALID_USER_NICKNAME_TYPE: {
    CODE: "INVALID_USER_NICKNAME_TYPE",
    MESSAGE: "Invalid user nickname type",
  },
  USER_NICKNAME_ALREADY_IN_USE: {
    CODE: "USER_NICKNAME_ALREADY_IN_USE",
    MESSAGE: "User nickname already in use",
  },
  USER_CANNOT_BE_DELETED_BECAUSE_USER_IS_IN_QUEST: {
    CODE: "USER_CANNOT_BE_DELETED_BECAUSE_USER_IS_IN_QUEST",
    MESSAGE: "User can't be deleted because user is in the quest",
  },
  INVALID_USER_AGE_TYPE: {
    CODE: "INVALID_USER_AGE_TYPE",
    MESSAGE: "Invalid user age type",
  },
  INVALID_USER_AGE: {
    CODE: "INVALID_USER_AGE",
    MESSAGE: `A user's age should be in the range from ${CONSTANTS.USER_AGE_MIN_LIMIT_INCLUSIVE} to ${CONSTANTS.USER_AGE_MAX_LIMIT_INCLUSIVE}`,
  },
  INVALID_USER_ABOUT_TYPE: {
    CODE: "INVALID_USER_ABOUT_TYPE",
    MESSAGE: "Invalid user about type",
  },
  INVALID_USER_ABOUT_FIELD: {
    CODE: "INVALID_USER_ABOUT_FIELD",
    MESSAGE: `A user about field should be in the range from ${
      CONSTANTS.USER_ABOUT_MIN_LIMIT_EXCLUSIVE + 1
    } to ${CONSTANTS.USER_ABOUT_MAX_LIMIT_INCLUSIVE}`,
  },
  INVALID_SOCIAL_MEDIA_LINK_TYPE: {
    CODE: "INVALID_SOCIAL_MEDIA_LINK_TYPE",
    MESSAGE: "Invalid social media link type",
  },
  INVALID_TWITTER_LINK: {
    CODE: "INVALID_TWITTER_LINK",
    MESSAGE: "Invalid twitter link",
  },
  INVALID_NEW_GAME_ANNOUNCEMENT_TYPE: {
    CODE: "INVALID_NEW_GAME_ANNOUNCEMENT_SETTING",
    MESSAGE: "Invalid New Game Announcement Settings",
  },

  INVALID_FAMILY_PLAYER_ID_ARRAY: {
    CODE: "INVALID_FAMILY_PLAYER_ID_ARRAY",
    MESSAGE: "Invalid Fammily Players Id Array",
  },

  INVALID_FAMILY_PLAYER: {
    CODE: "INVALID_FAMILY_PLAYER",
    MESSAGE: "Invalid Fammily Players",
  },

  INVALID_TIMEFRAME_TYPE: {
    CODE: "INVALID_TIMEFRAME_TYPE",
    MESSAGE: "Invalid TimeFrame Type",
  },
  INVALID_FRIEND_REQUEST_RECEIVED_TYPE: {
    CODE: "INVALID_FRIEND_REQUEST_RECEIVED_SETTING",
    MESSAGE: "Invalid Friend Request Received Settings",
  },

  INVALID_SOUND_REQUEST_TYPE: {
    CODE: "INVALID_SOUND_REQUEST_TYPE",
    MESSAGE: "Invalid Sound Request Settings",
  },
  INVALID_VIBRATION_REQUEST_TYPE: {
    CODE: "INVALID_VIBRATION_REQUEST_TYPE",
    MESSAGE: "Invalid Vibration Request Settings",
  },
  INVALID_NEW_MESSAGE_FROM_FRIEND_TYPE: {
    CODE: "INVALID_NEW_MESSAGE_FROM_FRIEND_SETTING",
    MESSAGE: "Invalid new Message From Friend Settings",
  },
  INVALID_FACEBOOK_LINK: {
    CODE: "INVALID_FACEBOOK_LINK",
    MESSAGE: "Invalid facebook link",
  },
  INVALID_PHONE_CODE_TYPE: {
    CODE: "INVALID_PHONE_CODE_TYPE",
    MESSAGE: "Invalid phoneCode type",
  },
  INVALID_PHONE_NUMBER_TYPE: {
    CODE: "INVALID_PHONE_NUMBER_TYPE",
    MESSAGE: "Invalid phone number type",
  },
  INVALIDE_NUMBER: {
    CODE: "INVALIDE_NUMBER",
    MESSAGE: "Invalid number",
  },
  PHONE_NUMBER_ALREADY_IN_USE: {
    CODE: "PHONE_NUMBER_ALREADY_IN_USE",
    MESSAGE: "Phone number already in use",
  },
  INVALID_PHONE_COUNTRY_CODE_TYPE: {
    CODE: "INVALID_PHONE_COUNTRY_CODE_TYPE",
    MESSAGE: "Invalid phone country code type",
  },
  INVALID_PHONE_COUNTRY_CODE: {
    CODE: "INVALID_PHONE_COUNTRY_CODE",
    MESSAGE: "Invalid phone country code",
  },
  INCOMPLETE_PHONE_DETAILS_GIVEN: {
    CODE: "INCOMPLETE_PHONE_DETAILS_GIVEN",
    MESSAGE:
      "All phone details are required (phoneNumber, phoneCode, phoneCountryCode)",
  },
  NO_USER_FOUND: {
    CODE: "NO_USER_FOUND",
    MESSAGE: "No user found",
  },
  USER_IS_UNBLOCK: {
    CODE: "USER_IS_UNBLOCK",
    MESSAGE: "User is not block",
  },
  USER_IS_NOT_DELETED: {
    CODE: "USER_IS_NOT_DELETED",
    MESSAGE: "User is not deleted",
  },
  USER_IS_BLOCKED_PLEASE_CONTACT_AT_SUPPORT: {
    CODE: "USER_IS_BLOCKED_PLEASE_CONTACT_AT_SUPPORT",
    MESSAGE: "User is blocked please contact at support",
  },
  USER_IS_DELETED_PLEASE_CONTACT_AT_SUPPORT: {
    CODE: "USER_IS_DELETED_PLEASE_CONTACT_AT_SUPPORT",
    MESSAGE: "User is deleted please contact at support",
  },

  USER_AGREEMENT_STATUS_IS_NOT_DONE: {
    CODE: "USER_AGREEMENT_STATUS_IS_NOT_DONE",
  },
  EMAIL_OR_PHONE_REQUIRED: {
    CODE: "EMAIL_OR_PHONE_REQUIRED",
    MESSAGE: "At least one field is required",
  },
  EMAIL_AND_PHONE_REQUIRED: {
    CODE: "EMAIL_AND_PHONE_REQUIRED",
    MESSAGE: "Both fields are required",
  },
  INVALID_VERIFICATION_CODE_TYPE: {
    CODE: "INVALID_VERIFICATION_CODE_TYPE",
    MESSAGE: "Invalid verification type",
  },
  INVALID_EMAIL_VERIFICATION_CODE: {
    CODE: "INVALID_EMAIL_VERIFICATION_CODE",
    MESSAGE: "Invalid email verification code",
  },
  EMAIL_VERIFICATION_CODE_EXPIRED: {
    CODE: "EMAIL_VERIFICATION_CODE_EXPIRED",
    MESSAGE: "Email verification code is expired",
  },
  INVALID_SMS_VERIFICATION_CODE: {
    CODE: "INVALID_SMS_VERIFICATION_CODE",
    MESSAGE: "Invalid sms verification code",
  },
  SMS_VERIFICATION_CODE_EXPIRED: {
    CODE: "SMS_VERIFICATION_CODE_EXPIRED",
    MESSAGE: "Sms verification code is expired",
  },
  INVALID_EXTERNAL_WALLET_ADDRESS_TYPE: {
    CODE: "INVALID_EXTERNAL_WALLET_ADDRESS_TYPE",
    MESSAGE: "Invalid external wallet address type given",
  },
  INVALID_EXTERNAL_WALLET_ADDRESS_GIVEN: {
    CODE: "INVALID_EXTERNAL_WALLET_ADDRESS_GIVEN",
    MESSAGE: "Invalid external wallet address given",
  },
  EXTERNAL_WALLET_ADDRESS_ALREADY_IN_USE: {
    CODE: "EXTERNAL_WALLET_ADDRESS_ALREADY_IN_USE",
    MESSAGE: "External Wallet address already in use",
  },
  INVALID_XP_TYPE: {
    CODE: "INVALID_XP_TYPE",
    MESSAGE: "Invalid XP type",
  },
  INVALID_DEVICE_TOKEN_TYPE: {
    CODE: "INVALID_DEVICE_TOKEN_TYPE",
    MESSAGE: "Invalid Device token type",
  },
  INVALID_DEVICE_ID_TYPE: {
    CODE: "INVALID_DEVICE_ID_TYPE",
    MESSAGE: "Invalid Device Id type",
  },
  INVALID_NONCE_TYPE: {
    CODE: "INVALID_NONCE_TYPE",
    MESSAGE: "Invalid nonce type",
  },
  INVALID_NONCE: {
    CODE: "INVALID_NONCE",
    MESSAGE: "Invalid nonce",
  },
  INVALID_NAMESTRING_FILTER_TYPE: {
    CODE: "INVALID_NAMESTRING_FILTER_TYPE",
    MESSAGE: "Invalid nameString filter type",
  },
  // Admin Errors
  INVALID_FULLNAME_TYPE: {
    CODE: "INVALID_FULLNAME_TYPE",
    MESSAGE: "Invalid fullname type",
  },
  INVALID_FULLNAME: {
    CODE: "INVALID_FULLNAME",
    MESSAGE: "Invalid fullName",
  },
  // Announcement Errors
  INVALID_ANNOUNCEMENT_TITLE_TYPE: {
    CODE: "INVALID_ANNOUNCEMENT_TITLE_TYPE",
    MESSAGE: "Invalid announcement type",
  },
  ANNOUNCEMENT_WITH_SAME_TITLE_EXISTS: {
    CODE: "ANNOUNCEMENT_WITH_SAME_TITLE_EXISTS",
    MESSAGE: "Announcement with same title already exists",
  },
  INVALID_ANNOUNCEMENT_DESCRIPTION_TYPE: {
    CODE: "INVALID_ANNOUNCEMENT_DESCRIPTION_TYPE",
    MESSAGE: "Invalid description type",
  },
  INVALID_ANNOUNCEMENT_STATUS_TYPE: {
    CODE: "INVALID_ANNOUNCEMENT_STATUS_TYPE",
    MESSAGE: "Invalid description status",
  },
  INVALID_DATE_TYPE: {
    CODE: "INVALID_DATE_TYPE",
    MESSAGE: "Invalid date type",
  },
  NO_ANNOUNCEMENT_FOUND: {
    CODE: "NO_ANNOUNCEMENT_FOUND",
    MESSAGE: "Announcement Object not found",
  },
  // Wallet Service Erros
  ENCRYPTION_FAILED: {
    CODE: "ENCRYPTION_FAILED",
    MESSAGE: "Failed to encrypt data",
  },
  DECRYPTION_FAILED: {
    CODE: "DECRYPTION_FAILED",
    MESSAGE: "Failed to decrypt data",
  },
  FILE_UPLOAD_FAILED: {
    CODE: "FILE_UPLOAD_FAILED",
    MESSAGE: "Failed to upload file to IPFS",
  },
  JSON_UPLOAD_FAILED: {
    CODE: "JSON_UPLOAD_FAILED",
    MESSAGE: "Failed to upload JSON to IPFS",
  },
  WALLET_CREATION_FAILED: {
    CODE: "WALLET_CREATION_FAILED",
    MESSAGE: "Failed to create wallet",
  },
  // NFT Collection Errors
  INVALID_COMPANY_NAME_TYPE: {
    CODE: "INVALID_COMPANY_NAME_TYPE",
    MESSAGE: "Invalid company name type",
  },
  INVALID_NFT_COLLECTION_ID_TYPE: {
    CODE: "INVALID_NFT_COLLECTION_ID_TYPE",
    MESSAGE: "Invalid nft collection Id type",
  },
  INVALID_NFT_METADATA_LINK_TYPE: {
    CODE: "INVALID_NFT_METADATA_LINK_TYPE",
    MESSAGE: "Invalid nft metadata link type",
  },
  INVALID_NFT_IMAGE_LINK_TYPE: {
    CODE: "INVALID_NFT_IMAGE_LINK_TYPE",
    MESSAGE: "Invalid nft image link type",
  },
  INVALID_NFT_COLLECTION_STATUS_TYPE: {
    CODE: "INVALID_NFT_COLLECTION_STATUS_TYPE",
    MESSAGE: "Invalid nft status type",
  },
  INVALID_NFT_IMAGE_BASE64_TYPE: {
    CODE: "INVALID_NFT_IMAGE_BASE64_TYPE",
    MESSAGE: "Invalid nft image(fileBase64) type",
  },
  INVALID_NFT_IMAGE_FILENAME_TYPE: {
    CODE: "INVALID_NFT_IMAGE_FILENAME_TYPE",
    MESSAGE: "Invalid nft image filename type",
  },
  INVALID_NFT_METADATA_TYPE: {
    CODE: "INVALID_NFT_METADATA_TYPE",
    MESSAGE: "Invalid nft metadata type",
  },
  INVALID_NFT_METADATA_FILENAME_TYPE: {
    CODE: "INVALID_NFT_METADATA_FILENAME_TYPE",
    MESSAGE: "Invalid nft metadata filename type",
  },
  // Prizepool Errors
  INVALID_PRIZEPOOL_TITLE_TYPE: {
    CODE: "INVALID_PRIZEPOOL_TITLE_TYPE",
    MESSAGE: "Invalid prize pool title type",
  },
  INVALID_PRIZEPOOL_STATUS_TYPE: {
    CODE: "INVALID_PRIZEPOOL_STATUS_TYPE",
    MESSAGE: "Invalid prize pool status type",
  },
  INVALID_PRIZEPOOL_REWARD_TYPE: {
    CODE: "INVALID_PRIZEPOOL_REWARD_TYPE",
    MESSAGE: "Invalid prize pool reward type",
  },
  INVALID_PRIZEPOOL_CHCOIN_MIN_RANGE_TYPE: {
    CODE: "INVALID_PRIZEPOOL_CHCOIN_MIN_RANGE_TYPE",
    MESSAGE: "Invalid CH coin min range type",
  },
  INVALID_PRIZEPOOL_CHCOIN_MAX_RANGE_TYPE: {
    CODE: "INVALID_PRIZEPOOL_CHCOIN_MAX_RANGE_TYPE",
    MESSAGE: "Invalid CH coin max range type",
  },
  PRIZEPOOL_WITH_SAME_TITLE_EXISTS: {
    CODE: "PRIZEPOOL_WITH_SAME_TITLE_EXISTS",
    MESSAGE: "Prize Pool with same title already exists",
  },
  // BLOCKCHAIN ERRORS
  UNPREDICTABLE_GAS_LIMIT: {
    CODE: "INSUFFICIENT_FUNDS_FOR_GAS",
    MESSAGE: "Gas Estimation Failed: due to insufficient funds",
  },
  INSUFFICIENT_FUNDS: {
    CODE: "INSUFFICIENT_FUNDS_FOR_TRANSACTION",
    MESSAGE:
      "The sending account has insufficient funds to cover the entire transaction cost.",
  },
  CALL_EXCEPTION: {
    CODE: "CALL_EXCEPTION",
    MESSAGE: "Transaction reverted",
  },
  REPLACEMENT_UNDERPRICED: {
    CODE: "REPLACEMENT_UNDERPRICED",
    MESSAGE:
      "An attempt was made to replace a transaction, but with an insufficient additional fee to afford evicting the old transaction from the memory pool.",
  },
  TRANSACTION_REPLACED: {
    CODE: "TRANSACTION_REPLACED",
    MESSAGE: "A pending transaction was replaced by another.",
  },
  UNCONFIGURED_NAME: {
    CODE: "UNCONFIGURED_NAME",
    MESSAGE:
      "This Error indicates an ENS name was used, but the name has not been configured.",
  },
  OFFCHAIN_FAULT: {
    CODE: "OFFCHAIN_FAULT",
    MESSAGE:
      "A CCIP-read exception, which cannot be recovered from or be further processed.",
  },
  BLOCKCHAIN_ERROR: {
    CODE: "BLOCKCHAIN_ERROR",
    MESSAGE: "Execution Reverted",
  },
  //OPENSEA ERRORS
  COLLECTION_ERROR: {
    CODE: "COLLECTION_ERROR",
    MESSAGE: `There's an erorr fetching collections from OpenSea`,
  },
  // Till here - Not used
  SIGNATURE_FOR_REWARD_FAILED: {
    CODE: "SIGNATURE_FOR_REWARD_FAILED",
    MESSAGE: "Failed to sign the message",
  },
  SIGNATURE_FOR_COIN_FAILED: {
    CODE: "SIGNATURE_FOR_COIN_FAILED",
    MESSAGE: "Failed to sign the message",
  },
  TRANSACTION_SIGN_FAILED: {
    CODE: "TRANSACTION_SIGN_FAILED",
    MESSAGE: "Failed to sign the transaction",
  },
  GET_MATIC_BALANCE_FAILED: {
    CODE: "GET_MATIC_BALANCE_FAILED",
    MESSAGE: "Failed to get balance for Matic",
  },
  NOT_THE_WINNER: {
    CODE: "NOT_THE_WINNER",
    MESSAGE: "Only winner can claim the Quest Reward",
  },
  REWARD_NOT_APPLICABLE: {
    CODE: "REWARD_NOT_APPLICABLE",
    MESSAGE: "Reward is not applicable",
  },
  REWARD_ALREADY_RECEIVED: {
    CODE: "REWARD_ALREADY_RECEIVED",
    MESSAGE: "Reward already claimed",
  },
  NOT_THE_FAMILY_HEAD: {
    CODE: "NOT_THE_FAMILY_HEAD",
    MESSAGE: "You are not the family head",
  },
  NO_TASK_FOUND_IN_TASKS_ARRAY: {
    CODE: "NO_TASK_FOUND_IN_TASKS_ARRAY",
    MESSAGE: "No task found by Id in the Tasks Array",
  },
  TASK_NOT_COMPLETED: {
    CODE: "TASK_NOT_COMPLETED",
    MESSAGE: "Task status has to done",
  },
  NONCE_EXPIRED: {
    CODE: "NONCE_EXPIRED",
    MESSAGE: "Nonce is expired",
  },
  //END OF BLOCKCHAIN ERRORS
  // Friend Model Errors
  NO_FRIEND_REQUEST_FOUND: {
    CODE: "NO_FRIEND_REQUEST_FOUND",
    MESSAGE: "Friend request not found",
  },
  INVALID_ARGUMENTS_GIVEN: {
    CODE: "INVALID_ARGUMENTS_GIVEN",
    MESSAGE: "API called with wrong parameters",
  },
  ALREADY_FRIENDS: {
    CODE: "ALREADY_FRIENDS",
    MESSAGE: "Users are already friends",
  },
  NOT_FRIENDS: {
    CODE: "NOT_FRIENDS",
    MESSAGE: "Users are not friends",
  },
  FRIENDSHIP_REQUEST_ALREADY_SENT: {
    CODE: "FRIENDSHIP_REQUEST_ALREADY_SENT",
    MESSAGE: "Friendship request already exists",
  },
  NOT_FRIENDS_SO_CANNOT_REMOVE: {
    CODE: "NOT_FRIENDS_SO_CANNOT_REMOVE",
    MESSAGE: "Cannot remove as you are not friends",
  },
  ALREADY_FAMILY: {
    CODE: "ALREADY_FAMILY",
    MESSAGE: "Users are already family members",
  },
  NOT_FAMILY: {
    CODE: "NOT_FAMILY",
    MESSAGE: "Users are not family members",
  },
  // Task Errors
  INVALID_NAME_TYPE: {
    CODE: "INVALID_NAME_TYPE",
    MESSAGE: "Invalid name type",
  },
  TASK_NAME_ALREADY_IN_USE: {
    CODE: "TASK_NAME_ALREADY_IN_USE",
    MESSAGE: "Task name is already in use",
  },
  INVALID_HINT_TEXT_TYPE: {
    CODE: "INVALID_HINT_TEXT_TYPE",
    MESSAGE: "Invalid hint text type",
  },
  INVALID_SECOND_HINT_TEXT_TYPE: {
    CODE: "INVALID_SECOND_HINT_TEXT_TYPE",
    MESSAGE: "Invalid second hint text type",
  },
  INVALID_TASK_TYPES: {
    CODE: "INVALID_TASK_TYPES",
    MESSAGE: "Invalid task type given",
  },
  INVALID_REPRESENTATION_OF_TASKS_TYPE: {
    CODE: "INVALID_REPRESENTATION_OF_TASKS_TYPE",
    MESSAGE: "Invalid representation of task type given",
  },
  INVALID_TASK_STATUS_TYPE: {
    CODE: "INVALID_TASK_STATUS_TYPE",
    MESSAGE: "Invalid task status type given",
  },
  NO_TASK_FOUND: {
    CODE: "NO_TASK_FOUND",
    MESSAGE: "No task found",
  },
  INVALID_CURRENT_LOCATION_OBJECT_TYPE: {
    CODE: "INVALID_CURRENT_LOCATION_OBJECT_TYPE",
    MESSAGE: "Invalid current location object type",
  },
  INVALID_FCM_DEVICE_TOKEN: {
    CODE: "INVALID_FCM_DEVICE_TOKEN",
    MESSAGE: "Invalid FCM device token given",
  },
  INVALID_EXPIRY_DATE: {
    CODE: "INVALID_EXPIRY_DATE",
    MESSAGE:
      "Invalid expiry date, expiry date should be greater than the current date",
  },
  // Quest Errors
  QUEST_NAME_ALREADY_IN_USE: {
    CODE: "QUEST_NAME_ALREADY_IN_USE",
    MESSAGE: "Quest name is already in use",
  },
  NO_QUEST_FOUND: {
    CODE: "NO_QUEST_FOUND",
    MESSAGE: "No quest found",
  },
  INVALID_QUEST_MODE_TYPE: {
    CODE: "INVALID_QUEST_MODE_TYPE",
    MESSAGE: "Invalid quest type given",
  },
  INVALID_QUEST_STATUS_TYPE: {
    CODE: "INVALID_QUEST_STATUS_TYPE",
    MESSAGE: "Invalid quest status type given",
  },
  INVALID_QUEST_STATE_TYPE: {
    CODE: "INVALID_QUEST_STATE_TYPE",
    MESSAGE: "Invalid quest state type given",
  },
  MINIMUM_QUEST_START_TIME: {
    CODE: "MINIMUM_QUEST_START_TIME",
    MESSAGE: `Minimum quest start time should be at least ${CONSTANTS.START_TIME_AT_LEAST} minutes than the current time`,
  },
  INVALID_REWARD_OBJECT_TYPE: {
    CODE: "INVALID_REWARD_OBJECT_TYPE",
    MESSAGE: "Invalid reward object type",
  },
  INCOMPLETE_FIELDS_FOR_QUEST_REWARD_OBJECT: {
    CODE: "INCOMPLETE_FIELDS_FOR_QUEST_REWARD_OBJECT",
    MESSAGE: "Incomplete fields for quest reward object given",
  },
  INVALID_TASK_ARRAY_TYPE: {
    CODE: "INVALID_TASK_ARRAY_TYPE",
    MESSAGE: "Invalid task array type",
  },
  // Stagging Errors
  INVALID_TASK_ID_IN_TASK_ARRAY: {
    CODE: "INVALID_TASK_ID_IN_TASK_ARRAY",
    MESSAGE: "Invalid task ID given in task array",
  },
  INVALID_TASK_TIME_TYPE_IN_TASK_ARRAY: {
    CODE: "INVALID_TASK_TIME_TYPE_IN_TASK_ARRAY",
    MESSAGE: "Invalid task time given in task array",
  },
  INVALID_PRIZE_POOL_ID_IN_TASK_ARRAY: {
    CODE: "INVALID_PRIZE_POOL_ID_IN_TASK_ARRAY",
    MESSAGE: "Invalid prizePool ID given in task array",
  },
  DUPLICATE_TASK_ID_IN_TASK_ARRAY: {
    CODE: "DUPLICATE_TASK_ID_IN_TASK_ARRAY",
    MESSAGE: "Duplicate task Ids in task array",
  },
  PRIZE_POOL_ID_NOT_FOUND: {
    CODE: "PRIZE_POOL_ID_NOT_FOUND",
    MESSAGE: "Prize pool Id not found",
  },
  CANNOT_UPDATE_THIS_QUEST: {
    CODE: "CANNOT_UPDATE_THIS_QUEST",
    MESSAGE: "Quest cannot be updated",
  },
  CANNOT_UPDATE_TASK_THAT_IS_PART_OF_AN_ACTIVE_QUEST: {
    CODE: "CANNOT_UPDATE_TASK_THAT_IS_PART_OF_AN_ACTIVE_QUEST",
    MESSAGE: "Task is already a part of active quest. ",
  },
  CANNOT_DELETE_TASK_THAT_IS_PART_OF_A_QUEST: {
    CODE: "CANNOT_DELETE_TASK_THAT_IS_PART_OF_A_QUEST",
    MESSAGE: "Cannot delete a task that is part of a quest",
  },
  INVALID_WINNERS_ARRAY_TYPE: {
    CODE: "INVALID_WINNERS_ARRAY_TYPE",
    MESSAGE: "Invalid winners array type",
  },
  INVALID_AGREEMENT_ID_IN_WINNERS_ARRAY: {
    CODE: "INVALID_AGREEMENT_ID_IN_WINNERS_ARRAY",
    MESSAGE: "Invalid agreement ID given in winnerss array",
  },
  CANNOT_DELETE_ACTIVE_QUEST: {
    CODE: "CANNOT_DELETE_ACTIVE_QUEST",
    MESSAGE: "Cannot delete an active quest",
  },
  CANNOT_DELETE_FINISHED_QUEST: {
    CODE: "CANNOT_DELETE_FINISHED_QUEST",
    MESSAGE: "Cannot delete a finished quest",
  },
  CANNOT_DELETE_QUEST: {
    CODE: "CANNOT_DELETE_QUEST",
    MESSAGE: "Cannot delete this quest, as users have already joined the quest",
  },
  // Agreement Errors
  INVALID_AGREEMENT_STATUS_TYPE: {
    CODE: "INVALID_AGREEMENT_STATUS_TYPE",
    MESSAGE: "Invalid agreement status type given",
  },
  INVALID_TEAM_TYPE: {
    CODE: "INVALID_TEAM_TYPE",
    MESSAGE: "Invalid team type given",
  },
  INVALID_PLAYERS_ARRAY_TYPE: {
    CODE: "INVALID_PLAYERS_ARRAY_TYPE",
    MESSAGE: "Invalid players array type",
  },
  INVALID_USER_ID_IN_PLAYERS_ARRAY: {
    CODE: "INVALID_USER_ID_IN_PLAYERS_ARRAY",
    MESSAGE: "Invalid userId given in players array",
  },
  INVALID_USER_SHARE_TYPE_IN_PLAYERS_ARRAY: {
    CODE: "INVALID_USER_SHARE_TYPE_IN_PLAYERS_ARRAY",
    MESSAGE: "Invalid user share given in players array",
  },
  NO_AGREEMENT_FOUND: {
    CODE: "NO_AGREEMENT_FOUND",
    MESSAGE: "No agreement found",
  },
  CURRENT_PLAYER_DIDNOT_FOUND_IN_AGREEMENT: {
    CODE: "CURRENT_PLAYER_DIDNOT_FOUND_IN_AGREEMENT",
    MESSAGE: `Current player didn't found in agreement `,
  },

  LIMIT_OF_THIS_BOOSTER_CROSS: {
    CODE: "LIMIT_OF_THIS_BOOSTER_CROSS",
    MESSAGE: "Limit of this booster cross",
  },

  CANT_UPDATE_THIS_AGREEMENT_DUE_TO_THIS_AGREEMENT_IS_NOT_IN_PENDING_STATE: {
    CODE: "CANT_UPDATE_THIS_AGREEMENT_DUE_TO_THIS_AGREEMENT_IS_NOT_IN_PENDING_STATE",
    MESSAGE:
      "Cant update this agreement due to this agreement is not in pending state",
  },

  CANT_UPDATE_THIS_AGREEMENT_DUE_TO_THIS_AGREEMENT_IS_NOT_FAMILY_MODE: {
    CODE: "CANT_UPDATE_THIS_AGREEMENT_DUE_TO_THIS_AGREEMENT_IS_NOT_FAMILY_MODE",
    MESSAGE:
      "Cant update this agreement due to this agreement is not family mode.",
  },

  INVALID_TEAM_PLAYER_TYPE: {
    CODE: "INVALID_TEAM_PLAYER_TYPE",
    MESSAGE: "Invalid team player type given",
  },
  INVALID_TASK_AND_REWARD_ARRAY_TYPE: {
    CODE: "INVALID_TASK_AND_REWARD_ARRAY_TYPE",
    MESSAGE: "Invalid task and rewards array type",
  },
  INVALID_TASK_ID_IN_TASK_AND_REWARD_ARRAY: {
    CODE: "INVALID_TASK_ID_IN_TASK_AND_REWARD_ARRAY",
    MESSAGE: "Invalid task ID given in task and rewards array",
  },
  INVALID_TASK_TIME_TYPE_IN_TASK_AND_REWARD_ARRAY: {
    CODE: "INVALID_TASK_TIME_TYPE_IN_TASK_AND_REWARD_ARRAY",
    MESSAGE: "Invalid task time given in task and rewards array",
  },
  ACTIVE_PLAYER_AGREEMENT_ALREADY_DONE: {
    CODE: "ACTIVE_PLAYER_AGREEMENT_ALREADY_DONE",
    MESSAGE: "Active player has already made an agreement",
  },
  REMOTE_PLAYER_AGREEMENT_ALREADY_DONE: {
    CODE: "REMOTE_PLAYER_AGREEMENT_ALREADY_DONE",
    MESSAGE: "Remote player has already made an agreement",
  },
  // User Particpatin Errors
  NO_USER_PARTICIPATION_OBJECT_FOUND: {
    CODE: "NO_USER_PARTICIPATION_OBJECT_FOUND",
    MESSAGE: "No user participation object found",
  },
  NO_USER_PARTICIPATION_OBJECT_FOUND_FOR_THE_REQUESTER: {
    CODE: "NO_USER_PARTICIPATION_OBJECT_FOUND_FOR_THE_REQUESTER",
    MESSAGE: "User did not participate for the quest",
  },
  NO_USER_PARTICIPATION_OBJECT_FOUND_FOR_THE_REMOTE_USER: {
    CODE: "NO_USER_PARTICIPATION_OBJECT_FOUND_FOR_THE_REMOTE_USER",
    MESSAGE: "User did not participate for the quest",
  },
  CANNOT_PARTICIPATE_IN_THIS_QUEST: {
    CODE: "CANNOT_PARTICIPATE_IN_THIS_QUEST",
    MESSAGE:
      "The quest has either started or finished so a user cannot participate",
  },
  CANNOT_PARTICIPATE_AS_QUEST_OVERLAP: {
    CODE: "CANNOT_PARTICIPATE_AS_QUEST_OVERLAP",
    MESSAGE:
      "The user cannot participate in this quest as it overlaps with another quest the user is currently engaged in",
  },
  CANNOT_CREATE_AN_AGREEMENT_AS_QUEST_OVERLAP: {
    CODE: "CANNOT_CREATE_AN_AGREEMENT_AS_QUEST_OVERLAP",
    MESSAGE:
      "The user cannot create an agreement in this quest as it overlaps with another quest the user is currently engaged in",
  },
  CANNOT_CREATE_AN_AGREEMENT_FOR_THIS_REMOTE_PLAYER_AS_QUEST_OVERLAP: {
    CODE: "CANNOT_CREATE_AN_AGREEMENT_FOR_THIS_REMOTE_PLAYER_AS_QUEST_OVERLAP",
    MESSAGE:
      "Cannot create an agreement for the remote player selected as this quest overlaps with another quest the user is currently engaged in",
  },

  CANNOT_CREATE_AN_AGREEMENT_FOR_THIS_FAMILY_PLAYER_AS_QUEST_OVERLAP: {
    CODE: "CANNOT_CREATE_AN_AGREEMENT_FOR_THIS_FAMILY_PLAYER_AS_QUEST_OVERLAP",
    MESSAGE:
      "Cannot create an agreement for the family player selected as this quest overlaps with another quest the user is currently engaged in",
  },

  CANNOT_CREATE_AGREEMENT_FOR_THIS_QUEST: {
    CODE: "CANNOT_CREATE_AGREEMENT_FOR_THIS_QUEST",
    MESSAGE:
      "The quest has either started or finished so a user cannot create a new agreement",
  },
  PLAYERS_ARE_BLOCK_EACH_OTHER: {
    CODE: "PLAYERS_ARE_BLOCK_EACH_OTHER",
    MESSAGE: "Players Are Block each other.",
  },
  ONLY_ACTIVE_PLAYERS_CAN_REQUEST_FOR_REMOTE_PLAYERS_LIST: {
    CODE: "ONLY_ACTIVE_PLAYERS_CAN_REQUEST_FOR_REMOTE_PLAYERS_LIST",
    MESSAGE: "Requester for this API is not an active player",
  },
  ONLY_ACTIVE_PLAYERS_CAN_CREATE_AGREEMENT: {
    CODE: "ONLY_ACTIVE_PLAYERS_CAN_CREATE_AGREEMENT",
    MESSAGE: "Requester for agreement creation is not an active player",
  },
  AGREEMENT_CAN_BE_SENT_TO_REMOTE_PLAYERS_ONLY: {
    CODE: "AGREEMENT_CAN_BE_SENT_TO_REMOTE_PLAYERS_ONLY",
    MESSAGE: "Receiver for an agreement can only be a remote player",
  },
  AGREEMENT_STATUS_IS_ALREADY_DONE: {
    CODE: "AGREEMENT_STATUS_IS_ALREADY_DONE",
    MESSAGE: "Agreement status is already done",
  },
  AGREEMENT_ALREADY_DONE_WITH_REMOTE_USER: {
    CODE: "AGREEMENT_ALREADY_DONE_WITH_REMOTE_USER",
    MESSAGE: "Agreement is already made with the remote user",
  },
  CANNOT_SIGN_AGREEMENT_FOR_THIS_QUEST: {
    CODE: "CANNOT_SIGN_AGREEMENT_FOR_THIS_QUEST",
    MESSAGE:
      "The quest has either started or finished so a user cannot sign any agreement now",
  },
  CANNOT_SIGN_AGREEMENT_AS_USER_IS_NOT_PART_OF_THIS_AGREEMENT: {
    CODE: "CANNOT_SIGN_AGREEMENT_AS_USER_IS_NOT_PART_OF_THIS_AGREEMENT",
    MESSAGE: "User cannot sign the agreement",
  },
  TASK_NOT_AVAILABLE_IN_USER_PARTICIPATION_OBJECT: {
    CODE: "TASK_NOT_AVAILABLE_IN_USER_PARTICIPATION_OBJECT",
    MESSAGE: "Task is not available in user participation object",
  },
  INVALID_TASK_COMPLETION_STATUS_TYPE: {
    CODE: "INVALID_TASK_COMPLETION_STATUS_TYPE",
    MESSAGE: "Invalid task completion status type given",
  },
  INVALID_TIME_SAVED_IN_TASK_TYPE: {
    CODE: "INVALID_TIME_SAVED_IN_TASK_TYPE",
    MESSAGE: "Invalid time saved in task type given",
  },

  //UserStat Errors
  NO_USER_STAT_OBJECT_FOUND: {
    CODE: "NO_USER_STAT_OBJECT_FOUND",
    MESSAGE: "No user stat object found",
  },
  // Poll Errors
  INVALID_QUESTION_TYPE: {
    CODE: "INVALID_QUESTION_TYPE",
    MESSAGE: "Invalid Question type",
  },
  INVALID_CHOICES_TYPE: {
    CODE: "INVALID_CHOICES_TYPE",
    MESSAGE: "Invalid Choices type",
  },
  INVALID_POLL_CHOICES_ARRAY_LENGTH: {
    CODE: "INVALID_POLL_CHOICES_ARRAY_LENGTH",
    MESSAGE: "Wrong Number of Choices",
  },
  DUPLICATE_CHOICES_ARE_NOT_ALLOWED_IN_THE_POLL: {
    CODE: "DUPLICATE_CHOICES_ARE_NOT_ALLOWED_IN_THE_POLL",
    MESSAGE: "No duplication of choices are allowed.",
  },
  NO_POLL_FOUND: {
    CODE: "NO_POLL_FOUND",
    MESSAGE: "No poll found",
  },
  CANNOT_UPDATE_POLL_BECAUSE_POLL_ALREADY_HAS_STARTED: {
    CODE: "CANNOT_UPDATE_POLL_BECAUSE_POLL_ALREADY_HAS_STARTED",
    MESSAGE: "Can not update poll data as poll has already started",
  },
  CAN_NOT_SEE_RESULTS_AS_POLL_NOT_ENDED: {
    CODE: "CAN_NOT_SEE_RESULTS_AS_POLL_NOT_ENDED",
    MESSAGE: "Poll time hasn't ended yet",
  },
  INVALID_START_TIME_GIVEN_FOR_POLL: {
    CODE: "INVALID_START_TIME_GIVEN_FOR_POLL",
    MESSAGE: "Invalid start time in poll",
  },
  INVALID_END_TIME_GIVEN_FOR_POLL: {
    CODE: "INVALID_END_TIME_GIVEN_FOR_POLL",
    MESSAGE: "Invalid end time in poll",
  },
  INVALID_MULTIPLE_ALLOWED_TYPE: {
    CODE: "INVALID_END_TIME_GIVEN_FOR_POLL",
    MESSAGE: "Invalid end time in poll",
  },
  MULTIPLE_CHOICES_NOT_ALLOWED_FOR_THIS_POLL: {
    CODE: "MULTIPLE_CHOICES_NOT_ALLOWED_FOR_THIS_POLL",
    MESSAGE: "No more than one choice is allowed in this poll",
  },
  WRONG_TYPE_OR_VALUE_OF_CHOICES_IN_THE_POLL: {
    CODE: "WRONG_TYPE_OR_VALUE_OF_CHOICES_IN_THE_POLL",
    MESSAGE: "Choices should be number and less than poll choices",
  },
  // Voting Errors
  CANNOT_CAST_VOTE_BECAUSE_POLL_TIME_HAS_ENDED: {
    CODE: "CANNOT_CAST_VOTE_BECAUSE_POLL_TIME_HAS_ENDED",
    MESSAGE: "Poll time ended",
  },
  CANNOT_CAST_VOTE_BECAUSE_POLL_HAS_NOT_STARTED: {
    CODE: "CANNOT_CAST_VOTE_BECAUSE_POLL_HAS_NOT_STARTED",
    MESSAGE: "Poll has not stated yet",
  },
  CANNOT_DELETE_AN_ACTIVE_POLL: {
    CODE: "CANNOT_DELETE_AN_ACTIVE_POLL",
    MESSAGE: "Cannot delete an active poll",
  },

  //Game Boost Errors
  INVALID_GAME_BOOST_NAME_TYPE: {
    CODE: "INVALID_GAME_BOOST_NAME_TYPE",
    MESSAGE: "Invalid game boost name type",
  },
  INVALID_GAME_BOOST_ID_TYPE: {
    CODE: "INVALID_GAME_BOOST_ID_TYPE",
    MESSAGE: "Invalid game boost Id type",
  },
  INVALID_GAME_BOOST_METADATA_LINK_TYPE: {
    CODE: "INVALID_GAME_BOOST_METADATA_LINK_TYPE",
    MESSAGE: "Invalid game boost metadata link type",
  },
  INVALID_GAME_BOOST_IMAGE_LINK_TYPE: {
    CODE: "INVALID_GAME_BOOST_IMAGE_LINK_TYPE",
    MESSAGE: "Invalid game boost image link type",
  },
  INVALID_GAME_BOOST_STATUS_TYPE: {
    CODE: "INVALID_GAME_BOOST_STATUS_TYPE",
    MESSAGE: "Invalid game boost status type",
  },
  GAME_BOOST_WITH_SAME_ID_EXISTS: {
    CODE: "GAME_BOOST_WITH_SAME_ID_EXISTS",
    MESSAGE: "Game Boost with same ID already exists",
  },
  GAME_BOOST_WITH_SAME_NAME_ID_EXISTS: {
    CODE: "GAME_BOOST_WITH_SAME_NAME_ID_EXISTS",
    MESSAGE: "Game Boost with same name ID already exists",
  },
  GAME_BOOST_WITH_SAME_NAME_EXISTS: {
    CODE: "GAME_BOOST_WITH_SAME_NAME_EXISTS",
    MESSAGE: "Game Boost with same name already exists",
  },
  FAMILY_HEAD_IS_THE_PART_OF_ANOTHER_AGREEMENT: {
    CODE: "FAMILY_HEAD_IS_THE_PART_OF_ANOTHER_AGREEMENT",
    MESSAGE: "Family head is the part of other agreement",
  },
  USER_IS_NOT_FAMILY_HEAD: {
    CODE: "USER_IS_NOT_FAMILY_HEAD",
    MESSAGE: "User is not family head",
  },
  FAMILY_MEMBER_IS_THE_PART_OF_ANOTHER_AGREEMENT: {
    CODE: "FAMILY_MEMBER_IS_THE_PART_OF_ANOTHER_AGREEMENT",
    MESSAGE: "Family member is the part of other agreement",
  },
  USER_ALREADY_BLOCKED: {
    CODE: "USER_ALREADY_BLOCKED",
    MESSAGE: "User is already blocked",
  },
  USER_ARE_NOT_BLOCKED: {
    CODE: "USER_ARE_NOT_BLOCKED",
    MESSAGE: "User are blocked",
  },
  INVALID_FAMILY_MEMBER_STRUCTURE: {
    CODE: "INVALID_FAMILY_MEMBER_STRUCTURE",
    MESSAGE: "Invalid familyMembers structure",
  },
  FAMILY_LIMIT_CROSS: {
    CODE: "FAMILY_LIMIT_CROSS",
    MESSAGE: "Family limit cross",
  },
  FAMILY_MODE_DOES_NOT_SUPPORT_THIS_TYPE_OF_QUEST_MODE: {
    CODE: "FAMILY_MODE_DOES_NOT_SUPPORT_THIS_TYPE_OF_QUEST_MODE",
    MESSAGE: "Family mode does not support this quest mode",
  },
  FAMILY_MEMBER_ALREADY_ACCEPT_THIS_AGREEMENT: {
    CODE: "FAMILY_MEMBER_ALREADY_ACCEPT_THIS_AGREEMENT",
    MESSAGE: "This family already accept this agreement",
  },
  INVALID_GAME_BOOST_PRICE_TYPE: {
    CODE: "INVALID_GAME_BOOST_PRICE_TYPE",
    MESSAGE: "Invalid game boost price type",
  },
  INVALID_GAME_BOOST_DESCRIPTION_TYPE: {
    CODE: "INVALID_GAME_BOOST_DESCRIPTION_TYPE",
    MESSAGE: "Invalid game boost description type",
  },
  GAME_BOOST_WITH_SAME_NAME_EXISTS: {
    CODE: "GAME_BOOST_WITH_SAME_NAME_EXISTS",
    MESSAGE: "Game Boost with same name already exists",
  },
  REPORTER_COMPLAINANT_SAME_USER: {
    CODE: "REPORTER_COMPLAINANT_SAME_USER",
    MESSAGE: "Reporter and Complainant cannot be the same user",
  },
  INVALID_CONTENT_TYPE: {
    CODE: "INVALID_CONTENT_TYPE",
    MESSAGE: "Invalid content type",
  },
  INVALID_REPORT_TYPE: {
    CODE: "INVALID_REPORT_TYPE",
    MESSAGE: "Invalid report type",
  },
  INVALID_MESSAGE_TYPE: {
    CODE: "INVALID_MESSAGE_TYPE",
    MESSAGE: "Invalid message type",
  },
  INVALID_MESSAGE_LENGTH: {
    CODE: "INVALID_MESSAGE_LENGTH",
    MESSAGE: "Message length must be less than 1500 characters",
  },
  INVALID_CATEGORY_TYPE: {
    CODE: "INVALID_CATEGORY_TYPE",
    MESSAGE: "Invalid category type",
  },
  INVALID_CATEGORY_VALUE: {
    CODE: "INVALID_CATEGORY_VALUE",
    MESSAGE: "Invalid category value",
  },
  NO_GAME_BOOST_FOUND: {
    CODE: "NO_GAME_BOOST_FOUND",
    MESSAGE: "No game boost found",
  },
  //Transaction Errors
  NO_TRANSACTION_FOUND: {
    CODE: "NO_TRANSACTION_FOUND",
    MESSAGE: "No transaction found",
  },
  INVALID_TRANSACTION_ITEM_QUANTITY_TYPE: {
    CODE: "INVALID_TRANSACTION_ITEM_QUANTITY_TYPE",
    MESSAGE: "Invalid transaction item quantity type",
  },
  INVALID_TRANSACTION_ITEM_NFT_ID_TYPE: {
    CODE: "INVALID_TRANSACTION_ITEM_NFT_ID_TYPE",
    MESSAGE: "Invalid transaction item nft Id type",
  },
  INVALID_TRANSACTION_ITEM_TYPE: {
    CODE: "INVALID_TRANSACTION_ITEM_TYPE",
    MESSAGE: "Invalid transaction item type",
  },
  INVALID_TRANSACTION_ITEMS_ARRAY_TYPE: {
    CODE: "INVALID_TRANSACTION_ITEMS_ARRAY_TYPE",
    MESSAGE: "Invalid transaction items type, must be an array",
  },
  GAME_BOOST_REQUIRED: {
    CODE: "GAME_BOOST_REQUIRED",
    MESSAGE: "Game boost is required",
  },
  ITEM_ID_REQUIRED_FOR_COLLECTION: {
    CODE: "NFT_ID_REQUIRED_FOR_COLLECTION",
    MESSAGE: "NFT ID required for collection",
  },
  INVALID_COIN_SYMBOL: {
    CODE: "INVALID_COIN_SYMBOL",
    MESSAGE: "Invalid coin symbol provided for collection",
  },
  INVALID_COIN_NAME: {
    CODE: "INVALID_COIN_NAME",
    MESSAGE: "Invalid Coin name provided for collection",
  },
  QUEST_REQUIRED_FOR_TICKET: {
    CODE: "QUEST_REQUIRED_FOR_TICKET",
    MESSAGE: "Quest Id required for collection",
  },
  TO_REQUIRED_FOR_ITEM_TYPE_COIN_AND_NFT: {
    CODE: "TO_REQUIRED_FOR_ITEM_TYPE_COIN_AND_NFT",
    MESSAGE: "To required for coin & NFT",
  },
  INVALID_TO_WALLET_ADDRESS: {
    CODE: "INVALID_TO_WALLET_ADDRESS",
    MESSAGE: "Invalid to wallet address",
  },
  TO_NOT_REQUIRED: {
    CODE: "TO_NOT_REQUIRED",
    MESSAGE: "To is not required",
  },
  COIN_SYMBOL_REQUIRED_FOR_ITEM_TYPE_COIN: {
    CODE: "COIN_SYMBOL_REQUIRED_FOR_ITEM_TYPE_COIN",
    MESSAGE: "Coin Symbol required for item type coin",
  },
  COIN_SYMBOL_NOT_REQUIRED: {
    CODE: "COIN_SYMBOL_NOT_REQUIRED",
    MESSAGE: "Coin Symbol not required",
  },
  COIN_NAME_REQUIRED_FOR_ITEM_TYPE_COIN: {
    CODE: "COIN_NAME_REQUIRED_FOR_ITEM_TYPE_COIN",
    MESSAGE: "Coin name required for item type coin",
  },
  COIN_NAME_NOT_REQUIRED: {
    CODE: "COIN_NAME_NOT_REQUIRED",
    MESSAGE: "Coin name not required",
  },
  ITEMS_NOT_REQUIRED_FOR_ITEM_TYPE_COIN: {
    CODE: "ITEMS_NOT_REQUIRED_FOR_ITEM_TYPE_COIN",
    MESSAGE: "Items not required for item type coin",
  },
  TOTAL_AMOUNT_REQUIRED_FOR_ITEM_TYPE_COIN: {
    CODE: "TOTAL_AMOUNT_REQUIRED_FOR_ITEM_TYPE_COIN",
    MESSAGE: "Total amount required for item type coin",
  },
  INVALID_TOTAL_AMOUNT_TYPE: {
    CODE: "INVALID_TOTAL_AMOUNT_TYPE",
    MESSAGE: "invalid total amount type",
  },
  INVALID_NFT_ITEMS_ARRAY: {
    CODE: "INVALID_NFT_ITEMS_ARRAY",
    MESSAGE: "invalid nft items array",
  },
  NO_NFT_COLLECTION_FOUND: {
    CODE: "NO_NFT_COLLECTION_FOUND",
    MESSAGE: "No NFT Collection Found",
  },

  // INVALID_TRANSACTION_DATE_FORMAT: {
  //     CODE: 'INVALID_TRANSACTION_DATE_FORMAT',
  //     MESSAGE: 'Invalid transaction date format'
  // },
  // TRANSACTION_DATE_REQUIRED: {
  //     CODE: 'TRANSACTION_DATE_REQUIRED',
  //     MESSAGE: 'Transaction date is required'
  // },
  //Inventory Routes
  NO_INVENTORY_FOUND: {
    CODE: "NO_INVENTORY_FOUND",
    MESSAGE: "No inventory found",
  },
  INSUFFICIENT_GAME_BOOST_QUANTITY: {
    CODE: "INSUFFICIENT_GAME_BOOST_QUANTITY",
    MESSAGE: "Insufficient game boost quantity",
  },
  INVALID_GAME_BOOSTS_ARRAY_TYPE: {
    CODE: "INVALID_GAME_BOOSTS_ARRAY_TYPE",
    MESSAGE: "Invalid game boosts array type",
  },
  GAME_BOOST_ALREADY_IN_USE: {
    CODE: "GAME_BOOST_ALREADY_IN_USE",
    MESSAGE: "Game boost already in use",
  },
  S3_UPLOAD_FAILED: {
    CODE: "S3_UPLOAD_FAILED",
    MESSAGE: "Failed to upload file to S3",
  },
};
module.exports = RESPONSE_ERRORS;
