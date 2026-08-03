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

const getProductById = async (req, res) => {
  const sql = `SELECT * FROM product WHERE pro_id = ?`;
  const { pro_id } = req.params;

  const result = await db.query(sql, [pro_id]);
  res.send({
    product: result[0],
  });
};

module.exports = { getAllProduct, getProductById };
