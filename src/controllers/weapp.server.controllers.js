const request = require('superagent');
const config = require('../config/config');

function getUserInfo(req, res) {
  // const data = req.body;
  // const code = data.code;
  //
  // request
  // .get('https://api.weixin.qq.com/sns/jscode2session')
  // .query({ appid: config.weappConfig.appid, secret: config.weappConfig.appsecret, js_code: code, grant_type: 'authorization_code' }) // query string
  // .end(function(err, res){
  //   console.log(JSON.parse(res.text));
  // });
  authBaseServerByUnionId('omwUO0bile606OlZO2MS-rdIC7bw')
  .then((loginData)=>{
    console.log(loginData.body);
    res.json(loginData.body);
  })
  .catch(e => {
    console.log(e);
  });
}

function authBaseServerByUnionId(unionId) {
    return new Promise((resolve, reject) => {
        request
            .post(config.baseServer.baseRoute + config.baseServer.weappAuthRoute)
            .send({
                providerData: {unionId},
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
