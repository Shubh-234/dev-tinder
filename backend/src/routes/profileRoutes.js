const express = require("express");
const { getProfile,editProfile } = require("../controllers/profileControllers");
const { authMiddleware } = require("../middlewares.js/authMiddleware");

const router = express.Router();

router.get("/view", authMiddleware, getProfile);

router.patch("/edit", authMiddleware, editProfile);

module.exports = router;
