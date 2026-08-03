const { userRoute } = require("./src/router/user.route");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = 3000;

userRoute(app);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
