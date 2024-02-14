const adminSchema = require("../modals/Admin");

const createAdmin = async (creationPayload) => {
    try{
        const admin = await adminSchema.findOne({});
        console.log("createAdmin   -----: ",admin)
        if(!admin){
            if( creationPayload ){
                return await adminSchema.create({...creationPayload});
            }
            else{
                return null
            }
            
        }
        else{
            return admin;
        }
    }
    catch(err){
        console.log("error: ",err);
    }
};

const getOneAdmin = async (where) => {
    try{
        return await adminSchema.findOne(where || {}) || null;
    }
    catch(error){
        console.log("error: ",error);
    }
}

const updateAdmin = async (where , updationPayload) => {
    try{
        if( updationPayload ){
            return await adminSchema.findOneAndUpdate(where || {}, {...updationPayload} , {new: true});
        } 
        else{
            return null;
        } 
    }
    catch(err){
        console.log("error: ",err);
    }
}
module.exports = {
    createAdmin,
    updateAdmin,
    getOneAdmin
}