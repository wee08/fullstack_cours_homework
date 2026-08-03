const {
  getAllProduct,
  getProductById,
} = require("../controller/sys.controller");

const productMasterRoute = (app) => {
  app.get("/v1/api/product/getAll", getAllProduct);
  app.get("/v1/api/product/get/:pro_id", getProductById);
};

module.exports = { productMasterRoute };
