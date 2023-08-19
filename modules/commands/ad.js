//6628568379%7Cc1e620fa708a1d5696fb991c1bde5662
const request = require('request');

const fs = global.nodemodule["fs-extra"]

module.exports.config = {

  name: "ad",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "JRT",

  description: "Kiểm tra thông tin adminbot",

  commandCategory: "Thông tin",

  usages: "ad",

  cooldowns: 0,

  dependencies: {

"request": ""

}

};
module.exports.run = async({api,event,args,Users,global,Currencies}) => {

var callback = () => api.sendMessage(

  {body:`[⚜️]=== 『 INFORMATION ADMIN 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆


[👀]➜ Tên: Lê Đức Thuận
[💮]➜ Biệt danh: Yuu 
[❎]➜ Ngày tháng năm sinh: 28/03/2005
[👤]➜ Giới tính: Nam
[💫]➜ Chiều cao cân nặng: 1m70 x 60 kg
[❤️]➜ Tên vợ: Nguyễn Bảo Giang
[🧸]➜ Biệt danh: Ely
[💥]➜ Ngày sinh: 07/12/2000
[🌎]➜ Quê quán: Ninh Bình
[🌸]➜ Tính cách: Chịu~~
[🌀]➜ Sở thích: Thích Ely!

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆


[👉]➜ Information: https://reineowo.com
[☎]➜ SĐT & Zalo: 0898724512
[🌐]➜ Facebook: https://www.facebook.com/kiriha.yukii
[⛱]➜ TikTok: https://www.tiktok.com/@yuusocuti

[⚜️]=== 『 CONTACT 』 ===[⚜️]
◆━━━━━━━━━━━━━━━━◆



[❗]➜ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin theo các link ở trên.
[📌]➜ Hãy đồng hành cùng Yuuki Chan và mình nhé. Cảm ơn mọi người <3

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

[📝]➜ Bot được điều hành bởi Yuu`,

    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 

    fs.unlinkSync(__dirname + "/cache/1.png"));  

      return request(

        encodeURI(`https://raw.githubusercontent.com/YuukiCute/web/main/images/01.jpg`)).pipe(

fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

       };