const wechatRoute = require('../routes/wechat.server.routes');
const adminRoute = require('../routes/admin.server.routes');
const weappRoute = require('../routes/weapp.server.routes');

// const frontendRoute = require('../routes/frontend.server.routes');
const express = require('express');
const bodyParser = require('body-parser');
const swig = require('swig');


module.exports = () => {
  const app = express();
  // app.engine('html', swig.renderFile);
  // app.set('view engine', 'html');
  // app.set('views', './dist');
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
  });

  app.use('/wechat', wechatRoute);
  app.use('/admin', adminRoute);
  app.use('/weapp', weappRoute);
  // app.use('/frontend', frontendRoute);

  return app;
};
