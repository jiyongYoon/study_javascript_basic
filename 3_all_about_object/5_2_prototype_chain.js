class Parent {
    name;
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name) {
        super(name);
    }
}

const parent = new Parent('부모');
const child = new Child('자식');

// child의 유전자는 어디서 왔나
console.log(Child.prototype.__proto__ === Parent.prototype); // true

// 부모의 유전자에 사랑을 기록하자
Parent.prototype.love = function() {
    return 'love';
}

// 자녀도 사랑을 할 수 있다
console.log(child.love()); // love
console.log(Child.prototype); // Parent {}
console.log(Parent.prototype); // { love: [Function (anonymous)] }

// 자녀의 유전자에 새로운 사랑이 생겼다 (override)
Child.prototype.love = function() {
    return 'parent love';
}

// 자녀는 새로운 사랑을 하게 된다
console.log(child.love()); // parent love

////// all true
console.log(Parent.prototype.__proto__ === Object.prototype);
console.log(Parent.prototype.__proto__ == Function.prototype.__proto__);
console.log(Child.__proto__ === Parent);
console.log(Parent.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype);
console.log('-----')

/**
 * 함수 체인을 뜯어보자.
 * Child -> Parent -> Function.prototype -> Object.prototype -> null
 */
console.log(Child.__proto__ === Parent); // true
console.log(Parent.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
console.log('-----')

// Child와 Parent는 함수 객체 --> 생성자 함수를 편리하게 쓰게 해주는 문법
console.log(typeof Child); // "function"
console.log(typeof Parent); // "function"
console.log(Child.__proto__ === Parent); // true
console.log('-----')

// Parent도 클래스니까 상속받는 '부모'가 있어야 함. 모든 함수는 `Function` 생성자의 인스턴스임
console.log(Parent.__proto__ === Function.prototype); // true
// 여기서 `Function.prototype`이 모든 함수 객체의 공통 부모역할을 하는 프로토타입 객체이다.
console.log(Function.prototype.toString()); // function () { [native code] }
console.log('-----')

/**
 * 인스턴스 체인을 뜯어보자.
 * child -> Child.prototype -> Parent.prototype -> Object.prototype -> null
 *                   parent -> Parent.prototype -> Object.prototype -> null
 */
console.log(child.__proto__ === Child.prototype);
console.log(Child.prototype.__proto__ === Parent.prototype);
console.log(parent.__proto__ === Parent.prototype);
console.log(Parent.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log('-----')

// 인스턴스가 생성자의 prototype을 통해서 상속을 받게 됨
console.log(child.__proto__ === Child.prototype.constructor.prototype);
console.log(Child.prototype.constructor.prototype === Child.prototype);

// 인스턴스는 객체이며 prototype이 없고, 함수는 function이며 prototype이 있음
console.log(child.prototype); // undefined
console.log(typeof child); // object
console.log(Child.prototype); // Parent { love: [Function (anonymous)] }
console.log(typeof Child); // function

const yuJin = {}
console.log(typeof yuJin); // object
console.log(yuJin.prototype); // undefined

function testFunc() {}
console.log(typeof testFunc); // function
console.log(testFunc.prototype); // {}
testFunc.prototype.hello = function () {
    return '안녕';
}
console.log(testFunc.prototype); // { hello: [Function (anonymous)] }
console.log(Parent.prototype); // { love: [Function (anonymous)] }

/////// 특정 함수의 prototype에 함수를 추가해주면 해당 prototype을 상속받은 객체(인스턴스)들은 모두 추가한 함수를 사용할 수 있게 된다.
Array.prototype.love = function() {
    return '배열럽';
}
const array = new Array(1, 2, 3);
const array2 = [1, 2, 3];
console.log(array.love());
console.log(array2.love());
