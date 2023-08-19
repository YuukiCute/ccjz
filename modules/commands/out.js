module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DũngUwU",
  description: "out box",
  commandCategory: "Hệ Thống",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const permission = ["100015308170955", "100091790718226"];
  if (!permission.includes(event.senderID))
  return api.sendMessage("Bạn không phải là Admin bot", event.threadID, event.messageID);
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage('Bot tiến hành rời nhóm theo yêu cầu Admin\nLiên Hệ: m.me/quangbao04', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}