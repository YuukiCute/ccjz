const tlt = 30  // Tỉ lệ thắng(%)
const min = 100 // Tiền cược tối thiểu($)
module.exports.config = {
  name: "baucua",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khoa",
  description: "Bầu cua nhưng nó lạ lắm :))",
  commandCategory: "Trò chơi",
  usages: "[bầu/cua/tôm/cá/nai/gà] money",
  cooldowns: 0
};
module.exports.run = async function ({ api, event, args, Currencies }) {
  const { threadID, messageID, senderID } = event;
  const {get} = require("axios"), fs = require("fs");
  const { loadImage, createCanvas } = require("canvas");
  if (args.length < 0x2) return api.sendMessage("Không đúng cú pháp!", threadID, messageID);
  var allface = ["bầu", "cua", "tôm", "cá", "nai", "gà"];
  var datcuoc = args[0].toLowerCase();
  if (!allface.includes(datcuoc)) return api.sendMessage("Làm đéo gì có mặt " + datcuoc + " :))? ", threadID, messageID);
  var dataMoney = await Currencies.getData(senderID);
  var money = dataMoney.money;
  var tiencuoc = parseInt(args[1]);
  if (isNaN(tiencuoc) || tiencuoc < 0x1) return api.sendMessage("Tiền cược đéo hợp lệ!", threadID, messageID);
  if (tiencuoc < min) return api.sendMessage("Cược gì có" + tiencuoc + "$ ít thế!", threadID, messageID);
  if (tiencuoc > money) return api.sendMessage("Bạn đéo có đủ " + tiencuoc + "$ để chơi!", threadID, messageID);
  var luckynumber = Math.floor(Math.random() * 0x64) + 0x1;
  if (luckynumber > tlt) allface.splice(allface.indexOf(datcuoc), 0x1);
  var ketqua = [ allface[Math.floor(Math.random() * allface.length)], allface[Math.floor(Math.random() * allface.length)], allface[Math.floor(Math.random() * allface.length)] ];
  function getlink(face) {
    var _0x7e7d;
    if (face == "bầu") _0x7e7d = "https://i.postimg.cc/SR3qy939/bau.png";
    if (face == "cua") _0x7e7d = "https://i.postimg.cc/0jbPRnWx/cua.png";
    if (face == "tôm") _0x7e7d = "https://i.postimg.cc/tCnpBrnN/tom.png";
    if (face == "cá") _0x7e7d = "https://i.postimg.cc/BnWskxx9/ca.png";
    if (face == "nai") _0x7e7d = "https://i.postimg.cc/05B9dgjN/nai.png";
    if (face == "gà") _0x7e7d = "https://i.postimg.cc/Kz9xHw5J/ga.png";
    return _0x7e7d;
  }
  var canvas = createCanvas(0x4B0, 0x384);
  var ctx = canvas.getContext("2d");
  var _0xda22 = await loadImage("https://i.postimg.cc/9fcVVWSb/background.png");
  ctx.drawImage(_0xda22, 0x0, 0x0, 0x4B0, 0x384);
  var count = 0x0;
  for (let i = 0x0; i <= 0x2; i++) {
    if (ketqua[i] == datcuoc) count++;
    var bc = await loadImage( getlink(ketqua[i]) );
    var x = i == 0x0 ? 0xFA : i == 0x1 ? 0x264 : 0x1E0;
    var y = i == 0x0 ? 0x81 : i == 0x1 ? 0x86 : 0x158;
    ctx.drawImage(bc, x, y, 0x172, 0x172);
  };
  const path = __dirname + "/cache/baucua.png";
  fs.writeFileSync(path, canvas.toBuffer("image/png"));
  const attachment = (await get(`https://i.imgur.com/dlrQjRL.gif`, { responseType: "stream"})).data
  var item = count == 0x0 ? `-${tiencuoc}` : `+${tiencuoc * count}`;
  if (count == 0x0) {
    Currencies.decreaseMoney(senderID, tiencuoc);
  } else Currencies.increaseMoney(senderID, tiencuoc * count);
api.sendMessage({body:`Đang lắc vui lòng chờ.....`,attachment}, threadID, (err, info) =>
setTimeout(() => {api.unsendMessage(info.messageID) } ,5000));
  setTimeout(() =>
  api.sendMessage({
    body: "Kết quả: " + ketqua.join(", ") + "\nCó " + count + " " + datcuoc + "  " + item,
    attachment: fs.createReadStream(path)
  }, threadID, () => fs.unlinkSync(path), messageID),8500);
}