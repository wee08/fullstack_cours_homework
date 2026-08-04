const mysql = require("mysql2/promise");
const connectoin = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_information",
});
module.exports = connectoin;
