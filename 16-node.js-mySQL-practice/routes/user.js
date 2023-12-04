const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 메인 페이지
router.get("/user", controller.main);

// 회원가입 페이지
router.get("/user/signup", controller.get_signup);
router.post("user/signup", controller.post_signup);

// 로그인 페이지
router.get("/user/signin", controller.get_signin);
// router.post("/user/signin", controller.post_signin);

// 회원 정보
router.get("/user/profile", controller.profile);

// 회원 정보 수정
// router.patch("user/profile/edit", controller.patch_profile);

// 회원 삭제
// router.delete("/user/profile/delete", controller.delete_profile);

module.exports = router;
