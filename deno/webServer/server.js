const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Sawbona Mhlaba");
});

server.listen(5001);
