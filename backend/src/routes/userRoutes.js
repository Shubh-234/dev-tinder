const express = require("express");
const {
	getAllUsers,
	getUserByEmail,
	updateUser,
	deleteUser,
	getUserConnectionRequests,
	getUserConnnections
} = require("../controllers/userControllers");
const { authMiddleware } = require("../middlewares.js/authMiddleware");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/get", getUserByEmail);

router.patch("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

router.get("/requests/receive",authMiddleware,getUserConnectionRequests)

router.get("/connections",authMiddleware,getUserConnnections)

module.exports = router;
