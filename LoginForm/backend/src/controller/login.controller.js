const { fetchAllUser } = require("../utils/fetchAllUser");
const { isMatchPassword } = require("../utils/hashPassword");
const {
  checkIsNewAccount,
  checkIsPasswordMatch,
} = require("../helper/validate");
const db = require("../config/config");
const signup = require("./signup.controller");

const login = async (req, res) => {
  const { email, password } = req.body;

  const userData = await fetchAllUser();

  const index = await userData.findIndex((i) => i.email === email);

  // check is new account
  await checkIsNewAccount(res, index);

  const userEmail = await userData[index].email;
  const userPassword = await userData[index].password;

  const isMatch = await isMatchPassword(password, userPassword);
  await checkIsPasswordMatch(res, isMatch);

  const userInfo = userData[index];

  return res.send({
    status: true,
    userInfo,
  });
};

module.exports = login;
