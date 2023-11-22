// 구조 분해 할당

// 1. 배열 [] 구조 분해 할당
// - 순서가 중요함

const arr1 = [1, 2, 3, 4, 5]; // 배열 생성
const arr2 = ["a", "b", "c"];

const [one, two, three, four, five] = arr1; // 변수 = 배열
console.log(one, two, three, four, five);

const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha); // alpha에 할당을 안해서 undefined 출력

const list = ["apple", "orange"];
const [f1, f2, f3 = "banana"] = list; // undefined가 나올때 banana 출력
console.log(f1, f2, f3);

let num1 = 1,
  num2 = 3;
console.log("swap 전 >", num1, num2);
[num1, num2] = [num2, num1]; // [num1, num2] = [3,1] 순서변경
console.log("swap 후 >", num1, num2);

// 2. 객체 {} 구조분해 할당
// - 키 값과 변수명이 일치
const obj = {
  title: "독전2",
  star: 1,
  content: "보지마세요..",
};

// 구조분해x
console.log(obj.content, obj.star, obj.title);

// key가 존재하지 않는 경우 대비하여 default 값 할당
// key값으로 만들어야한다..
const { content, star, title, price = 1000 } = obj;
console.log(content, star, title, price);

const { c, s, t } = obj;
console.log(c, s, t); //undefined

// (:)콜론을 이용해서 . 새변수명으로 바꿔서 저장 가능하다.
const { content: c1, star: s1, title: t1 } = obj;
console.log(c1, s1, t1);

// -------------예시-------------
// 전달받는 데이터 값
const info = {
  name: "최진",
  age: "28",
  gender: "male",
  birth: "0123",
};

function getInfo(info) {
  //구조분해
  console.log(info);
  const { name, age, gender, birth } = info;
  //출력 문장 생성
  const output = `제 일름은 ${name}이고, 나이는 ${age}입니다.`;
  // return
  return output;
}

const result = getInfo(info);
console.log(result);

// 단축평가
// && (and), || (or)
// A && B = A and B = 두개 피연산자 모두 true면 true 반환
// A || B = A or B = 두개 피연산자 중에서 하나만 true여도 true 반환

console.log(true && false);
console.log(true || false);

// && (논리곱) 활용 예시
const v1 = 5;
const v2 = 7;

const result2 = v1 > v2 && "v1이 큼";
console.log(result2); // false

const result3 = v1 < v2 && "v2가 큼";
console.log(result3); // v2가 큼

// || (논리합) 활용 예시
const result4 = v1 || 100; // v1이 true이기 때문에 100은 검사 X
console.log(result4); // 5

const nameEx = "홍길동";
const nameEx2 = null;
console.log(nameEx || "이름없음"); // 홍길동
console.log(nameEx2 || "이름없음"); // 이름없음
