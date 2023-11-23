// 실습
function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);

      // name 넘겨줌
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("back");

      // 'back' 넘겨줌
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // callback hell 넘겨줌
      resolve("callback hell");
    }, 1000);
  });
}

async function exec() {
  const name = await call("kim");
  console.log(name, "반가워");

  //변수 선언 후 호출
  const back1 = await back();
  console.log(back1, "을 실행했구나");

  const result = await hell();
  console.log("여기는", result);
}

exec();
