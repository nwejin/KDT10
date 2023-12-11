function goMart() {
  console.log("마트에서 어떤 음료 사지?");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민끝!");
      product = "Coca Cola";
      price = 1700;
      resolve();
    }, 1000);
  });
}

function pay() {
  console.log(`상품: ${product}, 가격: ${price}`);
}

// let product;
// let price;

goMart();
pickDrink().then(pay);

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 1000);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 1000);
  });
}

add(3, 4)
  .then(function (result) {
    console.log(result);
    return mul(result);
  })
  .then(function (result) {
    console.log(result);
    return sub(result);
  })
  .then(function (result) {
    console.log(result);
  });

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

async function exec() {
  const name = await call("kim");
  console.log(name, "반가워");

  const back1 = await back();
  console.log(`${back1}을 실행했구나!`);

  const result = await hell();
  console.log("여기는", result);
}

exec();
