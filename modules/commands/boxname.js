class Judas {
    get config() {
      return {
        name: "boxname",
        version: "1.1.2",
        hasPermssion: 1,
        credits: "Judas",
        description: "Cấm thành viên đổi biệt danh!",
        commandCategory: "Hệ thống quản trị viên",
        usages: "boxname",
        cooldowns: 5
      }
    }
   async handleEvent ({ event, api, models, Users, Threads, Currencies }) {
     try{
  const { join } = require("path")
   const { threadID } = event;
   const { readFileSync, writeFileSync, existsSync } = require("fs-extra");
 let threadInfo = await api.getThreadInfo(threadID);
 let u = threadInfo.nicknames;
 let v = threadInfo.threadName
   const pathxData = join(__dirname, "cache", "nickname", threadID + ".json");
       if (!existsSync(pathxData)) writeFileSync(pathxData, "[]", "utf-8");
   var dataJson = JSON.parse(readFileSync(pathxData, "utf-8"));
const z = dataJson.find(i => i == dataJson[0]) || { u }
if(!dataJson.find(i => i == dataJson[0])){
  const a = {
    name: v, id: u
  }
  dataJson.push(a)
  writeFileSync(pathxData, JSON.stringify(dataJson, null, 4), "utf-8");
}
       //console.log(!dataJson.find(i => i !== dataJson[0]))
 } catch(e){
       
 }}
   async onLoad(){
   const { existsSync, writeFileSync } = require('fs-extra')
   const { join } = require('path');
   const pathData = join(__dirname, "cache", "boxname.json");
   // const path1 = join(__dirname, "cache", "nickname", "nickname.json");
   if (!existsSync(pathData)) writeFileSync(pathData, "[]", "utf-8");
 // if (!existsSync(path1))  writeFileSync(path, "[]", "utf-8");
     }
  async run({ event, api, args, Users }) {
     const { readFileSync, writeFileSync } = require("fs-extra");
    const { join } = require("path")
  const pathData = join(__dirname, "cache", "boxname.json");
    const { threadID, messageID } = event;
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var Thread_1 = dataJson.find(item => item.boxid == threadID) || { boxid: threadID, boxname: false, username: false};
    if(!dataJson.find(item => item.boxid == threadID)){
      dataJson.push(Thread_1);
      writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
    } else if(args[0] == "boxname"){
        if(Thread_1.boxname == true){
            Thread_1.boxname = false
        } else {
            Thread_1.boxname = true
        }
    } else if(args[0] == "username"){
      if(Thread_1.username == true){
            Thread_1.username = false
        } else {
            Thread_1.username = true
        }
    } 
    
    writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
    return api.sendMessage({
    body:`[⚜️]=== 『 UPDATE SUCCESS 』 ===[⚜️]\n━━━━━━━━━━━━━━━━\n[⚜️]➜ Đã ${args[0] == "boxname" ? Thread_1.boxname : args[0] == "username" ? Thread_1.username : Thread_1.avtbox} ${args[0] == "boxname" ? "boxname" : "cấm đổi biệt danh" } thành công!`, attachment: (await axios.get((await axios.get(`https://docs-api.catteam123.repl.co/images/wallpaper?apikey=JRTvip_2200708248`)).data.data, {
                    responseType: 'stream'
                })).data
}, event.threadID, event.messageID);
  }
}
    module.exports = new Judas();