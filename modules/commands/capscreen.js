const axios = require("axios");
const fs = require("fs");
module.exports.config = {
	name: "capscreen",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Tpk - táo",
	description: "Cap màn hình",
	commandCategory: "Công cụ",
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
      "https://i.imgur.com/o0KHC1L.jpeg",
"https://i.imgur.com/PqIIp1K.jpeg",
"https://i.imgur.com/FxanUY3.jpg",
      "https://i.imgur.com/nSlsm9v.jpg",
              ];
let image = [];
 for(let i = 0; i < 4; i++) {
    const stream = (await axios.get(cc[i], {
        responseType: "stream"
    })).data;
    image.push(stream);
};
  const ccc = {
    body: `🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━
[👉]➜ 𝗗𝘂̛𝗼̛́𝗶 𝗹𝗮̀ 𝗰𝗮́𝗰 𝗹𝗼𝗮̣𝗶 𝗰𝗮𝗽 𝗯𝗮̣𝗻 𝗵𝗮̃𝘆 𝗰𝗵𝗼̣𝗻

𝟭. 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗱𝗮̣𝗻𝗴 đ𝗶𝗲̣̂𝗻 𝘁𝗵𝗼𝗮̣𝗶 𝗻𝗲̂̀𝗻 𝘁𝗿𝗮̆́𝗻𝗴 ⚪
𝟮. 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗱𝗮̣𝗻𝗴 𝗻𝗲̂̀𝗻 𝗽𝗰 𝗻𝗲̂̀𝗻 𝘁𝗿𝗮̆́𝗻𝗴 ⚪
𝟯. 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗱𝗮̣𝗻𝗴 đ𝗶𝗲̣̂𝗻 𝘁𝗵𝗼𝗮̣𝗶 𝗻𝗲̂̀𝗻 đ𝗲𝗻 🖤
𝟰. 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗱𝗮̣𝗻𝗴 𝗽𝗰 𝗻𝗲̂̀𝗻 đ𝗲𝗻 🖤

[⚠️]➜ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗸𝗲̀𝗺 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝗰𝗵𝗼̣𝗻
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
    api.sendMessage({body: `[⏳]➜ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `dpr=1.25; datr=iO3QYzGMpva0ueNPdA_RfZvp; locale=vi_VN; imei=; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABbirYQNFvCcxocFEwQWhPKb0oa-LQA%22%2C%222%22%3A%22GSwVQBxMAAAWABbotKa_DBYAABV-HEwAABYAFvK0pr8MFgAAFigA%22%2C%225%22%3A%22GTwVNBxMAAAWABb0tKa_DBYAABVwHEwAABYAFvS0pr8MFgAAFYABHEwAABYAFvS0pr8MFgAAFigA%22%2C%227%22%3A%22KLUv_SK4tyLVAAAzAQTuWY78vKGik89y5OfNw6AVA_QC9LPVKw%22%2C%2216%22%3A%22FQQVCBmcFQQVdCb0tKa_DBYAABUEFWom9rSmvwwWAAAVBBViJvS0pr8MFgAAFQQVbib8tKa_DBYAABUEFTom-LSmvwwWAAAVBBUMJva0pr8MFgAAFQQVPCb4tKa_DBYAABUEFWAm-rSmvwwWAAAVBBVSJvq0pr8MFgAAFqYGEQA%22%2C%2226%22%3A%22dummy_cursor%22%2C%2228%22%3A%221676987705%22%7D%2C%22d%22%3A%2222578435-aeba-4be0-8d56-85aead60c0b7%22%2C%22s%22%3A%220%22%7D; c_user=100022089907330; wd=1536x714; sb=FD48ZFd_NTyVnpLQ_FmrSenu; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1682044365579%2C%22v%22%3A1%7D; xs=46%3AtGegGcvv4xnfrg%3A2%3A1681406788%3A-1%3A6158%3A%3AAcU8-gZcd37dwOaHKBIlX2dsuiJDr6A0TTXishxK4g; fr=0Z6zxKOWPpQIEOGjL.AWWLAdAGnG6UJkNzrCq12boqzTo.BkQhC1.H3.AAA.0.0.BkQhC6.AWXoRYIfbFs; fr=0Z6zxKOWPpQIEOGjL.AWXkKingVFskrhpu9uz_MWV3gds.BkQhC1.H3.AAA.0.0.BkQhC-.AWVIAkz1Wt8; dpr=1.25; wd=1536x714; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMi4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36; `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `dpr=1.25; datr=iO3QYzGMpva0ueNPdA_RfZvp; locale=vi_VN; imei=; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABbirYQNFvCcxocFEwQWhPKb0oa-LQA%22%2C%222%22%3A%22GSwVQBxMAAAWABbotKa_DBYAABV-HEwAABYAFvK0pr8MFgAAFigA%22%2C%225%22%3A%22GTwVNBxMAAAWABb0tKa_DBYAABVwHEwAABYAFvS0pr8MFgAAFYABHEwAABYAFvS0pr8MFgAAFigA%22%2C%227%22%3A%22KLUv_SK4tyLVAAAzAQTuWY78vKGik89y5OfNw6AVA_QC9LPVKw%22%2C%2216%22%3A%22FQQVCBmcFQQVdCb0tKa_DBYAABUEFWom9rSmvwwWAAAVBBViJvS0pr8MFgAAFQQVbib8tKa_DBYAABUEFTom-LSmvwwWAAAVBBUMJva0pr8MFgAAFQQVPCb4tKa_DBYAABUEFWAm-rSmvwwWAAAVBBVSJvq0pr8MFgAAFqYGEQA%22%2C%2226%22%3A%22dummy_cursor%22%2C%2228%22%3A%221676987705%22%7D%2C%22d%22%3A%2222578435-aeba-4be0-8d56-85aead60c0b7%22%2C%22s%22%3A%220%22%7D; c_user=100022089907330; wd=1536x714; sb=FD48ZFd_NTyVnpLQ_FmrSenu; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1682044365579%2C%22v%22%3A1%7D; xs=46%3AtGegGcvv4xnfrg%3A2%3A1681406788%3A-1%3A6158%3A%3AAcU8-gZcd37dwOaHKBIlX2dsuiJDr6A0TTXishxK4g; fr=0Z6zxKOWPpQIEOGjL.AWWLAdAGnG6UJkNzrCq12boqzTo.BkQhC1.H3.AAA.0.0.BkQhC6.AWXoRYIfbFs; fr=0Z6zxKOWPpQIEOGjL.AWXkKingVFskrhpu9uz_MWV3gds.BkQhC1.H3.AAA.0.0.BkQhC-.AWVIAkz1Wt8; dpr=1.25; wd=1536x714; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMi4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36; `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.vorhaidang0123.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=a1bbf7&url=${url}&dimension=480x800`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━━
[🌸]➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝘂̉𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
━━━━━━━━━━━━━━━━━━━
[⚜️]➜ 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗱𝗮̣𝗻𝗴 đ𝗶𝗲̣̂𝗻 𝘁𝗵𝗼𝗮̣𝗶 𝗻𝗲̂̀𝗻 𝘁𝗿𝗮̆́𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆 `,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
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
    api.sendMessage({body: `[⏳]➜ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `dpr=1.25; datr=iO3QYzGMpva0ueNPdA_RfZvp; locale=vi_VN; imei=; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABbirYQNFvCcxocFEwQWhPKb0oa-LQA%22%2C%222%22%3A%22GSwVQBxMAAAWABbotKa_DBYAABV-HEwAABYAFvK0pr8MFgAAFigA%22%2C%225%22%3A%22GTwVNBxMAAAWABb0tKa_DBYAABVwHEwAABYAFvS0pr8MFgAAFYABHEwAABYAFvS0pr8MFgAAFigA%22%2C%227%22%3A%22KLUv_SK4tyLVAAAzAQTuWY78vKGik89y5OfNw6AVA_QC9LPVKw%22%2C%2216%22%3A%22FQQVCBmcFQQVdCb0tKa_DBYAABUEFWom9rSmvwwWAAAVBBViJvS0pr8MFgAAFQQVbib8tKa_DBYAABUEFTom-LSmvwwWAAAVBBUMJva0pr8MFgAAFQQVPCb4tKa_DBYAABUEFWAm-rSmvwwWAAAVBBVSJvq0pr8MFgAAFqYGEQA%22%2C%2226%22%3A%22dummy_cursor%22%2C%2228%22%3A%221676987705%22%7D%2C%22d%22%3A%2222578435-aeba-4be0-8d56-85aead60c0b7%22%2C%22s%22%3A%220%22%7D; c_user=100022089907330; wd=1536x714; sb=FD48ZFd_NTyVnpLQ_FmrSenu; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1682044365579%2C%22v%22%3A1%7D; xs=46%3AtGegGcvv4xnfrg%3A2%3A1681406788%3A-1%3A6158%3A%3AAcU8-gZcd37dwOaHKBIlX2dsuiJDr6A0TTXishxK4g; fr=0Z6zxKOWPpQIEOGjL.AWWLAdAGnG6UJkNzrCq12boqzTo.BkQhC1.H3.AAA.0.0.BkQhC6.AWXoRYIfbFs; fr=0Z6zxKOWPpQIEOGjL.AWXkKingVFskrhpu9uz_MWV3gds.BkQhC1.H3.AAA.0.0.BkQhC-.AWVIAkz1Wt8; dpr=1.25; wd=1536x714; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMi4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36; `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `dpr=1.25; datr=iO3QYzGMpva0ueNPdA_RfZvp; locale=vi_VN; imei=; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABbirYQNFvCcxocFEwQWhPKb0oa-LQA%22%2C%222%22%3A%22GSwVQBxMAAAWABbotKa_DBYAABV-HEwAABYAFvK0pr8MFgAAFigA%22%2C%225%22%3A%22GTwVNBxMAAAWABb0tKa_DBYAABVwHEwAABYAFvS0pr8MFgAAFYABHEwAABYAFvS0pr8MFgAAFigA%22%2C%227%22%3A%22KLUv_SK4tyLVAAAzAQTuWY78vKGik89y5OfNw6AVA_QC9LPVKw%22%2C%2216%22%3A%22FQQVCBmcFQQVdCb0tKa_DBYAABUEFWom9rSmvwwWAAAVBBViJvS0pr8MFgAAFQQVbib8tKa_DBYAABUEFTom-LSmvwwWAAAVBBUMJva0pr8MFgAAFQQVPCb4tKa_DBYAABUEFWAm-rSmvwwWAAAVBBVSJvq0pr8MFgAAFqYGEQA%22%2C%2226%22%3A%22dummy_cursor%22%2C%2228%22%3A%221676987705%22%7D%2C%22d%22%3A%2222578435-aeba-4be0-8d56-85aead60c0b7%22%2C%22s%22%3A%220%22%7D; c_user=100022089907330; wd=1536x714; sb=FD48ZFd_NTyVnpLQ_FmrSenu; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1682044365579%2C%22v%22%3A1%7D; xs=46%3AtGegGcvv4xnfrg%3A2%3A1681406788%3A-1%3A6158%3A%3AAcU8-gZcd37dwOaHKBIlX2dsuiJDr6A0TTXishxK4g; fr=0Z6zxKOWPpQIEOGjL.AWWLAdAGnG6UJkNzrCq12boqzTo.BkQhC1.H3.AAA.0.0.BkQhC6.AWXoRYIfbFs; fr=0Z6zxKOWPpQIEOGjL.AWXkKingVFskrhpu9uz_MWV3gds.BkQhC1.H3.AAA.0.0.BkQhC-.AWVIAkz1Wt8; dpr=1.25; wd=1536x714; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMi4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36; `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.vorhaidang0123.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=a1bbf7&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `‎🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━━
[🌸]➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝘂̉𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
━━━━━━━━━━━━━━━━━━━
[⚜️]➜ 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗱𝗮̣𝗻𝗴 𝗽𝗰 𝗻𝗲̂̀𝗻 𝘁𝗿𝗮̆́𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
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
    api.sendMessage({body: `[⏳]➜ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `dpr=1.25; datr=iO3QYzGMpva0ueNPdA_RfZvp; locale=vi_VN; imei=; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABbirYQNFvCcxocFEwQWhPKb0oa-LQA%22%2C%222%22%3A%22GSwVQBxMAAAWABbotKa_DBYAABV-HEwAABYAFvK0pr8MFgAAFigA%22%2C%225%22%3A%22GTwVNBxMAAAWABb0tKa_DBYAABVwHEwAABYAFvS0pr8MFgAAFYABHEwAABYAFvS0pr8MFgAAFigA%22%2C%227%22%3A%22KLUv_SK4tyLVAAAzAQTuWY78vKGik89y5OfNw6AVA_QC9LPVKw%22%2C%2216%22%3A%22FQQVCBmcFQQVdCb0tKa_DBYAABUEFWom9rSmvwwWAAAVBBViJvS0pr8MFgAAFQQVbib8tKa_DBYAABUEFTom-LSmvwwWAAAVBBUMJva0pr8MFgAAFQQVPCb4tKa_DBYAABUEFWAm-rSmvwwWAAAVBBVSJvq0pr8MFgAAFqYGEQA%22%2C%2226%22%3A%22dummy_cursor%22%2C%2228%22%3A%221676987705%22%7D%2C%22d%22%3A%2222578435-aeba-4be0-8d56-85aead60c0b7%22%2C%22s%22%3A%220%22%7D; c_user=100022089907330; wd=1536x714; sb=FD48ZFd_NTyVnpLQ_FmrSenu; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1682044365579%2C%22v%22%3A1%7D; xs=46%3AtGegGcvv4xnfrg%3A2%3A1681406788%3A-1%3A6158%3A%3AAcU8-gZcd37dwOaHKBIlX2dsuiJDr6A0TTXishxK4g; fr=0Z6zxKOWPpQIEOGjL.AWWLAdAGnG6UJkNzrCq12boqzTo.BkQhC1.H3.AAA.0.0.BkQhC6.AWXoRYIfbFs; fr=0Z6zxKOWPpQIEOGjL.AWXkKingVFskrhpu9uz_MWV3gds.BkQhC1.H3.AAA.0.0.BkQhC-.AWVIAkz1Wt8; dpr=1.25; wd=1536x714; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMi4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36; `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `dpr=1.25; datr=iO3QYzGMpva0ueNPdA_RfZvp; locale=vi_VN; imei=; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABbirYQNFvCcxocFEwQWhPKb0oa-LQA%22%2C%222%22%3A%22GSwVQBxMAAAWABbotKa_DBYAABV-HEwAABYAFvK0pr8MFgAAFigA%22%2C%225%22%3A%22GTwVNBxMAAAWABb0tKa_DBYAABVwHEwAABYAFvS0pr8MFgAAFYABHEwAABYAFvS0pr8MFgAAFigA%22%2C%227%22%3A%22KLUv_SK4tyLVAAAzAQTuWY78vKGik89y5OfNw6AVA_QC9LPVKw%22%2C%2216%22%3A%22FQQVCBmcFQQVdCb0tKa_DBYAABUEFWom9rSmvwwWAAAVBBViJvS0pr8MFgAAFQQVbib8tKa_DBYAABUEFTom-LSmvwwWAAAVBBUMJva0pr8MFgAAFQQVPCb4tKa_DBYAABUEFWAm-rSmvwwWAAAVBBVSJvq0pr8MFgAAFqYGEQA%22%2C%2226%22%3A%22dummy_cursor%22%2C%2228%22%3A%221676987705%22%7D%2C%22d%22%3A%2222578435-aeba-4be0-8d56-85aead60c0b7%22%2C%22s%22%3A%220%22%7D; c_user=100022089907330; wd=1536x714; sb=FD48ZFd_NTyVnpLQ_FmrSenu; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1682044365579%2C%22v%22%3A1%7D; xs=46%3AtGegGcvv4xnfrg%3A2%3A1681406788%3A-1%3A6158%3A%3AAcU8-gZcd37dwOaHKBIlX2dsuiJDr6A0TTXishxK4g; fr=0Z6zxKOWPpQIEOGjL.AWWLAdAGnG6UJkNzrCq12boqzTo.BkQhC1.H3.AAA.0.0.BkQhC6.AWXoRYIfbFs; fr=0Z6zxKOWPpQIEOGjL.AWXkKingVFskrhpu9uz_MWV3gds.BkQhC1.H3.AAA.0.0.BkQhC-.AWVIAkz1Wt8; dpr=1.25; wd=1536x714; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMi4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36; `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.vorhaidang0123.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `
        https://api.screenshotmachine.com/?key=a1bbf7&url=${url}&dimension=480x800`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `‎🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━━
[🌸]➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝘂̉𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
━━━━━━━━━━━━━━━━━━━
[⚜️]➜ 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗱𝗮̣𝗻𝗴 đ𝗶𝗲̣̂𝗻 𝘁𝗵𝗼𝗮̣𝗶 𝗻𝗲̂̀𝗻 đ𝗲𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
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
    api.sendMessage({body: `[⏳]➜ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `dpr=1.25; datr=iO3QYzGMpva0ueNPdA_RfZvp; locale=vi_VN; imei=; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABbirYQNFvCcxocFEwQWhPKb0oa-LQA%22%2C%222%22%3A%22GSwVQBxMAAAWABbotKa_DBYAABV-HEwAABYAFvK0pr8MFgAAFigA%22%2C%225%22%3A%22GTwVNBxMAAAWABb0tKa_DBYAABVwHEwAABYAFvS0pr8MFgAAFYABHEwAABYAFvS0pr8MFgAAFigA%22%2C%227%22%3A%22KLUv_SK4tyLVAAAzAQTuWY78vKGik89y5OfNw6AVA_QC9LPVKw%22%2C%2216%22%3A%22FQQVCBmcFQQVdCb0tKa_DBYAABUEFWom9rSmvwwWAAAVBBViJvS0pr8MFgAAFQQVbib8tKa_DBYAABUEFTom-LSmvwwWAAAVBBUMJva0pr8MFgAAFQQVPCb4tKa_DBYAABUEFWAm-rSmvwwWAAAVBBVSJvq0pr8MFgAAFqYGEQA%22%2C%2226%22%3A%22dummy_cursor%22%2C%2228%22%3A%221676987705%22%7D%2C%22d%22%3A%2222578435-aeba-4be0-8d56-85aead60c0b7%22%2C%22s%22%3A%220%22%7D; c_user=100022089907330; wd=1536x714; sb=FD48ZFd_NTyVnpLQ_FmrSenu; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1682044365579%2C%22v%22%3A1%7D; xs=46%3AtGegGcvv4xnfrg%3A2%3A1681406788%3A-1%3A6158%3A%3AAcU8-gZcd37dwOaHKBIlX2dsuiJDr6A0TTXishxK4g; fr=0Z6zxKOWPpQIEOGjL.AWWLAdAGnG6UJkNzrCq12boqzTo.BkQhC1.H3.AAA.0.0.BkQhC6.AWXoRYIfbFs; fr=0Z6zxKOWPpQIEOGjL.AWXkKingVFskrhpu9uz_MWV3gds.BkQhC1.H3.AAA.0.0.BkQhC-.AWVIAkz1Wt8; dpr=1.25; wd=1536x714; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMi4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36; `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `dpr=1.25; datr=iO3QYzGMpva0ueNPdA_RfZvp; locale=vi_VN; imei=; m_ls=%7B%22c%22%3A%7B%221%22%3A%22HCwAABbirYQNFvCcxocFEwQWhPKb0oa-LQA%22%2C%222%22%3A%22GSwVQBxMAAAWABbotKa_DBYAABV-HEwAABYAFvK0pr8MFgAAFigA%22%2C%225%22%3A%22GTwVNBxMAAAWABb0tKa_DBYAABVwHEwAABYAFvS0pr8MFgAAFYABHEwAABYAFvS0pr8MFgAAFigA%22%2C%227%22%3A%22KLUv_SK4tyLVAAAzAQTuWY78vKGik89y5OfNw6AVA_QC9LPVKw%22%2C%2216%22%3A%22FQQVCBmcFQQVdCb0tKa_DBYAABUEFWom9rSmvwwWAAAVBBViJvS0pr8MFgAAFQQVbib8tKa_DBYAABUEFTom-LSmvwwWAAAVBBUMJva0pr8MFgAAFQQVPCb4tKa_DBYAABUEFWAm-rSmvwwWAAAVBBVSJvq0pr8MFgAAFqYGEQA%22%2C%2226%22%3A%22dummy_cursor%22%2C%2228%22%3A%221676987705%22%7D%2C%22d%22%3A%2222578435-aeba-4be0-8d56-85aead60c0b7%22%2C%22s%22%3A%220%22%7D; c_user=100022089907330; wd=1536x714; sb=FD48ZFd_NTyVnpLQ_FmrSenu; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1682044365579%2C%22v%22%3A1%7D; xs=46%3AtGegGcvv4xnfrg%3A2%3A1681406788%3A-1%3A6158%3A%3AAcU8-gZcd37dwOaHKBIlX2dsuiJDr6A0TTXishxK4g; fr=0Z6zxKOWPpQIEOGjL.AWWLAdAGnG6UJkNzrCq12boqzTo.BkQhC1.H3.AAA.0.0.BkQhC6.AWXoRYIfbFs; fr=0Z6zxKOWPpQIEOGjL.AWXkKingVFskrhpu9uz_MWV3gds.BkQhC1.H3.AAA.0.0.BkQhC-.AWVIAkz1Wt8; dpr=1.25; wd=1536x714; useragent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMi4wLjAuMCBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36; `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.vorhaidang0123.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `
        https://api.screenshotmachine.com/?key=a1bbf7&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `🌐==== [ 𝗖𝗔𝗣 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━━━━
[🌸]➜ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝘆𝗲̂𝘂 𝗰𝘂̉𝗮 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
━━━━━━━━━━━━━━━━━━━
[⚜️]➜ 𝗖𝗮𝗽 𝘄𝗮𝗹𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗱𝗮̣𝗻𝗴 𝗽𝗰 𝗻𝗲̂̀𝗻 đ𝗲𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝗮̂𝘆`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
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