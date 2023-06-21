console.log("Node.jsからこんにちは。");
// const person = require("./person");
// import { Person } from "person";
// console.log(person);
const Person = require("./person");
// console.log(Person);
const person1 = new Person("john Titer", 22);
person1.greeting();

const Logger = require("./logger");
const logger = new Logger();
logger.on("message", (data) => console.log(`ｲﾍﾞﾝﾄﾘｽﾅを呼びました:`, data));
logger.log("儂の名はlogger.jsだ");

const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       // res.end("<h1>Home</h1>");
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "Sam Smith", age: 40 },
  //     { name: "John titer", age: 22 },
  //   ];
  //   res.writeHead(200, { "Content-type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  // Build file path(dynamically)
  let filePath = path.join(
    __dirname,
    "public",
    //ﾘｸｴｽﾄのURLがﾙｰﾄﾃﾞｨﾚｸﾄﾘならindex.htmlを返し、それ以外ならそのまま返す
    req.url === "/" ? "index.html" : req.url
  );
  console.log("🚀filePath: ", filePath);
  // res.end();

  //Extension of file
  let extname = path.extname(filePath);

  //Initial content type
  let contentType = "text/html";

  //Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //Some server error
        res.writeHead(500);
        res.end(`ｻｰﾊﾞｴﾗｰです: ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});
//ﾎｽﾄが決めた値がある時はそれを優先、無ければ後者になる
const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`ｻｰﾊﾞが次のﾎﾟｰﾄで起動しています: ${PORT}`)
);
