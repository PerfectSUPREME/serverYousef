const http = require("http");
const app = require("./app");

const port = process.env.port||7000;//not local
//example port

const server = http.createServer(app);

module.exports = server;

app.listen(port);