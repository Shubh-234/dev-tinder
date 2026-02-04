const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		return res.status(401).json({ message: "Authentication required" });
	}

	const decoded = jwt.verify(token, "secretkey");

	if (!decoded) {
		return res.status(401).json({ message: "Invalid token" });
	}
	const user = await User.findById(decoded?.userId);
	if (!user) {
		throw new Error("User not found");
	}
	req.user = user;
	next();
};

module.exports = { authMiddleware };
