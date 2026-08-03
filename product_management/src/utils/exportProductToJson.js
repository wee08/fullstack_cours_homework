const db = require("../config/config");
const fs = require("fs");
const path = require("path");

async function exportProductToJson() {
  const sql = `SELECT * FROM product`;
  const [row] = await db.query(sql);
  //   const filePath = path.join(__dirname, "../../data/products.json");
  //  since writeFileSync will write the data to the file of the root project so we can defind them by using its paht "./data/products.json"
  fs.writeFileSync("./data/products.json", JSON.stringify(row, null, 2));
}

module.exports = { exportProductToJson };
