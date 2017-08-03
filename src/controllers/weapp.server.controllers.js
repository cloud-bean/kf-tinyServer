const request = require('superagent');
const config = require('../config/config');

function getUserInfo(req, res) {
  const data = req.body;
  const code = data.code;
  let unionid = '';
  request
  .get('https://api.weixin.qq.com/sns/jscode2session')
  .query({ appid: config.weappConfig.appid, secret: config.weappConfig.appsecret, js_code: code, grant_type: 'authorization_code' }) // query string
  .end(function(err, result){
    unionid = JSON.parse(result.text).unionid;
    console.log(unionid);
    authBaseServerByUnionId(unionid)
    .then((loginData)=>{
      const data = Object.assign({},loginData.body,unionid);
      res.json(data);
    })
    .catch(e => {
      console.log(e);
    });
  });

}

function authBaseServerByUnionId(unionid) {
    return new Promise((resolve, reject) => {
        request
            .post(config.baseServer.baseRoute + config.baseServer.weappAuthRoute)
            .send({
                providerData: {unionid},
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



module.exports = {
    // login,
    getUserInfo,

};
