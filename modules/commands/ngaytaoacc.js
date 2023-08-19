module.exports.config = {
	name: "ngaytaoacc",
	version: "1.0.7",
	hasPermssion: 0,
	credits: "Raiden Shogun",
	description: "Tìm ngày giờ tạo nick facebook",
	commandCategory: "Tiện Ích",
	usages: "seachdatefb id",
	cooldowns: 5
};
module.exports.run = async ({ api, event, args }) =>
{
  const axios = require("axios");
  if (!args[0]) return api.sendMessage("Vui lòng nhập id cần tìm", event.threadID, event.messageID);
  const res = await axios.get(`https://baodapchai.quangbao04.repl.co/facebook/finduid?uid=${args.join(" ")}`);
  if (res.status == 200) {
  const finduid = res.data.uid
  const finddate = res.data.day
  return api.sendMessage(`ID: ${finduid}\nTime: ${finddate}`, event.threadID, event.messageID);
  }
  else {
    return api.sendMessage(`[ #224 ] - Lỗi`, event.threadID, event.messageID);
  }
}