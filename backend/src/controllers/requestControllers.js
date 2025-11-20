const User = require("../models/userModel");
const ConnectionRequest = require("../models/connectionRequestModel")

const sendConnectionRequest = async (req, res) => {
	try {
		const {status,toUserId} = req?.params;
		const receivingUser = await User.findById(toUserId)
		if(!receivingUser){
			return res.status(404).json({
				success: false,
				message: "User not found"
			})
		}

		const allowedStatuses = ["ignored","interested"];


		const fromUserId = req?.user?._id;

		const connectionReqExists = await ConnectionRequest.findOne({
			$or: [
				{fromUserId,toUserId},
				{toUserId: fromUserId, fromUserId: toUserId}
			]
		})

		if(connectionReqExists){
			return res.status(400).json({
				success: false,
				message: "Connection request already present"
			})
		}
		
		if(!allowedStatuses.includes(status)) {
			return res.status(500).json({
				success: false,
				message: "Not a valid connection request status"
			})
		}

		//go ahead with the request
		await ConnectionRequest.create({
			toUserId,
			fromUserId,
			status
		})

		return res.status(200).json({
			success: true,
			message: `${status} connection request sent from ${req?.user?.firstName} to ${receivingUser?.firstName}`
		})
		
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: `Internal server error`,
		});
	}
};

const reviewConnectionRequest = async (req,res) => {
	try {
		const user = req?.user;
		const{status,requestId} = req?.params;

		const validStatuses = ["accepted","rejected"];

		if(!validStatuses.includes(status)){
			return res.status(400).json({
				success: false,
				message: "Invalid status"
			})
		}

		if(!status || !requestId){
			return res.status(400).json({
				success : false,
				message : "Invalid parameters"
			})
		}

		const connectionRequest = await ConnectionRequest.findOne({
			_id: requestId,
			toUserId: user._id,
			status: "interested"
		})

		if(!connectionRequest){
			return res.status(404).json({
				success: false,
				message: "Connection request not found"
			})
		}

		connectionRequest.status = status;
		await connectionRequest.save();
		return res.status(200).json({
			success: true,
			message: `Connection request from ${connectionRequest.fromUserId} to ${user._id} ${status}`,
			data: connectionRequest
		})		
	} catch (error) {
		console.error(`Error occurred in the review connection request router ${error.message}`);
		return res.status(500).json({
			success: false,
			message: "Internal server error"
		})
	}
}

module.exports = {
	sendConnectionRequest,
	reviewConnectionRequest
};
