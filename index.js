const { spawn } = require("child_process");
const { readFileSync } = require("fs");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("HI! IM BOT SUPER CUTEE UwU ><");
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("Opened server site...", "[ Starting ]");


function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Restarting...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};

axios.get("https://raw.githubusercontent.com/YuukiCute/ccjz/main/package.json").then((res) => {
   // logger(res['data']['name'], "[ NAME BOT ]");
   // logger("Version: " + res['data']['version'], "[ VERSION ]");
  //  logger(res['data']['description'], "[ DESCRIPTION ]");
});
startBot();
