/*
* Author: DC-Nam
* Message: Có lỗi hoặc thắc mắc gì LH qua fb:
• https://www.facebook.com/levy.nam.2k5
• https://www.facebook.com/duongcongnam02
*/



module.exports.config = {
    name: 'menu',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam mod by quất',
    description: 'Xem danh sách nhóm lệnh, thông tin lệnh',
    commandCategory: 'Tiện ích',
    usages: '[...name commands|all]',
    cooldowns: 5,
    // seconds
    envConfig: {
        autoUnsend: {
            status: true,
            //
            timeOut: 120 // seconds
        },
        sendAttachments: {
            status: true,
            // bật/tắt gửi kèm tệp
            random: false,
            // tắt random ảnh thì gắn link ảnh bên dưới, bật thì vào home/modules/commands/cache/imagesMenu.json thêm link ảnh
            url: 'https://raw.githubusercontent.com/YuukiCute/web/main/images/03.jpg'
        }
    }
};
const {
    autoUnsend = this.config.envConfig.autoUnsend,
    sendAttachments = this.config.envConfig.sendAttachments
} = global.config == undefined ? {}: global.config.menu == undefined ? {}: global.config.menu;
const {
    compareTwoStrings,
    findBestMatch
} = require('string-similarity');
const {
    readFileSync,
    writeFileSync,
    existsSync
} = require('fs-extra');
module.exports.onLoad = function() {
    const dir = __dirname + '/cache/';
    if (!existsSync(dir + 'imagesMenu.json')) writeFileSync(dir + 'imagesMenu.json', '[]');
};
module.exports.run = async function({
    api, event, args
}) {
    const {
        sendMessage: send,
        unsendMessage: un
    } = api;
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid
    } = event;
    if (!global.cmds_menu) global.cmds_menu = {};
    if (!global.cmds_menu[sid]) global.cmds_menu[sid] = {};
    const $ = global.cmds_menu[sid];
    const cmds = global.client.commands;
    if (args.length >= 1) {
        if (typeof cmds.get(args.join(' ')) == 'object') {
            const body = infoCmds(cmds.get(args.join(' ')).config);
            const msg = sendAttachments.status ? {
                body,
                attachment: await images()}: body;
            return send(msg, tid, mid);
        } else {
            if (args[0] == 'all') {
                const data = cmds.values();
                var txt = '',
                count = 0;
                for (const cmd of data) txt += `${++count} ➜ ${cmd.config.name} : ${cmd.config.description}\n`;
                const msg = sendAttachments.status ? {
                    body: txt,
                    attachment: await images()}: txt;
                send(msg, tid, (a, b) => autoUnsend.status ?setTimeout(v1 => un(v1), 1000*autoUnsend.timeOut, b.messageID): '');
            } else {
                const cmdsValue = cmds.values();
                const arrayCmds= [];
                for (const cmd of cmdsValue) arrayCmds.push(cmd.config.name);
                const similarly = findBestMatch(args.join(' '), arrayCmds);
                if (similarly.bestMatch.rating >= 0) return send(`━━━━━━━━━━━━━━━━━━━━\n➜ Không có lệnh "${args.join(' ')}"\n➜ Lệnh gần giống là "${similarly.bestMatch.target}"\n━━━━━━━━━━━━━━━━━━━━`, tid, mid);
                  /*for (const cmd of cmdsValue) if (compareTwoStrings(args.join(' '), cmd.config.name) >= 0.3) return send(`━━━━━━━━━━━━━━━━━━━━\n➜ Không có lệnh "${args.join(' ')}"\n➜ Lệnh gần giống là "${cmd.config.name}"\n━━━━━━━━━━━━━━━━━━━━`, tid, mid);*/
            };
        };
    } else {
      const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
       var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY");
      var minute_out = moment.tz("Asia/Ho_Chi_Minh").format("mm");
  var hour_out = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  var ss_out = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var hit = 2
        const data = commandsGroup();
        var txt = '⭐ ━━━━━━[ Menu ]━━━━━━ ⭐\n',
        count = 0;
        for (const {
            commandCategory,
            commandsName
        } of data) txt += `${++count} ➜ ${commandCategory} | Có ${commandsName.length} Lệnh\n`;
        txt += `⭐ ━━[ Chú Thích ]━━ ⭐\n➩ Hiện có ${global.client.commands.size} lệnh\n➩ Phản hồi từ 1 đến ${data.length} để chọn\n➩ ${prefix(tid)}menu all để xem tất cả các lệnh\n➩ Time dùng : ${gio} \n➩ Time gỡ : ${hour_out}:${parseInt(minute_out) + parseInt(hit)}:${ss_out} ${ngay}\n➩ Người dùng lệnh : ${global.data.userName.get(event.senderID)}\n➩ Link : Facebook.com/${event.senderID}\n━━━━━━━━━━━━━━━━━━━━`;
        const msg = sendAttachments.status ? {
            body: txt,
            attachment: await images()}: txt;
        send(msg, tid, (a, b) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: b.messageID,
                author: sid,
                'case': 'infoGr',
                data
            });
            if (autoUnsend.status) $.timeout_menu = setTimeout(v1 => {
                send(`➩ Đã 2 phút bạn không phản hồi, bot sẽ tự động gỡ menu !`, tid, mid);
                un(v1);
                }, 1000*autoUnsend.timeOut, b.messageID);
        });
    };
};
module.exports.handleReply = async function({
    handleReply: $,
    api,
    event
}) {
    const {
        sendMessage: send,
        unsendMessage: un
    } = api;
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid,
        args
    } = event;
    if (sid != $.author) {
        const msg = sendAttachments.status ? {
            body: `Đi ra chỗ khác chơi 🥹`,
            attachment: await images()}: `Đi ra chỗ khác chơi 🥹`;
        return send(msg, tid, mid);
    };
    switch ($.case) {
        case 'infoGr': {
          const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
       var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY");
      var minute_out = moment.tz("Asia/Ho_Chi_Minh").format("mm");
  var hour_out = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  var ss_out = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var hit = 2
            var data = $.data[(+args[0])-1];
            if (data == undefined) {
              
                const txt = `${args[0]} không nằm trong số thứ tự menu`;
                const msg = sendAttachments.status ? {
                    body: txt,
                    attachment: await images()}: txt;
                return send(msg, tid, mid);
            };
            clearTimeout(global.cmds_menu[sid].timeout_menu);
            un($.messageID);
            var txt = '⭐2 ━━━━━━[ ' + data.commandCategory + ' ]━━━━━━ ⭐\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n',
            count = 0;
            for (const name of data.commandsName) txt += `${++count} ➜ ${name}\n`;
            txt += `⭐ ━━━━━━━━[ Chú Thích ]━━━━━━━━ ⭐\n➩ Hiện có ${global.client.commands.size} lệnh\n➩ Phản hồi từ 1 đến ${data.commandsName.length} để chọn\n➩ Thuộc nhóm : ${data.commandCategory}\n➩ Time dùng : ${gio} \n➩ Time gỡ : ${hour_out}:${parseInt(minute_out) + parseInt(hit)}:${ss_out} ${ngay}\n➩ Người dùng lệnh : ${global.data.userName.get(event.senderID)}\n➩ Link : Facebook.com/${event.senderID}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
            const msg = sendAttachments.status ? {
                body: txt,
                attachment: await images()}: txt;
            send(msg, tid, (a, b) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: b.messageID,
                    author: sid,
                    'case': 'infoCmds',
                    data: data.commandsName
                });
                if (autoUnsend.status) global.cmds_menu[sid].timeout_gr = setTimeout(v1 => {
                    send(`➩ Đã 2 phút bạn không phản hồi, bot sẽ tự động gỡ menu !`, tid, mid);
                    un(v1);
                    }, 1000*autoUnsend.timeOut, b.messageID);
            });
        };
            break;
        case 'infoCmds': {
            var data = global.client.commands.get($.data[(+args[0])-1]);
            if (typeof data != 'object') {
                const txt = `${args[0]} không nằm trong số thứ tự menu`;
                const msg = sendAttachments.status ? {
                    body: txt,
                    attachment: await images()}: txt;
                return send(msg, tid, mid);
            };; const {
                config = {}
            } = data || {};
            clearTimeout(global.cmds_menu[sid].timeout_gr);
            un($.messageID);
            const msg = sendAttachments.status ? {
                body: `⭐3 ━━━━━━━[ ${config.name} ]━━━━━━━ ⭐\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n➜ Phiên bản : ${config.version}\n➜ Quyền hạn : ${premssionTxt(config.hasPermssion)}\n➜ Tác giả : ${config.credits}\n➜ Mô tả : ${config.description}\n➜ Thuộc nhóm : ${config.commandCategory}\n➜ Cách dùng : ${config.usages}\n➜ Thời gian chờ : ${config.cooldowns} giây\n➩ Người dùng lệnh : ${global.data.userName.get(event.senderID)}\n➩ Link : Facebook.com/${event.senderID}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
                attachment: await images()}: infoCmds(config);
            send(msg, tid, (err, info) => {
              if(err) console.log(err)
              if (autoUnsend.status) global.cmds_menu[sid].timeout_gr = setTimeout(v1 => {
                    send(`➩ Đã 2 phút bạn không phản hồi, bot sẽ tự động gỡ menu !`, tid, mid);
                    un(v1);
                    }, 1000*autoUnsend.timeOut, info.messageID);
            });
        };
            break;
        default:
            // code
        }
    };
    function commandsGroup() {
        const array = [],
        cmds = global.client.commands.values();
        for (const cmd of cmds) {
            const {
                name,
                commandCategory
            } = cmd.config;
            const find = array.find(i => i.commandCategory == commandCategory)
            !find ? array.push({
                commandCategory,
                commandsName: [name]
            }): find.commandsName.push(name);
        };
        array.sort(sortCompare('commandsName'));
        return array;
    };
    async function images() {
        const data = JSON.parse(readFileSync(__dirname + '/cache/imagesMenu.json'));
        const url = sendAttachments.random ? (data.length == 0 ? sendAttachments.url: data[Math.floor(Math.random()*data.length)]): sendAttachments.url;
        return (await require('axios')({
            url,
            method: 'GET',
            responseType: 'stream',
        })).data;
    };

    function infoCmds(a,event) {
        return `⭐ ━━━━━━━[ ${a.name} ]━━━━━━━ ⭐\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n➜ Phiên bản : ${a.version}\n➜ Quyền hạn : ${premssionTxt(a.hasPermssion)}\n➜ Tác giả : ${a.credits}\n➜ Mô tả : ${a.description}\n➜ Thuộc nhóm : ${a.commandCategory}\n➜ Cách dùng : ${a.usages}\n➜ Thời gian chờ : ${a.cooldowns} giây\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
    };

    function premssionTxt(a) {
        return a == 0 ? 'Thành Viên': a == 1 ? 'Quản Trị Viên Nhóm': a == 2 ? 'Người Điều Hành Bot': 'Boss Final';
    };
    function prefix(a) {
        const tidData = global.data.threadData.get(a) || {};
        return tidData.PREFIX || global.config.PREFIX;
    };
    function sortCompare(k) {
        return function(a, b) {
            return (a[k].length > b[k].length ? 1: a[k].length < b[k].length ? -1: 0)*-1;
        };
    };