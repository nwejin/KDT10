// : tyep // :void (return X) // :never

function print(a: number, b: number, c?: number): void {
  console.log('a > ', a);
  console.log('b > ', b);
  console.log('c > ', c);
}

print(2, 4, 6); // a = 2, b = 4, c = 6
print(5, 7); // a = 5, b = 7, c = undefined

// 매개변수에 기본값 할당 가능
function print2(a: number, b: number, c: number = 50): void {
  console.log(a, b, c);
}

print2(1, 2);

// 매개변수가 없는 함수
function printHello(): void {
  console.log('void hello');
}
printHello();

// void가 아닌 자료형을 반환하는 함수
function sayHello(): string {
  return 'string hello';
}
console.log(sayHello());

function returnNum(): number {
  return 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10;
}
console.log(returnNum());

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(5, 16));

// 화살표 함수 + return생략
const sum1 = (a: number, b: number): number => a + b;

console.log(sum1(1, 2));

// interface 정의 시 함수 타입 현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const dohwa: Greet = {
  name: 'jin',
  hi() {
    return '안녕하세요';
  },

  bye(a: number) {
    return `잘 가 ~ * ${a}`;
  },
};
console.log(dohwa.hi());
console.log(dohwa.bye(2));

// never:  함수가 절대 끝나지 않는경우
const goingOn = (): never => {
  while (true) {
    console.log('gogo!');
  }
}; // 무한 루프에 빠져 함수가 끝나지 않음

// 실습 1
const sum2 = (a: number, b: number): void => {
  console.log(a + b);
};

sum2(5, 11);

// 실습 2
const sum3 = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): number => {
  return a + b + c + d + e;
};

console.log(sum3(1, 2, 3, 4, 10));
