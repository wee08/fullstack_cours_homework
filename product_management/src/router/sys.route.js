const { getAllProduct } = require("../controller/sys.controller");

const sysRoute = (app) => {
  app.get("/v1/api/product/getAll", getAllProduct);
};

module.exports = { sysRoute };
