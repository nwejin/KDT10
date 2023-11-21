// math module
// add 더하기 함수를 정의한 파일

let add = (a, b) => {
  return a + b;
};

// 외부에서 add라는 함수 사용 가능
// module.exports = add;

// type = module 추가
export { add };
