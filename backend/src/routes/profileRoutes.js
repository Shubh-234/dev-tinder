const express = require("express");
const { getProfile } = require("../controllers/profileControllers");
const { authMiddleware } = require("../middlewares.js/authMiddleware");

const router = express.Router();

router.get("/view", authMiddleware, getProfile);

module.exports = router;
