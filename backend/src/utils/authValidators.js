const validator = require("validator");

const validationSignup = (req) => {
	const { firstName, lastName, email, password } = req.body;

	if (!firstName || !lastName || !email || !password) {
		throw new Error("Incomplete credentials for signup..");
	}

	if (!validator.isEmail(email)) {
		throw new Error("Invalid email id..");
	}

	if (!validator.isStrongPassword(password)) {
		throw new Error("Please enter a strong password.");
	}
};

const validationLogin = (req) => {
	const { email, password } = req?.body;
	if (!email || !password) {
		throw new Error("Incomplete credentials");
	}

	if (!validator.isEmail(email)) {
		throw new Error("Please enter a valid email address");
	}
};

module.exports = { validationSignup, validationLogin };
