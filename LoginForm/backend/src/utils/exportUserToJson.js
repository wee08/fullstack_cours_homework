const db = require("../config/config");
const fs = require("fs");
const path = require("path");
const exportUserToJson = async () => {
  const sql = `SELECT * FROM user_information`;
  const [row] = await db.query(sql);
  const filePath = path.join(__dirname, "../../../database/user.json");
  fs.writeFileSync(filePath, JSON.stringify(row, null, 2));
};
module.exports = { exportUserToJson };
