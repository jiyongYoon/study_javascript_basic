/**
 * 변수 선언하기
 *
 * 1) var - 실무에서는 더 이상 쓰지 않음
 * 2) let
 * 3) const
 */

var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리'; // TypeError: Assignment to constant variable.

/**
 * 선언과 할당
 *
 * 1) 선언: 변수를 선언하는 것.
 * 2) 할당: 값을 넣는 것.
 */
var name; // 선언
name = '코드팩토리'; // 할당
console.log(name);

let girlFriend;
console.log(girlFriend); // undefined - 정의되지 않음 (값이 할당되지 않았음 - 즉 선언 시 초기값)

// const girlFriend2; // SyntaxError: Missing initializer in const declaration

