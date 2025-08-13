const User = require("../models/userModel");

const signupController = async (req, res) => {
	try {
		const { email, password, ...otherDetails } = req.body;
		const OTHER_DETAILS = [
			"firstName",
			"lastName",
			"age",
			"gender",
			"photoUrl",
			"about",
			"skills",
		];

		if (!email || !password) {
			res.status(400).json({
				success: false,
				message: "Incomplete credentials",
			});
		}

		Object.keys(otherDetails).forEach((key) => {
			if (!OTHER_DETAILS.includes(key)) {
				throw new Error(`Not a valid property: ${key}`);
			}
		});

		const userToInsert = new User({ email, password, ...otherDetails });
		await userToInsert.save();

		res.status(200).json({
			success: true,
			message: "User inserted succesfully",
			user: userToInsert,
		});
	} catch (error) {
		console.error(`Error duting signup: ${error.message}`);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
	}
};

module.exports = { signupController };
