 module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Tpk",
	description: "Gọi prefix bot",
	commandCategory: "Gọi bot",
	usages: "prefix",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const time = process.uptime() + global.config.UPTIME,
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const namebot = config.BOTNAME
  const res = await axios.get(`https://docs-api.catteam123.repl.co/saying/hearing?apikey=JRTvip_2200708248`);
var thinh = res.data.data
  const req = await axios.get(`https://docs-api.catteam123.repl.co/saying/cadao?apikey=JRTvip_2200708248`);
var cadao = req.data.data
  const res1 = await axios.get(`https://docs-api.catteam123.repl.co/nsfw/vsbg?apikey=JRTvip_2200708248`);
//const res2 = await axios.get(`https://docs-api.catteam123.repl.co/nsfw/ig?apikey=JRTvip_2200708248`);
//const res3 = await axios.get(`https://docs-api.catteam123.repl.co/nsfw/gaisexy?apikey=JRTvip_2200708248`);
const res4 = await axios.get(`https://docs-api.catteam123.repl.co/images/girl?apikey=JRTvip_2200708248`);
//const res5 = await axios.get(`https://docs-api.catteam123.repl.co/images/gaixinhvn?apikey=JRTvip_2200708248`);
//const res6 = await axios.get(`https://docs-api.catteam123.repl.co/nsfw/ausand?apikey=JRTvip_2200708248`);
var data1 = res1.data.data;
var array = [];
//var data2 = res2.data.data;
//var data3 = res3.data.data;
var data4 = res4.data.data;
//var data5 = res5.data.data;
//var data6 = res6.data.data;
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
//var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
//var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
//var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
//var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    //array.push(downloadfile2);    
    //array.push(downloadfile3);
    array.push(downloadfile4);
    //array.push(downloadfile5);    
    //array.push(downloadfile6);
					api.sendMessage({
                                                body: `💓 ==== [ ${namebot} ] ==== 💓\n━━━━━━━━━━━\n[⏰] ➜ 𝗧𝗶𝗺𝗲: ${timeNow}\n[⏳] ➜ 𝐁𝐎𝐓 𝐉𝐑𝐓 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜: ${hours} : ${minutes} : ${seconds}\n[🧸] ➜ 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀ ${thu}\n◆━━━◆『 ${icon} 』◆━━━◆\n[🥰] ➜ 𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n[☁️] ➜ 𝗖𝗮 𝗱𝗮𝗼:\n${cadao}\n━━━━━━━━━━━\n[⚙️] ➜ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: deplay \n[🌸] ➜ 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n[💮] ➜ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "❤️" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗵𝗲𝗹𝗽`, attachment:array},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ 𝗠𝗘𝗡𝗨 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗫𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗵𝗮𝘆 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n𝟮. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n𝟯. 𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘄𝗲𝗯 𝗮𝗽𝗶 𝗰𝘂̉𝗮 /𝗯𝗼𝘁\n𝟰. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 \n\n[⚜️] ➜ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/wallpaper?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`[⚜️] ➜ Vui lòng chờ 1 xíu !!!`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `[⚜️]=== 『 𝐂𝐀́𝐂 𝐋𝐄̣̂𝐍𝐇 𝐓𝐇𝐔̛𝐎̛̀𝐍𝐆 𝐃𝐔̀𝐍𝐆 』 ===[⚜️]
◆━━━━━━━━━━━━━━◆
${global.config.PREFIX}𝐡𝐞𝐥𝐩 => 𝐗𝐞𝐦 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐦𝐞𝐧𝐮 => 𝐗𝐞𝐦 𝐜𝐚́𝐜 𝐦𝐞𝐧𝐮 đ𝐚̃ 𝐩𝐡𝐚̂𝐧 𝐜𝐡𝐢𝐚 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐭𝐭 => 𝐗𝐞𝐦 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐭𝐭𝟐 => 𝐗𝐞𝐦 𝐭𝐨̂̉𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐜𝐚́𝐜 𝐛𝐨𝐱 𝐝𝐨̂̀𝐧 𝐥𝐚̣𝐢
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐫𝐚𝐧𝐤 => 𝐗𝐞𝐦 𝐜𝐡𝐢̉ 𝐬𝐨̂́ 𝐱𝐞̂́𝐩 𝐡𝐚̣𝐧𝐠 𝐫𝐚𝐧𝐤 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜
${global.config.PREFIX}𝐛𝐨𝐱 𝐢𝐧𝐟𝐨 => Đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐛𝐨𝐱
${global.config.PREFIX}𝐢𝐧𝟒 => 𝐗𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠
${global.config.PREFIX}𝐥𝐨̣𝐜 => 𝐋𝐨̣𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 = 𝟎 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧
${global.config.PREFIX}𝐥𝐨𝐜𝐦𝐞𝐦 => 𝐋𝐨̣𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 = 𝟎 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 (𝐝𝐮̛̣ 𝐩𝐡𝐨̀𝐧𝐠)
${global.config.PREFIX}𝐠𝐡𝐞́𝐩 => 𝐆𝐡𝐞́𝐩 đ𝐨̂𝐢 𝐯𝐨̛́𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧
${global.config.PREFIX}𝐠𝐡𝐞𝐩𝐥𝐨𝐯𝐞 => 𝐆𝐡𝐞́𝐩 đ𝐨̂𝐢 đ𝐮̛𝐨̛̣𝐜 𝐜𝐡𝐨̣𝐧 𝐧𝐚𝐦/𝐧𝐮̛̃ 𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧
${global.config.PREFIX}𝐬𝐞𝐭𝐧𝐚𝐦𝐞 𝐨𝐫 ${global.config.PREFIX}𝐧𝐚𝐦𝐞 => 𝐓𝐡𝐚𝐲 đ𝐨̂̉𝐢 𝐛𝐢𝐞̣̂𝐭 𝐝𝐚𝐧𝐡 𝐜𝐮̉𝐚 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧
${global.config.PREFIX}𝐢𝐦𝐠𝐮𝐫 => 𝐋𝐚̂́𝐲 𝐥𝐢𝐧𝐤 𝐚̉𝐧𝐡 𝐢𝐦𝐠𝐮𝐫
${global.config.PREFIX}𝐬𝐢𝐧𝐠 => 𝐍𝐠𝐡𝐞 𝐧𝐡𝐚̣𝐜 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐯𝐢𝐝𝐞𝐨 => 𝐗𝐞𝐦 𝐯𝐢𝐝𝐞𝐨 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐲𝐭𝐛 => 𝐑𝐞𝐩𝐥𝐲 𝐯𝐢𝐝𝐞𝐨/𝐦𝐮𝐬𝐢𝐜 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐮̀𝐲 𝐜𝐡𝐨̣𝐧 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
[🎀]➜ 𝗟𝘂̛𝘂 𝘆́ 𝗽𝗵𝗮̉𝗶 𝘃𝗶𝗲̂́𝘁 đ𝘂́𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘁𝗮̉ 
━━━━━━━━━━━━━━━
===『 ĐIỀU HÀNH BỞI JRTXTRACY 』===`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/gaixinhvn?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `[⚜️]=== 『 INFORMATION ADMIN 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[👀] ➜ Tên: Nguyễn Hải Đăng
[💮] ➜ Biệt danh: JRT 
[❎] ➜ Ngày tháng năm sinh: 26/02/2003 
[👤] ➜ Giới tính: Nam
[💫] ➜ Chiều cao cân nặng: 1m75 x 68 kg
[❤️] ➜ Tên duyên phận: Nguyễn Hồng Phấn
[🧸] ➜ Biệt danh: Tracy
[💥] ➜ Ngày sinh: 07/12/2001
[💘] ➜ Mối quan hệ: Đã đính hôn
[🌎] ➜ Quê quán: Phú Thọ - Hà Nội
[🌸] ➜ Tính cách: Hòa đồng, năng nổ, dứt khoát, thân thiện và hài hước
[🌀] ➜ Sở thích: Thích cái đẹp, đi phượt, giao lưu ca hát, thưởng thức các món ẩm thực khác nhau

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[👉] ➜ Information: https://bio.link/nhdjrt262
[☎] ➜ SĐT & Zalo: 0396049649
[🌐] ➜ Facebook: https://www.facebook.com/NHD.JRT.262
[⛱] ➜ TikTok: https://www.tiktok.com/@hd.jrt03
[⛲] ➜ Instagram: https://www.instagram.com/hd.jrt.2k3
[🔎] ➜ Twitter: https://twitter.com/JRTOfficial_03
[📋] ➜ Telegram: https://t.me/nhdjrt262
[🎬] ➜ Youtube: https://www.youtube.com/channel/UCNK_WugSVHOSAIPKr2epEOQ
[✉️] ➜ Email: dangz123456789z@gmail.com || lehonguyen2k3@gmail.com

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[💵] ➜ MOMO: 0354838459 / https://i.imgur.com/Ed0rDrO.png / Nguyễn Hồng Phấn
[💵] ➜ MOMO: 0396049649 / https://i.imgur.com/Hxbs1q0.png / Nguyễn Hải Đăng
[💵] ➜ MBBANK: 0396049649 / https://imgur.com/NXX9Lnh / Nguyễn Hải Đăng
[💵] ➜ MBBANK: 0396049649 / https://i.imgur.com/2yj1jqY.png / Nguyễn Hồng Phấn
[💵] ➜ TIMO BANK: 9021288475332 / https://i.imgur.com/vTx2DQp.jpg / Nguyễn Hải Đăng
[💵] ➜ ZALO PAY: 0396049649 / https://imgur.com/LBeXzsy / Nguyễn Hải Đăng
[💵] ➜ AGRIBANK: 4810205345666 / https://i.imgur.com/DObUFKB.png / Nguyễn Hồng Phấn

[⚜️]=== 『 PROBLEM 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[❗] ➜ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin theo các link ở trên.
[📌] ➜ Hãy đồng hành cùng BOT JRT và mình nhé. Cảm ơn mọi người <3

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

[📝]➜ Bot được điều hành bởi JRTxTracy`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/gaixinhvn?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `[🖥] ➜ 𝗪𝗲𝗯 𝗮𝗽𝗶: https://web-api.catteam123.repl.co/docs/`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/video/chill?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━\n\n[🖥] ➜ 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n[📎] ➜ 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${global.config.PREFIX} ]\n[💓] ➜ 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n[💬] ➜ 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n[👑] ➜ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n━━━━━━━━━━━\n[⚜️] ➜ 𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀  𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/siesta?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("[⚜️] ➜ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 4 || choose < 1) return api.sendMessage("[⚜️] ➜ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
}

