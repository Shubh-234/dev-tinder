const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
	try {
		const getUsers = await User.find();
		return res.status(200).json({
			success: true,
			message: "Users fetched succesfully",
			users: getUsers,
		});
	} catch (error) {
		console.error(`Error while fetching all users : ${error.message}`);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

const getUserByEmail = async (req, res) => {
	try {
		const { email } = req.body;
		if (req.body || !email) {
			console.log("Please enter the email");
			res.status(400).json({
				success: false,
				message: "Please enter an email id to fetch user",
			});
		}
		const user = await User.findOne({
			email: email,
		});

		if (!user) {
			return res.status(400).json({
				success: false,
				message: "User not found associated with the email id",
			});
		}

		return res.status(200).json({
			success: true,
			message: "User fetched successfully",
			user,
		});
	} catch (error) {
		console.error(`Error in the getUserByEmail controller: ${error.message}`);
		return res.status(500).json({
			success: false,
			message: "Internal server error22",
		});
	}
};

const updateUser = async (req, res) => {
	try {
		const { _id, ...updatedFields } = req.body;
		if (!_id) {
			return res.status(400).json({
				success: false,
				message: "Please enter id to update",
			});
		}
		const updatedUser = await User.findByIdAndUpdate(_id, updatedFields, {
			runValidators: true,
			returnDocument: "after",
		});

		return res.status(201).json({
			success: true,
			message: "User updated successfully",
			updatedUser,
		});
	} catch (error) {
		console.error(`Error while updating user: ${error.message}`);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

const deleteUser = async (req, res) => {
	try {
		const { _id } = req.body;
		await User.findByIdAndDelete(_id);
		return res.status(204).json({
			success: true,
			message: "User deleted succesfully",
		});
	} catch (error) {
		console.error(`Error encountered while deleting user ${error.message}`);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

module.exports = { getAllUsers, getUserByEmail, updateUser, deleteUser };
