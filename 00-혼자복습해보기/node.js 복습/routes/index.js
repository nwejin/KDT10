const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 메인페이지
router.get("/user", controller.main);

//회원가입
router.get("/user/signup", controller.get_signup);

//로그인
router.get("/user/signin", controller.get_signin);

router.get("/user/progile", controller.get_profile);

router.get("/user/visitor", controller.visitor);

module.exports = router;
