module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events",
  dependencies: {
		"fs-extra": "",
		"path": ""
}
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/antiout/randomgif/`;
    if (!fs.existsSync(dirMaterial + "cache", "antiout" , "randomgif")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "c.mp3")) request("https://Nmanh2006.manh10.repl.co/view?type=mp3&code=dE8rD7dM0jIjLUSk2CMhVl5Y490gzKpf0.mp3 ").pipe(fs.createWriteStream(dirMaterial + "c.mp3"));
if (!fs.existsSync(dirMaterial + "c.mp3")) request("https://Nmanh2006.manh10.repl.co/view?type=mp3&code=MJFTUs8cfRItg1tZ0rXwGdANFeZs2KRd0.mp3 ").pipe(fs.createWriteStream(dirMaterial + "c.mp3"));
}
module.exports.run = async({ event, api, Threads, Users }) => {
  const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
   const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝟐'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝟑'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝟒'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝟓'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝟔'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝟕'
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
 if (type == "tự rời") {
const path = join(__dirname, "cache", "antiout","randomgif");
	const gifPath = join(path, `c.mp3`);
  const hhh = join(__dirname, "cache", "antiout","randomgif");
	const gifhh = join(hhh, `c.mp3`);
	const randomPath = readdirSync(join(__dirname, "cache", "antiout", "randomgif"));
	 if (randomPath.lenth != 0) {
		const pathRandom = join(__dirname, "cache", "antiout", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
}
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage({body: `[ 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 ] - Không thể thêm người dùng ${name} vào nhóm \n[ 𝐓𝐡𝐨̛̀𝐢 𝐆𝐢𝐚𝐧 ] ➣ ${timeNow} `, attachment: createReadStream(gifPath) },event.threadID)
   } else api.sendMessage({body:`[ 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 ] - Người dùng ${name} vừa thoát khỏi nhóm !\nTrạng thái: Thành Công! \n[ 𝐓𝐡𝐨̛̀𝐢 𝐆𝐢𝐚𝐧 ]➣ ${timeNow} `,attachment: createReadStream(gifhh) }, event.threadID);
  })
 }
    }