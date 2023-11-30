const express = require("express");
const router = express.Router();
// controller 파일
const controller = require("../controller/Clogin");

router.get("/", controller.login);
router.post("/userData", controller.userData);

// router.get("/", users.user);
module.exports = router;
