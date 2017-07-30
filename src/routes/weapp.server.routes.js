const weapp = require('../controllers/weapp.server.controllers.js');
const express = require('express');


const router = express.Router();

router.route('/getUserInfo')
    .post(weapp.getUserInfo);

module.exports = router;
