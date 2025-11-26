const express = require("express");
const { sendConnectionRequest, reviewConnectionRequest, dummycode } = require("../controllers/requestControllers");
const { authMiddleware } = require("../middlewares.js/authMiddleware");

const router = express.Router();

router.get('/',authMiddleware,dummycode)
router.post("/send/:status/:toUserId", authMiddleware, sendConnectionRequest);
router.post("/review/:status/:requestId",authMiddleware,reviewConnectionRequest)

module.exports = router;
