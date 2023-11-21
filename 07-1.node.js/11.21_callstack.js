function first() {
  second();
  console.log(1);
}

function second() {
  console.log(2);
}

// LIFO 방식: Last In First Out - 후입선출

first();

function run() {
  console.log("3초 뒤 실행");
}

console.log("시작");
setTimeout(run, 3000); //밀리세컨 1000 = 1초
console.log("끝");
