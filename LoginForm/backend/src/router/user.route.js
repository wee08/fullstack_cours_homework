const login = require("../controller/login.controller");
const signup = require("../controller/signup.controller");
const getUser = require("../controller/getUser.controller");

const userRoute = (app) => {
  app.get("/v1/api/user/getAll", getUser);
  app.post("/v1/api/user/login", login);
  app.post("/v1/api/user/signup", signup);
};

module.exports = {
  userRoute,
};
