import http from "http";
import fs from "fs";

const html = fs.readFileSync("index.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
});

server.listen(8000, () => {
  console.log("Server listening on port 8000");
});
