const db = require("../config/config");

let result;

const getAllEmployee = async (req, res) => {
  const sql = `
        SELECT * FROM employee
    `;
  try {
    result = await db.query(sql);
    res.send({
      employee: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "failed to fetch attemp!" });
  }
};

const createEmployee = async (req, res) => {
  const {
    empCode,
    empName,
    gender,
    positionID,
    departmentID,
    officeID,
    divisionID,
    branchID,
    remark,
  } = req.body;
  const sql = `
        INSERT INTO employee (EmpCode, EmpName, Gender, PositionID, DepartmentID, OfficeID, DivisionID, BranchID, remark)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  result = await db.query(sql, [
    empCode,
    empName,
    gender,
    positionID,
    departmentID,
    officeID,
    divisionID,
    branchID,
    remark,
  ]);
  res.send({
    status: "success",
  });
};

const updateEmployee = async (req, res) => {
  const { empCode } = req.params;
  const {
    empName,
    gender,
    positionID,
    departmentID,
    officeID,
    divisionID,
    branchID,
    remark,
  } = req.body;

  const sql = `
    UPDATE employee
    SET EmpName = ?,Gender= ?,PositionID=?,DepartmentID=?,OfficeID=?,DivisionID=?,BranchID=?,remark=? 
    WHERE EmpCode = ?`;
  result = await db.query(sql, [
    empName,
    gender,
    positionID,
    departmentID,
    officeID,
    divisionID,
    branchID,
    remark,
    empCode,
  ]);
  res.send({
    update: "sucess",
  });
};

module.exports = { getAllEmployee, createEmployee, updateEmployee };
