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
      appid: 'wx33e50555f1202083', // update at 2019-10-22
      secret: '3aeb57e9e4375fc65e618dadbe751f98'
    },
    joyTeacher: {
      appid: '',
      secret: ''
    }
  },
  logic: {
    delayTime: 10000
  }
}
