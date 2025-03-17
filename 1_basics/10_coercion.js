/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;
console.log(typeof age); // number

// 명시적 타입 변환
let stringAge = age.toString();
console.log(typeof stringAge); // string

let ageInt = parseInt(stringAge);
console.log(typeof ageInt); // number


// 암묵적 타입 변환
let test = age;
console.log(typeof test); // number
let test2 = age + '';
console.log(typeof test2); // string

let test3 = '98';
console.log(test3 + 2); // 982
console.log(test3 * 2); // 196 --> 이거는 number로 동작함 --> 그러나 이렇게 사용하지는 않음

console.log(parseInt(test3) + 2); // 100
console.log(parseFloat('0.99')); // 0.99 숫자
console.log('------------')

/**
 * Boolean 타입 변환
 *
 * string의 값이 있다면 true임
 */

console.log(!'x'); // false
console.log(!!'x'); // true

let optionalString = 'test';
if (optionalString) {
    console.log('값이 있음'); // 출력됨
}

if (!0) {
    console.log('0은 false 임'); // 출력됨
}

if (!undefined) {
    console.log('undefined는 false 임'); // 출력됨
}

if (!null) {
    console.log('null은 false 임'); // 출력됨
}

if ({} && []) {
    console.log('object는 (Array 포함) 무조건 true임'); // 출력됨
}

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 숫자 0
 *
 * 이 경우가 false임
 */