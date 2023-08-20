const config = {
name: "sticker",
version: "1.0.0",
hasPermssion: 0,
credits: "PL Xuân Trường",
description: "Lấy ID Sticker bằng cách reply",
commandCategory: "Công cụ",
usages: "Lấy ID Sticker",
cooldowns: 0
  }

 const run = async function ({ api, args, event, permssion }) {
   if (args[0]){
   return api.sendMessage({sticker: args[0]},event.threadID)
  }
   var check_Stick = event.messageReply.attachments[0].type
   var checkID_Stick = event.messageReply.attachments[0].ID
  if (check_Stick != "sticker") return;
if (event.type == 'message_reply') {
        api.sendMessage( `[⚜️]=== 『 SUCCESSFULL 』 ===[⚜️]\n◆━━━━━━━━━━━━━━━━◆\n\n[⚜️]➜ ID sticker của bạn đây:\n[⚜️]➜ID: ${checkID_Stick}`, event.threadID)
  console.log(check_Stick)
}
}

module.exports= {
  config,
  run
}