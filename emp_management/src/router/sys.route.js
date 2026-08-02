const getEmployee = require("../controller/sys.controller");

const getEmployeeRoute = (app) => {
  app.get("/", getEmployee);
};

module.exports = getEmployeeRoute;
