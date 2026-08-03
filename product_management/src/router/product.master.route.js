const {
  getAllProduct,
  getProductById,
  createProduct,
} = require("../controller/sys.controller");

const productMasterRoute = (app) => {
  app.get("/v1/api/product/getAll", getAllProduct);
  app.get("/v1/api/product/get/:pro_id", getProductById);
  app.post("/v1/api/product/create", createProduct);
};

module.exports = { productMasterRoute };
