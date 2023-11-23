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

call("kim")
  .then(function (result1) {
    console.log(result1, "반가워");
    return back(result1);
  })
  .then(function (result2) {
    console.log(result2, "을 실행했구나");
    return hell(result2);
  })
  .then(function (result3) {
    console.log("여기는", result3);
  });
