const express = require("express");
const cors = require("cors");

const userRoute = require("./src/router/user.route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("homepage");
});
userRoute.forEach((route) => {
  app[route.method](route.path, route.handler);
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
