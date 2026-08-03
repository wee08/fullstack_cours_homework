const db = require("../config/config");

// gloabl variable
let result;

const fetchAllProduct = async () => {
  const sql = `SELECT * FROM product WHERE 1`;
  result = await db.query(sql);
  return result[0];
};

const getAllProduct = async (req, res) => {
  const products = await fetchAllProduct();
  res.send({ products });
};

module.exports = { getAllProduct };
