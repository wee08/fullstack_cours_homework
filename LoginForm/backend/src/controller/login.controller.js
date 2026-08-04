const { fetchAllUser } = require("../utils/fetchAllUser");
const db = require("../config/config");
const signup = require("./signup.controller");

const login = async (req, res) => {
  const { email, password } = req.body;

  const userData = await fetchAllUser();

  const index = userData.findIndex((i) => i.email === email);

  if (index == -1) {
    return res.send({
      status: false,
      feat: "email",
      message: "do you want to sign up?",
    });
  }
  const userEmail = await userData[index].email;
  const userPassword = await userData[index].password;
  const userExists = (await userData[index]) === email;

  if (userPassword !== password) {
    return res.send({
      status: false,
      feat: "password",
      message: "incorrect password!",
    });
  }

  const userInfo = await userData[index];

  if (userEmail === email && userPassword === password) {
    return res.send({
      status: true,
      userInfo,
    });
  }
};

module.exports = login;
