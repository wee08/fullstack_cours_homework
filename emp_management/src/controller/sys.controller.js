const db = require("../config/config");

const getAllEmployee = async (req, res) => {
  const sql = `
        SELECT * FROM employee
    `;

  try {
    let [result] = await db.query(sql);
    res.send({
      employee: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "failed to fetch attemp!" });
  }
};

const createEmployee = async (req, res) => {
  const sql = `
        INSERT INTO employee (EmpCode, EmpName, Gender, PositionID, DepartmentID, OfficeID, DivisionID, BranchID, remark)
        VALUES ('A21', 'Dara', 'M', 'P01', 'D10', 'of_001', 'Div_010', 'Branch_01', '12')
    `;
  const result = await db.query(sql);
  res.send({
    status: "success",
    newEmp: result,
  });
};

module.exports = { getAllEmployee, createEmployee };
