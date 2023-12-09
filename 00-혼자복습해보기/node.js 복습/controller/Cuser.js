// const models = require("../model/User");
// const User = models.User;

exports.main = (req, res) => {
  res.render("index");
};

exports.get_signup = (req, res) => {
  res.render("signup");
};

exports.get_signin = (req, res) => {
  res.render("signin");
};

exports.get_profile = (req, res) => {
  res.render("profile");
};

exports.visitor = (req, res) => {
  res.render("visitor");
};