/*module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Tpk",
	description: "Gọi prefix bot",
	commandCategory: "Gọi bot",
	usages: "prefix",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const time = process.uptime() + global.config.UPTIME,
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const namebot = config.BOTNAME
  const res = await axios.get(`https://docs-api.catteam123.repl.co/saying/hearing?apikey=JRTvip_2200708248`);
var thinh = res.data.data
  const req = await axios.get(`https://docs-api.catteam123.repl.co/saying/cadao?apikey=JRTvip_2200708248`);
var cadao = req.data.data
					api.sendMessage({
                                                body: `💓 ==== [ ${namebot} ] ==== 💓\n━━━━━━━━━━━\n[⏰] ➜ 𝗧𝗶𝗺𝗲: ${timeNow}\n[⏳] ➜ 𝐁𝐎𝐓 𝐉𝐑𝐓 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜: ${hours} : ${minutes} : ${seconds}\n[🧸] ➜ 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀ ${thu}\n◆━━━◆『 ${icon} 』◆━━━◆\n[🥰] ➜ 𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n[☁️] ➜ 𝗖𝗮 𝗱𝗮𝗼:\n${cadao}\n━━━━━━━━━━━\n[⚙️] ➜ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: deplay \n[🌸] ➜ 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n[💮] ➜ 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "❤️" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗵𝗲𝗹𝗽`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/girl?apikey=JRTvip_2200708248')).data.data,
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
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ 𝗠𝗘𝗡𝗨 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗫𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗵𝗮𝘆 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n𝟮. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁\n𝟯. 𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘄𝗲𝗯 𝗮𝗽𝗶 𝗰𝘂̉𝗮 /𝗯𝗼𝘁\n𝟰. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 \n\n[⚜️] ➜ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/wallpaper?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`[⚜️] ➜ Vui lòng chờ 1 xíu !!!`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `[⚜️]=== 『 𝐂𝐀́𝐂 𝐋𝐄̣̂𝐍𝐇 𝐓𝐇𝐔̛𝐎̛̀𝐍𝐆 𝐃𝐔̀𝐍𝐆 』 ===[⚜️]
◆━━━━━━━━━━━━━━◆
${global.config.PREFIX}𝐡𝐞𝐥𝐩 => 𝐗𝐞𝐦 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐦𝐞𝐧𝐮 => 𝐗𝐞𝐦 𝐜𝐚́𝐜 𝐦𝐞𝐧𝐮 đ𝐚̃ 𝐩𝐡𝐚̂𝐧 𝐜𝐡𝐢𝐚 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐭𝐭 => 𝐗𝐞𝐦 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐭𝐭𝟐 => 𝐗𝐞𝐦 𝐭𝐨̂̉𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐜𝐚́𝐜 𝐛𝐨𝐱 𝐝𝐨̂̀𝐧 𝐥𝐚̣𝐢
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐫𝐚𝐧𝐤 => 𝐗𝐞𝐦 𝐜𝐡𝐢̉ 𝐬𝐨̂́ 𝐱𝐞̂́𝐩 𝐡𝐚̣𝐧𝐠 𝐫𝐚𝐧𝐤 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜
${global.config.PREFIX}𝐛𝐨𝐱 𝐢𝐧𝐟𝐨 => Đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐛𝐨𝐱
${global.config.PREFIX}𝐢𝐧𝟒 => 𝐗𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠
${global.config.PREFIX}𝐥𝐨̣𝐜 => 𝐋𝐨̣𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 = 𝟎 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧
${global.config.PREFIX}𝐥𝐨𝐜𝐦𝐞𝐦 => 𝐋𝐨̣𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 = 𝟎 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 (𝐝𝐮̛̣ 𝐩𝐡𝐨̀𝐧𝐠)
${global.config.PREFIX}𝐠𝐡𝐞́𝐩 => 𝐆𝐡𝐞́𝐩 đ𝐨̂𝐢 𝐯𝐨̛́𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧
${global.config.PREFIX}𝐠𝐡𝐞𝐩𝐥𝐨𝐯𝐞 => 𝐆𝐡𝐞́𝐩 đ𝐨̂𝐢 đ𝐮̛𝐨̛̣𝐜 𝐜𝐡𝐨̣𝐧 𝐧𝐚𝐦/𝐧𝐮̛̃ 𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧
${global.config.PREFIX}𝐬𝐞𝐭𝐧𝐚𝐦𝐞 𝐨𝐫 ${global.config.PREFIX}𝐧𝐚𝐦𝐞 => 𝐓𝐡𝐚𝐲 đ𝐨̂̉𝐢 𝐛𝐢𝐞̣̂𝐭 𝐝𝐚𝐧𝐡 𝐜𝐮̉𝐚 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧
${global.config.PREFIX}𝐢𝐦𝐠𝐮𝐫 => 𝐋𝐚̂́𝐲 𝐥𝐢𝐧𝐤 𝐚̉𝐧𝐡 𝐢𝐦𝐠𝐮𝐫
${global.config.PREFIX}𝐬𝐢𝐧𝐠 => 𝐍𝐠𝐡𝐞 𝐧𝐡𝐚̣𝐜 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐯𝐢𝐝𝐞𝐨 => 𝐗𝐞𝐦 𝐯𝐢𝐝𝐞𝐨 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐲𝐭𝐛 => 𝐑𝐞𝐩𝐥𝐲 𝐯𝐢𝐝𝐞𝐨/𝐦𝐮𝐬𝐢𝐜 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐮̀𝐲 𝐜𝐡𝐨̣𝐧 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
[🎀]➜ 𝗟𝘂̛𝘂 𝘆́ 𝗽𝗵𝗮̉𝗶 𝘃𝗶𝗲̂́𝘁 đ𝘂́𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘁𝗮̉ 
━━━━━━━━━━━━━━━
===『 ĐIỀU HÀNH BỞI catteam123 』===`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/gaixinhvn?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `[⚜️]=== 『 INFORMATION ADMIN 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[👀] ➜ Tên: Nguyễn Hải Đăng
[💮] ➜ Biệt danh: JRT 
[❎] ➜ Ngày tháng năm sinh: 26/02/2003 
[👤] ➜ Giới tính: Nam
[💫] ➜ Chiều cao cân nặng: 1m75 x 68 kg
[❤️] ➜ Tên duyên phận: Nguyễn Hồng Phấn
[🧸] ➜ Biệt danh: Tracy
[💥] ➜ Ngày sinh: 07/12/2001
[💘] ➜ Mối quan hệ: Đã đính hôn
[🌎] ➜ Quê quán: Phú Thọ - Hà Nội
[🌸] ➜ Tính cách: Hòa đồng, năng nổ, dứt khoát, thân thiện và hài hước
[🌀] ➜ Sở thích: Thích cái đẹp, đi phượt, giao lưu ca hát, thưởng thức các món ẩm thực khác nhau

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[👉] ➜ Information: https://bio.link/nhdjrt262
[☎] ➜ SĐT & Zalo: 0396049649
[🌐] ➜ Facebook: https://www.facebook.com/NHD.JRT.262
[⛱] ➜ TikTok: https://www.tiktok.com/@hd.jrt03
[⛲] ➜ Instagram: https://www.instagram.com/hd.jrt.2k3
[🔎] ➜ Twitter: https://twitter.com/JRTOfficial_03
[📋] ➜ Telegram: https://t.me/nhdjrt262
[🎬] ➜ Youtube: https://www.youtube.com/channel/UCNK_WugSVHOSAIPKr2epEOQ
[✉️] ➜ Email: dangz123456789z@gmail.com || lehonguyen2k3@gmail.com

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[💵] ➜ MOMO: 0354838459 / https://i.imgur.com/Ed0rDrO.png / Nguyễn Hồng Phấn
[💵] ➜ MOMO: 0396049649 / https://i.imgur.com/Hxbs1q0.png / Nguyễn Hải Đăng
[💵] ➜ MBBANK: 0396049649 / https://imgur.com/NXX9Lnh / Nguyễn Hải Đăng
[💵] ➜ MBBANK: 0396049649 / https://i.imgur.com/2yj1jqY.png / Nguyễn Hồng Phấn
[💵] ➜ TIMO BANK: 9021288475332 / https://i.imgur.com/vTx2DQp.jpg / Nguyễn Hải Đăng
[💵] ➜ ZALO PAY: 0396049649 / https://imgur.com/LBeXzsy / Nguyễn Hải Đăng
[💵] ➜ AGRIBANK: 4810205345666 / https://i.imgur.com/DObUFKB.png / Nguyễn Hồng Phấn

[⚜️]=== 『 PROBLEM 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆
[❗] ➜ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin theo các link ở trên.
[📌] ➜ Hãy đồng hành cùng BOT JRT và mình nhé. Cảm ơn mọi người <3

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

[📝]➜ Bot được điều hành bởi JRT`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/gaixinhvn?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `[🖥] ➜ 𝗪𝗲𝗯 𝗮𝗽𝗶: https://web-api.catteam123.repl.co/docs/`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/video/chill?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━\n\n[🖥] ➜ 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n[📎] ➜ 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${global.config.PREFIX} ]\n[💓] ➜ 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n[💬] ➜ 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n[👑] ➜ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n━━━━━━━━━━━\n[⚜️] ➜ 𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀  𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/siesta?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("[⚜️] ➜ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 4 || choose < 1) return api.sendMessage("[⚜️] ➜ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
}*/