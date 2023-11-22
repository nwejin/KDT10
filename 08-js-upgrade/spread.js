// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할
// => 객체들의 값을 펼쳐준다!

// 배열에서의 spread
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b]; // [1,2,3,4,5]
console.log(spread);

// 문자열에서 spread -> 문자열을 배열로 저장
const str = "hello";
console.log([...str]); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log([..."hello"]); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log(str.split("")); // [ 'h', 'e', 'l', 'l', 'o' ]

// 객체에서 spread
const chip = {
  base: "chip",
  company: "lotte",
};
console.log("chip: ", chip);

// 기존 객채에 새로운 Key값 추가
const potatoChip = {
  ...chip,
  flavor: "onion",
};
console.log("potatoChip: ", potatoChip);

// 동일한 key 값으로 값 변경도 가능
const sweetPotatoChip = {
  ...potatoChip,
  flavor: "sweet onion",
};
console.log("sweetPotatoChip: ", sweetPotatoChip);

const word1 = "abc";
const word2 = "xyz";

console.log([...word1, ...word2]);

// rest 파라미터  => 선언 시
// spread 파라미더 => 호출 시
