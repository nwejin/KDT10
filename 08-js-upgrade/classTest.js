// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용
// PascalCase 사용

// 만약 집이라는 클래스가 있다면,
// 속성 : 만들어진 연도, 집의 이름, 창문 갯수 등..
// 메소드 : 창문 갯수 출력 메소드, 집의 이름 출력 메소드 등..

// 클래스 정의
class House {
  // 생성자 함수
  //: 클래스를 이용해 객체를 생성할 때마다 속성을 초기화
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메소드 1 : 집의 나이를 출력
  getAge() {
    console.log(`${this.name}는 건축한지 ${2023 - this.year}년 됐다!`);
  }

  //메소드 2 : 창문 갯수 출력
  getWindow() {
    console.log(`${this.name}의 창문 갯수는 ${this.window}개다!`);
  }
}

// 클래스(틀)을 이용해서 객체 만들기
const house1 = new House(2010, "아파트", 10);
console.log("house1 > ", house1);
console.log(house1.name);
house1.getAge();
house1.getWindow();

const house2 = new House(2012, "빌라", 20);
house2.getAge();

// 클래스 상속
// 부모 클래스 : House
// 자식 클래스 : Apartment

class Apartment extends House {
  constructor(year, name, window, floor) {
    super(year, name, window); // super() : 부모 객체에서 상속 -> 상속받은 부모 클래스의 생성자 호출
    this.floor = floor;
  }

  getFloor() {
    return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}층이다.`;
  }

  // 오버라이딩
  // 부모클래스에 정의되어 있는 메소드를 이름을 동일하게 쓰되 내용을 다르게
  getAge() {
    console.log(`${2023 - this.year}년 된 아파트는 총 ${this.floor}층이다.`);
  }
}

const apt1 = new Apartment(2021, "레미안", 100, 30);
apt1.getAge();
console.log(apt1.getFloor());

// 실습
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

//클래스 상속 실습
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getMath() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

let rec2 = new Rectangle(5, 4);
console.log(rec2.getMath());

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

let rec3 = new Triangle(5, 4);
console.log(rec3.getArea());

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return this.radius * 2 * Math.PI;
  }
}

let rec4 = new Circle(3, 5, 4);
console.log(rec4.getArea());
