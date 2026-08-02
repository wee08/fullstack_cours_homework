const sysRoute = require("./src/router/sys.route");

const express = require("express");

const PORT = 3000;
const app = express();
app.use(express.json());

sysRoute(app);

app.listen(PORT, () => {
  console.log(`local server: http://localhost:${PORT}`);
});
