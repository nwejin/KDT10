const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

// GET/visitors
exports.get_visitors = (req, res) => {
  // [before]
  //   console.log(Visitor.getVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() });

  // [after]
  // controller -> model -> DB -> model -> controller -> response
  // callback 함수를 쓴 이유는 비동기 처리를 하기 위해 (model에서 DB데이터를 가지고 오는것 기다림)

  // 1) model에 있는 Visitor.getVisitors() 호출 : DB에서 정보를 가지고 오기 위해서
  // 2) model에서 데이터 값을 받은 후 콜백 함수 호출
  Visitor.getVisitors((result) => {
    // model에 rows를 result라는 변수명으로 받음
    console.log("Cvisitor.js: ", result);
    res.render("visitor", { data: result });
  });
};

// POST/visitor
exports.post_visitor = (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;

  // post, get 요청 시 컨트롤러에서 모델에서 필요한 값을 넘겨줘야 함
  // Visitor.postVisitor( view에서 받아온 데이터, 콜백 함수 ) 호출
  Visitor.postVisitor(req.body, (result) => {
    // result = Visitor의 마지막에 넘겨준 rows.insertId => ex) 3
    console.log(result);
    res.send({ id: result, name, comment });
  });
};

// 12월 2일
// GET/visitor => localhost:PORT/visitor?id=N
exports.get_visitor = (req, res) => {
  console.log(req.qurey); // {id: '1'}
  console.log(req.query.id);

  // 모델에 함수 호출
  Visitor.getVisitor(req.query.id, (result) => {
    // result: rows[0] -> [ {id: , name: '', cpmment: ''}}]
    console.log("get_visitior Cvisitor.js >", result);
    res.send(result);
  });
};

// GET/visitor/:id => localhost:PORT/visitor/:id
// 주의) params 사용시 라우터 정의 순서에 주의!

exports.get_visitor2 = (req, res) => {
  console.log(req.params); // {id: '1'}
  console.log(req.params.id);

  // 모델에 함수 호출
  Visitor.getVisitor(req.params.id, (result) => {
    // result: rows[0] -> [ {id: , name: '', cpmment: ''}}]
    console.log("get_visitior2 Cvisitor.js >", result);
    res.send(result);
  });
};

exports.patch_visitor = (req, res) => {
  console.log(req.body);

  Visitor.patchVisitor(req.body, (result) => {
    console.log("patchVisitor Cvisitor.js >", result);
    res.send("수정 성공");
  });
};

// DELETE /visitor
exports.delete_visitor = (req, res) => {
  console.log(res.data);
  console.log(req.body.id);

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("deleteVisitor Cvisitor.js >", result);
    res.send("삭제 성공");
  });
};
