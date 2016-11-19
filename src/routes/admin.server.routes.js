const admin = require('../controllers/admin.server.controllers.js');
const express = require('express');


const router = express.Router();

router.route('/')
  .get(admin.index);

router.route('/auth')
    .get(admin.auth);

router.route('/jssdk')
    .post(admin.getJssdkConfig);

module.exports = router;
