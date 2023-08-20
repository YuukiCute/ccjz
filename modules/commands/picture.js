  module.exports.config = {
	name: "picture",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Tpk",
	description: "Xem ảnh",
	commandCategory: "Random-img",
    cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "api.gif")) request("https://i.imgur.com/QkyX1Vt.gif").pipe(fs.createWriteStream(dirMaterial + "api.gif"));
}
module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
const fs = require("fs");

   const { threadID, messageID, senderID } = event;
    
    if (!args[0]) {
     var msg = `==== [ 𝗠𝗘𝗡𝗨 𝗔𝗣𝗜 ] ====
━━━━━━━━━━━━━━━━━━\n
𝟭 → 𝗔𝗽𝗶 𝗴𝗮́𝗶 ( 𝘁𝗼̂̉𝗻𝗴 𝗵𝗼̛̣𝗽 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗮̉𝗻𝗵 𝗴𝗮́𝗶 )
𝟮 → 𝗔𝗽𝗶 𝘁𝗿𝗮𝗶 ( 𝘁𝗼̂̉𝗻𝗴 𝗵𝗼̛̣𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝘁𝗿𝗮𝗶 )
𝟯 → 𝗔𝗽𝗶 𝗰𝗼𝘀𝗽𝗹𝗮𝘆 ( 𝘁𝗼̂̉𝗻𝗴 𝗵𝗼̛̣𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝗰𝗼𝘀𝗽𝗹𝗮𝘆 )
𝟰 → 𝗔𝗽𝗶 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝘂́𝗮 ( 𝘁𝗼̂̉𝗻𝗴 𝗵𝗼̛̣𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝘂́𝗮 𝗰𝗵𝗶𝗲̂́𝗻 𝗯𝗶𝗻𝗵 )
𝟱 → 𝗔𝗽𝗶 𝗶𝗴 ( 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝘁𝗿𝗼𝗻𝗴 𝗶𝗴 )
𝟲 → 𝗔𝗽𝗶 𝗴𝗮́𝗶 𝗻𝗴𝗮 ( 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝗴𝗮́𝗶 𝗻𝘂̛𝗼̛́𝗰 𝗻𝗴𝗮 )
𝟳 → 𝗔𝗽𝗶 𝗴𝗮́𝗶 𝗻𝗵𝗮̣̂𝘁 ( 𝗮̉𝗻𝗵 𝗰𝘂̉𝗮 𝗺𝗼̣̂𝘁 𝗯𝗮̣𝗻 𝗻𝘂̛̃ 𝗯𝗲̂𝗻 𝗻𝘂̛𝗼̛́𝗰 𝗻𝗵𝗮̣̂𝘁 )
𝟴 → 𝗔𝗽𝗶 𝗺𝗲𝗺𝗲 ( 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝗵𝗮̀𝗶 )
𝟵 → 𝗔𝗽𝗶 𝘀𝗮́𝘂 𝗺𝘂́𝗶 ( 𝗮̉𝗻𝗵 𝘁𝗿𝗮𝗶 𝘀𝗮́𝘂 𝗺𝘂́𝗶 𝗾𝘂𝘆𝗲̂́𝗻 𝗿𝘂̃ )
𝟭𝟬 → 𝗔𝗽𝗶 𝗺𝗼̂𝗻𝗴 ( 𝗮̉𝗻𝗵 𝗺𝗼̂𝗻𝗴 𝗴𝗮́𝗶 𝘁𝗼 𝘁𝗿𝗼̀𝗻 )
𝟭𝟭 → 𝗔𝗽𝗶 𝗱𝘂́ ( 𝗮̉𝗻𝗵 𝗱𝘂́ 𝗴𝗮́𝗶 𝗻𝘂́𝗺 𝘁𝗼 đ𝘂̀𝗻𝗴 )
𝟭𝟮 → 𝗔𝗽𝗶 𝗻𝘂𝗱𝗲 ( 𝘁𝗼̂̉𝗻𝗴 𝗵𝗼̛̣𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝗵𝗮̀𝘂/𝗯𝘂̛𝗼̛́𝗺 𝗴𝗮́𝗶 )
𝟭𝟯 → 𝗔𝗽𝗶 𝗰𝘂 ( 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝘆𝗺 𝗰𝘁𝗿𝗮𝗶 )
𝟭𝟰 → 𝗚𝗮́𝗶 𝗮́𝗼 𝗱𝗮̀𝗶 ( 𝗻𝗵𝘂̛̃𝗻𝗴 𝗮̉𝗻𝗵 𝗵𝗼̣𝗰 𝘀𝗶𝗻𝗵 𝗮́𝗼 𝗱𝗮̀𝗶 𝘃𝗶𝗲̣̂𝘁 𝗻𝗮𝗺 )
𝟭𝟱 → 𝗛𝗼̣𝗰 𝘀𝗶𝗻𝗵 ( 𝗰𝗮́𝗰 𝗮̉𝗻𝗵 𝗵𝗼̣𝗰 𝘀𝗶𝗻𝗵 𝗻𝗮𝗺/𝗻𝘂̛̃ 𝗩𝗶𝗲̣̂𝘁 𝗡𝗮𝗺)
𝟭𝟲 → 𝗔𝗽𝗶 𝘃𝗶𝗱𝗲𝗼 𝗮𝗻𝗶𝗺𝗲\n\n→ 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝘃𝗮̀ 𝗰𝗵𝗼̣𝗻 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗹𝗮̂́𝘆 𝗵𝗼𝗮̣̆𝗰 𝘁𝗲̂𝗻 𝗮𝗽𝗶 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗱𝘂̀𝗻𝗴 💓`
        
        return api.sendMessage({body: msg, attachment: fs.createReadStream(__dirname + `/noprefix/api.gif`)}, event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
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
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "Gái" :
          case "gái":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗴𝗮́𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 👧\n━━━━━━━━━━━━━━━━━━\nhttps://docs-api.catteam123.repl.co/images/girl?apikey=JRTvip_2200708248`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://docs-api.catteam123.repl.co/images/girl?apikey=JRTvip_2200708248')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "boy" :
            case "Trai" :
          case "trai":
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝘁𝗿𝗮𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🧒\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/trai`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/trai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Cosplay" :
          case "cosplay":
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗖𝗼𝘀𝗽𝗹𝗮𝘆 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🦄\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/cosplay`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/cosplay')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "công chúa" :
          case "Công chúa":
        case "4": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝘂́𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 👑\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/congchua`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/congchua')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
                                }
case "ig" :
          case "Ig":
        case "5": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗶𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌸\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/ig`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/ig')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Gái nga" :
          case "gái nga":
        case "6": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗴𝗮́𝗶 𝗻𝗴𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌟\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/gainga`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/gainga')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "Gái nhật" :
          case "gái nhật":
        case "7": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗴𝗮́𝗶 𝗻𝗵𝗮̣̂𝘁 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🎊\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/gainhat`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/gainhat')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "Meme" :
          case "meme":
        case "8": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗺𝗲𝗺𝗲 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 😹\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/meme`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/meme')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            case "sáu múi" :
          case "Sáu múi":
        case "9": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝘀𝗮́𝘂 𝗺𝘂́𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🙈\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/saumui`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/saumui')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
      }
case "Mông" :
          case "mông":
        case "10": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗺𝗼̂𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🍑\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/mong`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/mong')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Dú" :
          case "dú":
        case "11": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗱𝘂́ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 👙\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/du`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/du')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "nude" :
          case "Nude":
        case "12": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗻𝘂𝗱𝗲 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌚\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/nude`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/nude')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Cu" :
          case "cu":
        case "13": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗰𝘂 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🖕🏿\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/cu`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/cu')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Gái áo dài" :
          case "gái áo dài":
        case "14": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗴𝗮́𝗶 𝗮́𝗼 𝗱𝗮̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🌹\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/nuaodai`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/nuaodai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "học sinh" :
          case "Học sinh":
        case "15": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝗵𝗼̣𝗰 𝘀𝗶𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 🧸\n━━━━━━━━━━━━━━━━━━\nhttps://TPKTAO.trankhuong2022.repl.co/image/hocsinh`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.trankhuong2022.repl.co/image/hocsinh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
case "Video Anime" :
          case "vidanime":
        case "16": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `====『 𝗔𝗣𝗜 𝗗𝗢𝗪𝗟𝗢𝗔𝗗 』====\n\n→ 𝗔𝗽𝗶 𝘃𝗶𝗱𝗲𝗼 𝗮𝗻𝗶𝗺𝗲 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗻𝗲̀ 💓\n━━━━━━━━━━━━━━━━━━\nhttps://Api-By-Nhhoang.vnhoang06.repl.co/videoanime1`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://Api-By-Nhhoang.vnhoang06.repl.co/animevideo')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 3 || choose < 1) return api.sendMessage("𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
                                           }