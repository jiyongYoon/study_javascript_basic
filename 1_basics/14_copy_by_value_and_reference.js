/**
 * copy by value = 값에 의한 전달
 * copy by reference = 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 */

let original = '안녕하세요';
let clone = original;
console.log(original, clone); // 안녕하세요 안녕하세요

clone += ' 안유진 입니다.';
console.log(original, clone); // 안녕하세요 안녕하세요 안유진 입니다.

original += ' 반갑습니다.';
console.log(original, clone); // 안녕하세요 반갑습니다. 안녕하세요 안유진 입니다.

console.log('-----');

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj, cloneObj); // { name: '안유진', group: '아이브' } { name: '안유진', group: '아이브' }

cloneObj.group = '코드팩토리';
console.log(originalObj, cloneObj); // { name: '안유진', group: '코드팩토리' } { name: '안유진', group: '코드팩토리' }
console.log(originalObj === cloneObj); // true