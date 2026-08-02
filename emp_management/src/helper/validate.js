function IsEmpty(field) {
  if (field == null || field == "") {
    return true;
  }
}

function missing(req, res, field) {
  const missing = Object.entries(field).filter(([key, value]) =>
    IsEmpty(value),
  );
  if (missing.length > 0) {
    return res.status(404).send({
      message: `${missing.map(([key]) => key).join(", ")} is required!`,
    });
  }
}

async function checkEmpExistend(req, res, empCode, employeeBefore) {
  const index = await employeeBefore.findIndex(
    (emp) => emp.EmpCode === empCode,
  );
  if (index == -1) {
    return res.send({
      message: "EmpCode Doesn't exist!",
    });
  }
}

module.exports = {
  missing,
  checkEmpExistend,
};
