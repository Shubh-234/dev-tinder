const getProfile = async (req, res) => {
	try {
		const user = req?.user;

		if (!user) {
			return res.status(400).json({
				success: false,
				message: "Invlalid token or user",
			});
		}
		res.send(user);
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

module.exports = {
	getProfile,
};
