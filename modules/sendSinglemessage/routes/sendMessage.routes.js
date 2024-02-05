// routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const messageController = require('../controller/sendMessage.controller');

router.post('/send', messageController.sendMessage);

module.exports = router;
