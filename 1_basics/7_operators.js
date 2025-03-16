/**
 * Operators
 *
 * 연산자
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log('---------');

let number = 1;
number++;
console.log(number); // 2
console.log(++number); // 3
console.log(number++); // 3
console.log(--number); // 3
console.log(number--); // 3
console.log(number); // 2

let result = 1;
console.log(result); // 1
result = number++;
console.log(result, number); // 2, 3

/**
 * 숫자 타입이 아닌 타입에 +, - 하면?
 */

let sample = '99';
console.log(+sample); // 99
console.log(typeof +sample); // number
console.log(sample); // 99
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = '안유진';
console.log(+sample); // NaN(Not a Number)

/**
 * 할당 연산자 (assignment operator)
 */

number = 100;
console.log(number); // 100

number += 10;
console.log(number); // 110

number /= 10;
console.log(number); // 11

/**
 * 비교 연산자
 *
 * 1) 값의 비교 (사실상 쓰지는 않음) : ==
 * 2) 값과 타입의 비교 : ===
 */

console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(0 == ''); // true
console.log(0 === ''); // false
console.log(true == '1'); // true
console.log(true === '1') // false
console.log('---------')
console.log(5 != 5); // false
console.log(5 != '5'); // false
console.log(5 !== '5'); // true
console.log(0 != ''); // false
console.log(0 !== ''); // true
console.log(true != '1'); // false
console.log(true !== '1') // true
console.log('---------')

console.log(100 > 1); // true
console.log(100 > '1'); // true
console.log(100 < 1); // false
console.log(100 < '1'); // false


/**
 * 삼항 조건 연산자
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/**
 * 논리 연산자
 */

console.log(true && true);
console.log(true || false);
console.log('--------')

/**
 * 단축 평가
 *
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 *                좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 *                좌측이 false면 우측 값 반환
 */

console.log(true || '아이브'); // true
console.log('아이브' || true); // 아이브
console.log(0 || '아이브'); // 아이브
console.log('아이브' && true); // true

console.log(true && true && '아이브'); // 아이브
// true && (true && '아이브') 순서대로 계산하게 됨
console.log('--------')

/**
 * 지수 연산자
 */

console.log(2 ** 4); // 16

/**
 * null 연산자
 *
 * 해당 값이 null or undefined 면 우측 값을 반환해라
 */

let name;
console.log(name); // undefined
name = name ?? '아이브';
console.log(name); // 아이브
name = name ?? '코드팩토리';
console.log(name); // 아이브

let name2;
name2 ??= '아이브';
console.log(name2); // 아이브