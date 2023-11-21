//math2 module

let add = (a, b) => a + b;
let PI = 3.141592;
let E = 2.718;

// 1) 객체로 감싸서 내보내기
module.exports = {
  add: add,
  PI: PI,
  E: E,
};

// 2) 하나씩 내보내기
module.exports.add = add;
module.exports.PI = PI;
module.exports.E = E;

// 3) module. 생략 가능
exports.add = add;
exports.PI = PI;
exports.E = E;
