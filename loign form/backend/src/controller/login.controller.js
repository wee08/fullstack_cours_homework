const userData = require("../data/user_data");
const signup = require("./signup.controller");
const login = (req, res) => {
  const { email, password } = req.body;

  const index = userData.findIndex((i) => i.email === email);

  if (index == -1) {
    return res.send({
      status: false,
      feat: "email",
      message: "do you want to sign up?",
    });
  }
  const userEmail = userData[index].email;
  const userPassword = userData[index].password;
  const userExists = userData[index] === email;

  if (userPassword !== password) {
    return res.send({
      status: false,
      feat: "password",
      message: "incorrect password!",
    });
  }

  const userInfo = userData[index];

  if (userEmail === email && userPassword === password) {
    return res.send({
      status: true,
      userInfo,
    });
  }
};

module.exports = login;
