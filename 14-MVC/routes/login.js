const express = require("express");
const router = express.Router();
// controller 파일
const controller = require("../controller/Clogin");

//  GET - localhost:8000/login
router.get("/", controller.login);

// POST - localhost:8000/login/userData
router.post("/userData", controller.userData);

// router.get("/", users.user);
module.exports = router;
