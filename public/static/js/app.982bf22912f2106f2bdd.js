webpackJsonp([2,0],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var a=n(143),s=o(a),r=n(445),i=o(r),c=n(452),u=o(c),d=n(451),p=o(d),l=n(449),f=o(l),v=n(448),b=o(v),h=n(450),x=o(h),_=n(447),m=o(_);s["default"].use(u["default"]),s["default"].use(p["default"]),s["default"].directive("echarts",n(165));var g=new u["default"];g.map({"/":{component:m["default"]},"/rank":{component:f["default"]},"/auth":{component:b["default"]},"/signup":{component:x["default"]}}),g.start(i["default"],"app")},163:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={appid:"wxb3762a929cf9e070",appsecret:"0a607b7dc2ff4fa027b8594a99f9e086"}},164:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n,o){var a="https://open.weixin.qq.com/connect/oauth2/authorize",s={appid:e,redirect_uri:t,response_type:"code",scope:o||"snsapi_base",state:n||""};return a+"?"+l.stringify(s)+"#wechat_redirect"}function s(e,t){localStorage.setItem("kf_accessToken",e),localStorage.setItem("kf_user",(0,p["default"])(t))}function r(e,t){var n=this;return new u["default"](function(o,a){n.$http.get("http://joywill.cc/admin/auth?appid="+e+"&code="+t).then(function(e){console.log(e);var t=e.userid,n=e.accessToken;o({userid:t,accessToken:n})})["catch"](function(e){a(e)})})}function i(e,t){var n=this;return new u["default"](function(o,a){n.$http.get("http://120.25.227.156:7000/api/base/users/"+e,{withCredentials:!0,headers:{Authorization:"Bearer "+t}}).then(function(e){console.log(e),o(e.data)})["catch"](function(e){a(e)})})}Object.defineProperty(t,"__esModule",{value:!0});var c=n(95),u=o(c),d=n(94),p=o(d),l=n(436);t["default"]={getAuthorizeURL:a,storeUserInfo:s,auth:r,getUserInfo:i}},165:function(e,t,n){"use strict";var o=n(143),a=n(206);e.exports={deep:!0,params:["loading"],paramWatchers:{loading:function(e,t){var n=this;e===!0?n.instance.showLoading():n.instance.hideLoading()}},bind:function(){var e=this;o.nextTick(function(){e.instance=a.init(e.el),e.params.loading===!0&&e.instance.showLoading();var t=new Event("resize");e.resizeEventHandler=function(){e.instance.resize()},e.el.addEventListener("resize",e.resizeEventHandler,!1),window.onresize=function(){e.el.dispatchEvent(t)}})},update:function(e,t){var n=this,a=e;o.nextTick(function(){n.instance.setOption(a)})},unbind:function(){var e=this;e.instance.dispose(),e.el.removeEventListener("resize",e.resizeEventHandler,!1)}}},166:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{user:"咸蛋超人"}}}},167:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(95),s=o(a),r=n(171),i=o(r),c=n(94),u=o(c),d=n(163),p=o(d),l=n(164),f=o(l),v=n(144),b=n(96);t["default"]={data:function(){return{}},created:function(){var e=this;b(i["default"].mark(function t(){var n,o,a,s;return i["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=v("?"),!localStorage.getItem("kf_accessToken")){t.next=6;break}e.$router.go("/auth?state=user"),t.next=24;break;case 6:if(!n||!n.code){t.next=21;break}return console.log("code"),t.next=10,e.auth(p["default"].appid,n.code);case 10:return o=t.sent,console.log("res",o),localStorage.setItem("kf_accessToken",o.accessToken),t.next=15,e.getUserInfo(o.userid);case 15:a=t.sent,console.log("userInfo",a),localStorage.setItem("kf_userInfo",(0,u["default"])(a)),e.$router.go("/auth?state=user"),t.next=24;break;case 21:s=f["default"].getAuthorizeURL(p["default"].appid,"http://joywill.cc/","wechat","snsapi_userinfo"),console.log(s),window.location.href=s;case 24:t.next=29;break;case 26:t.prev=26,t.t0=t["catch"](0),console.log(t.t0);case 29:case"end":return t.stop()}},t,this,[[0,26]])}))},methods:{auth:function(e,t){var n=this;return new s["default"](function(o,a){n.$http.get("http://joywill.cc/admin/auth?appid="+e+"&code="+t).then(function(e){console.log(e);var t=e.body.userid,n=e.body.accessToken;o({userid:t,accessToken:n})})["catch"](function(e){a(e)})})},getUserInfo:function(e,t){var n=this;return new s["default"](function(o,a){n.$http.get("http://120.25.227.156:7000/api/base/users/"+e,{withCredentials:!0,headers:{Authorization:"Bearer "+t}}).then(function(e){console.log(e),o(e.body.data)})["catch"](function(e){a(e)})})}}}},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(144),n(96);t["default"]={data:function(){return{user:{}}},created:function(){this.user=localStorage.getItem("kf_userInfo")},methods:{}}},169:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(446),s=o(a);t["default"]={components:{vs:s["default"]},data:function(){return{users:[{nickname:"辛那克斯",keepdays:1,cont_keepdays:2,level:1,score:200,city:"xian",headimgurl:"http://cloudbean.qiniudn.com/hbg2-100x81-logo.png"},{nickname:"辛那克斯2",keepdays:1,cont_keepdays:2,level:1,score:200,city:"xian",headimgurl:"http://cloudbean.qiniudn.com/hbg2-100x81-logo.png"}]}}}},170:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{}},methods:{}}},429:function(e,t){},430:function(e,t){},431:function(e,t){},432:function(e,t){},433:function(e,t){},439:function(e,t){e.exports=' <div id=app class=container> <nav class="navbar navbar-fixed-bottom navbar-light bg-faded"> <a class=navbar-brand href=#>Joy & Will</a> <a class="btn btn-default" v-link="{ path: \'/auth\'}">Profile</a> <a class="btn btn-default" v-link="{ path: \'/rank\'}">Rank</a> <a class="btn btn-default" v-link="{ path: \'/signup\'}">Signup</a> </nav> <div id=routerDiv> <router-view></router-view> </div> </div> '},440:function(e,t){e.exports=" loading.... "},441:function(e,t){e.exports=' <div class=login _v-4d53885a=""> <img src=xxxHTMLLINKxxx0.096995762510104330.9288606393703989xxx alt=headpic _v-4d53885a=""> <span class=info _v-4d53885a="">姓名</span> <input type=text placeholder=真实姓名 v-model=username _v-4d53885a=""> <input type=text placeholder=手机号 v-model=password _v-4d53885a=""> <button class="btn btn-default" v-on:click=login _v-4d53885a="">login</button> </div> '},442:function(e,t){e.exports=' <div _v-6a845e04="">{{user}}<div _v-6a845e04=""> </div> </div>'},443:function(e,t){e.exports=' <vs _v-7b602bc5=""></vs> <div class=card _v-7b602bc5=""> <div class=card-header _v-7b602bc5="">Rank</div> <div class=card-content _v-7b602bc5=""> <div class="list-block media-list" _v-7b602bc5=""> <ul _v-7b602bc5=""> <li class=item-content v-for="user in users" _v-7b602bc5=""> <div class=rank _v-7b602bc5=""> </div> <div class=item-media _v-7b602bc5=""> </div> <div class=item-inner _v-7b602bc5=""> <div class=item-title-row _v-7b602bc5=""> <div class=item-title _v-7b602bc5="">{{user.nickname}}</div> </div> <div class=item-subtitle _v-7b602bc5=""> Keep:{{user.keepdays}} | 连击:{{user.cont_keepdays}}</div> </div> <div class=like _v-7b602bc5=""> <i class="fa fa-heart fa-lg" _v-7b602bc5=""></i><br _v-7b602bc5=""> </div> </li> </ul> </div> </div> </div> '},444:function(e,t){e.exports=' <div class=vs _v-9440db94=""> {{user}} vs {{user}} </div> '},445:function(e,t,n){var o,a,s={};n(429),a=n(439),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})},446:function(e,t,n){var o,a,s={};n(433),o=n(166),a=n(444),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})},447:function(e,t,n){var o,a,s={};o=n(167),a=n(440),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})},448:function(e,t,n){var o,a,s={};n(431),o=n(168),a=n(442),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})},449:function(e,t,n){var o,a,s={};n(432),o=n(169),a=n(443),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})},450:function(e,t,n){var o,a,s={};n(430),o=n(170),a=n(441),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})}});
//# sourceMappingURL=app.982bf22912f2106f2bdd.js.map