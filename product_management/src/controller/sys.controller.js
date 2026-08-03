const db = require("../config/config");
const fs = require("fs");

// gloabl variable
let result;

const exportProductToJson = async () => {
  const jsonPath = "../../data/product.json";
  const [row] = db.query("SELECT * FROM product");
  fs.writeFileSync(jsonPath, JSON.stringify(row, null, 2));
};

const fetchAllProduct = async () => {
  const sql = `SELECT * FROM product WHERE 1`;
  result = await db.query(sql);
  await exportProductToJson();
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

const udpateProduct = async (req, res) => {
  const sql = `
        UPDATE product SET 
        pro_id = ?,
        pro_name = ?,
        pro_price = ?,
        import_date = ?
        WHERE pro_id = ?
    `;
  const { pro_id, pro_name, pro_price, import_date } = req.body;
  const { proId } = req.params;
  await db.query(sql, [pro_id, pro_name, pro_price, import_date, proId]);
  const products = await fetchAllProduct();
  res.send({
    products,
  });
};

const deleteProduct = async (req, res) => {
  const sql = `
        DELETE FROM product WHERE pro_id = ?
    `;
  const { pro_id } = req.body;
  await db.query(sql, [pro_id]);
  const products = await fetchAllProduct();
  res.send({
    products,
  });
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  udpateProduct,
  deleteProduct,
};
