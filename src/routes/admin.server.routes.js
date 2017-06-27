const admin = require('../controllers/admin.server.controllers.js');
const express = require('express');


const router = express.Router();

router.route('/')
    .get(admin.index);

router.route('/auth')
    .get(admin.auth);

router.route('/authLocal')
    .get(admin.authLocal);

router.route('/jssdk')
    .post(admin.getJssdkConfig);

router.route('/template')
    .post(admin.sendTemplate);

router.route('/uploadImage')
    .post(admin.uploadImage2Qn);

module.exports = router;