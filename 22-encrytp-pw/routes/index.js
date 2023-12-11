const express = require("express");

const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);

router.get("/register", controller.getRegister);
router.post("/register", controller.postRegister);

router.get("/login", controller.getLogin);
router.post("/login", controller.postLogin);

module.exports = router;
