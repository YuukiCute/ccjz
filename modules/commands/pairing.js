module.exports = {
	config: {
		name: "pairing",
		version: "4.0",
		author: "Mr.Ben",
		description: "Ghép đôi và tìm hiểu nhau :>",
		usages: "Ghép đôi nam / nữ",
		hasPermssion: 0,
		commandCategory: "Tình yêu",
		cooldowns: 5
	},
	run,
	handleReply
}
async function run({ api, event, Currencies}) {
	try {
		const{
			sendMessage:Go
		}= api,
			money = (await Currencies.getData(event.senderID)).money;
		if (money < 5000) {
			return Go("[⚜️]➜ Tiền bạn không đủ 5000, vui lòng chăm làm việc với tiêu chí giàu thì có người yêu", event.threadID, event.messageID)
		}
		else {
			return Go("[⚜️]=== 『 PAIRING 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[⚜️]➜ Vui lòng chọn girl/boy, giới tính bạn muốn ghép đôi", event.threadID,  async(err, info)=>{
				if (err) {
					return Go("Đã xẩy ra lỗi" + err, event.threadID, event.messageID)
				}
				await Currencies.decreaseMoney(event.senderID, 5000)
				global.client.handleReply.push({
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					type: "gt"
				})
			}, event.messageID)
		}
	} catch (e) {
		console.log(e)
	}
}
async function circle(image) {
  const jimp = require('jimp');
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
};
async function handleReply({ api, event, handleReply: H }) {
  let mung = [
    "Chúc 2 bạn trăm năm hạnh phút",
    "Chúc 2 bạn xây dựng được 1 tổ ấm hạnh phúc",
    "Chúc 2 bạn cùng nhau nương tựa đến cuối đời",
    "Chúc 2 bạn hạnh phúc",
    "Trách phận vô duyên...",
  "Hơi thấp nhưng không sao. Hãy cố gắng lên!",
  "3 phần duyên nợ, 7 phần cố gắng",
  "Tỷ lệ mà mối quan hệ này có thể nên duyên cũng khá là nhỏ đấy! Phải cố gắng hơn nữa",
  "Date với nhau đi. Để mối quan hệ này có thể tiến xa hơn",
  "Hãy chủ động bắt chuyện hơn nữa. Hai bạn khá là hợp đôi",
  "Hãy tin vào duyên số đi, vì nó có thật đấy!",
  "Hợp đôi lắm đấy. Quan tâm chăm sóc cho mối quan hệ này nhiều hơn nữa nhé!",
  "Lưu số nhau đi, bao giờ cưới thì gọi nhau lên lễ đường!",
  "Cưới đi chờ chi!"
  ]
  let chuc = mung[Math.floor(Math.random() * mung.length)]
	try {
		const{
			sendMessage: Go
		} = api,
			axios = require("axios"), fs = require("fs-extra"), canvas = require("canvas"),
			infoT = (await api.getThreadInfo(event.threadID)).userInfo
		if (event.senderID != H.author ) {
			return Go("[⚜️]➜ Vui lòng chờ đến lượt", event.threadID, event.messageID)
		}
		if (event.args[0].toLowerCase() == "girl") {
			var id = []
			for (var info of infoT) {
				if (info.gender == "FEMALE") {
					id.push(info.id)
				}
			}
			const id2 = id[Math.floor(Math.random() * id.length)]
			var
				pathbanner = __dirname + "/cache/bannerghepdoi.jpg"
				path1 = __dirname + "/cache/ghepdoi1.jpg",
				path2 = __dirname + "/cache/ghepdoi2.jpg";
			var
				banner = (await axios.get("https://i.imgur.com/fK4CC3T.png", {responseType: "arraybuffer"})).data;
			fs.writeFileSync(pathbanner, Buffer.from(banner, "utf-8"));
			var
				avt1= (await axios.get(`https://graph.facebook.com/${H.author}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {responseType: "arraybuffer"})).data;
			fs.writeFileSync(path1, Buffer.from(avt1, "utf-8"))
			var
				avt2= (await axios.get(`https://graph.facebook.com/${id2}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {responseType: "arraybuffer"})).data;
			fs.writeFileSync(path2, Buffer.from(avt2, "utf-8"))
			av1 = await circle(path1)
			av2 = await circle(path2)
			var
				avatar1 = await canvas.loadImage(av1),
				avatar2 = await canvas.loadImage(av2),
				image = await canvas.loadImage(pathbanner),
				c = await canvas.createCanvas(image.width, image.height), 
				ctx = c.getContext("2d");
			ctx.drawImage(image, 0, 0);
			ctx.drawImage(avatar1, 150, 80, 100, 100)
			ctx.drawImage(avatar2, 335, 75, 100, 100)
		const ImageBuffer = c.toBuffer();
		fs.writeFileSync(pathbanner, ImageBuffer);
			api.sendMessage({
				body: `[⚜️]=== 『 PAIRING SUCCESS 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[⚜️]➜ Chúc mừng hai bạn: ${(await api.getUserInfo(H.author))[H.author].name} và ${(await api.getUserInfo(id2))[id2].name}\n[⚜️]➜ Lời chúc: ${chuc}\n[⚜️]➜ Lưu ý: Nếu cảm thấy không hợp, thì đừng lo trong nhóm bạn còn ${id.length} bạn nữ nữa mà`,
				attachment: fs.createReadStream(pathbanner)
			}, event.threadID, () => {
				fs.unlinkSync(pathbanner)
			}, event.messageID)
			return api.unsendMessage(H.messageID)
		}
		if (event.args[0].toLowerCase() == "boy") {
			var id = []
			for (var info of infoT) {
				if (info.gender == "MALE") {
					id.push(info.id)
				}
			}
			const id2 = id[Math.floor(Math.random() * id.length)]
			var
				pathbanner = __dirname + "/cache/bannerghepdoi.jpg"
				path1 = __dirname + "/cache/ghepdoi1.jpg",
				path2 = __dirname + "/cache/ghepdoi2.jpg";
			var
				banner = (await axios.get("https://i.imgur.com/fK4CC3T.png", {responseType: "arraybuffer"})).data;
			fs.writeFileSync(pathbanner, Buffer.from(banner, "utf-8"));
			var
				avt1= (await axios.get(`https://graph.facebook.com/${H.author}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {responseType: "arraybuffer"})).data;
			fs.writeFileSync(path1, Buffer.from(avt1, "utf-8"))
			var
				avt2= (await axios.get(`https://graph.facebook.com/${id2}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {responseType: "arraybuffer"})).data;
			fs.writeFileSync(path2, Buffer.from(avt2, "utf-8"))
			av1 = await circle(path1)
			av2 = await circle(path2)
			var
				avatar1 = await canvas.loadImage(av1),
				avatar2 = await canvas.loadImage(av2),
				image = await canvas.loadImage(pathbanner),
				c = await canvas.createCanvas(image.width, image.height), 
				ctx = c.getContext("2d");
			ctx.drawImage(image, 0, 0);
			ctx.drawImage(avatar1, 150, 80, 100, 100)
			ctx.drawImage(avatar2, 335, 75, 100, 100)
		const ImageBuffer = c.toBuffer();
		fs.writeFileSync(pathbanner, ImageBuffer);
			api.sendMessage({
				body: `[⚜️]=== 『 PAIRING SUCCESS 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[⚜️]➜ Chúc mừng hai bạn: ${(await api.getUserInfo(H.author))[H.author].name} và ${(await api.getUserInfo(id2))[id2].name}\n[⚜️]➜ Lời chúc: ${chuc}\n[⚜️]➜ Lưu ý: Nếu cảm thấy không hợp, thì đừng lo trong nhóm bạn còn ${id.length} bạn nam nữa mà`,
				attachment: fs.createReadStream(pathbanner)
			}, event.threadID, () => fs.unlinkSync(pathbanner), event.messageID)
			return api.unsendMessage(H.messageID)
		}
		else {
			return Go("[⚜️]➜ Vui lòng chỉ chọn boy/girl mún ghép đôi", event.threadID, event.messageID)
		}
	} catch (e) {
		console.log(e)
	}
}