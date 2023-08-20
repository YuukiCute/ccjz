module.exports.config = {
    name: "tx2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie fix Kadeer",//fix lỗi vặt by tdung đụ thêm mod sơ sơ by tpk ;-;
    description: "Chơi tài xỉu",
    commandCategory: "Game",
    usages: "[tài/xỉu]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
  const concu = ["https://docs-api.catteam123.repl.co/game/taixiu"];
const cc = concu[Math.floor(Math.random()*concu.length)];
  var moneyBet = parseInt(args[1]) ? parseInt(args[1]) : money; //:))
    var thang = moneyBet * 2;
    const tax = thang * 5 / 100;
  const tong = thang - tax
    const { senderID, messageID, threadID } = event;
    const axios = require('axios');
    const fs = require("fs-extra");
    const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
    if (!args[0]) return api.sendMessage({
    body: `[ CÁCH CHƠI TÀI XỈU ]\n━━━━━━━━━━━━━━━━━━\n🎲 ${global.config.PREFIX}${this.config.name} tài/xỉu + tiền cược`,attachment: (await require('axios').get(`https://i.imgur.com/S3DaynE.jpeg`, {
        responseType: 'stream'
    })).data
}, event.threadID);
    const choose = args[0]
    if (choose.toLowerCase() != 'tài' && choose.toLowerCase() != 'xỉu') return api.sendMessage("[⚜️]➜ Chỉ đặt cược tài hoặc xỉu!", threadID, messageID)
    const money = args[1]
    if (money < 50 || isNaN(money)) return api.sendMessage("[⚜️]➜ Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < money) return api.sendMessage(`[⚜️]➜ Số dư bạn không đủ ${money}$ để có thể chơi`, threadID, messageID);
    try {
        const res = await axios.get(`${cc}`)
  const ketqua = res.data.total;
        const images = [];
        const result = res.data.result;
        for (var i in res.data.images) {
  let path = __dirname + `/cache/${i}.png`;
  let imgs = (await axios.get(`${res.data.images[i]}`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(path, Buffer.from(imgs, "utf-8"));
            images.push(fs.createReadStream(path));
        }
    if (choose == result) {
  await Currencies.increaseMoney(senderID, parseInt(money * 2));
  api.sendMessage({
    attachment: images,
      body: `🌸=== [ 𝐘𝐎𝐔 𝐖𝐈𝐍 ] ===🌸\n\n[🎋]➜ 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘁𝗵𝗮̆́𝗻𝗴\n[🎲]➜ 𝗡𝗵𝗮̀ 𝗰𝗮́𝗶 𝗿𝗮: ${result} ${ketqua}\n[👤]➜ 𝗕𝗮̣𝗻 𝗰𝗵𝗼̣𝗻: ${args[0].toLocaleLowerCase()}\n[🧧]➜ 𝗚𝗼𝗺 𝘃𝗲̂̀ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻: ${money*2}$\n━━━━━━━━━━━━━━━━━━\n[💵]➜ 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝘁𝗿𝗼𝗻𝗴 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀\n${moneyUser + money*2}`},threadID, messageID);
  }
else {
        await Currencies.decreaseMoney(senderID, parseInt(money));
  api.sendMessage({
    attachment: images,
      body: `🌸=== [ 𝗬𝗢𝗨 𝗟𝗢𝗦𝗘 ] ===🌸
\n[🎋]➜ 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘁𝗵𝘂𝗮 𝘀𝗮̆́𝗽 𝗺𝗮̣̆𝘁\n[🎲]➜ 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉: ${result} ${ketqua}\n[👤]➜ 𝗕𝗮̣𝗻 𝗰𝗵𝗼̣𝗻: ${args[0].toLocaleLowerCase()}\n[🧨]➜ 𝗕𝗮𝘆 𝗺𝗮̀𝘂: ${money}$💵\n━━━━━━━━━━━━━━━━━━\n[💵]➜ 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝘁𝗿𝗼𝗻𝗴 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻𝗴 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀\n${moneyUser + money*2}`},threadID, messageID);
  for(let i = 0; i < images.length; i++) {
            fs.unlinkSync(__dirname + `/cache/${i}.png`);
  }
}
} catch (err) {
        console.log(err)
        return api.sendMessage("[⚜️]➜ Đã xảy ra lỗi", event.threadID);
    }
}
