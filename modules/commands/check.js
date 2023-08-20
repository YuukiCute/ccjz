module.exports.config = {
    name: "check",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "DungUwU && Nghĩa", 
    description: "Check tương tác ngày/tuần/toàn bộ", 
    commandCategory: "tiện ích", 
    usages: "< all/week/day >", 
    cooldowns: 5, 
    dependencies: {
        "fs": " ",
        "moment-timezone": " "
    }
};
const path = __dirname + '/checktt/';
const moment = require('moment-timezone');
module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
  setInterval(() => {
    const today = moment.tz("Asia/Ho_Chi_Minh").day();
    const checkttData = fs.readdirSync(path);
    checkttData.forEach(file => {
      let fileData = JSON.parse(fs.readFileSync(path + file));
      if (fileData.time != today) {
        setTimeout(() => {
          fileData = JSON.parse(fs.readFileSync(path + file));
          if (fileData.time != today) {
            fileData.time = today;
            fs.writeFileSync(path + file, JSON.stringify(fileData, null, 4));
          }
        }, 60 * 1000);
      }
    })
  }, 60 * 1000);
}
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, }) {
    if (event.isGroup != true) return;
    const threadInfo = await api.getThreadInfo(event.threadID)
    if (global.client.sending_top == true) return;
    const fs = global.nodemodule['fs'];
    const { threadID, senderID } = event;
    const today = moment.tz("Asia/Ho_Chi_Minh").day();

if (!fs.existsSync(path + threadID + '.json')) {
 const newObj = {
           total: [],
            week: [],
            day: [],
            time: today
        };
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
        const threadInfo = await Threads.getInfo(threadID) || {};
        if (threadInfo.hasOwnProperty('isGroup') && threadInfo.isGroup) {
            const UserIDs = threadInfo.participantIDs;
            for (user of UserIDs) {
                if (!newObj.total.find(item => item.id == user)) {
                    newObj.total.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.week.find(item => item.id == user)) {
                    newObj.week.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.day.find(item => item.id == user)) {
                    newObj.day.push({
                        id: user,
                        count: 0
                    });
                }
            }
        }
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
    }
    const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    if (threadData.time != today) {
        global.client.sending_top = true;
        setTimeout(() => global.client.sending_top = false, 5 * 60 * 1000);
    }
    const userData_week_index = threadData.week.findIndex(e => e.id == senderID);
    const userData_day_index = threadData.day.findIndex(e => e.id == senderID);
    const userData_total_index = threadData.total.findIndex(e => e.id == senderID);
    if (userData_total_index == -1) {
        threadData.total.push({
            id: senderID,
            count: 1,
        });
    } else threadData.total[userData_total_index].count++;
    if (userData_week_index == -1) {
        threadData.week.push({
            id: senderID,
            count: 1
        });
    } else threadData.week[userData_week_index].count++;
    if (userData_day_index == -1) {
        threadData.day.push({
            id: senderID,
            count: 1
        });
    } else threadData.day[userData_day_index].count++;
    fs.writeFileSync(path + threadID + '.json', JSON.stringify(threadData, null, 4));
}

