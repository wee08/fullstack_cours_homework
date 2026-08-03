const { productMasterRoute } = require("./src/router/product.master.route");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = 3000;

productMasterRoute(app);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
