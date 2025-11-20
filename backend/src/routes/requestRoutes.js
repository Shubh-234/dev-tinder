const express = require("express");
const { sendConnectionRequest, reviewConnectionRequest } = require("../controllers/requestControllers");
const { authMiddleware } = require("../middlewares.js/authMiddleware");

const router = express.Router();

router.post("/send/:status/:toUserId", authMiddleware, sendConnectionRequest);
router.post("/review/:status/:requestId",authMiddleware,reviewConnectionRequest)

module.exports = router;
