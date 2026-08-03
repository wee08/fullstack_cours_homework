const db = require("../config/config");

// gloabl variable
let result;

const getAllProduct = async (req, res) => {
  const sql = `SELECT * FROM product WHERE 1`;

  result = await db.query(sql);

  res.send({ product: result[0] });
};

module.exports = { getAllProduct };
