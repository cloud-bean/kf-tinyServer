// const userHelper = require('../helper/userHelper.server');
// const coreLogic = require('../logic/coreLogic.server');
// const keepLogic = require('../logic/keepLogic.server');
// const co = require('co');
// const config = require('../config/config');
// const MESSAGE = require('../config/message');

// // 处理单击按钮事件
// function handleEventClick(message, req, res, next) {
//   switch (message.EventKey) {
//     case 'GET_HELP':
//       coreLogic.sendHelpMessage(message, req, res, next);
//       break;
//     case 'GET_TASK_EASY':
//     case 'GET_TASK_NORMAL':
//     case 'GET_TASK_HARD':
//       coreLogic.sendTask(message, req, res, next);
//       break;
//     case 'GET_RANK':
//       res.reply('获取排行榜啦啦');
//       break;
//     default:
//       res.reply('没匹配上啦啦');
//   }
// }
function handleText(message, req, res, next) {
  // wechatAPI.sendText(message.FromUserName, 'Hello world', (err, result) => {
  //   console.log(result);
  // });
  res.reply('hello');
}

// function handleEvent(message, req, res, next) {
//   switch (message.Event) {
//     case 'CLICK':
//       handleEventClick(message, req, res, next);
//       break;
//     case 'subscribe':
//       userHelper.getUserInfoByOpenId(message.FromUserName);
//       break;
//     default:
//       res.reply('没匹配上啦啦');
//   }
// }

// function handleVoice(message, req, res, next) {
//   co(function* () {
//     try {
//       const user = yield userHelper.getUserInfoByOpenId(message.FromUserName);
//       const { iskeeped, iscontinue, status } = yield keepLogic.isKeeped(user);
//       if (iskeeped && (status === 'complete')) {
//         res.reply(MESSAGE.alreadyGetGrit);
//       } else if (iskeeped && (status === 'pending')) {
//         coreLogic.receiveAnswer(user);
//         res.reply(MESSAGE.dupReceiveAnswer);
//       } else {
//         coreLogic.receiveAnswer(user);
//         res.reply(MESSAGE.receiveAnswer);
//         setTimeout(() => { coreLogic.sendGritcard(user, iscontinue); }, config.logic.delayTime);// 暂时设置为10分钟
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   });
// }

// function handleImage(message, req, res, next) {
// }


module.exports = {
  handleText
};
//# sourceMappingURL=wechat.server.controllers.js.map