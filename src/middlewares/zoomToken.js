const adminHelper = require('../helpers/admin.helper');
const helperFunctions = require('../utils/helperFunctions');
const { responseUnauthorized } = require('../utils/responseTypes')

const validateZoomOAuthToken = async (req, res, next) =>{
    try{
        const admin = await adminHelper.getOneAdmin({})
        console.log("admin: ",admin)
        if(admin){
            //check admin token
            if(!admin.token){
                const response = await helperFunctions.getToken();
                const newAdmin = await adminHelper.updateAdmin({},{ token:response.access_token})
                req.auth = newAdmin.token
                next();
            }
            else{
              req.auth = admin.token
              next();  
            }
        }
        else{
            const response = await helperFunctions.getToken();
            console.log("else of middleware -> response: ", response);
            const admin = await adminHelper.createAdmin({ token:response.access_token })

            req.auth = admin.token
            next();
            // const errorMessage = "Invalid zoom token"
            // return responseUnauthorized(res, errorMessage)
        }
    }
    catch(error){
        throw new Error(error)
    }
}

module.exports = {
    validateZoomOAuthToken
}