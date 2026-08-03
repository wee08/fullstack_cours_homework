const db = require("../config/config");
const fs = require("fs");

async function exportProductToJson() {
  const sql = `SELECT * FROM product`;
  const [row] = await db.query(sql);
  fs.writeFileSync("../../data/products.json", JSON.stringify(row, null, 2));
}

module.exports = { exportProductToJson };
