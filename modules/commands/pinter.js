const axios = require("axios");

module.exports.config = {
  name: "pinter",
  version: "1.0.8",
  hasPermssion: 2,
  description: "Download & Search",
  credits: "Sam & Pinterest",
  commandCategory: "Tiện ích",
  usages: "[]",
  cooldowns: 5
}

const headers = {
  authority: "www.pinterest.com",
  "cache-control": "max-age=0",
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,video/mp4,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "upgrade-insecure-requests": 1,
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
  "sec-gpc": 1,
  "sec-fetch-site": "same-origin",
  "sec-fetch-mode": "same-origin",
  "sec-fetch-dest": "empty",
  "accept-language": "en-US,en;q=0.9",
  cookie: 'csrftoken=92c7c57416496066c4cd5a47a2448e28; g_state={"i_l":0}; _auth=1; _pinterest_sess=TWc9PSZBMEhrWHJZbHhCVW1OSzE1MW0zSkVid1o4Uk1laXRzdmNwYll3eEFQV0lDSGNRaDBPTGNNUk5JQTBhczFOM0ZJZ1ZJbEpQYlIyUmFkNzlBV2kyaDRiWTI4THFVUWhpNUpRYjR4M2dxblJCRFhESlBIaGMwbjFQWFc2NHRtL3RUcTZna1c3K0VjVTgyejFDa1VqdXQ2ZEQ3NG91L1JTRHZwZHNIcDZraEp1L0lCbkJWUytvRis2ckdrVlNTVytzOFp3ZlpTdWtCOURnbGc3SHhQOWJPTzArY3BhMVEwOTZDVzg5VDQ3S1NxYXZGUEEwOTZBR21LNC9VZXRFTkErYmtIOW9OOEU3ektvY3ZhU0hZWVcxS0VXT3dTaFpVWXNuOHhiQWdZdS9vY24wMnRvdjBGYWo4SDY3MEYwSEtBV2JxYisxMVVsV01McmpKY0VOQ3NYSUt2ZDJaWld6T0RacUd6WktITkRpZzRCaWlCTjRtVXNMcGZaNG9QcC80Ty9ZZWFjZkVGNURNZWVoNTY4elMyd2wySWhtdWFvS2dQcktqMmVUYmlNODBxT29XRWx5dWZSc1FDY0ZONlZJdE9yUGY5L0p3M1JXYkRTUDAralduQ2xxR3VTZzBveUc2Ykx3VW5CQ0FQeVo5VE8wTEVmamhwWkxwMy9SaTNlRUpoQmNQaHREbjMxRlRrOWtwTVI5MXl6cmN1K2NOTFNyU1cyMjREN1ZFSHpHY0ZCR1RocWRjVFZVWG9VcVpwbXNGdlptVzRUSkNadVc1TnlBTVNGQmFmUmtrNHNkVEhXZytLQjNUTURlZXBUMG9GZ3YwQnVNcERDak16Nlp0Tk13dmNsWG82U2xIKyt5WFhSMm1QUktYYmhYSDNhWnB3RWxTUUttQklEeGpCdE4wQlNNOVRzRXE2NkVjUDFKcndvUzNMM2pMT2dGM05WalV2QStmMC9iT055djFsYVBKZjRFTkRtMGZZcWFYSEYvNFJrYTZSbVRGOXVISER1blA5L2psdURIbkFxcTZLT3RGeGswSnRHdGNpN29KdGFlWUxtdHNpSjNXQVorTjR2NGVTZWkwPSZzd3cwOXZNV3VpZlprR0VBempKdjZqS00ybWM9; _b="AV+pPg4VpvlGtL+qN4q0j+vNT7JhUErvp+4TyMybo+d7CIZ9QFohXDj6+jQlg9uD6Zc="; _routing_id="d5da9818-8ce2-4424-ad1e-d55dfe1b9aed"; sessionFunnelEventLogged=1'
}

function searchURL(input) {
  var cb;
  var returnPromise = new Promise(function (resolve, reject) {
    cb = function (err, resData) {
      if (err) reject(err);
      resolve(resData);
    }
  });

  axios({
    method: "GET",
    url: "https://www.pinterest.com/search/pins/?q=" + encodeURIComponent(input),
    headers
  })
    .then((res => res.data))
    .then(function (res) {
      var UwU = [];
      var expURL = /https:\/\/i\.pinimg\.com\/originals\/[^.]+\.(jpg|png|gif)/g;
      var OwO = res.match(expURL);
      OwO.map(function (v) {
        if (!UwU.includes(v)) UwU.push(v);
      });
      cb(null, UwU);
    })
    .catch((err) => {
      cb(err);
    });

  return returnPromise;
}

