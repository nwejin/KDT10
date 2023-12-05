// [Before]
// const Visitor = require("../model/Visitor");

// [After]
// models :models/index에서 export한 db객체
const models = require("../models/index");
const Visitor = models.Visitor;

exports.main = (req, res) => {
  res.render("index");
};

// GET/visitors
exports.get_visitors = (req, res) => {
  //[Before]
  // Visitor.getVisitors((result) => {
  //   // model에 rows를 result라는 변수명으로 받음
  //   console.log("Cvisitor.js: ", result);
  //   res.render("visitor", { data: result });
  // });
  //[After]
  //SELECT * FROM visitor
  Visitor.findAll().then(result);
  console.log("findAll >", result);
  res.render("visitor", { data: result });
};

// POST/visitor
exports.post_visitor = (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;

  //[before]
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log(result);
  //   res.send({ id: result, name, comment });
  // });

  // [after]
  Visitor.create({
    name: name,
    comment: comment,
  }).then((result) => {
    console.log("create > ", result);
    res.send(result); // {id: ??, name: ??, comment: ?? }
  });
};

// 12월 2일
// GET/visitor => localhost:PORT/visitor?id=N
exports.get_visitor = (req, res) => {
  console.log(req.qurey); // {id: '1'}
  console.log(req.query.id);

  // [Before]
  // Visitor.getVisitor(req.query.id, (result) => {
  //   // result: rows[0] -> [ {id: , name: '', cpmment: ''}}]
  //   console.log("get_visitior Cvisitor.js >", result);
  //   res.send(result);
  // });

  //[After]
  // SELECT * FROM visitor WHERE i = ? limit 1
  Visitor.findOne({
    where: { id: req.params.id },
  })
    .then((result) => {
      console.log("findOne2 >", result);
    })
    .then(result);
};

// GET/visitor/:id => localhost:PORT/visitor/:id
// 주의) params 사용시 라우터 정의 순서에 주의!

exports.get_visitor2 = (req, res) => {
  console.log(req.params); // {id: '1'}
  console.log(req.params.id);

  // 모델에 함수 호출
  // Visitor.getVisitor(req.params.id, (result) => {
  //   // result: rows[0] -> [ {id: , name: '', cpmment: ''}}]
  //   console.log("get_visitior2 Cvisitor.js >", result);
  //   res.send(result);
  // });

  Visitor.findOne2({
    where: { id: req.params.id },
  })
    .then((result) => {
      console.log("findOne2 >", result);
    })
    .then(result);
};

exports.patch_visitor = (req, res) => {
  console.log(req.body);

  // [Before]
  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log("patchVisitor Cvisitor.js >", result);
  //   res.send("수정 성공");
  // });

  // [After]
  //  UPDATE visitor SET name =?. comment = ? WHERE id = ?
  Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("update >", result); // [1]
    res.send("수정 완료!");
  });
};

// DELETE /visitor
exports.delete_visitor = (req, res) => {
  console.log(res.data);
  console.log(req.body.id);

  // [Before]
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log("deleteVisitor Cvisitor.js >", result);
  //   res.send("삭제 성공");
  // });

  // [After]
  // DELETE FROM visitor WHERE id =?
  Visitor.destroy({
    where: { id: req.body.id },
  }).then((result) => {
    console.log("destroy >", result); // 1
    res.send("삭제 성공");
  });
};
