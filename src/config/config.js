module.exports = {
  port: process.env.KEEP_PORT || 5555,
  // db: process.env.KEEP_DB_URI || 'mongodb://localhost/keepreading',
  baseServer: {
    baseRoute: 'http://127.0.0.1:7000/',
    authRoute: 'oauth/wechat/token',
    weappAuthRoute: 'oauth/wepy/token',
    userRoute: 'api/base/users/'
  },
  oauth: {
    client_id: 'kf-app',
    client_secret: 'prometheus',
    grant_type: 'password'
  },
  wechatConfig: {
    token: 'helloworld',
    appid: 'wx9d399e46dcb4c0f9',
    appsecret: '5c4c6fcc78e3cd77d3260340cd9b88a4',
    // appid_test: 'wxf8e294c011cd47e1',
    // appsecret_test: '729b99cfef8f39ec492f4fbaf3576b72',
    encodingAESKey: 'unEIGGPCrjm6kTWRUwn00t8dzcKTttTF3qCPAq6VyTd'
  },
  weappConfig: {
    joyBox: {
      appid: 'wx9de05118307b2e44',
      secret: '034d0167fc7af96e06c76cc54aeeba62'
    },
    joyTeacher: {
      appid: 'wx6580d634dd0be91f',
      secret: 'e534017964bbf60f4bf4975bc0589038'
    }
  },
  logic: {
    delayTime: 10000
  }
}
