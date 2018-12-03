module.exports = {
  port: process.env.KEEP_PORT || 3000,
  // db: process.env.KEEP_DB_URI || 'mongodb://localhost/keepreading',
  baseServer:{
    baseRoute:'http://120.25.227.156:7000/',
    authRoute:"oauth/wechat/token",
    weappAuthRoute:"oauth/wepy/token",
    userRoute:"api/base/users/",
  },
  oauth:{
    client_id: "kf-app",
    client_secret: "prometheus",
    grant_type: 'password',
  },
  wechatConfig: {
    token: 'helloworld',
    appid: 'wxb3762a929cf9e070',
    appsecret: '0a607b7dc2ff4fa027b8594a99f9e086',
    appid_test: 'wxf8e294c011cd47e1',
    appsecret_test: '729b99cfef8f39ec492f4fbaf3576b72',
    encodingAESKey: 'e4miuSxQNBIAFYuyi5ky0m1R79oV950ijnjKOtPSXYG',
  },
  weappConfig: [
    {
      name: 'joyBox',
      appid: 'wx9de05118307b2e44',
      appsecret: '034d0167fc7af96e06c76cc54aeeba62',
    },
    {
      name: 'joyTeacher',
      appid: 'wx6580d634dd0be91f',
      appsecret: 'e534017964bbf60f4bf4975bc0589038',
    }
  ],
  logic: {
    delayTime: 10000,
  },
};
// db: 'mongodb://lightclass:lightclass@120.25.227.156:29017/lightclass',
