const { getAllProduct } = require("../controller/sys.controller");

const productMasterRoute = (app) => {
  app.get("/v1/api/product/getAll", getAllProduct);
};

module.exports = { productMasterRoute };
