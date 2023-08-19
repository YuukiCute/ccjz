const axios = require("axios");
const fs = require("fs");
module.exports.config = {
	name: "capwall",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Tpk - táo",
	description: "Cap màn hình",
	commandCategory: "Tiện ích",
    cooldowns: 5
}
module.exports.onLoad = async () => {
    const { existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    const path = resolve(__dirname, "cache", "pornlist.txt");

    if (!existsSync(path)) return await global.utils.downloadFile("https://raw.githubusercontent.com/blocklistproject/Lists/master/porn.txt", path);
    else return;
}

module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
const fs = require("fs");

   const { threadID, messageID, senderID } = event;
    var cc = [
      "https://i.imgur.com/zYCFDkG.jpeg",
      "https://i.imgur.com/mYCrGRq.jpeg",
      "https://i.imgur.com/lPECpc0.jpeg",
      "https://i.imgur.com/82TcaN5.jpeg",
              ];
let image = [];
 for(let i = 0; i < 4; i++) {
    const stream = (await axios.get(cc[i], {
        responseType: "stream"
    })).data;
    image.push(stream);
};
  const ccc = {
    body: `🌐== [ CAP FACEBOOK ] ==🌐
────────────────────
1. cap wall dạng điện thoại nền trắng 
2. cap wwall dạng PC nền trắng 
3. cap wall dạng điện thoại nền đen 
4. cap wwall dạng PC nền trắng

➜ Reply tin nhắn kèm STT bạn chọn
 `,
    attachment: image
};
    if (!args[0]) {        
        return api.sendMessage(ccc, event.threadID, (error, info) => {
        
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
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
          const axios = require('axios');
          const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `➜ Vui lòng đợi ${name} bot đang cap`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `c_user=100070418888898; xs=47:JAzhcuSpUm0t2w:2:1684637741:-1:12144; fr=0TsP4H1gjOWvmD3ob.AWU4Pkx42FmtIYJ-89AMX8mriIE.BkaYgt..AAA.0.0.BkaYgt.AWUZm_iQVlY; datr=LYhpZJV3dC9eDOfQ8YQIhwpw;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `c_user=100070418888898; xs=47:JAzhcuSpUm0t2w:2:1684637741:-1:12144; fr=0TsP4H1gjOWvmD3ob.AWU4Pkx42FmtIYJ-89AMX8mriIE.BkaYgt..AAA.0.0.BkaYgt.AWUZm_iQVlY; datr=LYhpZJV3dC9eDOfQ8YQIhwpw;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.quangbao04.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=4ec4c7&url=${url}&dimension=480x800`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `➜ Cap wall Facebook dạng nền điện thoại trắng của bạn đây`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        };
            break;
        case "2": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `➜ Vui lòng đợi ${name} bot đang cap`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `c_user=100070418888898; xs=47:JAzhcuSpUm0t2w:2:1684637741:-1:12144; fr=0TsP4H1gjOWvmD3ob.AWU4Pkx42FmtIYJ-89AMX8mriIE.BkaYgt..AAA.0.0.BkaYgt.AWUZm_iQVlY; datr=LYhpZJV3dC9eDOfQ8YQIhwpw;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `c_user=100070418888898; xs=47:JAzhcuSpUm0t2w:2:1684637741:-1:12144; fr=0TsP4H1gjOWvmD3ob.AWU4Pkx42FmtIYJ-89AMX8mriIE.BkaYgt..AAA.0.0.BkaYgt.AWUZm_iQVlY; datr=LYhpZJV3dC9eDOfQ8YQIhwpw;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.quangbao04.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=4ec4c7&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `‎➜ Cap wall Facebook dạng pc nền trắng của bạn đây`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        };
            break;
        case "3": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `➜ Vui lòng đợi ${name} bot đang cap`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `datr=72N8Y2RGIDfS7o8zJuZraqtz;sb=72N8Yyr7UchIpKy6CRC_jKEc;vpd=v1%3B780x393x2.75;locale=vi_VN;dpr=2.75;c_user=100003322160627;xs=25%3A2dg3ltZIScds6Q%3A2%3A1688089120%3A-1%3A6287;fbl_cs=AhCDOR1VSDgRSAEciJqFDMUHGGRLTGJYTj1UemlobGtuZWNqd3ZtND1VVg;fbl_ci=170098432680697;m_page_voice=100003322160627;wl_cbv=v2%3Bclient_version%3A2281%3Btimestamp%3A1688484704;fbl_st=100424627%3BT%3A28141411;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1688484861588%2C%22v%22%3A1%7D;fr=0xNh2mMnFnanHAMQs.AWXkwfrenqUQwt7tfHDMZFL61qg.BjfGPv.ob.AAA.0.0.BkpDyr.AWVAKZDCMQs;wd=980x1944;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `datr=72N8Y2RGIDfS7o8zJuZraqtz;sb=72N8Yyr7UchIpKy6CRC_jKEc;vpd=v1%3B780x393x2.75;locale=vi_VN;dpr=2.75;c_user=100003322160627;xs=25%3A2dg3ltZIScds6Q%3A2%3A1688089120%3A-1%3A6287;fbl_cs=AhCDOR1VSDgRSAEciJqFDMUHGGRLTGJYTj1UemlobGtuZWNqd3ZtND1VVg;fbl_ci=170098432680697;m_page_voice=100003322160627;wl_cbv=v2%3Bclient_version%3A2281%3Btimestamp%3A1688484704;fbl_st=100424627%3BT%3A28141411;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1688484861588%2C%22v%22%3A1%7D;fr=0xNh2mMnFnanHAMQs.AWXkwfrenqUQwt7tfHDMZFL61qg.BjfGPv.ob.AAA.0.0.BkpDyr.AWVAKZDCMQs;wd=980x1944;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.quangbao04.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `
        https://api.screenshotmachine.com/?key=4ec4c7&url=${url}&dimension=480x800`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `‎➜ Cap wall Facebook dạng nền điện thoại trắng của bạn đây`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        };
            break;
        case "4": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `➜ Vui lòng đợi ${name} bot đang cap`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `datr=72N8Y2RGIDfS7o8zJuZraqtz;sb=72N8Yyr7UchIpKy6CRC_jKEc;vpd=v1%3B780x393x2.75;locale=vi_VN;dpr=2.75;c_user=100003322160627;xs=25%3A2dg3ltZIScds6Q%3A2%3A1688089120%3A-1%3A6287;fbl_cs=AhCDOR1VSDgRSAEciJqFDMUHGGRLTGJYTj1UemlobGtuZWNqd3ZtND1VVg;fbl_ci=170098432680697;m_page_voice=100003322160627;wl_cbv=v2%3Bclient_version%3A2281%3Btimestamp%3A1688484704;fbl_st=100424627%3BT%3A28141411;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1688484861588%2C%22v%22%3A1%7D;fr=0xNh2mMnFnanHAMQs.AWXkwfrenqUQwt7tfHDMZFL61qg.BjfGPv.ob.AAA.0.0.BkpDyr.AWVAKZDCMQs;wd=980x1944;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `datr=72N8Y2RGIDfS7o8zJuZraqtz;sb=72N8Yyr7UchIpKy6CRC_jKEc;vpd=v1%3B780x393x2.75;locale=vi_VN;dpr=2.75;c_user=100003322160627;xs=25%3A2dg3ltZIScds6Q%3A2%3A1688089120%3A-1%3A6287;fbl_cs=AhCDOR1VSDgRSAEciJqFDMUHGGRLTGJYTj1UemlobGtuZWNqd3ZtND1VVg;fbl_ci=170098432680697;m_page_voice=100003322160627;wl_cbv=v2%3Bclient_version%3A2281%3Btimestamp%3A1688484704;fbl_st=100424627%3BT%3A28141411;presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1688484861588%2C%22v%22%3A1%7D;fr=0xNh2mMnFnanHAMQs.AWXkwfrenqUQwt7tfHDMZFL61qg.BjfGPv.ob.AAA.0.0.BkpDyr.AWVAKZDCMQs;wd=980x1944;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.quangbao04.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `
        https://api.screenshotmachine.com/?key=4ec4c7&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `➜ Cap wall Facebook dạng pc nền đen của bạn đây`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
          }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("n", event.threadID, event.messageID);
            	if (choose > 2 || choose < 1) return api.sendMessage("u", event.threadID, event.messageID); 
    }
    }
}
      }