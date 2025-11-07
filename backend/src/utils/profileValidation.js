const validator = require("validator");

const validateProfileEdit =  (req) => {
    const allowedEditFields = ["firstName", "lastName", "email", "age", "about", "photoUrl", "skills"];

    const editFields = Object.keys(req.body);

    const isValidEdit = editFields.every((field) => allowedEditFields.includes(field));

    const checkValidPhotoUrl = editFields?.includes("photoUrl") ? validator.isURL(req.body.photoUrl) : true;

    return isValidEdit && checkValidPhotoUrl;
}

module.exports = {validateProfileEdit}