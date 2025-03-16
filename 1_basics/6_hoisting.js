/**
 * hoisting
 */

// 순서대로 실행됨
console.log('Hello');
console.log('World');

console.log(name); // undefined
var name = '코드팩토리';
console.log(name);

/* 위 코드는 마치 아래처럼 동작하는 중이다.
var name;
console.log(name); // undefined
var name = '코드팩토리';
console.log(name);
 */

/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상.
 * 실제로 이동되는 것은 아니다.
 * var, let, const 모두 호이스팅이 된다.
 * 단, 처리가 좀 다르다.
 */

console.log(yuJin); // Cannot access 'yuJin' before initialization
let yuJin = '안유진';

console.log(wonYoung); // wonYoung is not defined

/**
 * var 키워드는 호이스팅을 막아줄 수 없다.
 * let, const를 사용하는 중요한 이유다.
 */

