const getErrorMessage = require('./core/errors.server.controllers').getErrorMessage;


const path = require('path');
const wechatAPI = require('../config/wechatAPI').api;
const webapi = require('../config/wechatAPI').webapi;
const request = require('superagent');
const config = require('../config/config');

const fs = require('fs');
const co = require('co');
const userHelper = require('../helper/userHelper.server');

function login(req, res) {
  co(function *(){
    try {
      const username = req.body.username;
      const password = req.body.password;
      const token = yield authBaseServer(username,password);
      console.log(token.body);
      res.send(token.body);
    } catch (err) {
      console.log(err);
    }
  });
}

function wehcat(req, res) {
  co(function * () {
    try {
      const openid = yield getUserOpenIdByWeb(req.query.code);
      const user = yield getUserInfoByOpenId(openid);
      res.json({user });
    } catch (err) {
      console.log(err);
    }
  });
}
function getUserOpenIdByWeb(code) {
  return new Promise((resolve, reject) => {
    webapi.getAccessToken(code, (err, result) => {
      if (err) reject(err);
      resolve(result.data.openid);
      // var accessToken = result.data.access_token;
      // var openid = result.data.openid;
    });
  });
}
// 当接收到用户发来的消息时，判断数据库中是否有用户信息，若无，则根据openid从微信服务器获取
function getUserInfoByOpenId(openid) {
  return new Promise((resolve, reject) => {
    // 从大后端查询openid
    
    // User.find({ openid }).exec()
    // .then((users) => {
    //   if (users.length === 0) {
    //     wechatAPI.getUser(openid, (err, userInfo) => {
    //       const user = new User(userInfo);
    //       user.save(err1 => {
    //         if (err1) reject(err1);
    //         resolve(user);
    //       });
    //     });
    //   } else {
    //     resolve(users[0]);
    //   }
    // })
    // .catch(err => {
    //   reject(err);
    // });
  });
}

function authBaseServer(username,password) {
  return new Promise((resolve, reject) => {
    request
    .post(config.baseServer.baseRoute+config.baseServer.authRoute)
    .send({
        username,
        password,
        client_id: "kf-app",
        client_secret: "prometheus",
        grant_type: 'password',
    })
    .then((res) => {
      resolve(res);
    }) 
    .catch((err) => {
      reject(err);
    });
  });
}
// function materialList(req, res) {
//   Material.find({})
//   .sort('-created')
//   .exec((err, materials) => {
//     if (err) {
//       res.status(400).send({
//         message: getErrorMessage(err),
//       });
//     } else {
//       res.render('./material/material-list', { materials });
//     }
//   });
// }

// function materialDel(req, res) {
//   const materialId = req.query.material_id;
//   const materialMediaId = req.query.material_mediaid;
//   wechatAPI.removeMaterial(materialMediaId, (err) => {
//     if (err) console.log(err);
//     Material.remove({ _id: materialId }, (err1) => {
//       if (err1) {
//         res.status(400).send({
//           message: getErrorMessage(err),
//         });
//       } else {
//         res.redirect('/admin/material');
//       }
//     });
//   });
// }

// function getUserOpenIdByWeb(code) {
//   return new Promise((resolve, reject) => {
//     webapi.getAccessToken(code, (err, result) => {
//       if (err) reject(err);
//       resolve(result.data.openid);
//       // var accessToken = result.data.access_token;
//       // var openid = result.data.openid;
//     });
//   });
// }


// function ranklist(req, res) {
//   co(function * () {
//     try {
//       const users = yield userHelper.getAllUserRank();
//       res.jsonp({ users });
//     } catch (err) {
//       console.log(err);
//     }
//   });
// }

// function rankRender(req, res) {
//   co(function * () {
//     try {
//       const openid = yield getUserOpenIdByWeb(req.query.code);
//       const user = yield userHelper.getUserInfoByOpenId(openid);
//       const rank = yield userHelper.getAllUserRank();
//       res.render('./rank', { rank, user });
//     } catch (err) {
//       console.log(err);
//     }
//   });
// }

// function materialRender(req, res) {
//   res.render('./material/material-add');
// }

// function cardAdd(req, res) {
//   const card = new Card(req.body);
//   card.filepath = req.files.card.path;
//   card.filename = path.basename(card.filepath);
//   card.save((err1) => {
//     if (err1) {
//       res.status(400).send({
//         message: getErrorMessage(err1),
//       });
//     } else {
//       res.redirect('/admin/card');
//     }
//   });
// }



module.exports = {
  login,
};