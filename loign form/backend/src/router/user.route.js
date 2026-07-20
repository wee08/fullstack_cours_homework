const login = require("../controller/login.controller");
const signup = require("../controller/signup.controller");
const getUser = require("../controller/getUser.controller");
const resetPassword = require("../controller/resetPassword.controller");
module.exports = [
  { method: "post", path: "/v1/api/user/signup", handler: signup },
  { method: "post", path: "/v1/api/user/login", handler: login },
  { method: "get", path: "/v1/api/user/", handler: getUser },
  {
    method: "post",
    path: "/v1/api/user/forget-password",
    handle: resetPassword,
  },
];
