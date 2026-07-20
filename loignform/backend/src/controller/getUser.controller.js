const userData = require("../data/user_data");

const getUer = (req, res) => {
  res.send({
    userData,
  });
};
module.exports = getUer;
