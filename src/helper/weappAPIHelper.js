const request = require('superagent');
const webapi = require('../config/wechatAPI').webapi;

export default class WeappAPI {
  constructor(appid, appSecret) {
    this.appid = appid;
    this.appSecret = appSecret;
    this.accessToken = '';
    that.expireTime = '';
  }
  getAccessToken(){
    const that = this;
    const url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&'+`appid=${this.appid}&secret=${this.this.appSecret}`;
    request
    .get(url)
    .then((res) => {
      console.log(res);
      that.accessToken = res.body.access_token;
      that.expireTime = (new Date().getTime()) + (res.body.expires_in - 10) * 1000;
    })
    .catch((err) => {
      console.log();
    });
  }
  isAccessTokenValid(){
    return !!this.accessToken && (new Date().getTime()) < this.expireTime;
  }
  preRequest(){
    if(!this.isAccessTokenValid()){
      return this.getAccessToken();
    } else {
      return;
    }
  }
  sendTemplate(toUser, templeteId, page, formId, templeteData){
    const that = this;
      return this.preRequest()
      .then(()=>{
        const url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${that.accessToken}`;
        const sendData = {
          touser: toUser,
          template_id: templeteId,
          page: page,
          form_id: formId,
          data: templeteData,
        }
        request
        .post(url)
        .send(sendData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      });
  }

}
