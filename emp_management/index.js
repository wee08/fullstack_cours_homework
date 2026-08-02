const getEmployeeRoute = require("./src/router/sys.route");
const express = require("express");

const PORT = 3000;
const app = express();

getEmployeeRoute(app);

app.listen(PORT, () => {
  console.log(`local server: http://localhost:${PORT}`);
});
