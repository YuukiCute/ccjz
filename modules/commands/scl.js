let axios = require('axios');
let fs = require('fs');
let config = {
    name: 'scl',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'Nam',
    description: 'Lấy nhạc soundcloud',
    commandCategory: 'Phương tiện',
    usages: 'scl []',
    cooldowns: 3
};
let api = `https://rest-api.catteam123.repl.co/api/dowloader/soundcloud?url=`;

module.exports = {
    config,
    run: x=>axios.get(api+x.args.join(' ')).then(async res=> {
        let bit = (await axios.get(res.data.result.download)).data;
        let path = __dirname+'/cache/1.mp3';

        fs.writeFileSync(path, bit);
        x.api.sendMessage({body: "[⚜️]=== 『 SUCCESS SOUNDCLOUD 』 ===[⚜️]\n━━━━━━━━━━━━━━━━\n[⚜️]➜ Music của bạn đây!!!",
            attachment: fs.createReadStream(path),
        }, x.event.threadID);
    }).catch(console.log),
};
