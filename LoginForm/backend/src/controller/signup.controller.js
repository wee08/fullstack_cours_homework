const db = require("../config/config");
const { fetchAllUser } = require("../utils/fetchAllUser");
const signup = async (req, res) => {
  const sql = `
      INSERT INTO user_information(name,email,password,confirmPassword,phone)
      VALUES (?,?,?,?,?)
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

  await db.query(sql, [name, email, password, confirmPassword, phone]);

  const newUser = {
    email,
    password,
    phone,
  };
  userData.push(newUser);
  res.send({
    status: true,
    newUser,
  });
};

module.exports = signup;
