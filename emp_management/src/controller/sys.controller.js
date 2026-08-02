const db = require("../config/config");
const getAllEmployee = async (req, res) => {
  const sql = `
        SELECT * FROM employee
    `;

  try {
    const [result] = await db.query(sql);
    res.send({
      employee: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "failed to fetch attemp!" });
  }
};

module.exports = getAllEmployee;
