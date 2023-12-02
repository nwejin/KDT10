const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 메인 페이지
router.get("/user", controller.main);

// 회원가입 페이지
router.get("/user/signup", controller.signUp);

// 로그인 페이지
router.get("/user/signin", controller.signIn);

// 회원 정보
router.get("/user/profile", controller.profile);

module.exports = router;
