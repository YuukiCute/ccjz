module.exports.config = {
	name: "cosplay",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Tpk",
	description: "sailenh",
	commandCategory: "Tiện ích",
	usages: "Công cụ",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  //const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
  /*const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;*/
//const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    /*const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");*/
   /*var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const namebot = config.BOTNAME
  const res = await axios.get(`https://api.quangbao.click/other/hearing`);
var thinh = res.data.data*/
					api.sendMessage({
                                                body:`Ok`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.quangbao.click/images/vdcosplay')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
/*module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `== 『 𝐂𝐀́𝐂 𝐋𝐄̣̂𝐍𝐇 𝐓𝐇𝐔̛𝐎̛̀𝐍𝐆 𝐃𝐔̀𝐍𝐆 』 ==
━━━━━━━━━━━━━━
${global.config.PREFIX}help => xem danh sách các lệnh trên bot
${global.config.PREFIX}checktt => check xem tương tác thành viên 
${global.config.PREFIX}box info => Để xem thông tin về bot
${global.config.PREFIX}in4 => Xem thông tin người dùng
${global.config.PREFIX}ghép => Ghép đôi ngẫu nhiên với thành viên
${global.config.PREFIX}setname or ${global.config.PREFIX}name => Thay đổi biệt danh thành viên
${global.config.PREFIX}imgur => lấy link ảnh imgur
${global.config.PREFIX}sing => nghe nhạc trên bot
${global.config.PREFIX}video => xem video trên bot
${global.config.PREFIX}youtube => reply video/music youtube trên bot
→ Lưu ý phải viết đúng chính tả
━━━━━━━━━━━━━━━
===『 ĐIỀU HÀNH BỞI QUANG BẢO 』===`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.quangbao.click/images/tonghop')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID); 
                          }*/