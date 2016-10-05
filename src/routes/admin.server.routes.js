const admin = require('../controllers/admin.server.controllers.js');
const express = require('express');


const router = express.Router();
router.route('/')
  .get(admin.test);
router.route('/login')
    .post(admin.login);

router.route('/wechat')
    .get(admin.wechat);

module.exports = router;
