// 구조분해 할당 : 구조를 분해해서 변수에 할당

// 1. 객체를 구조분해
const cookie = {
  choco: "초코맛",
  vanilla: "바닐라맛",
  mint: "민트맛",
};

console.log(cookie.choco);

// 키값으로 할당
const { mint, choco, vanilla } = cookie;

console.log(choco);
console.log(vanilla);
console.log(mint);

// 2. 배열을 구조분해
const arr = ["first", "second"];
const [one, two] = arr; // 배열을 key값이 없으니까 index로 구분
// 동일 : const [one, two] = ["first", "second"];
console.log(one, two);

// const one = arr[0]
// const two = arr[1]
