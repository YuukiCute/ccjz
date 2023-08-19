module.exports.config = {
    name: 'phuhieu',
    version: '2.0.0',
    hasPermission: 0,
    credits: 'Quất',
    description: 'tìm kiếm phù hiệu',
    commandCategory: 'Liên Quân',
    usages: '-phuhieu [keyword hoặc list]',
    cooldowns: 3
};

const axios = require('axios');

let stream_url = url => axios.get(url, {
    responseType: 'stream',
}).then(r => r.data);

module.exports.handleReply = async function ({ api, event, args, handleReply }) {
  const url = [
          'https://i.imgur.com/w6eUj7y.jpg',
          'https://i.imgur.com/qE3V6vg.jpg',
          'https://i.imgur.com/6CqRxcF.jpg',
          'https://i.imgur.com/8UzfEtK.jpg'
        ];
  switch(event.args[0]){
    case '1': {
      api.sendMessage({
            body: `
── Tháp Quang Minh ──
1 Thánh Châu
2 Sung Mãn
3 Tương Phản
4 Xuyên Tâm
5 Bí Quyết
6 Thánh Thuẫn
7 Thần Quang
8 Tinh Linh 
────────────────────
Hãy dùng -phuhieu + tên 
Ví dụ -phuhieu thánh châu`,
  attachment: await stream_url(url[0]),
  }, event.threadID)
    }
      break;
    case '2': {
      api.sendMessage({
            body: `
── Rừng Nguyên Sinh ──
1 Canh Gác
2 Ám Kích
3 Nhạy Bén
4 Sinh Tồn
5 Bơm Máu
6 Du Hiệp
7 Mộc Giáp
8 Trói Buộc
────────────────────
Hãy dùng -phuhieu + tên 
Ví dụ -phuhieu canh gác`,
  attachment: await stream_url(url[1]),
  }, event.threadID)
    }
      break;
    case '3': {
      api.sendMessage({
            body: `
── Thành Khởi Nguyên ──
1 Mật Ngữ
2 Siêu Hồi Máu
3 Quả Cầu Băng Sương
4 Thợ Săn
5 Uy Áp
6 Luyện Kim
7 Chuyển Sinh
───────────────────
Hãy dùng -phuhieu + tên 
Ví dụ -phuhieu mật ngữ`,
  attachment: await stream_url(url[2]),
  }, event.threadID)
    }
      break;
    case '4': {
      api.sendMessage({
            body: `
── Vực Hỗn Mang ──
1 Ma Hỏa
2 Dư Ảnh
3 Hấp Huyết
4 Cố Thủ
5 Cường Công
6 Ma Tính
7 Ma Chú
8 Đấu Khí
───────────────────
Hãy dùng -phuhieu + tên 
Ví dụ -phuhieu ma hỏa`,
            attachment: await stream_url(url[3]),
        }, event.threadID)
    }
      break;
    default:
      return api.sendMessage('Vui lòng nhập đúng stt', event.threadID)
  }
}

module.exports.run = async ({ api, event, args }) => {
    const keyword = args.join(' ').trim();

    if (keyword === 'list') {
        const attachmentURL = 'https://i.imgur.com/ofJKR2m.jpg';
        api.sendMessage({
            body: 'Danh Sách Phù Hiệu\n\n1 Tháp Quang Minh\n2 Rừng Nguyên Sinh\n3 Thành Khởi Nguyên\n4 Vực Hỗn Mang\n\nPhản hồi từ 1 đến 4 để xem',
            attachment: await stream_url(attachmentURL),
        }, event.threadID, (error, info) => {
            if (error) {
              return api.sendMessage("Đã xảy ra lỗi!", event.threadID);
            } else {
              global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
              });
            }
          });
      return
    }

    if (!keyword) {
        api.sendMessage('Vui lòng nhập từ khóa để tìm kiếm phù hiệu', event.threadID);
        return;
    }

    try {
        const response = await axios.get('https://lien-quan.apiaov.repl.co/phuhieu?keyword=' + encodeURIComponent(keyword));
        const data = response.data[0];

        if (data) {
            api.sendMessage({
                body: `
Tên phù hiệu : ${data.ten} ${data.ten2}
Phù hiệu cấp : ${data.cap}
Thuộc loại : ${data.thuoc_loai}
Chức năng : ${data.chuc_nang}`,
                attachment: await stream_url(data.anh),
            }, event.threadID, event.messageID);
        }
    } catch (error) {
        api.sendMessage(`Không có kết quả cho từ khóa "${keyword}"`, event.threadID);
    }
                }