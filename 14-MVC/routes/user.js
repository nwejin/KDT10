const express = require("express");
const router = express.Router();
// controller 파일
const controller = require("../controller/Cuser");

router.get("/", controller.user);

// router.get("/", users.user);
module.exports = router;
