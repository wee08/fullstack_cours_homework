const db = require("../config/config");
const { fetchAllUser } = require("../utils/fetchAllUser");
const { hashPassword } = require("../utils/hashPassword");
const {
  checkIsUserExists,
  checkIsMisMatchPassword,
} = require("../helper/validate");
const { exportUserToJson } = require("../utils/exportUserToJson");
const { sendMessageToTelegram } = require("../helper/telegramConfig");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const sql = `
      INSERT INTO user_information(name,email,password,phone)
      VALUES (?,?,?,?)
  `;

  const { name, email, password, confirmPassword, phone } = req.body;

  const userData = await fetchAllUser();

  const index = userData.findIndex((i) => i.email === email);

  // check does user exist
  await checkIsUserExists(res, index);
  // check missmatch password
  await checkIsMisMatchPassword(res, password, confirmPassword);
  // hashing password
  hashed = await hashPassword(password);

  await db.query(sql, [name, email, hashed, phone]);
  await exportUserToJson();
  const newUser = {
    email,
    phone,
  };

  const message = `
  user infomatoin
  user name : ${name}
  email : ${email}
  phone : ${phone}
  `;
  await sendMessageToTelegram(req, res, message);
  res.send({
    status: true,
    newUser,
  });
};

module.exports = signup;
