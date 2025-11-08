const express = require("express");
const { sendConnectionRequest } = require("../controllers/requestControllers");
const { authMiddleware } = require("../middlewares.js/authMiddleware");

const router = express.Router();

router.post("/send/:status/:toUserId", authMiddleware, sendConnectionRequest);

module.exports = router;
