//객체 구조분해 할당
let obj = {
  key1: "one",
  key2: "two",
};

let { key1: newKey1, key2, key3 = "three" } = obj;

//   console.log("key1:", key1);

console.log("newKey1:", newKey1);
console.log("key2:", key2);
console.log("key3:", key3);

// 전개 구문
const a = [1, 2, 3];
const b = [4, 5];

const spread = [...a, ...b];
console.log(spread);

const c = [..."hello"];
console.log(c);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const word1 = "abc";
const word2 = "xwy";

const word3 = [...word1, ...word2];
console.log(word3);

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mew() {
    console.log("mew");
  }
  eat() {
    console.log("eat food");
  }
}

let cat1 = new Cat("나비", 3);

cat1.mew();
cat1.eat();

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(5, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  getRange() {
    return this.width + this.height;
  }
}

let rec2 = new Rectangle(3, 4);
console.log(rec2.getArea());
console.log(rec2.getRange());
