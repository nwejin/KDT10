const numArrLen = (arr: number[]): number => {
  return arr.length;
};

console.log(numArrLen([1, 2, 3, 4]));

const strArrLen = (arr: string[]): number => {
  return arr.length;
};

console.log(strArrLen(['a', 'b', 'c']));

// generic
// 선언할때 타입을 지정하기 어려운 경우 존재
// = 데이터 타입을 외부에서 지정
// = 생성 시점에서 타입을 명시
// => '재사용성' 증가
// => 타입을 변수처럼 사용하는 것
// 형태는 주로 <T>를 사용함 (a,b,c 아무거나 사용 가능) -> 사용시 <T>안에는 type만 작성 가능

function arrLen<T>(arr: T[]): number {
  return arr.length;
}

console.log(arrLen<string>(['1', '2', '3']));
console.log(arrLen<Number>([1, 2, 3, 4, 5, 6]));

function print3<T, U>(x: T, y: U): void {
  console.log(x, y);
}

print3<string, number>('3', 3);

interface phone<t> {
  company: string;
  createAt: Date;
  option: t;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone13pro: phone<iphoneOption> = {
  company: 'apple',
  createAt: new Date('2020-10-13'),
  option: {
    color: 'spacegrey',
    storage: 256,
  },
};

console.log(iphone13pro);

// function arrLen<T>(arr: T[]): number {
//   return arr.length;
// }

// console.log(arrLen<string>(['1', '2', '3']));

function arrElement<t>(arr: t[], a: number): t | boolean {
  if (a > arr.length) {
    return false;
  }
  return arr[a];
}

console.log(arrElement<string>(['a'], 2));
