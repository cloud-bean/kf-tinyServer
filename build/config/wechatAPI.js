const config = require('./config');
// const fs = require('fs');
const WechatAPI = require('wechat-api');
const OAuth = require('wechat-oauth');
import WeappAPI from '../helper/weappAPIHelper';
// const qiniu = require("qiniu");
const fs = require('fs');

//需要填写你的 Access Key 和 Secret Key
// qiniu.conf.ACCESS_KEY = 'yH-npgsHSAiumj2uWD4ssIPEdRta5HEsRUCLNFl2';
// qiniu.conf.SECRET_KEY = 'g-OqPh0BU3NJTV-52iJbeblrUYLPty0XIfmRuBG9';

let appid = config.wechatConfig.appid_test;
let appsecret = config.wechatConfig.appsecret_test;
let weappid = config.weappConfig.appid;
let weappSecret = config.weappConfig.appsecret;

if (process.env.NODE_ENV === 'production') {
  appid = config.wechatConfig.appid;
  appsecret = config.wechatConfig.appsecret;
}

const webapi = new OAuth(appid, appsecret);
const api = new WechatAPI(appid, appsecret);
const weappApi = new WeappAPI(weappid, weappSecret);

// const api = new WechatAPI(appid, appsecret, function (callback) {
//   // 传入一个获取全局token的方法
//   console.log('read!!');
//   fs.readFile('access_token.txt', 'utf8', function (err, txt) {
//     if (err) {return callback(err);}
//     callback(null, JSON.parse(txt));
//   });
// }, function (token, callback) {
//   // 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
//   // 这样才能在cluster模式及多机情况下使用，以下为写入到文件的示例
//   console.log('write!!');
//   fs.writeFile('access_token.txt', JSON.stringify(token), callback);
// });

module.exports = {
  api,
  webapi,
  weappApi
};
//# sourceMappingURL=wechatAPI.js.map