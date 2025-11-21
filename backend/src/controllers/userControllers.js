const { authMiddleware } = require("../middlewares.js/authMiddleware");
const ConnectionRequestModel = require("../models/connectionRequestModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

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
		if (!email) {
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
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({
				success: false,
				message: "Please enter id to update",
			});
		}

		const userToupdate = await User.findById(id);
		
		if(!userToupdate){
			return res.status(400).json({
				success: false,
				message: "User not found"
			})
		}
		
		const NOT_ALLOWED_UPDATES = [
			"firstName",
			"lastName",
			"age",
			"gender",
			"photoUrl",
			"about",
			"skills",
			"password",
		];
		const updatedFields = req.body;

		Object.keys(!updatedFields).forEach((key) => {
			if (NOT_ALLOWED_UPDATES.includes(key)) {
				throw new Error(`Not allowed to update the following property: ${key}`);
			}
		});

		const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
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
		const { _id } = req?.params;

		const userTodelete = await User.findById(_id);
		if(!userTodelete){
			return res.status(400).json({
				success: false,
				message: "User not found"
			})
		}

		await User.findByIdAndDelete(_id);
		return res.status(204).json({
			success: true,
			message: "User deleted succesfully",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

const getUserConnectionRequests = async (req,res) => {
	try {
		const loggedInUser = req?.user;
		const connetionRequests = await ConnectionRequestModel.find({
			toUserId: loggedInUser._id,
			status: "interested"
		}).populate("fromUserId",["firstName","lastName","gender","age","photoUrl"])
		return res.status(200).json({
			success: true,
			data: connetionRequests
		})
	} catch (error) {
		console.error(`Error encountered in getUserConnectionRequests controller: ${error}`)
		return res.status(500).json({
			success: false,
			message: "Internal server error"
		})
	}
}

module.exports = {
	getAllUsers,
	getUserByEmail,
	updateUser,
	deleteUser,
	getUserConnectionRequests
};
