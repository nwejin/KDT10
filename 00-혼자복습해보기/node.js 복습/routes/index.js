const express = require("express");

const router = express.Router();

const controller = require("../controller/Cuser");

router.get("/user", controller.main);

// exports.main = (req, res) => {
//   res.render("index");
// };

// exports.get_signup = (req, res) => {
//   res.render("signup");
// };

// exports.get_signin = (req, res) => {
//   res.render("signin");
// };

// exports.profile = (req, res) => {
//   res.render("profile");
// };
