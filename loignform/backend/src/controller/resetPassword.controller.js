const userData = require("../data/user_data");
const express = require("express");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const resetPassword = (req, res) => {
  const { email } = req.body;

  res.send({
    userData,
  });
};

module.exports = resetPassword;
