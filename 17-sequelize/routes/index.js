const express = require("express");

const router = express.Router();

const controller = require("../controller/Cvisitor");

router.get("/", controller.main);

// get /visitors - 전체 조회
router.get("/visitors", controller.get_visitors);

// post /visitor
router.post("/visitor", controller.post_visitor);

// get/visitor - 하나 조회
router.get("/visitor", controller.get_visitor); // req.query
router.get("/visitor/:id", controller.get_visitor2); // req.params

// 주의) params 사용 시 라우터 정의 순서에 주의해야함
// 만약 /visitor/test라는 경로를 쓰고 싶으면 params 보다 위에 올려야함..

// patch /visitor - 하나 수정 경로
router.patch("/visitor", controller.patch_visitor);

// DELETE /visitor - 하나 삭제
router.delete("/visitor", controller.delete_visitor);

module.exports = router;
