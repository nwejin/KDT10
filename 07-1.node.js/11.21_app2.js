// math2 module을 불러와서 사용

let math2 = require("./11.21_math2");
console.log(math2.add(3, 4));
console.log(math2.E);

// 구조분해 => 구조분해할당은 내보낸 값과 동일한 이름으로 선언
let { add, PI, E } = require("./11.21_math2");
console.log(PI);
