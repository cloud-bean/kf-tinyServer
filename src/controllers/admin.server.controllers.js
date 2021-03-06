// const getErrorMessage = require('./core/errors.server.controllers').getErrorMessage;


// const path = require('path');
const webapi = require('../config/wechatAPI').webapi;
const request = require('superagent');
const config = require('../config/config');
const api = require('../config/wechatAPI').api;
// const fs = require('fs');
const co = require('co');
// const userHelper = require('../helper/userHelper.server');

function index(req, res) {
    res.send('hello world');
}

// function login(req, res) {
//   co(function *(){
//     try {
//       const username = req.body.username;
//       const password = req.body.password;
//       const token = yield authBaseServer(username,password);
//       res.send(token.body);
//     } catch (err) {
//       console.log(err);
//     }
//   });
// }
// function signUp(req, res) {
//   const accessToken = req.body.access_token;
//   const userId = req.body.user_id;
//   const user
//
// }
// function updateUserInfo(userid, accessToken, userInfo) {
//   request
//     .put(`${config.baseServer.baseRoute}api/base/users/${userid}`)
//     .send(userInfo)
//     .set('Authorization', `Bearer ${accessToken}`)
//     .then(result => {
//       resolve(result.data);
//     })
//     .catch(err => {
//       reject(err);
//     });
// }

function getUserOpenIdByWeb(code) {
    return new Promise((resolve, reject) => {
        webapi.getAccessToken(code, (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            }else if(result.data){
              console.log('result.data',result.data);
              resolve(result.data.openid);
            } else {
              console.log('no result data',result);
              reject('err');
            }
            // var accessToken = result.data.access_token;
            // var openid = result.data.openid;
        });
    });
}

// 当接收到用户发来的消息时，判断数据库中是否有用户信息，若无，则根据openid从微信服务器获取
function getUserInfoByOpenId(openid) {
    return new Promise((resolve, reject) => {
        webapi.getUser(openid, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

function authBaseServer(user) {
    return new Promise((resolve, reject) => {
        request
            .post(config.baseServer.baseRoute + config.baseServer.authRoute)
            .send({
                providerData: user,
                client_id: 'kf-app',
                client_secret: 'prometheus',
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

function auth(req, res) {
    co(function*() {
        try {
            const openid = yield getUserOpenIdByWeb(req.query.code);
            const user = yield getUserInfoByOpenId(openid);
            const unionid = user.unionid;
            const result = yield authBaseServer(user);
            const accessToken = result.body.data.access_token;
            const userid = result.body.data.user_id;
            // yield updateUserInfo(userid, accessToken, newuser);
            res.json({ accessToken, userid, unionid });
        } catch (err) {
            console.log(err);
        }
    });
}

function authLocal(req, res) {
    co(function*() {
        try {
            const user = { openid: req.query.openid };
            const result = yield authBaseServer(user);
            res.json({ accessToken: result.body.data.access_token, userid: result.body.data.user_id, unionid:'1232' });
        } catch (err) {
            console.log(err);
        }
    });
}

function getJssdkConfig(req, res) {
    const url = req.body.url;
    var param = {
        debug: false,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'startRecord', 'stopRecord', 'getLocalImgData', 'playVoice', 'uploadVoice', 'onVoicePlayEnd', 'onVoiceRecordEnd', 'downloadVoice'],
        url,
    };

    api.getJsConfig(param, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('js_ticket:', result);
            res.send(result);
        }
    });
}

function sendTemplate(req, res) {
    var content = req.body;
    console.log('templete content', content);
    api.sendTemplate(content.openId, content.templateId, content.url, content.data, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
}

function uploadImage2Qn(req, res) {
    var media_id = req.body.media_id;
    api.getMedia(media_id, (err, result, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send(result);
        }
    });

}

module.exports = {
    // login,
    auth,
    index,
    getJssdkConfig,
    sendTemplate,
    uploadImage2Qn,
    authLocal,
    // signUp,
};
