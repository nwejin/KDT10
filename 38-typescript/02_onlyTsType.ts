// Tuple
let drink: [string, string] = ['cola', 'water'];
console.log(drink[0]);

drink[0] = '콜라';
drink[1] = '사이다';

// 요소 추가 가능하나, tuple 사용의 이유가 없어짐
drink.push('환타');

console.log(drink);

// readonly: 요소 타입과 순서와 길이를 고정

let dog: readonly [string, number] = ['coca', 1];

console.log(dog);

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth.user);

enum Caffe {
  americano = 2000,
  cafeLatte = 3500,
  cafeMocha = 4000,
  bananaLatte = '바닐라라떼',
}

console.log(Caffe);

// 명시적
let value: any;

value = 1;
value = 'str';

console.log(value);

// 암묵적
let value2;

value2 = 1;
value2 = 'str';
value2 = true;

// any 는 숫자, 문자,null, undefined, 배열 모두 사용 가능.

let practice: [object, boolean];

practice = [{ name: '쇼트트랙', type: '혼성계주' }, true];

console.log('1번 > ', practice);

let practice1: readonly [object, boolean];
practice1 = [{ name: '없음', type: '없음' }, true];

console.log('2번 > ', practice1);

interface Student {
  name: string;
  isPassed: boolean;
  //   grade: number;
}

const Student1: Student = {
  name: 'jin',
  //   grade: 1,
  isPassed: true,
};

console.log(Student1);
// 단, object 타입 사용시 key의 value의 타입을 지정하지 않는다.

// interface 상속
enum Score {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

// student에서 타입을 불러옴
interface BaseballClub extends Student {
  position: string;
  height: number;
  backnumber?: number; // ?가 있으면 있거나 없거나 상관 없음
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'ALL',
  height: 193,
  //   grade: 1,
  backnumber: 17,
  1: Score.A, // 1: 'A' -> enum Score에서 A로 지정했음
};

console.log(otani);

type Gender = 'Female' | 'Male';
const gender: Gender = 'Female';
const gender2: Gender = 'Male';

console.log(gender, gender2);

// enum vs type
enum userNumber {
  one = 1,
  ten = 10,
}

type userNumber2 = 1 | 10;

const num1: userNumber = userNumber.one;
const num2: userNumber2 = 10;

console.log('num1 >', num1, 'num2 >', num2);

// 교차 타입 : 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  price: number;
}

interface Car {
  name: string;
  price: number;
  color: string;
}

type ToyCar = Toy & Car;

const toycar: ToyCar = {
  name: 'tayo',
  price: 20000,
  color: 'blue',
};

console.log(toycar);

type Person = {
  name: string;
  age: number;
  hobby: string[];
  gender: Gender; // 위에서 먼저 만든 type: Gender 사용
};

let jin: Person = {
  name: 'jin',
  age: 28,
  hobby: ['1', '2', '3'],
  gender: 'Male',
};

console.log(jin);

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};
console.log(heroGame_A);

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};
console.log(heroGame_B);
