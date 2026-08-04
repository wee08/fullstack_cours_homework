const db = require("../config/config");
async function fetchAllUser() {
  const sql = `SELECT * FROM user_information`;
  const result = await db.query(sql);
  return result[0];
}

module.exports = { fetchAllUser };
