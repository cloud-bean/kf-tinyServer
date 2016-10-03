const wechatRoute = require('../routes/wechat.server.routes');
const adminRoute = require('../routes/admin.server.routes');
const frontendRoute = require('../routes/frontend.server.routes');
const express = require('express');
const bodyParser = require('body-parser');


module.exports = () => {
  const app = express();
  app.set('views', './src/views');
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
    }
    else {
      next();
    }
  });

  // app.use('/wechat', wechatRoute);
  app.use('/admin',  adminRoute);
  // app.use('/frontend', frontendRoute);

  return app;
};
