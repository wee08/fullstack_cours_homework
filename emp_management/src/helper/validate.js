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

module.exports = {
  missing,
};
