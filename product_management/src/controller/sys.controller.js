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

const createProduct = async (req, res) => {
  const sql = `
    INSERT INTO product (pro_id,pro_name,pro_price,import_date)
    VALUES (?,?,?,?)
  `;
  const { pro_id, pro_name, pro_price, import_date } = req.body;
  await db.query(sql, [pro_id, pro_name, pro_price, import_date]);
  const product = await fetchAllProduct();
  res.send({
    product,
  });
};

module.exports = { getAllProduct, getProductById, createProduct };