module.exports.run = async function ({ api, event, args, Users, Threads }) {
    let threadInfo = await api.getThreadInfo(event.threadID);
    await new Promise(resolve => setTimeout(resolve, 500));
    const fs = global.nodemodule['fs'];
    const { threadID, messageID, senderID, mentions } = event;
    if (!fs.existsSync(path + threadID + '.json')) {
        return api.sendMessage("Chưa có thống kê dữ liệu", threadID);
    }
    const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    const query = args[0] ? args[0].toLowerCase() : '';

    if (query == 'locmem') {
        let threadInfo = await api.getThreadInfo(threadID);
        if (!threadInfo.adminIDs.some(e => e.id == senderID)) return api.sendMessage("Bạn không có quyền sử dụng lệnh này", threadID);
        if (!threadInfo.isGroup) return api.sendMessage("Chỉ có thể sử dụng trong nhóm", threadID);
        if (!threadInfo.adminIDs.some(e => e.id == api.getCurrentUserID())) return api.sendMessage("Bot cần qtv để thực hiện lệnh", threadID);
        if (!args[1] || isNaN(args[1])) return api.sendMessage("Error", threadID);
        let minCount = args[1],
            allUser = threadInfo.participantIDs;
        for (let user of allUser) {
            if (user == api.getCurrentUserID()) continue;
            if (!threadData.total.some(e => e.id == user) || threadData.total.find(e => e.id == user).count < minCount) {
                setTimeout(async () => {
                    await api.removeUserFromGroup(user, threadID);
                    for (let e in threadData) {
                        if (e == 'time') continue;
                        if (threadData[e].some(e => e.id == user)) {
                            threadData[e].splice(threadData[e].findIndex(e => e.id == user), 1);
                        }
                    }
                }, 1000);
            }
        }
        return api.sendMessage(`Đã xóa ${allUser.length - threadData.total.filter(e => e.count >= minCount).length} thành viên không đủ ${minCount} lần`, threadID);
    }

    var header = '',
        body = '',
        footer = '',
        msg = '',
        count = 1,
        storage = [],
        data = 0;
    if (query == 'all' || query == '-a') {
        header = '====[ 𝐓𝐨̂̉𝐧𝐠 𝐓𝐮̛𝐨̛𝐧𝐠 𝐓𝐚́𝐜 𝐓𝐚̂́𝐭 𝐂𝐚̉ ]====\n';
        data = threadData.total;
    } else if (query == 'week' || query == '-w') {
        header = '===𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 𝗧𝗨𝗔̂̀𝗡===\n';
        data = threadData.week;
    } else if (query == 'day' || query == '-d') {
        header = '===𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 𝗡𝗚𝗔̀𝗬===\n';
        data = threadData.day;
    } else {
        data = threadData.total;
    }
    for (const item of data) {
        const userName = await Users.getNameUser(item.id) || 'Tên không tồn tại';
        const itemToPush = item;
        itemToPush.name = userName;
        storage.push(itemToPush);
    };
    let check = ['all', '-a', 'week', '-w', 'day', '-d'].some(e => e == query);
    if (!check && Object.keys(mentions).length > 0) {
        storage = storage.filter(e => mentions.hasOwnProperty(e.id));
    }
    //sort by count from high to low if equal sort by name
    storage.sort((a, b) => {
        if (a.count > b.count) {
            return -1;
        }
        else if (a.count < b.count) {
            return 1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });
    if ((!check && Object.keys(mentions).length == 0) || (!check && Object.keys(mentions).length == 1) || (!check && event.type == 'message_reply')) {
        const UID = event.messageReply ? event.messageReply.senderID : Object.keys(mentions)[0] ? Object.keys(mentions)[0] : senderID;
        const userRank = storage.findIndex(e => e.id == UID);
        const userTotal = threadData.total.find(e => e.id == UID) ? threadData.total.find(e => e.id == UID).count : 0;
        const userTotalWeek = threadData.week.find(e => e.id == UID) ? threadData.week.find(e => e.id == UID).count : 0;
        const userTotalDay = threadData.day.find(e => e.id == UID) ? threadData.day.find(e => e.id == UID).count : 0;
 //     const userTotalTotal = threadData.total.find(e => e.id == UID) ? threadData.total.find(e => e.id == UID).count : 0;
        const nameUID = storage[userRank].name || 'Tên không tồn tại';
        const target = UID == senderID ? 'Bạn' : nameUID;
        const moment = require("moment-timezone");
        const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
        var permission;
        if (global.config.ADMINBOT.includes(UID)) permission = `Admin Bot`;
        else if
            (global.config.NDH.includes(UID))
            permission = `Người Hỗ Trợ`; else if (threadInfo.adminIDs.some(i => i.id == UID)) permission = `Quản Trị Viên`; else permission = `Thành Viên`;
        var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
        if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
        if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
        if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
        if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
        if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
        if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
        if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
        let threadName = threadInfo.threadName;
        var storageDay = [];
        var storageWeek = [];
        var storageTotal = [];
        for (const item of threadData.day) {
            storageDay.push(item);
        }
        for (const item of threadData.week) {
            storageWeek.push(item);
        }
        for (const item of threadData.total) {
            storageTotal.push(item);
        }

        footer = `${storageDay.reduce((a, b) => a + b.count, 0)}`;
        footer1 = `${storageWeek.reduce((a, b) => a + b.count, 0)}`;
        footer2 = `${storageTotal.reduce((a, b) => a + b.count, 0)}`;
        if (userRank == -1) {
            return api.sendMessage(`→ ${target} chưa có thống kê dữ liệu`, threadID);
        }
        body +=
            `==== [ 𝗖𝗛𝗘𝗖𝗞 𝗧𝗨̛𝗢̛𝗡𝗚 𝗧𝗔́𝗖 ] =====\n━━━━━━━━━━━━━━━━━━━━━\n → Tên nhóm: ${threadName}\n → Name: ${nameUID}\n → Chức vụ: ${permission}\n → Link: https://www.facebook.com/profile.php?id=${UID}\n━━━━━━━━━━━━━━━━━━━━━\n → Tin nhắn trong ngày: ${userTotalDay}\n → Hạng trong ngày: ${count++}\n → Tỉ lệ tương tác ngày ${((userTotalDay/footer)*100).toFixed(2)}%\n━━━━━━━━━━━━━━━━━━━━━\n → Tin nhắn trong tuần: ${userTotalWeek}\n → Hạng trong tuần: ${count++}\n → Tỉ lệ tương tác tuần: ${((userTotalWeek/footer1)*100).toFixed(2)}%\n━━━━━━━━━━━━━━━━━━━━━\n → Tổng tin nhắn: ${userTotal}\n → Hạng tổng:  ${userRank + 1}\n → Tỉ lệ tương tác: ${((userTotal/footer2)*100).toFixed(2)}%\n━━━━━━━━━━━━━━━━━━━━━
            \n Nếu muốn xem thông tin nhóm thả cảm xúc "❤" vào tin nhắn của bot`
          //.replace(/^ +/gm, '');
    } else {
        body = storage.map(item => {
            return `${count++}. ${item.name} (${item.count})`;
        }).join('\n');
        footer = `→ Tổng Tin Nhắn: ${storage.reduce((a, b) => a + b.count, 0)}`;
    }
    async function streamURL(url, mime = 'jpg') {
        const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
            downloader = require('image-downloader'),
            fse = require('fs-extra');
        await downloader.image({
            url, dest
        });
        setTimeout(j => fse.unlinkSync(j), 60 * 1000, dest);
        return fse.createReadStream(dest);
    };
    msg = `${header}\n${body}\n${footer}`;
    api.sendMessage({
        body: msg, }, threadID, (err, info) => {
        global.client.handleReaction.push({
            name: this.config.name,
            messageID: info.messageID,
            data: storageTotal,
            image: threadInfo.imageSrc,
            author: event.senderID,
        })
    }, event.messageID);
}
module.exports.handleReaction = async ({ event, api, handleReaction, args, Users, Threads }) => {
    const {author, data,image ,messageID} = handleReaction
    if (event.userID != author) return;
    if (event.reaction != "❤") return;
    api.unsendMessage(messageID);
    var count = 0;
    data.sort((a, b) => {
        if (a.count > b.count) {
            return -1;
        }
        else if (a.count < b.count) {
            return 1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });
   var body = data.map(item => {
        return `${count++}. ${item.name} (${item.count})`;
    }).join('\n');
    var footer = `↠ 𝐓𝐨̂̉𝐧𝐠 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧: ${data.reduce((a, b) => a + b.count, 0)}`;
    var header = '====[ 𝐓𝐨̂̉𝐧𝐠 𝐓𝐮̛𝐨̛𝐧𝐠 𝐓𝐚́𝐜 𝐓𝐚̂́𝐭 𝐂𝐚̉ ]====\n';
    msg = `${header}\n${body}\n${footer}`;
  api.sendMessage(msg,event.threadID);
  }