const { fetchAllUser } = require("../utils/fetchAllUser");
const { isMatchPassword } = require("../utils/hashPassword");

const db = require("../config/config");
const signup = require("./signup.controller");

const login = async (req, res) => {
  const { email, password } = req.body;

  const userData = await fetchAllUser();

  const index = await userData.findIndex((i) => i.email === email);

  // check is new account
  if (index == -1) {
    return res.send({
      status: false,
      feat: "email",
      message: "do you want to sign up?",
    });
  }
  const userEmail = await userData[index].email;
  const userPassword = await userData[index].password;

  const isMatch = await isMatchPassword(password, userPassword);

  if (!isMatch) {
    return res.send({
      status: false,
      feat: "password",
      message: "incorrect password!",
    });
  }

  const userInfo = userData[index];

  return res.send({
    status: true,
    userInfo,
  });
};

module.exports = login;
