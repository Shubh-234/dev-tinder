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

router.patch("/user/update/:id", updateUser);

router.delete("/user/delete/:id", deleteUser);

module.exports = router;
