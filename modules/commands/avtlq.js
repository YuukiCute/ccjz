module.exports.config = {
    name: "avtlq",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "cutaotokhong",
    description: "",
    commandCategory: "Tạo ảnh",  
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    let timeStart = Date.now();
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
let text = args.join(" ")
  if (!text) return api.sendMessage('Vui lòng nhập đúng định dạng [id | name | color]!', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
 const id = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
  const name = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
  const color = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
  ;
 
	 var callback = () => api.sendMessage({body:`Id : ${id}\nName : ${name}\nColor : ${color}\nThời gian chờ : ${Math.floor((Date.now() - timeStart)/1000)}s`,attachment: fs.createReadStream(__dirname + "/cache/avtlq.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/avtlq.png"),event.messageID);
	 return request(encodeURI(`https://api.taoanhdep.link/lienquanavatar?id=${id}&name=${name}&color=${color}`)).pipe(fs.createWriteStream(__dirname+'/cache/avtlq.png')).on('close',() => callback());     
}}