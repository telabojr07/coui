const http = require("http");
const server = require("./api/server");
require("dotenv").config();
const fs = require('fs')


let port = process.env.PORT || 8998;
let host = process.env.HOST || "127.0.0.1";
http.createServer((req, res) => {
	server(req, res);
}).listen(port, () => {
	console.log(`App running on ${host}`);
	// console.log(`App running on ${host}:${port}`);
});