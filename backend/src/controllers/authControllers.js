const User = require("../models/userModel");
const {
	validationSignup,
	validationLogin,
} = require("../utils/authValidators");
const bcrypt = require("bcryptjs");

const signupController = async (req, res) => {
	try {
		const { firstName, lastName, email, password, age, skills } = req.body;
		validationSignup(req);

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const userToSave = await User({
			firstName,
			lastName,
			email,
			password: hashedPassword,
			age,
			skills,
		});

		await userToSave.save();

		res.status(200).json({
			success: true,
			message: "User inserted succesfully",
			user: userToSave,
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

const loginController = async (req, res) => {
	try {
		const { email, password } = req.body;
		validationLogin(req);

		const user = await User.findOne({
			email: email,
		});

		if (!user) {
			return res.status(400).json({
				succes: false,
				message: "User not found with the associated email",
			});
		}

		const hashedPassword = user.password;
		const check = await bcrypt.compare(password, hashedPassword);
		if (!check) {
			console.error(
				`Password ${password} does not match with the hash ${hashedPassword}`
			);
			return res.status(400).json({
				success: false,
				message: "Invalid credentials",
			});
		}

		return res.status(200).json({
			success: true,
			message: "User logged in successfully",
			user,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
			error: error.message,
		});
	}
};

module.exports = { signupController, loginController };
