const weapp = require('../controllers/weapp.server.controllers.js');
const express = require('express');

const router = express.Router();

router.route('/getUserInfo').post(weapp.getUserInfo);

router.route('/template').post(weapp.sendTemplate);

module.exports = router;
//# sourceMappingURL=weapp.server.routes.js.map