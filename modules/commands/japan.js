module.exports.config = {
	name: "japan",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh gái Nhật",
	commandCategory: "Random-img",
	usages: "japan",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
		axios.get('https://docs-api.catteam123.repl.co/images/gainhat?apikey=JRTvip_2200708248').then(res => {
		let callback = function () {
					api.sendMessage({
						body : ``,
						attachment: fs.createReadStream(__dirname + '/cache/6mui.jpg')
					}, event.threadID,(err, info) => setTimeout(() => api.unsendMessage(info.messageID), 5000), event.messageID, () => fs.unlinkSync(__dirname + '/cache/6mui.jpg'), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + '/cache/6mui.jpg')).on("close", callback);
      })
}