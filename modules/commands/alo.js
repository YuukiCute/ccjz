module.exports.config = {
	name: "alo",
	version: "0.0.3",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "tag toàn bộ thành viên",
	commandCategory: "Hệ thống quản trị viên",
	usages: "[Text]",
	cooldowns: 10
};

module.exports.run = async function({ api, event, args, Threads }) { 
  const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
//const res = await axios.get("https://apikanna.ngochan6666.repl.co");
//lấy data trên web api
const data = `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`//res.data.data;
//tải ảnh xuống
downloader = require('image-downloader'),
fse = require('fs-extra');
await downloader.image({url: data, dest: __dirname+'/cache/1.jpg'});
stream = fse.createReadStream(__dirname+'/cache/1.jpg' );
	try {
		var all = (await Threads.getInfo(event.threadID)).participantIDs;
    all.splice(all.indexOf(api.getCurrentUserID()), 10);
	  all.splice(all.indexOf(event.senderID), 10);
		var body = (args.length != 0) ? args.join(" ") : "[⚜️]➜ 𝐐𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 đ𝐚̃ 𝐧𝐡𝐚̆́𝐜 đ𝐞̂́𝐧 𝐛𝐚̣𝐧 𝐤𝐢̀𝐚 𝐦𝐚𝐮 𝐯𝐨̂ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐥𝐞̣ 𝐤𝐡𝐨̂𝐧𝐠 𝐚̆𝐧 𝟏 𝐯𝐞́ 𝐫𝐚 đ𝐚̉𝐨", mentions = [], index = 0;
		
    for (let i = 0; i < all.length; i++) {
		    if (i == body.length) body += body.charAt(body.length );
		    mentions.push({
		  	  tag: body,
		  	  id: all[i],
		  	  fromIndex: i 
		    });
	    }

		return api.sendMessage({ body: `‎[📣] ===𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 𝐓𝐮̛̀  ${global.data.userName.get(event.senderID)} === [📣]\n\n[⏱️]➜ 𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀: ${thu} || ${gio}\n[⚜️]➜ 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: \n${body}`, attachment: stream, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}