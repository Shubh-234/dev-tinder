const express = require("express");
const {
	getAllUsers,
	getUserByEmail,
	updateUser,
	deleteUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.get("/users", getAllUsers);

router.get("/user", getUserByEmail);

router.patch("/user/update", updateUser);

router.delete("user//delete", deleteUser);

module.exports = router;
