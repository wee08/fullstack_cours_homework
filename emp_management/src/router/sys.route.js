const {
  getAllEmployee,
  createEmployee,
} = require("../controller/sys.controller");

const sysRoute = (app) => {
  app.get("/v1/api/employee/getEmp", getAllEmployee);
  app.post("/v1/api/employee/createEmp", createEmployee);
};

module.exports = sysRoute;
