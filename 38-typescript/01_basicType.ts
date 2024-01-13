let a: number = 1;
a = 5;

console.log(a);

let b: string = 'str';
let c: boolean = true;
let d: null = null;
let e: undefined;

console.log(b);
console.log(c);
console.log(d);
console.log(e);

// 타입 추론 (암묵적으로 타입 지정)
let aa = 5;
let bb = 'hello';
let cc = false;
let dd = null;
let ee;

// 배열
// 배열 타입을 지정하는 방법
// 1. type[]
let numArr: number[] = [1, 2, 3, 4, 5];

let numArr2: [number, number, number, number, number];
numArr2 = [1, 2, 3, 4, 5];

// 2. Array<type>
let strArr: Array<string> = ['1'];

// 3. 배열의 원소가 여러 타입인 경우
let arr1: (number | string | number[])[] = [1, 'hi', [11, 22, 33]];

// 4. 어떤 자료형이든 상관 없는 배열
let arr2: any[] = [1, 'bye', null, true, [1, 2, 3]];

console.log(arr2);

// 객체
let obj: object = {
  name: 'jin',
  age: 28,
  gender: 'M',
};

console.log(obj);
