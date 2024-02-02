const crypto = require('crypto')
const { NOTIFICATION_REMOTE_PLAYER_JOINED_QUEST } = require('../constants')

const getEnabledPaginationOption = (page, limit) => {
    let result = { enabled: false }

    if (page && limit) {
        result = { enabled: true, page, limit }
    }
    return result
}

const generateUpdateObject = (fieldsArray, dataArray) => {
    const updateObject = {}
    for (let item in fieldsArray) {
        if (dataArray[fieldsArray[item]] !== undefined) {
            updateObject[fieldsArray[item]] = dataArray[fieldsArray[item]]
        }
    }
    return updateObject
}

const generateNonce = () => {
    // Time-Based OTP algorithm
    const nonce = Math.floor(100000 + Math.random() * 900000)
    return nonce
}

const removeKeysFromObject = (object, keysToRemoveArray) => {
    const objectKeys = Object.keys(object)
    keysToRemoveArray.forEach((key) => {
        if (objectKeys.includes(key)) {
            delete object[key]
        }
    })
}

function filterEmptyKeys(object) {
    const filteredObj = {}

    for (const key in object) {
        const value = object[key]
        if (value !== '' && value !== null && value !== undefined) {
            filteredObj[key] = value
        }
    }
    return filteredObj
}

function getRandomNftCollectionId(nftsArray) {
    if (nftsArray.length === 0) {
        return null // Return null if the array is empty
    }

    const randomIndex = crypto.randomInt(0, nftsArray.length)
    const randomNft = nftsArray[randomIndex]

    return randomNft
}

function getDataForPushNotification(clickAction, extraInfo = {}) {
    switch (clickAction) {
        case NOTIFICATION_REMOTE_PLAYER_JOINED_QUEST:
            return { clickAction: clickAction, questId: extraInfo.questId }
        default:
            return { clickAction: clickAction }
    }
}

function getLevel(score) {
    const levelRequirements = [0, 150, 300, 450, 750, 1050, 1350, 1650, 1950, 2650, 3350, 4050, 4750, 5450, 6850, 8250, 9650, 11250, 12850, 15000]
    if (score) {
        for (let level = 1; level <= levelRequirements.length; level++) {
            if (score < levelRequirements[level]) {
                return level
            }
        }
        return levelRequirements.length // If the score is higher than the maximum level, return the maximum level.
    } else {
        throw new Error('Score is not a number')
    }
}

const formatTime = (date) => {
    const formatted = date.toISOString(); // Converts to ISO 8601 format
    return formatted.substring(0, formatted.length - 1) + '+00:00'; // Remove 'Z' and add the desired timezone
  };

function generateRandomId(length = 6) {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
}
module.exports = {
    getEnabledPaginationOption,
    generateUpdateObject,
    generateNonce,
    removeKeysFromObject,
    filterEmptyKeys,
    getRandomNftCollectionId,
    getLevel,
    getDataForPushNotification,
    formatTime,
    generateRandomId
}
