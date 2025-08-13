const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
		},
		age: {
			type: Number,
			min: 18,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 7,
		},
		email: {
			type: String,
			unique: true,
			trim: true,
			lowercase: true,
		},
		gender: {
			type: String,
			validator(value) {
				if (!["male", "female", "other"].includes(value)) {
					throw new Error("This is not a valid gender type");
				}
			},
		},
		photoUrl: {
			required: true,
			type: String,
			default:
				"https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg",
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
