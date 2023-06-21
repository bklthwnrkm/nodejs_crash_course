const http = require("http");

//Create server object
http
  .createServer((req, res) => {
    //write response
    res.write("Hello World!");
    res.end();
  }) //第一引数: ﾎﾟｰﾄ番号, 第二引数: ｺｰﾙﾊﾞｯｸ関数
  .listen(5000, () => console.log("ｻｰﾊﾞが起動しています..."));
