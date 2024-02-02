
const { responseSuccess, responseBadRequest, responseServerSideError } = require('../utils/responseTypes')
const ERRORS = require('../utils/errorTypes')
const CONSTANTS = require('../constants')
const userHelper = require('../helpers/user.helper')

const my = async (req, res) => {
    try{
        const data = await userHelper.getMe()
        return responseSuccess(res, { ...data})
    }
    catch(error){
        console.log("error: ", error)
    };
}

module.exports = {
    my
}