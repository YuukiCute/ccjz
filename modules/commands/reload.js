module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Chill with Tea",
	description: "Khởi động lại Bot",
	commandCategory: "Tiện ích",
	usages: "reload + time",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
 const permission = ["100015308170955"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Bạn không đủ quyền hạn", event.threadID, event.messageID);
	const { threadID, messageID } = event;
  
  const picture = (await axios.get(`https://i.imgur.com/I5AHe6h.jpeg`, { responseType: "stream"})).data
  const ttoan = (await axios.get(`https://i.imgur.com/M9DiWla.jpeg`, { responseType: "stream"})).data
	var time = args.join(" ");
	var rstime = "29";
	if (!time) rstime = "30";
	else rstime = time;
  const timeStart = Date.now();
	api.sendMessage({body: `🤖 ==== [ 𝐑𝐄𝐋𝐎𝐀𝐃 ] ==== 🤖
━━━━━━━━━━━━━━━━━━
⚙️ 𝗕𝗼𝘁 𝘀𝗲̃ 𝘁𝗶𝗲̂́𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗿𝗲𝗹𝗼𝗮𝗱 𝘀𝗮𝘂 ${rstime} 𝗴𝗶𝗮̂𝘆 𝗻𝘂̛̃𝗮 !`, attachment: (ttoan)}, threadID);
	return setTimeout(() => { api.sendMessage({body: "[𝗕𝗼𝘁] => 𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗥𝗲𝗹𝗼𝗮𝗱 𝗕𝗼𝘁 !", attachment: (picture)}, event.threadID,() => process.exit(1) )},	rstime * 1000);
}