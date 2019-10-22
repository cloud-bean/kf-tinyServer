const request = require('superagent')
const config = require('../config/config')
// const weappApi = require('../config/wechatAPI').weappApi;

function getUserInfo(req, res) {
  const data = req.body
  const code = data.code
  const appName = data.appName
  const { appid, secret } = config.weappConfig[appName]
  console.log('appName, appid, secret', appName, appid, secret)
  request
    .get('https://api.weixin.qq.com/sns/jscode2session')
    .query({ appid, secret, js_code: code, grant_type: 'authorization_code' }) // query string
    .end(function(err, result) {
      console.log(err, result.text)
      const unionid = JSON.parse(result.text).unionid
      const openid = JSON.parse(result.text).openid

      authBaseServerByUnionId(unionid, openid)
        .then(loginData => {
          const data = Object.assign(
            {},
            loginData.body,
            { unionid },
            { openid }
          )
          res.json(data)
        })
        .catch(e => {
          console.log(e)
        })
    })
}

function authBaseServerByUnionId(unionid, openid) {
  return new Promise((resolve, reject) => {
    request
      .post(config.baseServer.baseRoute + config.baseServer.weappAuthRoute)
      .send({
        providerData: { unionid, openid },
        client_id: 'kf-app',
        client_secret: 'prometheus',
        grant_type: 'password'
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function authBaseServerByOpenId(openid) {
  return new Promise((resolve, reject) => {
    request
      .post(config.baseServer.baseRoute + config.baseServer.weappAuthRoute)
      .send({
        providerData: { openid },
        client_id: 'kf-app',
        client_secret: 'prometheus',
        grant_type: 'password'
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

function sendTemplate(req, res) {
  // var content = req.body;
  // console.log('templete content', content);
  // weappApi
  // .sendTemplate(content.openId, content.templateId, content.url, content.formId, content.data)
  // .then((data)=>{
  //   res.send(data);
  // })
  // .error((err)=>{
  //   res.send(err);
  // })
}

module.exports = {
  // login,
  getUserInfo
  // sendTemplate
}
