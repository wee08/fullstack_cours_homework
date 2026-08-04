const db = require("../config/config");
const { fetchAllUser } = require("../utils/fetchAllUser");
const { hashPassword } = require("../utils/hashPassword");
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
  if (index !== -1) {
    return res.send({
      status: false,
      feat: "email",
      message: "user already exists",
    });
  }

  // check missmatch password
  if (password != confirmPassword) {
    return res.send({
      status: false,
      message: "password doesn't match",
    });
  }

  // hashing password
  hashed = await hashPassword(password);

  await db.query(sql, [name, email, hashed, phone]);

  const newUser = {
    email,
    phone,
  };
  res.send({
    status: true,
    newUser,
  });
};

module.exports = signup;
