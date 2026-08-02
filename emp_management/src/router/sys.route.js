const {
  getAllEmployee,
  createEmployee,
  updateEmployee,
} = require("../controller/sys.controller");

const sysRoute = (app) => {
  app.get("/v1/api/employee/getEmp", getAllEmployee);
  app.post("/v1/api/employee/createEmp", createEmployee);
  app.put("/v1/api/employee/updateEmp", updateEmployee);
};

module.exports = sysRoute;
