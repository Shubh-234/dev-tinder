const validator = require("validator");
const bcrypt = require("bcryptjs");

const validateProfileEdit =  (req) => {
    const allowedEditFields = ["firstName", "lastName", "email", "age", "about", "photoUrl", "skills"];

    const editFields = Object.keys(req.body);

    const isValidEdit = editFields.every((field) => allowedEditFields.includes(field));

    const checkValidPhotoUrl = editFields?.includes("photoUrl") ? validator.isURL(req.body.photoUrl) : true;

    const skillCountCheck = editFields?.includes("skills") ? req?.body.skills.length < 10 : true;

    const aboutLengthCheck = editFields?.includes("about") ? validator.isLength(req?.body.about, {max: 100}) : true

    return isValidEdit && checkValidPhotoUrl && skillCountCheck && aboutLengthCheck;
}

const validateNewPassword = async (req) => {
    if(!req?.body || !req?.body?.password){
        throw new Error("Please enter the new password")
    }

    //min length
    if(req?.body?.password.length<7){
        throw new Error("Password should be minimum 7 characters long")
    }

    //strong password 
    if(!validator.isStrongPassword(req?.body?.password)){
        throw new Error("Please enter a strong password")
    }

    //same password as before
    const oldPasswordHash = req?.user?.password;
    const isSamePassword = await bcrypt.compare(req.body.password, oldPasswordHash);

    const samePasswordCheck = isSamePassword ? false : true;

    if(!samePasswordCheck){
        throw new Error("New password cannot be same as old password")
    }
    
    return true;
}

module.exports = {validateProfileEdit,validateNewPassword}