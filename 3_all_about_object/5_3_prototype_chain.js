const obj = {};
obj.__proto__; // 브라우저에서 객체를 살펴보면 다음과 같이 나온다.
/*
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

그리고 이 함수들도 여러 계층적으로 또 함수들을 가지고 있다.
 */

const date = new Date();
console.log(date.__proto__ === Date.prototype); // true

// mdn을 보면 현재 __proto__ 는 폐기되었기 때문에 직접 사용하는걸 권장하지는 않는다.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
console.log(Object.getPrototypeOf(date) === Date.prototype); // true

// 중괄호 기호에서 __proto__를 직접 설정할수도 있다.
class Person {
    name
}

const person = {
    name: '이름',
    __proto__: Person.prototype,
}

// Person.prototype에 sayHello 함수 추가하기
Person.prototype.sayHello = function() {
    return `안녕하세요, ${this.name}입니다.`;
}

console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(person.sayHello()); // 안녕하세요, 이름입니다.

// person의 prototype 변경 ===> 중간에 인스턴스의 상속체계를 바꾸는건 좋은 일이 아니므로, 인스턴스가 생성되기 전에 바꾸던가 하자.
Object.setPrototypeOf(person, Date.prototype);
// 더 이상 인사를 할 수 없다.
// console.log(person.sayHello()); // TypeError: person.sayHello is not a function

// 프로토 타입을 설정하는 또 다른 방법 => Object.create()
const date2 = Object.create(Date.prototype);
console.log(Object.getPrototypeOf(date2) === Date.prototype); // true

const person2Prototype = {
    sayHello() {
        return `안녕하세요, ${this.name}입니다.`;
    }
}

function Person2(name) {
    // Object.create()로 해당 프로토타입을 가진 객체를 생성한다.
    const person = Object.create(person2Prototype);
    person.name = name;
    return person;
}

const yuJin = new Person2('안유진');
console.log(yuJin); // { name: '안유진' }
console.log(yuJin.sayHello()); // 안녕하세요, 안유진입니다.


