module.exports.config = {
	name: "age",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Máy tính tuổi có ảnh",
	commandCategory: "Tạo ảnh",
	usages: "[DD/MM/YYYY]"
	+ "\nChi tiết:"
	+ "\n {p}{n} 12/03/2004 {xem tuổi của bạn}",
	cooldowns: 5
};


module.exports. run = async function({ api, event, args }) {
  const axios = require("axios");
  const date = (args[0] || "").split('/');
  if (date.length < 3) return api.sendMessage('Vui lòng nhập ngày tháng năm hợp lệ theo định dạng DD/MM/YYYY', event.threadID, event.messageID);
  axios.get('https://api.dev-tantrik.repl.co/age', {
    params: {
      day: date[0],
      month: date[1],
      year: date[2],
      apikey: "test-api"
    },
    responseType: "stream"
  })
  .then(response => {
    api.sendMessage({
      attachment: response.data
    }, event.threadID, event.messageID);
  })
  .catch(error => {
    if ((error).response) error.response.data.on("data", function(e) {
      const err = JSON.parse(e);
      api.sendMessage(`Đã xảy ra lỗi ${err.name}: ${err.message}`, event.threadID, event.messageID);
    });
m0  });
};