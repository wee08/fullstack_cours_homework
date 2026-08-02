const db = require("../config/config");

const fetchAllEmployee = async () => {
  const sql = `SELECT * FROM employee WHERE 1`;
  const result = await db.query(sql);
  return result[0];
};

const getAllEmployee = async (req, res) => {
  const sql = `
        SELECT * FROM employee WHERE 1
    `;
  try {
    const employee = await fetchAllEmployee();
    res.send({
      employee,
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
  await db.query(sql, [
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
  const employee = await fetchAllEmployee();
  res.send({
    status: "success",
    employee,
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
  await db.query(sql, [
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
  const employee = await fetchAllEmployee();
  res.send({
    update: "sucess",
    employee,
  });
};

const deleteEmployee = async (req, res) => {
  const { empCode } = req.body;
  const sql = `DELETE FROM employee WHERE EmpCode = ?`;
  try {
    if (!empCode) {
      res.status(404).send({ error: "empCode is required" });
      return;
    }
    await db.query(sql, [empCode]);
    const employee = await fetchAllEmployee();
    res.send({
      delete: "success",
      employee,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "failed to fetch attemp!" });
  }
};

module.exports = {
  getAllEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
