const axios = require("axios");

module.exports.config = {
	name: "loibaihat",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT - Nanika",
	description: "Lời bài hát from nhaccuatui",
	commandCategory: "Phương tiện",
	usages: "loibaihat [tên bài hát]",
	cooldowns: 5
};
  
module.exports.run = async function ({ api, event, args }) {
    try {
      const lyrics = args.join(' ');
      if (!lyrics) {
        return api.sendMessage(`══════╗ ⇲  Media  ⇱ ╚══════\n\n𖢨 · Lệnh: lbh (tìm kiếm lời bài hát)\n𖢨 · Cách dùng: ${global.config.PREFIX}lbh <tên bài hát>`, event.threadID, event.messageID);
      }
      const { data } = await axios.get(`https://api.dev-tantrik.repl.co/lyrics?song=${lyrics}&apikey=oEw3Cd14J7FG3M6`);
      const stream = (await axios.get(data.thumbnail, { responseType: 'stream' })).data;
      const messageData = {
        body: `══════╗ ⇲  Lyrics  ⇱ ╚══════\n\n𖢨 · Tên bài hát: ${data.title || ''}\n𖢨 · Nghệ sĩ: ${data.artist || ''}\n𖢨 · Lời bài hát:\n${data.lyrics || ''}`,
        attachment: stream
      };
      return api.sendMessage(messageData, event.threadID);
    } catch (error) {
      console.error(error);
      return api.sendMessage("Đã xảy ra lỗi!", event.threadID, event.messageID);
    }
  };