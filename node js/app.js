console.log("Belajar Node Js");

const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Selamat Pagi If3b");
  res.end;
});

// tentukan port
server.listen(5001, () => {
  console.log("Server Run");
});
