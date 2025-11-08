const express = require("express");
const {
	getAllUsers,
	getUserByEmail,
	updateUser,
	deleteUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUsers);

router.get("/get", getUserByEmail);

router.patch("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

module.exports = router;
