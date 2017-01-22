webpackJsonp([2,0],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var a=n(99),s=o(a),i=n(518),c=o(i),r=n(534),d=o(r),u=n(533),l=o(u),v=n(529),f=o(v),p=n(526),m=o(p),_=n(531),x=o(_),h=n(525),k=o(h),b=n(528),g=o(b),y=n(530),T=o(y),M=n(532),w=o(M),j=n(527),O=o(j),E=n(524),C=o(E),N=n(156),L=o(N),I=n(178),S=n(535);n(158);s["default"].filter("dateFormat",I.dateFormat),s["default"].filter("dateFormat1",I.dateFormat1),s["default"].filter("level",I.level),s["default"].use(d["default"]),s["default"].use(l["default"]),s["default"].use(S),s["default"].directive("echarts",n(177));var D=new d["default"];D.map({"/":{component:k["default"]},"/timeline":{component:L["default"]},"/rank":{component:f["default"]},"/auth":{component:m["default"]},"/task":{component:x["default"]},"/signup":{component:T["default"]},"/profile":{component:g["default"]},"/taskDetail":{component:w["default"]},"/messageBoard":{component:O["default"]},"/taskComment":{component:C["default"]}}),D.start(s["default"].extend(c["default"]),"app")},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getJsConfig=t.getComments=t.leaveComment=t.taskDetail=t.signUp=t.friendLike=t.getRanks=t.getTaskList=t.getUserInfo=t.authLocal=t.auth=void 0;var a=n(200),s=o(a),i=n(201),c=o(i),r=n(39),d=o(r),u=n(489),l=(n(100),d["default"].server.bigServer),v=d["default"].server.midServer;t.auth=function(e,t,n){var o=e.dispatch;return new c["default"](function(e,a){u.get(v+"/admin/auth/").query({appid:t,code:n}).then(function(t){console.log("auth",t);var n=t.body.userid,a=t.body.accessToken;o("AUTH_CLIENT",n,a),e()})["catch"](function(e){a(e)})})},t.authLocal=function(e,t,n){var o=e.dispatch;o("AUTH_CLIENT",t,n)},t.getUserInfo=function(e,t){var n=e.dispatch,o=e.state;return new c["default"](function(e,a){u.get(l+"/users/"+t).set("Authorization","Bearer "+o.accessToken).then(function(t){console.log("user",t.body.data),n("GOT_USER",t.body.data),e()})["catch"](function(e){a(e)})})},t.getTaskList=function(e){var t=e.dispatch,n=e.state;return t("GET_STH_BACKEND"),new c["default"](function(e,o){u.get(l+"/tasks/").set("Authorization","Bearer "+n.accessToken).then(function(n){var o=n.body.data,a=o.filter(function(e){return!e.isDone});t("TASK_NOT_DONE",a.length),t("GOT_TASKS",o),e()})["catch"](function(e){o(e)})})},t.getRanks=function(e){var t=e.dispatch,n=e.state;return t("GET_STH_BACKEND"),new c["default"](function(e,o){u.get(l+"/ranks").set("Authorization","Bearer "+n.accessToken).then(function(o){var a=o.body.data;t("GOT_RANK",a),a.some(function(o,a){return o.userid===n.userid&&(t("GOT_MY_RANK",o,a+1),e(),!0)})})["catch"](function(e){o(e)})})},t.friendLike=function(e,t,n){var o=e.dispatch,a=e.state;if(!t.isUpVoted)return o("LIKE_FRIEND",n-1),new c["default"](function(e,n){u.post(l+"/upVotes").send({userId:t.userid}).set("Authorization","Bearer "+a.accessToken).then(function(t){e(t.body.data)})["catch"](function(e){n(e)})})},t.signUp=function(e,t,n,o){var a=e.dispatch,i=e.state,r=i.user,d=(0,s["default"])({},r.option,{phone:n},{slogan:o}),v=(0,s["default"])({},r,{option:d},{displayName:t});return console.log(v),new c["default"](function(e,t){u.put(l+"/users/"+r._id).send(v).set("Authorization","Bearer "+i.accessToken).then(function(t){a("SIGNUP_USER",v),e()})["catch"](function(e){t(e)})})},t.taskDetail=function(e,t){var n=e.dispatch,o=e.state,a=o.tasks,s=a[t];n("SET_ACTIVE_TASK",s)},t.leaveComment=function(e,t,n){var o=e.dispatch,a=e.state;o("GET_STH_BACKEND");var s=({displayName:a.user.displayName,profileImageURL:a.user.profileImageURL},{content:t});return new c["default"](function(e,t){u.post(l+"/tasks/"+n+"/commits").send(s).set("Authorization","Bearer "+a.accessToken).then(function(t){o("SET_TASK_COMMENT",t.data),e()})["catch"](function(e){t(e)})})},t.getComments=function(e,t){var n=e.dispatch,o=e.state;return n("CLEAR_TASK_COMMENTS"),new c["default"](function(e,a){u.get(l+"/tasks/"+t+"/commits").set("Authorization","Bearer "+o.accessToken).then(function(t){var o=t.body.data;n("GOT_TASK_COMMENTS",o),e()})["catch"](function(e){a(e)})})},t.getJsConfig=function(e,t){var n=e.dispatch;e.state;return n("GET_STH_BACKEND"),new c["default"](function(e,o){u.post(v+"/admin/jssdk/").send({url:t}).then(function(t){console.log(t.body),n("SET_JS_CONFIG",t.body),e()})["catch"](function(e){o(e)})})}},29:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n,o){var a=i["default"].route.weixin,s={appid:e,redirect_uri:t,response_type:"code",scope:o||"snsapi_base",state:n||""};return a+"?"+c.stringify(s)+"#wechat_redirect"}Object.defineProperty(t,"__esModule",{value:!0}),t.loader=void 0;var s=n(39),i=o(s),c=n(486);t.loader={show:function(){if(!$(".ball-beat")[0]){var e=document.body;$(e).append('<div class="loader-inner ball-beat"><div></div><div></div><div></div></div>')}},hide:function(){$(".ball-beat").remove()}};t["default"]={getAuthorizeURL:a}},39:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={appid:"wxf8e294c011cd47e1",server:{midServer:"http://sab4h63cag.proxy.qqbrowser.cc",bigServer:"http://120.25.227.156:7000/api/base"},route:{auth:"/admin",weixin:"https://open.weixin.qq.com/connect/oauth2/authorize",testRedirect:"http://localhost:8080?code=123"},secret:{accessToken:"47cfb6bfee3ce40490a9167533c9f39e7307ffb97463d11a62e723e3185860de",userid:"5817407d2a2d3adc2032290e"}}},51:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={fakeuser:{userid:"57f44a1674e8b8f5664c76c3",accessToken:"4307a0a134bc2471e47fb96ded140827295ae61932c19cda8d8f11f45eb4ee87"},user:{_id:"57f44a1674e8b8f5664c76c3",salt:"h0dw49cc9stoyjmkwevbva==",option:{phone:"15349216763",courses:[],ranklist:[],goldtoken:1400,level:18,exp:2e3},providerdata:{privilege:[],headimgurl:"http://wx.qlogo.cn/mmopen/piajxsqbraekqu4cx1pd3wojl9hnrlrigqn87runovowqrte1v3hqwntkfhde9vhjahamsziay1upibtrcxo2inicg/0",country:"china",province:"shaanxi",city:"xi an",language:"zh_cn",sex:1,nickname:"xinnix.designer.coder.loser",openid:"obspws96e0wy7zi63zozxjr1ap7w"},displayName:"辛昕",profileImageURL:"http://7xjhy3.com1.z0.glb.clouddn.com/Snip20161004_1.png",status:0,created:"2016-10-05t00:32:22.171z",roles:["user"],provider:"wechat",password:"55ad071lgsr5rvi2rdahqrqf85oi0qnpd+dwyiusy8dnrgpi/ccovc+yt+kesxqygxz50diixmaouf9k4fi9uq==",lastname:"",firstname:"",__v:0,roletype:"student"},task:[{_id:"57f65107a36ff5320351b187",course:"57ef82299f150a31c0465d83",type:"speak",subject:"练习单词发音",name:"二小班语音练习",courseIndex:"3",expireTime:"2016-10-09T03:55:00.000Z",created:"2016-10-06T13:26:31.687Z",goldToken:"30",experience:"100",difficult:"常规",isDone:!0,__v:0},{_id:"57f65107a36ff5320351b187",course:"57ef82299f150a31c0465d83",type:"read",subject:"文章读写",name:"二小班语音练习",courseIndex:"3",expireTime:"2016-10-09T03:55:00.000Z",created:"2016-10-06T13:26:31.687Z",goldToken:"30",experience:"100",difficult:"常规",isDone:!1,__v:0},{_id:"57f65107a36ff5320351b187",course:"57ef82299f150a31c0465d83",type:"write",subject:"短文写作",name:"二小班语音练习",courseIndex:"3",expireTime:"2016-10-09T03:55:00.000Z",created:"2016-10-06T13:26:31.687Z",goldToken:"30",experience:"100",difficult:"常规",isDone:!0,__v:0}]}},97:function(e,t,n){var o,a,s={};n(470),o=n(182),a=n(507),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},98:function(e,t,n){var o,a,s={};n(467),o=n(185),a=n(504),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},154:function(e,t,n){var o,a,s={};n(475),o=n(183),a=n(512),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},155:function(e,t,n){var o,a,s={};n(480),o=n(186),a=n(517),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},156:function(e,t,n){var o,a,s={};n(463),o=n(189),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},177:function(e,t,n){"use strict";var o=n(99),a=n(239);e.exports={deep:!0,params:["loading"],paramWatchers:{loading:function(e,t){var n=this;e===!0?n.instance.showLoading():n.instance.hideLoading()}},bind:function(){var e=this;o.nextTick(function(){e.instance=a.init(e.el),e.params.loading===!0&&e.instance.showLoading();var t=new Event("resize");e.resizeEventHandler=function(){e.instance.resize()},e.el.addEventListener("resize",e.resizeEventHandler,!1),window.onresize=function(){e.el.dispatchEvent(t)}})},update:function(e,t){var n=this,a=e;o.nextTick(function(){n.instance.setOption(a)})},unbind:function(){var e=this;e.instance.dispose(),e.el.removeEventListener("resize",e.resizeEventHandler,!1)}}},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(152);t.dateFormat=function(e){var t=(new Date(e),new Date,o(e).format("YYYY-MM-DD HH:mm"));return t},t.dateFormat1=function(e){var t=new Date(e),n=new Date,a=t-n>0?o(e).format("YYYY-MM-DD HH:mm"):"已过期";return a},t.level=function(e){var t=[50,100,200,350,550,800,1100,1450,1850,2300,2800,3350,3950,4600,5300,6050,6850,7700,8600,9550],n=t.length;for(var o in t)if(e<t[o])return Number(o)+1;return n}},179:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(99),s=o(a),i=n(536),c=o(i);s["default"].use(c["default"]);var r={user:{},tasks:[],taskNotDone:0,ranks:[],myRank:null,activeTask:{},activeComments:[],loading:!1,accessToken:"",userid:"",currentRoute:"",feedbacks:[],jsConfig:{}},d={AUTH_CLIENT:function(e,t,n){e.userid=t,e.accessToken=n},GET_STH_BACKEND:function(e){e.loading=!0},GOT_USER:function(e,t){e.user=t,e.loading=!1},SIGNUP_USER:function(e,t){e.user=t},GOT_TASKS:function(e,t){e.tasks=t,e.loading=!1},TASK_NOT_DONE:function(e,t){e.taskNotDone=t},GOT_RANK:function(e,t){e.ranks=t,e.loading=!1},GOT_MY_RANK:function(e,t,n){e.myRank={},e.myRank.content=t,e.myRank.index=n},LIKE_FRIEND:function(e,t){e.ranks[t].isUpVoted=!0,e.ranks[t].upCount++},SET_ACTIVE_TASK:function(e,t){e.activeTask=t,e.currentRoute="/taskDetail"},SET_TASK_COMMENT:function(e,t){e.activeComments.splice(0,0,t)},GOT_TASK_COMMENTS:function(e,t){e.activeComments=t},CLEAR_TASK_COMMENTS:function(e){e.activeComments=[]},SET_JS_CONFIG:function(e,t){e.jsConfig=t}};t["default"]=new c["default"].Store({state:r,mutations:d})},180:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(179),s=o(a);t["default"]={store:s["default"],data:function(){return{num:null}},vuex:{getters:{taskNotDone:function(e){return e.taskNotDone},user:function(e){return e.user}}},events:{tasknum:function(e){console.log(e),this.num=e}}}},181:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{expOptions:{}}},props:["type","data"],created:function(){this.expOptions={title:{text:"成绩曲线",textStyle:{fontSize:10}},tooltip:{},xAxis:{data:["1月","2月","3月","4月","5月"]},yAxis:{},series:[{name:"成绩",type:"line",data:[65,70,86,76,90],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]}}}},182:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{exp:"1000",rank:"5",ponit:"30"}}}},183:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(97),s=o(a),i=n(29),c=o(i);t["default"]={props:["user"],components:{Exp:s["default"]},methods:{level:function(e){var t=c["default"].getLevel(e);return console.log(t),t}}}},184:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["userList"],computed:{shortList:function(){return this.userList.slice(0,10)}}}},185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={vuex:{getters:{activeTask:function(e){return e.activeTask}}},props:["handleClick"],data:function(){return{comment:""}},methods:{leaveMessage:function(){var e=this;""===this.comment?$.alert("总还是要说点什么吧，科科"):this.comment.length>280?$.alert("话那么多，哼"):this.handleClick(this.comment,this.activeTask._id).then(function(){e.comment="",e.$router.go("/taskDetail")})}}}},186:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["data"]}},187:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(29),s=(o(a),n(24));t["default"]={props:["user","rankIndex"],data:function(){return{}},vuex:{actions:{friendLike:s.friendLike}}}},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(n(152),["语音","书写","测验","行为","市场"]),a=["speak","write","test","behavior","market"];t["default"]={props:["taskdata"],components:{},data:function(){return{logo:null,showM:!1,expire:!1}},created:function(){var e=o.indexOf(this.taskdata.type);this.logo=n(571)("./"+a[e]+".jpg");var t=new Date,s=new Date(this.taskdata.expireTime);this.expire=!(s-t>0)},methods:{show:function(){this.showM=!0}}}},189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},190:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{user:"咸蛋超人"}}}},191:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(98),s=o(a),i=n(24);t["default"]={components:{MessageInput:s["default"]},vuex:{actions:{leaveComment:i.leaveComment}}}},192:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(202),s=o(a),i=n(39),c=o(i),r=n(29),d=o(r),u=n(157),l=n(51),v=o(l),f=n(24),p=n(100),m=n(105),_=n(158);t["default"]={data:function(){return{mockdata:v["default"]}},components:{spinner:u.spinner},vuex:{getters:{loading:function(e){return e.loading},userid:function(e){return e.userid},user:function(e){return e.user},jsConfig:function(e){return e.jsConfig}},actions:{auth:f.auth,getUserInfo:f.getUserInfo,authLocal:f.authLocal,getJsConfig:f.getJsConfig}},ready:function(){var e=this,t=p("?"),n=p(),o=n.split("#")[0];m(s["default"].mark(function a(){var n,i;return s["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!t||!t.code){a.next=17;break}return $.showPreloader("\b加载中..."),n=c["default"].secret,a.next=7,e.auth(c["default"].appid,t.code);case 7:return a.next=9,e.getJsConfig(o);case 9:a.next=12;break;case 11:e.authLocal(n.userid,n.accessToken);case 12:return _.config(e.jsConfig),a.next=15,e.getUserInfo(e.userid).then(function(t){$.hidePreloader(),e.user.option.phone?e.$router.go("/task"):e.$router.go("/signup")})["catch"](function(e){console.log(e)});case 15:a.next=20;break;case 17:i=c["default"].route.testRedirect,i=d["default"].getAuthorizeURL(c["default"].appid,c["default"].server.midServer,"wechat","snsapi_userinfo"),window.location.href=i;case 20:a.next=25;break;case 22:a.prev=22,a.t0=a["catch"](0),console.log(a.t0);case 25:case"end":return a.stop()}},a,this,[[0,22]])}))},methods:{}}},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(100),n(105);t["default"]={data:function(){return{user:{}}},created:function(){this.user=localStorage.getItem("kf_userInfo")},methods:{}}},194:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(155),s=o(a),i=n(98),c=o(i),r=n(24);t["default"]={components:{MessageItem:s["default"],MessageInput:c["default"]},vuex:{getters:{feedbacks:function(e){return e.feedbacks}},actions:{getFeedbacks:r.getFeedbacks}},created:function(){},ready:function(){0==this.feedbacks.length&&($.showPreloader("加载中..."),this.getFeedbacks().then(function(e){$.hidePreloader()}))}}},195:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(154),s=o(a),i=n(97),c=o(i),r=n(519),d=o(r),u=n(39),l=(o(u),n(29)),v=(o(l),n(51)),f=o(v);t["default"]={data:function(){return{}},created:function(){this.user=f["default"].user},methods:{},components:{Info:s["default"],Expbar:c["default"],Chart:d["default"]}}},196:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(523),s=o(a),i=n(521),c=o(i),r=n(29),d=(o(r),n(24)),u=n(51);o(u);t["default"]={components:{vs:s["default"],rankItem:c["default"]},data:function(){return{}},vuex:{getters:{ranks:function(e){return e.ranks},myRank:function(e){return e.myRank}},actions:{getRanks:d.getRanks}},created:function(){},ready:function(){0==this.ranks.length&&($.showPreloader("加载中..."),this.getRanks().then(function(e){$.hidePreloader()})["catch"](function(e){console.log(e)}))}}},197:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(39),s=(o(a),n(29)),i=(o(s),n(24));t["default"]={data:function(){return{displayName:"",phone:"",slogan:""}},vuex:{actions:{signUp:i.signUp},getters:{user:function(e){return e.user}}},methods:{submit:function(e,t,n){var o=this;return this.$validation1.valid?void this.signUp(e,t,n).then(function(e){o.$router.go("/task")})["catch"](function(e){console.log(e)}):void $.alert("请完整填写信息")},cleanUp:function(){this.phone="",this.displayName=""}}}},198:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(522),s=o(a),i=n(51),c=(o(i),n(154)),r=o(c),d=n(97),u=o(d),l=n(156),v=o(l),f=n(29),p=(o(f),n(24)),m=n(157);t["default"]={components:{TaskItem:s["default"],Info:r["default"],Exp:u["default"],spinner:m.spinner,Timeline:v["default"]},data:function(){return{}},created:function(){},ready:function(){$.showPreloader("加载中..."),this.getTaskList().then(function(e){$.hidePreloader()})["catch"](function(e){console.log(e)})},methods:{handleClick:function(e){this.taskDetail(e),this.$router.go("/taskDetail")}},vuex:{getters:{user:function(e){return e.user},accessToken:function(e){return e.accessToken},tasks:function(e){return e.tasks}},actions:{getTaskList:p.getTaskList,taskDetail:p.taskDetail}}}},199:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(520),s=o(a),i=n(155),c=o(i),r=n(98),d=(o(r),n(24)),u=n(482).markdown;t["default"]={data:function(){return{}},components:{MessageItem:c["default"],HeadList:s["default"]},vuex:{getters:{task:function(e){return e.activeTask},comments:function(e){return e.activeComments}},actions:{getComments:d.getComments}},created:function(){this.getComments(this.task._id)},methods:{tansMarkdown:function(e){return u.toHTML(e)},handleComment:function(){this.$router.go("/taskComment")}}}},462:function(e,t){},463:function(e,t){},464:function(e,t){},465:function(e,t){},466:function(e,t){},467:function(e,t){},468:function(e,t){},469:function(e,t){},470:function(e,t){},471:function(e,t){},472:function(e,t){},473:function(e,t){},474:function(e,t){},475:function(e,t){},476:function(e,t){},477:function(e,t){},478:function(e,t){},479:function(e,t){},480:function(e,t){},492:function(e,t,n){e.exports=n.p+"static/img/behavior.d4dc31e.jpg"},493:function(e,t,n){e.exports=n.p+"static/img/market.e5f528b.jpg"},494:function(e,t,n){e.exports=n.p+"static/img/speak.3155cf4.jpg"},495:function(e,t,n){e.exports=n.p+"static/img/test.fc0eaa5.jpg"},496:function(e,t,n){e.exports=n.p+"static/img/write.5a52c92.jpg"},499:function(e,t){e.exports=' <nav class="bar bar-tab" v-if=user.option.phone> <a class=tab-item v-link="{ path: \'/task\', activeClass: \'active\', exact:true}" href=#> <span class="icon icon-app"></span> <span class=tab-label>任务</span> <span class=badge v-if=taskNotDone )>{{taskNotDone}}</span> </a> <a class=tab-item v-link="{ path: \'/rank\', activeClass: \'active\', exact:true}" href=#> <span class="icon icon-friends"></span> <span class=tab-label>排行</span> </a> </nav> <div class=content> <router-view></router-view> </div> '},500:function(e,t){e.exports=" <message-input :handle-click=leaveComment></message-input> "},501:function(e,t){e.exports=" "},502:function(e,t){e.exports=' <message-input></message-input> <div class=content-padded> <div v-for="feedback in feedbacks" class=message-item> <message-item :data=feedback></message-item> </div> </div> '},503:function(e,t){e.exports=' <info :user=user></info> <div class="content-block-title mytitle">任务列表</div> <div class=tasklist> <p v-if="tasks.length==0" class=no-task> 暂无任务 </p> <div v-for="task in tasks"> <task-item :taskdata=task v-on:click=handleClick($index)></task-item> </div> </div> '},504:function(e,t){e.exports=' <div class=input-area _v-0c6dbf3c=""> <div class="" _v-0c6dbf3c=""> 讨论区 </div> <textarea class=message-input v-model=comment _v-0c6dbf3c=""></textarea> <div class=row _v-0c6dbf3c=""> <button v-on:click=leaveMessage class="button button-fill button-success leave-message-button" _v-0c6dbf3c="">留言</button> </div> </div> '},505:function(e,t){e.exports=' <div class="card info-card" _v-0dba5ffe=""> <div class=card-content _v-0dba5ffe=""> <div class=card-content-inner _v-0dba5ffe=""> <div class=info _v-0dba5ffe=""> <info :user=user _v-0dba5ffe=""></info> </div> </div> </div> </div> <div class=card _v-0dba5ffe=""> <div class=card-content _v-0dba5ffe=""> <div class=info _v-0dba5ffe=""> <chart _v-0dba5ffe=""></chart> </div> </div> </div> '},506:function(e,t){e.exports=' <div class="card facebook-card" _v-16c4db18=""> <div class="card-header no-border" _v-16c4db18=""> <div class=row _v-16c4db18=""> <div class=col-50 _v-16c4db18=""> <div class=facebook-avatar _v-16c4db18=""><img :src=user.profileImageURL class=headimg _v-16c4db18=""></div> <div class="facebook-name name" _v-16c4db18="">{{user.displayName}}</div> <div class="facebook-date rank-index" _v-16c4db18="">第{{rankIndex}}名</div> </div> <div class=col-50 _v-16c4db18=""> <div class="row detail" _v-16c4db18=""> <div class="col-70 pull-right" _v-16c4db18=""> <div class=exp _v-16c4db18=""> {{user.exp}} </div> </div> <div class="col-30 like" _v-16c4db18=""> <div class=likenum _v-16c4db18=""> {{user.upCount}} </div> <div class=linkicon v-on:click="friendLike(user, rankIndex)" _v-16c4db18=""> <i class="fa fa-heart fa-lg" v-bind:class={active:user.isUpVoted,inactive:!user.isUpVoted} _v-16c4db18=""></i> </div> </div> </div> </div> </div> </div> </div> '},507:function(e,t){e.exports=' <div class=col-md-12 _v-2819d162=""> <div class=progress _v-2819d162=""> <div class=progress-bar role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style="width: 60%" _v-2819d162="">60%</div> </div> </div> '},508:function(e,t){e.exports=' <div class="card facebook-card" v-bind:class={mask:expire} _v-28d1491e=""> <div class="card-header no-border" _v-28d1491e=""> <div class=facebook-avatar _v-28d1491e=""><img :src=logo width=40 height=40 _v-28d1491e=""></div> <div class=facebook-name _v-28d1491e="">{{taskdata.name}}</div> <div class=facebook-date _v-28d1491e="">{{taskdata.expireTime | dateFormat1}}</div> </div> <div class=card-footer _v-28d1491e=""> <span _v-28d1491e="">难度:{{taskdata.difficult}}</span> <span _v-28d1491e="">经验:{{taskdata.exp}}</span> <span _v-28d1491e="">金币:{{taskdata.goldToken}}</span> <span v-if=taskdata.isDone _v-28d1491e="">完成</span> <span style=color:red v-else="" _v-28d1491e="">未完成</span> </div> </div> '},509:function(e,t){e.exports=' <header class="bar bar-nav" _v-4d53885a=""> <h1 class=title _v-4d53885a="">补充你的信息</h1> </header> <validator name=validation1 _v-4d53885a=""> <div class=content novalidate="" _v-4d53885a=""> <div class=headimg _v-4d53885a=""> <img :src=user.profileImageURL alt="" class=avatar _v-4d53885a=""> <p _v-4d53885a=""> <span class=name _v-4d53885a="">{{displayName}}</span> </p> </div> <div class=list-block _v-4d53885a=""> <ul _v-4d53885a=""> <li _v-4d53885a=""> <div class=item-content _v-4d53885a=""> <div class=item-media _v-4d53885a=""><i class="icon icon-form-name" _v-4d53885a=""></i></div> <div class=item-inner _v-4d53885a=""> <div class="item-title label" for=displayName _v-4d53885a="">姓名</div> <div class=item-input _v-4d53885a=""> <input id=displayName type=text placeholder="" v-model=displayName v-validate:displayname="[\'required\']" _v-4d53885a=""> </div> </div> </div> </li> <li _v-4d53885a=""> <div class=item-content _v-4d53885a=""> <div class=item-media _v-4d53885a=""><i class="icon icon-form-email" _v-4d53885a=""></i></div> <div class=item-inner _v-4d53885a=""> <div class="item-title label" for=phone _v-4d53885a="">手机</div> <div class=item-input _v-4d53885a=""> <input id=phone type=text placeholder="" v-model=phone v-validate:phone="[\'required\']" _v-4d53885a=""> </div> </div> </div> </li> <li _v-4d53885a=""> <div class=item-content _v-4d53885a=""> <div class=item-media _v-4d53885a=""><i class="icon icon-form-name" _v-4d53885a=""></i></div> <div class=item-inner _v-4d53885a=""> <div class="item-title label" _v-4d53885a="">座右铭</div> <div class=item-input for=phone _v-4d53885a=""> <input type=text placeholder="" v-model=slogan _v-4d53885a=""> </div> </div> </div> </li> </ul> </div> <div class=content-block _v-4d53885a=""> <div class=row _v-4d53885a=""> <div class=col-50 _v-4d53885a=""><a class="button button-big button-fill button-danger" v-on:click=cleanUp _v-4d53885a="">重填</a></div> <div class=col-50 _v-4d53885a=""><a class="button button-big button-fill button-success" v-on:click="submit(displayName, phone, slogan)" _v-4d53885a="">提交</a></div> </div> </div> </div> </validator> '},510:function(e,t){e.exports=' <div v-echarts=expOptions class=echart _v-5148a716=""> </div> '},511:function(e,t){e.exports=' <div _v-6a845e04=""> <p _v-6a845e04="">login page. in the route /auth</p> user: {{user.displayName}} <div _v-6a845e04=""> </div> </div>'},512:function(e,t){e.exports=' <div class="content-block-title mytitle" _v-6c390ce7="">基本信息</div> <div class=card _v-6c390ce7=""> <div class=card-content _v-6c390ce7=""> <div class="list-block media-list" _v-6c390ce7=""> <ul _v-6c390ce7=""> <li class=item-content _v-6c390ce7=""> <div class=item-media _v-6c390ce7=""> <div class=headimg _v-6c390ce7=""> <img :src=user.profileImageURL height=44 _v-6c390ce7=""> </div> </div> <div class=item-inner _v-6c390ce7=""> <div class=item-title-row _v-6c390ce7=""> <div class=item-title _v-6c390ce7="">{{user.displayName}}</div> </div> <div class=item-subtitle _v-6c390ce7="">{{user.option.slogan || \'Learning with joy, achieving with will.\'}}</div> </div> </li> </ul> </div> </div> <div class="card-footer info" _v-6c390ce7=""> <div class=detail _v-6c390ce7=""> <div class=row _v-6c390ce7=""> <div class=col-33 _v-6c390ce7=""> <div class=detailInfo _v-6c390ce7=""> <div _v-6c390ce7="">经验</div> <div _v-6c390ce7="">{{user.option.exp}}</div> </div> </div> <div class=col-33 _v-6c390ce7=""> <div class=detailInfo _v-6c390ce7=""> <div _v-6c390ce7="">悦币</div> <div _v-6c390ce7="">{{user.option.goldToken}}</div> </div> </div> <div class=col-33 _v-6c390ce7=""> <div class=detailInfo _v-6c390ce7=""> <div _v-6c390ce7="">等级</div> <div _v-6c390ce7="">{{user.option.exp | level}}</div> </div> </div> </div> </div> </div> </div> '},513:function(e,t){e.exports=' <div class=content _v-70788471=""> <div class="card demo-card-header-pic" _v-70788471=""> <div valign=bottom class="card-header color-white no-border no-padding" _v-70788471=""> <div class=image-wrapper _v-70788471=""> <img class=card-cover :src=task.titleImage.URL style=height:8rem alt="" _v-70788471=""> <div class=image-content _v-70788471=""> <span class=task-title _v-70788471="">{{task.name}}</span> </div> </div> </div> <div class=card-content _v-70788471=""> <div class=card-content-inner _v-70788471=""> <ul _v-70788471=""> <li _v-70788471="">发布 {{task.created | dateFormat}}</li> <li _v-70788471="">过期 {{task.expireTime | dateFormat}}</li> <li _v-70788471="">类型 {{task.type}}</li> </ul> <div class=desc _v-70788471=""> <h1 class=grey _v-70788471="">任务详情:</h1> {{{tansMarkdown(task.description)}}} </div> <p _v-70788471=""><a v-on:click=handleComment class=button _v-70788471="">讨论任务</a></p> </div> </div> <div class=card-footer _v-70788471=""> <head-list :user-list=task.taskDoneUsers _v-70788471=""></head-list> </div> </div> <div v-for="comment in comments" class=message-item _v-70788471=""> <message-item :data=comment _v-70788471=""></message-item> </div> </div> '},514:function(e,t){e.exports=' <rank-item :user=myRank.content :rank-index=myRank.index _v-7b602bc5=""></rank-item> <div class=card _v-7b602bc5=""> <div class=card-header _v-7b602bc5="">排行榜</div> <div class=card-content _v-7b602bc5=""> <div v-for="rank in ranks" class=rank-list _v-7b602bc5=""> <rank-item :user=rank :rank-index=$index+1 class=rank-item _v-7b602bc5=""></rank-item> </div> </div> </div> '},515:function(e,t){e.exports=' <div class=vs _v-9440db94=""> {{user}} vs {{user}} </div> '},516:function(e,t){e.exports=' <ul _v-9c5a3e52=""> <li v-for="user in shortList" _v-9c5a3e52=""> <img :src=user.profileImageURL alt="" _v-9c5a3e52=""> </li> </ul> {{userList.length}}人完成任务 <div class=clearfix _v-9c5a3e52=""> </div> '},517:function(e,t){e.exports=' <div class=content-padded _v-c3d7c1de=""> <div class=row _v-c3d7c1de=""> <div class=col-15 _v-c3d7c1de=""> <img :src=data.user.profileImageURL class=userhead alt="" _v-c3d7c1de=""> </div> <div class=col-85 _v-c3d7c1de=""> <div class=username _v-c3d7c1de=""> {{data.user.displayName}} <span class=time _v-c3d7c1de="">@ {{data.created | dateFormat}}</span> </div> <div class=message _v-c3d7c1de=""> {{data.content}} </div> </div> </div> </div> '},518:function(e,t,n){var o,a,s={};n(462),o=n(180),a=n(499),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},519:function(e,t,n){var o,a,s={};n(473),o=n(181),a=n(510),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},520:function(e,t,n){var o,a,s={};n(479),o=n(184),a=n(516),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},521:function(e,t,n){var o,a,s={};n(469),o=n(187),a=n(506),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;
a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},522:function(e,t,n){var o,a,s={};n(471),o=n(188),a=n(508),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},523:function(e,t,n){var o,a,s={};n(478),o=n(190),a=n(515),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},524:function(e,t,n){var o,a,s={};n(464),o=n(191),a=n(500),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},525:function(e,t,n){var o,a,s={};o=n(192),a=n(501),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},526:function(e,t,n){var o,a,s={};n(474),o=n(193),a=n(511),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},527:function(e,t,n){var o,a,s={};n(465),o=n(194),a=n(502),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},528:function(e,t,n){var o,a,s={};n(468),o=n(195),a=n(505),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},529:function(e,t,n){var o,a,s={};n(477),o=n(196),a=n(514),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},530:function(e,t,n){var o,a,s={};n(472),o=n(197),a=n(509),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},531:function(e,t,n){var o,a,s={};n(466),o=n(198),a=n(503),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},532:function(e,t,n){var o,a,s={};n(476),o=n(199),a=n(513),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var t=s[e];i.computed[e]=function(){return t}})},571:function(e,t,n){function o(e){return n(a(e))}function a(e){return s[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var s={"./behavior.jpg":492,"./market.jpg":493,"./speak.jpg":494,"./test.jpg":495,"./write.jpg":496};o.keys=function(){return Object.keys(s)},o.resolve=a,e.exports=o,o.id=571}});