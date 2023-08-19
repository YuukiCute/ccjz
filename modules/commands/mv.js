module.exports.config = {
    name: "mv",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "..",//tổng hợp api của Bảo
    description: "Xem video random trên bot",
    commandCategory: "Ảnh",
    usages: "reply",
    cooldowns: 0,
  };
module.exports.run = async function ({ event, api , args, Users}){
    const fs = require("fs-extra");
    const a = require("axios");
    var link = "https://i.imgur.com/InQhOKu.png";
    let name1 = await Users.getNameUser(event.senderID)
    var name = ["𝐀𝐧𝐢𝐦𝐞 🤍", "𝐆𝐚́𝐢 ❤️", "𝐓𝐢𝐤𝐭𝐨𝐤 💜", "𝐒𝐞𝐱 💚", "𝐀̂𝐦 𝐧𝐡𝐚̣𝐜 💙"]
    var b = name.length;
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 10;
    var numPage = Math.ceil(b / limit);
    var msg = `🎞 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐕𝐢𝐝𝐞𝐨 🎞\n━━━━━━━━━━━━━━━\n`;
    var x = 1;
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= b) break;
        msg += `[ ${i+1} ] → ${name[i]}\n\n`;
    }
        msg += `━━━━━━━━━━━━━━━\n\ ${name1} reply tin nhắn theo số thứ tự để chọn video`;
    return api.sendMessage({body:msg, 
attachment: (await a.get(link, {
        responseType: "stream"
})).data
},event.threadID, (error, info) =>
    {
      global.client.handleReply.push(
      {
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "choose"
      });
    }, event.messageID);
  }
  module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
    const axios = require("axios");
    
             if(event.body == "1"){
         var url = "https://api.quangbao.click/images/vdanime"
}
             if(event.body == "2"){
         var url = "https://api.quangbao.click/images/videogaixinh"
}
             if(event.body == "3"){
         var url = "https://api.quangbao.click/images/vdtiktok"
}
             if(event.body == "4"){
         var url = "https://api.quangbao.click/images/videosex"
}
             if(event.body == "5"){
         var url = "https://api.quangbao.click/images/music"
}
    switch(handleReply.type){
    case "choose":{
    api.unsendMessage(handleReply.messageID);
    const res = await axios.get(url);
    const fs = require ("fs");
    let name = await Users.getNameUser(event.senderID)
    const data = res.data.url;
    const download = (await axios.get(data, {
        responseType: "stream"
    })).data;
    return api.sendMessage({body: `Video của ${name} đây 💗`, attachment : download}, event.threadID)
}
    }
}