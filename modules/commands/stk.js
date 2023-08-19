module.exports.config = {
	name: "stk",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Tuấn Dzz",
	description: "Donate cho admin",
	commandCategory: "Box chat",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const request = require('request');  
  const fs = require("fs");
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  if (args.length == 0) return api.sendMessage({body: `===  [ 𝐃𝐎𝐍𝐀𝐓𝐄 ]  ==\n
𝗦𝗧𝗞 𝗠𝗕𝗕𝗔𝗡𝗞\n𝗦𝗧𝗞: 062408032004\nNGUYEN CONG QUANG BAO\n\nxin ít update bot ❤️\n━━━━━━━━━━━━━━\n 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "❤️" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗼𝗽 𝗱𝗼𝗻𝗮𝘁𝗲`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"](`${global.configApi.domain}/images/donate`)).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    }, event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const abcxyz = ["https://i.imgur.com/ZP6p3qM.jpg", "https://i.imgur.com/6tLFY2K.jpg", "https://i.imgur.com/m5r1CSt.jpg", "https://i.imgur.com/NKM1Rsk.jpg", "https://i.imgur.com/D3znx1c.jpeg", "https://i.imgur.com/ALK9yzl.jpg", "https://i.imgur.com/02HsVpV.jpg", "https://i.imgur.com/LMOWfm9.jpg", "https://i.imgur.com/Uw1z0AQ.jpg"]
        let o = [];
        for (let i = 0; i < abcxyz.length; i++) {
            const t = (await axios.get(`${abcxyz[i]}`, {
                    responseType: "stream"
                }))
                .data;
            o.push(t)
        }
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🖤","🍑","🍁"];
  let stick = ["526214684778630","526220108111421","526220308111401","526220484778050","526220691444696","526220814778017","526220978111334","526221104777988","526221318111300","526221564777942","526221711444594","526221971444568","2041011389459668","2041011569459650","2041011726126301","2041011836126290", "2041011952792945", "2041012109459596", "2041012262792914", "2041012406126233", "2041012539459553", "2041012692792871", "2041014432792697", "2041014739459333", "2041015016125972", "2041015182792622", "2041015329459274", "2041015422792598", "2041015576125916", "2041017422792398", "2041020049458802", "2041020599458747", "2041021119458695", "2041021609458646", "2041022029458604", "2041022286125245"];
    let sticker = stick[Math.floor(Math.random() * stick.length)];
  const icon = allicon[Math.floor(Math.random()*allicon.length)];
  const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤️") return; 
 api.unsendMessage(handleReaction.messageID);
        const msg = ({
            body: "『 𝗟𝗜𝗦𝗧 𝗗𝗢𝗡𝗔𝗧𝗘  』\n━━━━━━━━━━━━━━\n1. chưa có ai=))))"
            , attachment: o
        })
        return api.sendMessage(msg, event.threadID, (err, info) => {
            setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
    }