const http = require("http");
const server = require("./api/server");
require("dotenv").config();
const fs = require("fs");
const isbot = require("isbot");

let port = process.env.PORT || 8998;
let host = process.env.HOST || "127.0.0.1";
http
  .createServer((req, res) => {
    // console.log(
    //   req.headers["user-agent"] + ": " + isbot(req.headers["user-agent"])
    // );
    const isbotx = isbot(req.headers["user-agent"]);
    server(req, res, isbotx);
  })
  .listen(port, () => {
    console.log(`App running on ${host}`);
    // console.log(`App running on ${host}:${port}`);
  });
