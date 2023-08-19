module.exports.config = {
	name: "veai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "nnl",// đã mod và code 
	description: "Tạo ảnh từ văn bản của bạn",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event, args, Currencies, Users }) => {
	if(this.config.credits !== 'nnl') return api.sendMessage('Đã bảo đừng thay credits rồi mà không nghe, thay lại credits ngay không là đéo dùng được đâu nha', event.threadID, event.messageID);
	var data = await Currencies.getData(event.senderID);
const axios = require("axios")
  const fs = require("fs")
  const style_id = "28"
  const aspect_ratio = "1:1"
  const path1 = __dirname+`/cache/1.png`;
  const moment = require("moment-timezone");
  const { threadID, messageID, body} = event,{ PREFIX } = global.config;
   let threadSetting = global.data.threadData.get(threadID) || {};
let prefix = threadSetting.PREFIX || PREFIX;
  const push = []
            push.push(Date.now())
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var out = (msg) => api.sendMessage(msg, threadID, messageID);
  if (!args.join(" ")) return out(`Thiếu Nội Dung Muốn Vẽ\nVí Dụ:\n${prefix}aiveanh dragon baby 8k`);
       api.sendMessage(`Đang vẽ\nNôi dung: ${args.join("\n")}\n\nNgười dùng lệnh: ${(await Users.getData(event.senderID)).name}`, event.threadID , (err, info)  => setTimeout ( () => { api.unsendMessage(info.messageID) } , 20000))
  let getPorn = (await axios.get(`https://goatbot.tk/api/image/mdjrny?apikey=c2QoO01LwQ5oCOxSHmJp3t3pZbGWpWcX&prompt=${args.join("\n")}&style_id=${style_id}&aspect_ratio=${aspect_ratio}`,{ responseType:'arraybuffer'} )).data; 
  fs.writeFileSync(path1, Buffer.from(getPorn, "utf-8"));
  return api.sendMessage(
                        {
                            body: `Thành Công: ${(await Users.getData(event.senderID)).name}\nvào lúc: ${gio}\nThời gian xử lý: ${Math.floor((Date.now()- push[0])/1000)} giây `,
                            mentions: [
                                {
                                    tag: (await Users.getData(event.senderID)).name,
                                    id: event.senderID,
                                },
                            ],
  attachment: fs.createReadStream(path1)}, event.threadID, () => fs.unlinkSync(path1),event.messageID)}