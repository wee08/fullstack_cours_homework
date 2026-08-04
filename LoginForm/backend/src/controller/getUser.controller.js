const db = require("../config/config");
const { exportUserToJson } = require("../utils/exportUserToJson");
const getUer = async (req, res) => {
  const sql = `SELECT * FROM user_information`;
  const result = await db.query(sql);
  await exportUserToJson();
  res.send({
    result,
  });
};
module.exports = getUer;
