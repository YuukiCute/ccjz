module.exports.config = {
    name: 'goibot',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',//mod thêm by tpk
    description: 'Trò truyện cùng simi chat',
    commandCategory: 'Người dùng',
    usages: '[hey simi]',
    cooldowns: 2,
};
const {
    get
} = require('axios');
const CN = `${global.configApi.domain}/sim?type=ask&ask=`
//https://docs-api.jrtxtracy.repl.co/sim?//${global.configApi.domain}/sim?type=ask&ask=${g(a)}//type=ask&ask=sim%20%C6%A1i
module.exports.run = () => {};
module.exports.handleEvent = async function( {
    api, event
}) {
var hm =['ơi ơi bot nghe nè', 'yêu không mà gọi','nghe nè vợ','yêu nhau hong?','donate cho admin bot đi :>','chào chồng iu', "bot có mặt", "Bae ăn cơm chưa?", "Tuyển phi công nè ạ", "Nếu cậu đang cô đơn thì chúng ta có thể thành đôi :3", "Làm chồng em không ạ?", "Công chúa em sao đấy?", "Có gì ăn không:(( đói quáaa", "Yêu em không?", "cậu bị làm sao í@@", "Chần chờ gì chồng ơi em đâyyy", "Yeu em rat nhieu ^^", "Đợi xí. Đi ẻ cái :()", "Anh quát em à?\nNói to thế á?", "lalalalaaaa", "Bae, em nhu bong hoa. Nhung nguoi hai dau phai ta 💔", "Overnight không?", "Hát đi cho kẹo 🍭", "vợ gọi có việc gì không?", "Dzạaaaaa~~~", "Dzạ em đây :>", "sao thế bae yêu dấu :>", "Sao thế công chúa", "Nếu một ngày nào đó bạn gọi tôi mà tôi không trả lời nghĩa là bot bị payyy acccc ;-;", "Vợ gọi có việc gì không?", "Sao thế công chúa nhõng nhẽo của em", "Làm vợ anh ko ạ?"]
  var t = hm[Math.random()*hm.length<<0]
    if (['bot', 'hi bot','bot đâu','bot ncc','bot ơi','bot xịn','kêu mọi người lên tương tác đi bot','Chào bot','hello bot','sim','sim ơi','bye bot', 'bot lỏ'].includes(event.body.toLowerCase())) {
       api.sendMessage( `${t}`, event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
    };
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}) {
    const res = await get(`${CN}${encodeURI(event.body)}`);
   if (res.data.error) return api.sendMessage(`${res.data.error}`, event.threadID, (err, data) => global.client.hhandleReply.push({
       name: this.config.name,
       messageID: data.messageID,
       ask: event.body
   }), event.messageID); else api.sendMessage(`${res.data.answer}`, event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
};