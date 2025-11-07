const express = require("express");
const { sendConnectionRequest } = require("../controllers/requestControllers");
const { authMiddleware } = require("../middlewares.js/authMiddleware");

const router = express.Router();

router.post("/send", authMiddleware, sendConnectionRequest);

module.exports = router;
