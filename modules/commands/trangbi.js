/*module.exports.config = {
    name: 'trangbi',
    version: '2.0.0',
    hasPermission: 0,
    credits: 'Quất',
    description: '',
    commandCategory: 'Liên Quân',
    usages: '/trangbi [keyword hoặc list]',
    cooldowns: 3
};

let stream_url = url => require('axios').get(url, {
    responseType: 'stream',
}).then(r => r.data);

exports.run = async (o) => {
    const keyword = o.args.join(' ').trim();

    if (keyword === 'list') {
        const attachmentURL = 'https://github.com/Duyquoclite/File/raw/main/r%C3%AAn.mp3';
        o.api.sendMessage({
            body: 'Danh Sách Trang Bị\n\n1 Công\n2 Phép\n3 Thủ\n4 Tốc Chạy\n5 Đi Rừng\n6 Phụ Trợ',
            attachment: await stream_url(attachmentURL),
        }, o.event.threadID, o.event.messageID);
        return;
    }

    if (!keyword) {
        o.api.sendMessage('Vui lòng nhập từ khóa để tìm kiếm trang bị', o.event.threadID);
        return;
    }

    try {
        const response = await require('axios').get('https://lien-quan.apiaov.repl.co/trangbi?keyword=' + encodeURIComponent(keyword));
        const data = response.data[0];

        if (data) {
            o.api.sendMessage({
                body: `
𝗧𝗲̂𝗻 𝘁𝗿𝗮𝗻𝗴 𝗯𝗶̣ : ${data.trang_bi}
𝗧𝗿𝗮𝗻𝗴 𝗯𝗶̣ 𝗰𝗮̂́𝗽 : ${data.cap_do}
𝗧𝗵𝘂𝗼̣̂𝗰 𝗵𝗮̀𝗻𝗴 : ${data.thuoc_hang}
𝗚𝗶𝗮́ : ${data.gia} vàng ${data.chuc_nang !== "" ? `\n𝗖𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 : ${data.chuc_nang}` : ''} ${data.noi_tai !== "" ? `\n𝗡𝗼̣̂𝗶 𝘁𝗮̣𝗶 : ${data.noi_tai}` : ''} ${data.kich_hoat !== "" ? `\n𝗞𝗶́𝗰𝗵 𝗵𝗼𝗮̣𝘁 : ${data.kich_hoat}` : ''} ${data.trang_bi_nho !== "" ? `\n𝗟𝗶𝗲̂𝗻 𝗸𝗲̂́𝘁 : ${data.trang_bi_nho}` : ''}`,
                attachment: await stream_url(data.img),
            }, o.event.threadID, o.event.messageID);
        }
    } catch (error) {
        o.api.sendMessage(`Không có kết quả cho từ khóa "${keyword}"`, o.event.threadID);
    }
}*/
module.exports.config = {
  name: "trangbi",
  version: "2.0.0",
  hasPermission: 0,
  credits: "Quất",
  description: "tìm kiếm phù hiệu",
  commandCategory: "Liên Quân",
  usages: "/trangbi [keyword hoặc list]",
  cooldowns: 3,
};

const axios = require("axios");

let stream_url = (url) =>
  axios
    .get(url, {
      responseType: "stream",
    })
    .then((r) => r.data);

