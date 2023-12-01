const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // [before]
  //   console.log(Visitor.getVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() });

  // [after]
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js: ", result);
    res.render("visitor", { data: result });
  });
};

// POST/visitor
exports.postVisitor = (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;

  Visitor.postVisitors(req.body, (result) => {
    console.log(result);
    res.send({ id: result, name, comment });
  });
};
