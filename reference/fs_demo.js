/*** File System Module ***/

const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("ﾌｧｲﾙ作成中です");
// });

// Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("ﾌｧｲﾙ書き換え中です");

    // File append
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " Goodbye World.",
      (err) => {
        if (err) throw err;
        console.log("ﾌｧｲﾙ追加書き込み中です");
      }
    );
  }
);

// Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("ﾌｧｲﾙ読み込み中です", "data:", data);
// });

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("ﾌｧｲﾙ名書き換え中です");
  }
);
