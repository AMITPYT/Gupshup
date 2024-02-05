const express = require('express');
const multer = require('multer');
const messageController = require('../controller/sendBulkMessage.controller');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });
// console.log(upload);

router.post('/upload', upload.single('file'), messageController.uploadFile);

module.exports = router;
