
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



const createUser = async (req, res) => {
    try{
        const { email , first_name, last_name , password } = req.body
        const createdUser = await userHelper.createUser(email, first_name, last_name ,password);
        return responseSuccess(res, { ...createdUser})
    }
    catch(error){
        console.log("createUser -> userController -> error: ", error);
    };
}

const createMeeting = async (req, res) => {
    try{
        const { userId } = req.body
        const creatingMeeting = await userHelper.createMeeting(userId);
        return responseSuccess(res, { ...creatingMeeting})
    }
    catch(error){
        console.log("createUser -> userController -> error: ", error);
    };
}


module.exports = {
    createUser,
    createMeeting,
    my
}