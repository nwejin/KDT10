// Promise(프로미스) 객체
// - 비동기 함수를 동기처리 하기 위해 만든 객체
// - 미래에 성공/실패에 대한 결과 값을 '약속'한다는 의미
// - 성공, 실패를 분리해서 반환
// - 성공에 대한 결과는 then(메서드) 로 처리
// - 실패에 대한 결과는 catch(메서드) 로 처리
// - resolve: 성공
// - reject: 실패

// 1. promise 생성하는 코드
// function promise1(flag) {
//   // 프로미스 객체를 생성하여 반환 (서버를 사용하지 않아서 직접 만듬)
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(
//         `현재 프로미스의 상태는 fullfilled(이행), then메서드로 연결! flag: ${flag}`
//       );
//     } else {
//       reject(
//         `현재 프로미스의 상태는 rejected(거절), catch메서드로 연결! flag: ${flag}`
//       );
//     }
//   });
// }

// 2. promise를 사용하는 코드
// promise1(5 < 3)
//   .then((result) => {
//     console.log("result :", result);
//   })
//   .catch((error) => {
//     console.log("error :", error);
//   });

// 3. promise 예제
// index.js에서 '콜백함수'를 이용해서 동기처리한 코드를
// 'promise'를 이용해 동기처리

// ㅋtion pickDrink() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("고민끝!");
//       product = "콜라";
//       price = "1600";
//       const money = 2000;
//       if (price > money) {
//         reject();
//       } else {
//         resolve();
//       }

//       //   resolve(); //성공을 의미하는 resolve 실행
//     }, 3000);
//   });
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product, price;
// goMart();
// pickDrink()
//   .then(() => {
//     pay(product, price);
//   })
//   .catch(() => {
//     console.log("돈이 부족하다,,");
//   });

// 프로미스 체이닝
// 함수를 이용해서 (4+3)*2 - 1 = 13 연산

// 1. callback 함수로 작성
// function add(n1, n2, cb) {
//   setTimeout(() => {
//     const result = n1 + n2;
//     cb(result); // mul(result)
//   }, 1000);
// }

// function mul(n, cb) {
//   setTimeout(() => {
//     const result = n * 2;
//     cb(result);
//   }, 700);
// }

// function sub(n, cb) {
//   setTimeout(() => {
//     const result = n - 1;
//     cb(result);
//   }, 500);
// }

// add(4, 3, function (result) {
//   console.log("add result :", result);
//   mul(result, function (result) {
//     console.log("mul result :", result);
//     sub(result, function (result) {
//       console.log("sub result :", result);
//     });
//   });
// });

/// 2. promise 체이닝으로 작성
function addPromise(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mulPromise(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = n * 2;
      //   resolve(result);
      reject("의도적으로 에러 생성");
    }, 700);
  });
}

function subPromise(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = n - 1;
      resolve(result);
    }, 500);
  });
}

addPromise(4, 3)
  .then(function (result1) {
    console.log("add result1 :", result1);
    return mulPromise(result1);
  })
  .then(function (result2) {
    console.log("mul result2 :", result2);
    return subPromise(result2);
  })
  .then(function (result3) {
    console.log("sub result3 :", result3);
  })
  .catch(function (error) {
    console.log(error);
  });