function newURL(url) {
  var cb;
  var returnPromise = new Promise(function (resolve, reject) {
    cb = function (err, resData) {
      if (err) reject(err);
      resolve(resData);
    }
  });
  
  axios({
    method: "GET",
    url,
    headers
  })
    .then((res => res.data))
    .then(function (res) {
      var exp = /https:\/\/(www|id)\.pinterest\.com\/pin\/[0-9]+\//g;
      var ssURL = res.match(exp);
      if (ssURL == null) cb("Error: new URL is not defined");
      cb(null, ssURL[0].split('sent')[0]);
    })
    .catch((err) => {
      cb(err);
    });

  return returnPromise;
}

function readOwner(res) {
  var Obj = {};
  var UwU = {
    firstName: /"first_name":"([\W|\w|\s]+)"/g,
    fullName: /"full_name":"([\W|\w|\s]+)"/g, 
    username: /"username":"([\W|\w|\s]+)"/g,
    avatar: /"image_medium_url":"([\W|\w|\s]+)"/g
  };
  Object
    .keys(UwU)
    .map(function (v) {
      Obj[v] = UwU[v]
        .exec(
          res.match(UwU[v])[0].split(',').filter((i) => i.match(UwU[v]) != null)[1]
        )[1];
    });
  Obj.followerCount = /"follower_count":(\d+)/g.exec(res)[1];

  return Obj;
}

function getURL(url) {
  var cb;
  var returnPromise = new Promise(function (resolve, reject) {
    cb = function (err, resData) {
      if (err) reject(err);
      resolve(resData);
    }
  });
  
  var regCURL = /https:\/\/(www\.|id\.|)(pinterest|pin)\.(com|it)\/(pin\/[0-9]+|\b)/g;
  if (url.match(regCURL) == null) cb("Error: URL is not accept");
  var { host } = new URL(url);
  if (host == "pin.it") {
    newURL(url)
      .then((res) => {
        getURL(res)
          .then((out) => cb(null, out))
          .catch(cb);
      })
      .catch(cb);
  } else {
    url = url.split('sent')[0];
    axios({
      method: "GET",
      url,
      headers
    })
      .then((res => res.data))
      .then(function (res) {
        var exp = /https:\/\/(i|v1)\.pinimg\.com\/(originals|videos\/mc\/720p)\/[^.]+\.(png|jpg|gif|mp4)/g;
        var ssURL = res.match(exp);
        var uwu = /<h1 class="[\w|\s]+">([\w|\W|\s]+)<\/h1>/g.exec(res);
        var owo = /"unified_user_note":"([\w|\W|\s]+)"/g.exec(res);
        var UwU = [];
        var Obj = {
          title: uwu != null ? uwu[1] : null,
          hashtag: owo != null ? owo[1].split('",')[0].split('#').slice(1) : [],
          Owner: readOwner(res)
        };
        ssURL.map((v) => {
          if (!UwU.includes(v)) return UwU.push(v);
        });
        UwU.map((v) => {
          if (v.includes(".mp4")) return Obj.video = v;
          else if (v.includes(".gif")) return Obj.Gif = v;
          else return Obj.image = v;
        });
        cb(null, Obj);
      })
      .catch((err) => {
        cb(err);
      });
  }

  return returnPromise;
}

module.exports.run = async function ({ api, event, args }) {
  const { type, messageReply, threadID } = event;
  let msg;
  let num = 1;
  if (args.length < 1) return;
  try {
    if (args[0].indexOf("https://") > -1) {
      const Obj = await getURL(args[0]);
      const OTA = Object.keys(Obj);
      if (OTA.includes("video")) url = Obj.video;
      else if (OTA.includes("Gif")) url = Obj.Gif;
      else url = Obj.image;
      let attachment = (await axios({
        method: "GET",
        url,
        responseType: "stream"
      })).data;
      let body = `- Author: ${Obj.Owner.fullName}\n- Follower: ${Obj.Owner.followerCount}\n- Title: ${Obj.title}\n\n`;
      for (let i of OTA) {
        if (i == "video") body += `- URL video: ${Obj[i]}\n\n`;
        else if (i == "Gif") body += `- URL Gif: ${Obj[i]}\n\n`;
        else if (i == 'image') body += `- URL image: ${Obj[i]}\n\n`;
        else console.log(Obj[i]);
      }
      msg = { body, attachment };
    }
    else {
      const info = args.join(" ").split(/(\s+-\s+|\s+-|-\s+|-)/g);
      if (info.length < 3) return;
      const keyPut = info.slice(2).join(" ");
      const listURL = await searchURL(keyPut);
      const number = isNaN(parseInt(info[0])) == false ? parseInt(info[0]) : info[0] == "all" ? listURL.length : 6;
      let body = "";
      let attachment = [];
      for (let i = 0; i < number; i++) {
        var { data } = await axios({
          method: "GET",
          url: listURL[i],
          responseType: "stream"
        });
        attachment.push(data);
        body += `${num++}. ${listURL[i]}\n\n`;
      }
      msg = { body, attachment };
    }
    return api.sendMessage(msg, threadID);
  } catch (e) {
    console.log(e);
    return api.sendMessage(`Đã xảy ra lỗi\n${e}`, threadID);
  }
        }