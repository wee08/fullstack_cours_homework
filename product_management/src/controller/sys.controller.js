const db = require("../config/config");
const { exportProductToJson } = require("../utils/exportProductToJson");
const { missingValue } = require("../helper/validate");

const fetchAllProduct = async () => {
  const sql = `SELECT * FROM product`;
  const result = await db.query(sql);
  return result[0];
};

const getAllProduct = async (req, res) => {
  const products = await fetchAllProduct();
  try {
    await exportProductToJson();
    res.send({ products });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  const sql = `SELECT * FROM product WHERE pro_id = ?`;
  const { pro_id } = req.params;
  try {
    const result = await db.query(sql, [pro_id]);
    res.send({
      product: result[0],
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const sql = `
    INSERT INTO product (pro_id,pro_name,pro_price,import_date)
    VALUES (?,?,?,?)
  `;
  const field = ({ pro_id, pro_name, pro_price, import_date } = req.body);

  missingValue(req, res, field);
  try {
    await db.query(sql, [pro_id, pro_name, pro_price, import_date]);
    const product = await fetchAllProduct();
    await exportProductToJson();
    res.send({
      product,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
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
  const field = ({ pro_id, pro_name, pro_price, import_date } = req.body);

  missingValue(req, res, field);

  const { proId } = req.params;
  try {
    await db.query(sql, [pro_id, pro_name, pro_price, import_date, proId]);
    const products = await fetchAllProduct();
    await exportProductToJson();
    res.send({
      products,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const sql = `
        DELETE FROM product WHERE pro_id = ?
    `;
  const field = ({ pro_id } = req.body);

  missingValue(req, res, field);

  try {
    await db.query(sql, [pro_id]);
    const products = await fetchAllProduct();
    await exportProductToJson();
    res.send({
      products,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  udpateProduct,
  deleteProduct,
};
