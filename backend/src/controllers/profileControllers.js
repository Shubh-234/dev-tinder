const { validateProfileEdit,validateNewPassword } = require('../utils/profileValidation');
const bcrypt = require("bcryptjs")

const getProfile = async (req, res) => {
	try {
		const user = req?.user;

		if (!user) {
			return res.status(400).json({
				success: false,
				message: "Invlalid token or user",
			});
		}
		res.send(user);
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
}
;

const editProfile = async (req, res) => {
	try {
		if (!validateProfileEdit(req)) {
			return res.status(400).json({
				success: false,
				message: "Invalid profile edit",
				})
		}
		const loggedInUser = req?.user;
		console.log(loggedInUser);

		Object?.keys(req?.body)?.forEach((key) => {
			loggedInUser[key] = req?.body[key];
		})

		await loggedInUser?.save();
		console.log(loggedInUser);
		return res.status(200).json({
			success: true,
			message : "Profile edited successfully",
			user: loggedInUser,
		})
	} catch (error) {
		console.error(`Error encountered while editing profile: ${error.message}`);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		})
	}
}

const editPassword = async (req,res) => {
	try {

		await validateNewPassword(req);

		const loggedInUser = req?.user;
		loggedInUser.password = await bcrypt.hash(req?.body?.password, 10);
		await loggedInUser.save();

		return res.status(200).json({
			success: true,
			message: "Password updated successfully"
		})

	} catch (error) {
		if(error.message.includes("password")){
			return res.status(400).json({
				success: false,
				message : error.message
			})
		}else{
			console.error(`Error encountered while editing password: ${error}`);
			return res.status(500).json({
				success: false,
				message: "Internal server error"
			})
		}
	}
}

module.exports = {
	getProfile,
	editProfile,
	editPassword
};
