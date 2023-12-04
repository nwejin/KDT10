const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 메인 페이지 /user
router.get("/", controller.main);

// 회원가입 페이지 /signup
router.get("/signup", controller.get_signup);
router.post("/signup", controller.post_signup);

// 로그인 페이지 /signin
router.get("/signin", controller.get_signin);
router.post("/signin", controller.post_signin);

// 회원 정보
router.post("/profile", controller.post_profile);

router.patch("/profile/edit", controller.edit_profile);
// 회원 정보 수정
// router.patch(/profile/edit", controller.patch_profile);

// 회원 삭제
router.delete("/profile/delete", controller.delete_profile);

module.exports = router;
