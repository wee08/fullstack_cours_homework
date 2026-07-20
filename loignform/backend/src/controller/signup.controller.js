const userData = require("../data/user_data");
const signup = (req, res) => {
  const { email, password, confirmPassword, phone } = req.body;

  const index = userData.findIndex((i) => i.email === email);
  if (index !== -1) {
    return res.send({
      status: false,
      feat: "email",
      message: "user already exists",
    });
  }
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
