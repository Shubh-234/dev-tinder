const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		throw new Error("Invalid token");
	}

	console.log("decoding token" + token);
	const decoded = jwt.verify(token, "secretkey");

	console.log("decoded");
	console.log(decoded);

	if (!decoded) {
		throw new Error("Invalid token");
	}
	const user = await User.findById(decoded?.userId);
	if (!user) {
		throw new Error("Invalid token");
	}
	req.user = user;
	next();
};

module.exports = { authMiddleware };
