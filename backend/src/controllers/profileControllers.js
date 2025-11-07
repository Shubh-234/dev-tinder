const { validateProfileEdit } = require('../utils/profileValidation');

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

module.exports = {
	getProfile,
	editProfile
};
