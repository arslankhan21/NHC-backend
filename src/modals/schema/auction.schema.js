const mongoose = require('mongoose')
const { Schema } = mongoose


// const { isValidCountryCode, isCityInCountry, isValidFCMDeviceToken, isValidEmail, isValidPhoneCode, isValidPhoneNumber, isValidFullName, isValidUserAge, isValidUserAboutField, isValidTwitterLink, isValidFaceBookLink } = require('../../validations')

// const passwordHelper = require('../../helpers/password.Hash')

// const CONSTANTS = require('../../constants')
// const { getLevel } = require('../../utils/helperFunctions')


const _auctionItemSchema = new Schema({
    itemID: {
        type: String,
        required: true,
    },  
    itemName:{
        type: String,
        required: true,
    },
    itemDescription: {
        type: String,
        required: false,
        default: "item default description"
    },
    itemBidStartingPrice: {
        type: Number,
        required: true,
        default: 0
    },
    itemBidEndingPrice:{
        type: Number,
        required: true,
        default: 0
    } ,
    itemBidIncrements:{
        type: Number,
        required: true,
        default: 0
    },
    itemPictures:{
        type: [String], // Array of strings for picture URLs
        required: true,
        default: undefined
    } , 
    isSold: {
        type: Boolean,
        default: false
    },
});

const _auctionBidSchema = new Schema({
    userID:{
        type: String,
        required: true,
    },
    itemID:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    bid:{
        type: Number,
        required: true,
    }
});

const auctionSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    userName:{
        type: String,
        unique: true,
        // index: true,
        // validate: {
        //     validator: function (email) {
        //         return isValidEmail(email)
        //     },
        //     message: 'Invalid email'
        // },
        required: false,
    },
    speakerName:{
        type: String,
        required: true,
    },
    // auctionID: String,
    auctionEventName:{
        type: String,
        required: true,
        default: "default auction event",
    },
    auctionDescription:{
        type: String,
        required: true,
        default: "default description",
    },
    auctionPictures:{
        type: [String], // Array of strings for picture URLs
        required: true,
        default: [] // Array of strings for picture URLs
    }, 
    auctionItems: {
      type: [{ type: _auctionItemSchema , _id: false}],
      default: undefined, 
    },
    auctionsBids:{
        type:[{ type: _auctionBidSchema, _id: false}],
        default: undefined
    },
    eventStartTime:{
        type: Date,
        required: true,
    },
    eventEndTime:{
        type: Date,
        required: true,
    }

})

module.exports = auctionSchema