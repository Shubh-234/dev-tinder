const User = require('../models/userModel')

const signupController = async (req,res) => {
    try {
        console.log(req.body)
        const reqUser = req.body;
        if(!reqUser){
            res.status(400).json({
                success : false,
                message : "Incomplete credentials"
            })
        }

        const userToInsert = new User(reqUser);
        console.log(userToInsert)
        userToInsert.save();

        return res.status(200).json({
            success: true,
            message: "User inserted succesfully",
            user: userToInsert
        })

    } catch (error) {
        console.log(`Error duting signup: ${error.message}`);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}



module.exports = {signupController}