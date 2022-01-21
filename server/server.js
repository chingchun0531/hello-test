
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "localhost"
});
module.exports = con;//讓con裡的sql資料庫在其他地方也能被使用