module.exports.handleReply = async function ({
  api,
  event,
  args,
  handleReply,
}) {

  if(handleReply.type){
    var attachment = [],
        num = 1,
        msg = 'List các trang bị cấp ' + event.body;
    const res = (await axios.get(`https://lien-quan.apiaov.repl.co/equipment?type=${handleReply.type}&level=${event.body}`)).data
    for(const i of res){
      msg += `\n${num++}. ${i.trang_bi}`
      attachment.push(
            (
              await axios.get(i.img, {
                responseType: "stream",
              })
            ).data
          );
    }
    api.sendMessage({
        body: msg,
        attachment
      },event.threadID)
    return
  }

  
  const url = [
    "https://i.imgur.com/1SbPCuY.jpg",
    "https://i.imgur.com/z8Hy47c.jpg",
    "https://i.imgur.com/fs3giGt.jpg",
    "https://i.imgur.com/YFuc2P7.jpg",
    "https://i.imgur.com/lSeOptk.jpg",
    "https://i.imgur.com/YDp4NFh.jpg",
  ];
  switch (event.args[0]) {
    case "1":
      {
        api.sendMessage(
          {
            body: `Vui lòng chọn cấp\n Công cấp 1\n Công cấp 2\n Công cấp 3`,
            attachment: await stream_url(url[0]),
          },
          event.threadID,
          (e,info)=>{
            if (e) {
          return api.sendMessage("Đã xảy ra lỗi!", event.threadID);
        } else {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            type: 'công'
          });
        }
          }
        );
      }
      break;
    case "2":
      {
        api.sendMessage(
          {
            body: `Vui lòng chọn cấp\n Phép cấp 1\n Phép cấp 2\n Phép cấp 3`,
            attachment: await stream_url(url[1]),
          },
          event.threadID,
          (e,info)=>{
            if (e) {
          return api.sendMessage("Đã xảy ra lỗi!", event.threadID);
        } else {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            type: 'phép'
          });
        }
          }
        );
      }
      break;
    case "3":
      {
        api.sendMessage(
          {
            body: `Vui lòng chọn cấp\n Thủ cấp 1\n Thủ cấp 2\n Thủ cấp 3`,
            attachment: await stream_url(url[2]),
          },
          event.threadID,
          (e,info)=>{
            if (e) {
          return api.sendMessage("Đã xảy ra lỗi!", event.threadID);
        } else {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            type: 'thủ'
          });
        }
          }
        );
      }
      break;
    case "4":
      {
        api.sendMessage(
          {
            body: `Vui lòng chọn cấp\n Tốc Chạy cấp 1\n Tốc Chạy cấp 2`,
            attachment: await stream_url(url[3]),
          },
          event.threadID,
          (e,info)=>{
            if (e) {
          return api.sendMessage("Đã xảy ra lỗi!", event.threadID);
        } else {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            type: 'Tốc Chạy'
          });
        }
          }
        );
      }
      break;
    case "5":
      {
        api.sendMessage(
          {
            body: `Vui lòng chọn cấp\n Đi Rừng cấp 1\n Đi Rừng cấp 2\n Đi Rừng cấp 3`,
            attachment: await stream_url(url[4]),
          },
          event.threadID,
          (e,info)=>{
            if (e) {
          return api.sendMessage("Đã xảy ra lỗi!", event.threadID);
        } else {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            type: 'Đi Rừng'
          });
        }
          }
        );
      }
      break;
    case "6":
      {
        api.sendMessage(
          {
            body: `Vui lòng chọn cấp\n Phụ Trợ cấp 1\n Phụ Trợ cấp 2\n Phụ Trợ cấp 3`,
            attachment: await stream_url(url[5]),
          },
          event.threadID,
          (e,info)=>{
            if (e) {
          return api.sendMessage("Đã xảy ra lỗi!", event.threadID);
        } else {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            type: 'Phụ Trợ'
          });
        }
          }
        );
      }
      break;
    default:
      return api.sendMessage("Vui lòng nhập đúng stt", event.threadID);
  }
};

module.exports.run = async ({ api, event, args }) => {
  const keyword = args.join(" ").trim();

  if (keyword === "list") {
    const attachmentURL = "https://i.imgur.com/hD32zdb.jpg";
    api.sendMessage(
      {
        body: "Danh Sách Trang Bị\n\n 1 Công\n 2 Phép\n 3 Thủ\n 4 Tốc Chạy\n 5 Đi Rừng\n 6 Phụ Trợ\n\n Phản Hồi Từ 1 Đến 6",
        attachment: await stream_url(attachmentURL),
      },
      event.threadID,
      (error, info) => {
        if (error) {
          return api.sendMessage("Đã xảy ra lỗi!", event.threadID);
        } else {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
          });
        }
      }
    );
    return;
  }

  if (!keyword) {
    api.sendMessage(
      " Không có trang bị\n Dùng -trangbi list để xem thêm",
      event.threadID
    );
    return;
  }

  try {
    const response = await axios.get(
      "https://lien-quan.apiaov.repl.co/trangbi?keyword=" +
        encodeURIComponent(keyword)
    );
    const data = response.data[0];

    if (data) {
      api.sendMessage(
        {
          body: `
Tên trang bị : ${data.trang_bi}
Trang bị cấp: ${data.cap_do}
Thuộc hàng : ${data.thuoc_hang}
Giá : ${data.gia} vàng ${
            data.chuc_nang !== "" ? `\n Chức năng : ${data.chuc_nang}` : ""
          } ${data.noi_tai !== "" ? `\n Nội tại : ${data.noi_tai}` : ""} ${
            data.kich_hoat !== "" ? `\n Kích hoạt : ${data.kich_hoat}` : ""
          } ${
            data.trang_bi_nho !== "" ? `\n Liên kết : ${data.trang_bi_nho}` : ""
          }`,
          attachment: await stream_url(data.img),
        },
        event.threadID,
        event.messageID
      );
    }
  } catch (error) {
    api.sendMessage(
      `Không có kết quả cho từ khóa "${keyword}"`,
      event.threadID
    );
  }
};