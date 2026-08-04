async function checkIsNewAccount(res, index) {
  if (index == -1) {
    return res.send({
      status: false,
      feat: "email",
      message: "do you want to sign up?",
    });
  }
}

async function checkIsPasswordMatch(res, isMatch) {
  if (!isMatch) {
    return res.send({
      status: false,
      feat: "password",
      message: "incorrect password!",
    });
  }
}

async function checkIsUserExists(res, index) {
  if (index !== -1) {
    return res.send({
      status: false,
      feat: "email",
      message: "user already exists",
    });
  }
}

async function checkIsMisMatchPassword(res, password, confirmPassword) {
  if (password != confirmPassword) {
    return res.send({
      status: false,
      message: "password doesn't match",
    });
  }
}

module.exports = {
  checkIsNewAccount,
  checkIsPasswordMatch,
  checkIsUserExists,
  checkIsMisMatchPassword,
};
