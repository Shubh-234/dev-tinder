const express = require("express");
const {
	getAllUsers,
	getUserByEmail,
	updateUser,
	deleteUser,
	getProfile,
	sendConnectionRequest,
} = require("../controllers/userControllers");
const { authMiddleware } = require("../middlewares.js/authMiddleware");

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);

router.get("/users", getAllUsers);

router.get("/user", getUserByEmail);

router.patch("/user/update/:id", updateUser);

router.delete("/user/delete/:id", deleteUser);

router.post("/send-connection-request", authMiddleware, sendConnectionRequest);

module.exports = router;
