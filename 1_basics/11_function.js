/**
 * function -> 함수
 */

/**
 * 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 반환받고 싶다면?
 *
 * 그 후에 3이라는 숫자에도 동일한 작업을 하고 싶다면?
 */

console.log((2 * 10 / 2 % 3).toString());

function calc(number) {
    return (number * 10 / 2 % 3).toString();
}

console.log(calc(2));
console.log(calc(3));
console.log(calc(4));
console.log(calc(5));
console.log(calc(6));
console.log(calc(7));

/**
 * 파라미터 기본값
 */
function multiply(x, y = 10) {
    return x * y;
}

console.log(multiply(2, 10)); // 20
console.log(multiply(2)); // 20

/**
 * Arrow 함수
 */
const multiply2 = (x, y = 10) => {
    return x * y
}

console.log(multiply2(2, 10)); // 20
console.log(multiply2(2)); // 20

const multiply3 = (x, y = 10) => x * y;
console.log(multiply3(2, 10)); // 20
console.log(multiply3(2)); // 20

const multiply4 = x => x * 10;
console.log(multiply4(2)); // 20

const multiply5 = x => y => z => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply5(2)(5)(10)) // x: 2, y: 5, z: 10

function multiply6(x) {
    return function(y) {
        return function(z) {
            return `x: ${x}, y: ${y}, z: ${z}`;
        }
    }
}
console.log(multiply6(2)(5)(10)); // x: 2, y: 5, z: 10

const multiplyTwo = function(x, y) {
    return x * y;
}

console.log(multiplyTwo(2, 10)); // 20

const multiplyThree = function(x, y, z) {
    console.log(arguments);
    console.log(arguments[0]);
    return x * y * z;
}

console.log(multiplyThree(4, 5, 6));
// [Arguments] { '0': 4, '1': 5, '2': 6 } ---> arguments
// 4 ---> arguments[0] 값
// 120 ---> return 값

const multiplyAll = function(...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(4, 5, 6)); // 120

/**
 * Immediately invoked function
 */
(function(x, y) {
    console.log(x * y);
})(2, 10); // 20

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true ---> 즉, function도 Object