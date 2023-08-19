const num = 5 //số lần spam bị ban -1, ví dụ 5 lần gì lần 6 sẽ bị ban
const timee = 60 // trong thời gian `timee` spam `num` lần sẽ bị ban
module.exports.config = {
  name: "spamban",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "NTKhang", //fix get by  D-Jukie
  description: `tự động cấm người dùng nếu spam bot ${num} lần/${timee}s`,
  commandCategory: "Admin",
  usages: "x",
  cooldowns: 0
};

module.exports. run = async function ({api, event})  {
  return api.sendMessage(`Tự động cấm người dùng nếu spam ${num} lần/${timee}s`, event.threadID, event.messageID);
};

module.exports.handleEvent = async function ({ Users, Threads, api, event})  {
  let { senderID, messageID, threadID } = event;
  var datathread = (await Threads.getData(event.threadID)).threadInfo;
  
  if (!global.client.autoban) global.client.autoban = {};
  
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(threadID) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;
  if (!event.body || event.body.indexOf(prefix) != 0) return;
  
  if ((global.client.autoban[senderID].timeStart + (timee*1000)) <= Date.now()) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >= num) {
      var namethread = datathread.threadName;
      const moment = require("moment-timezone");
      const timeDate = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
      let dataUser = await Users.getData(senderID) || {};
      let data = dataUser.data || {};
      if (data && data.banned == true) return;
      data.banned = true;
      data.reason = `spam bot ${num} lần/${timee}s` || null;
      data.dateAdded = timeDate;
      await Users.setData(senderID, { data });
      global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
      global.client.autoban[senderID] = {
        timeStart: Date.now(),
        number: 0
      };
      api.sendMessage("➜ Tên : " + dataUser.name + `\n➜ Bạn đã bị ban khỏi hệ thông bot\n➜ Lý do : Spam bot ${num} lần / ${timee}s\n➜ Thời gian bị ban : Vô thời hạn\n➜ Muốn gỡ band liên hệ Admin\n➜ FB: https://www.facebook.com/quangbao04\n➜ Donate cho admin để được unban một cách nhanh nhất =))`, threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`➜ Spam ${num} Lần/${timee}s\n➜ Ngời dùng : ${dataUser.name}\n➜ Nhóm : ${namethread}\n➜ Thời gian : ${timeDate}`, 
          ad);
    }
    })
    }
  }
};

        