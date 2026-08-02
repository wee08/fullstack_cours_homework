const sysRoute = require("./src/router/sys.route");

const express = require("express");
const cors = require("cors");

const PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
sysRoute(app);

app.listen(PORT, () => {
  console.log(`local server: http://localhost:${PORT}`);
});
