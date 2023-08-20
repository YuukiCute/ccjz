module.exports.config = {
	name: "token",
	version: "1.0.1",
	hasPermssion: 3,
	credits: "TDong",
	description: "Get token chứ chả có gì",
	commandCategory: "Hệ thống admin-bot",
	usages: "token",
	cooldowns: 5,
    dependencies: {
        "request": "",
        "fs": ""
    }
 
};
 
module.exports.run = async function({ api, event, args }) {
    const axios = require('axios');
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    let { senderID, threadID, messageID } = event;
    //const permission = ["100000125779408"];
    //if (!permission.includes(senderID)) return api.sendMessage("Cút", threadID, messageID);
    if (args[0] == 'token') {
        var EAAG_token = await api.getAccessToken();
        api.sendMessage(EAAG_token, senderID);
    } else if (args[0] == 'appstate') {
        var appstatejson = await api.getAppState();
        var appstate = JSON.stringify(appstatejson);
        console.log(appstatejson);
        console.log(appstate);
        return api.sendMessage(appstate, senderID);
    } else if (args[0] == 'cookie') {
        var cookie = await api.getCookies;
        return api.sendMessage(cookie, senderID);
    };
};