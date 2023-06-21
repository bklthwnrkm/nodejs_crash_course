/*** Path Module ***/

const path = require("path");

// Base file name ﾌｧｲﾙ名
console.log("🚀path.basename: ", path.basename(__filename));

// Directory name ﾃﾞｨﾚｸﾄﾘ名
console.log("🚀path.dirname: ", path.dirname(__filename));

// File extension ﾌｧｲﾙ拡張子名
console.log("🚀path.extname: ", path.extname(__filename));

// Create Path object ﾊﾟｽのｵﾌﾞｼﾞｪｸﾄを生成
console.log("🚀path.parse: ", path.parse(__filename));

// Concatenate paths ﾊﾟｽを文字列結合するconcat
console.log("🚀path.join: ", path.join(__dirname, "test", "hello.html"));
