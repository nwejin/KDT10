// async - await
// async: 함수 앞에 붙이는 키워드
// - 함수만 보고도 비동기 함수임을 알수 있다.
// - promise를 반환

const { reject } = require("async");

// await:  기다리다
// - 성공/실패도 promise 객체의 실행이 완료되기를 기다려줌
// - await 뒤에는 promise가 오게됨
// * async 와 await은 짝궁 => async 키워드를 사용한 함수 내에서만 await을 사용할 수 있다.

function goMart() {
  console.log("마트에 와서 어떤 음료를 살지 고민중,,");
}

function pickDrink() {
  // 3초 고민 (3초 후 실행)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민끝!");
      product = "콜라";
      price = "1600";
      resolve();
      //   reject("에러 발생!");
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

let product, price;

async function exec() {
  goMart(); // 1번 실행
  await pickDrink(); // 2번 실행
  pay(product, price); // 3번 실행
}

exec();

// async-await 키워드 사용시, 에러 처리는 try-catch문으로!

// async function exec1() {
//   try {
//     goMart(); // 1번 실행
//     await pickDrink(); // 2번 실행
//     pay(product, price); // 3번 실행
//   } catch (error) {
//     console.log(error);
//   }
// }

// exec1();
