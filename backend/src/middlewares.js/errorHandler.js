const handleErrors = async (error, req, res, next) => {
	console.log("entering the error handler");
	console.error(error.stack);
	return res.status(500).json({
		success: false,
		message: "Internal server error",
		error: error.message,
	});
};

module.exports = { handleErrors };
