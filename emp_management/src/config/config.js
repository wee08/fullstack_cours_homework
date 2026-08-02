const mysql = require("mysql2/promise");
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "emp_management",
});

module.exports = connection;
