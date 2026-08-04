const db = require("../config/config");
const { fetchAllUser } = require("../utils/fetchAllUser");

const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const sql = `
      INSERT INTO user_information(name,email,password,phone)
      VALUES (?,?,?,?)
  `;

  const { name, email, password, confirmPassword, phone } = req.body;

  const userData = await fetchAllUser();

  const index = userData.findIndex((i) => i.email === email);

  if (index !== -1) {
    return res.send({
      status: false,
      feat: "email",
      message: "user already exists",
    });
  }

  const saltRounds = 10;

  const HashPassword = await bcrypt.hash(password, saltRounds);
  await db.query(sql, [name, email, HashPassword, phone]);

  const newUser = {
    email,
    phone,
  };
  userData.push(newUser);
  res.send({
    status: true,
    newUser,
  });
};

module.exports = signup;
