function isEmpty(filed) {
  if (filed == null || filed == "") {
    return true;
  }
}

function missingValue(req, res, filed) {
  const missing = Object.entries(filed).filter(([key, value]) =>
    isEmpty(value),
  );
  if (missing.length > 0) {
    return res.status(404).send({
      message: `${missing.map(([key]) => key).join(", ")} is required!`,
    });
  }
}

module.exports = { missingValue };
