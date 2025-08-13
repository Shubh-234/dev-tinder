const mongoose = require("mongoose");
const validatorPackage = require("validator");

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			min: 18,
		},
		password: {
			type: String,
			required: true,
			minlength: 7,
			validate(value) {
				if (!validatorPackage.isStrongPassword(value)) {
					throw new Error("Please enter a strong password");
				}
			},
		},
		email: {
			type: String,
			unique: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validatorPackage.isEmail(value)) {
					throw new Error("Invalid email type: " + value);
				}
			},
		},
		gender: {
			type: String,
			validate(value) {
				if (!["male", "female", "other"].includes(value)) {
					throw new Error("Invalid gender type: " + value);
				}
			},
		},
		photoUrl: {
			required: true,
			type: String,
			default:
				"https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg",
			validate(value) {
				if (!validatorPackage.isURL(value)) {
					throw new Error("Invalid photo url: " + value);
				}
			},
		},
		about: {
			type: String,
			default: "This is the default about of any user",
		},
		skills: {
			type: [String],
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
