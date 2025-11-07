const sendConnectionRequest = async (req, res) => {
	try {
		const user = req.user;
		res.send("sending connection request from user" + user.firstName);
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

module.exports = {
	sendConnectionRequest,
};
