const {
  getAllProduct,
  getProductById,
  createProduct,
  udpateProduct,
} = require("../controller/sys.controller");

const productMasterRoute = (app) => {
  app.get("/v1/api/product/getAll", getAllProduct);
  app.get("/v1/api/product/get/:pro_id", getProductById);
  app.post("/v1/api/product/create", createProduct);
  app.put("/v1/api/product/update/:proId", udpateProduct);
};

module.exports = { productMasterRoute };
