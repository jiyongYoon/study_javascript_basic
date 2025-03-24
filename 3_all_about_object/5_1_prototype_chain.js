const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
//           class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__); // [Object: null prototype] {} <-- 뭐가 나옴

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype); // {}
console.dir(IdolModel.prototype, {
    showHidden: true,
});
/*
<ref *1> {
  [constructor]: [Function: IdolModel] {
    [length]: 2,
    [name]: 'IdolModel',
    [arguments]: null,
    [caller]: null,
    [prototype]: [Circular *1]
  }
}
 */

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__); // {}
console.log(yuJin.__proto__ === IdolModel.prototype); // true
console.log(testObj.__proto__ === Object.prototype); // true

// Object -> Function -> IdolModel
console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true
console.log(Object.__proto__); // {}

// 즉, 상속체인의 최상위는 Object이다. Object가 가진 메서드는 모두가 사용 가능하다. --> java와 동일하네
console.log(yuJin.toString()); // [object Object]
console.log(Object.prototype.toString()); // [object Object]

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;
    this.sayHello = function() {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2004);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false --> 다른 메모리 공간을 점유한다는 뜻
console.log(yuJin2.hasOwnProperty('sayHello')); // true -> 상속 받은게 아니라는 뜻

console.log('---------')
////// prototype을 사활용해보자 //////

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function() {
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true --> 같은 메모리 공간을 점유한다는 뜻
console.log(yuJin3.hasOwnProperty('sayHello')); // false -> 상속 받았다는 뜻

IdolModel3.sayStaticHello = function() {
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */

function IdolModel4(name, year) {
    this.name = name;
    this.year = year;
    this.sayHello = function() {
        return '안녕하세요 저는 override한 인스턴스 메서드입니다.';
    }
}

// 상위 클래스에 메서드 선언
IdolModel4.prototype.sayHello = function() {
    return '안녕하세요 저는 prototype 메서드입니다.';
}

const yuJin4 = new IdolModel4('안유진', 2003);
console.log(yuJin4.sayHello()); // 안녕하세요 저는 override한 인스턴스 메서드입니다.
console.log('---------')

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 *
 * 1) 인스턴스의 __proto__ 변경하면 인스턴스에만 적용되며, 기존의 생성자 함수로 새로 생성한 인스턴스에는 적용 안됨
 * 2) 함수의 prototype을 직접 변경하면 해당 생성자 함수로 생성한 인스턴스에는 모두 바로 적용 (그 프로퍼티를 가지고 생성되기 때문)
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__); // { sayHello: [Function (anonymous)] }
console.log(gaEul.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true

console.log(gaEul.sayHello()); // 가을 인사를 합니다.
console.log(ray.dance()); // 레이가 춤을 춥니다.
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true
// console.log(ray.sayHello()); // TypeError: ray.sayHello is not a function

// 인스턴스의 proto를 변경
Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello()); // 레이 인사를 합니다.

console.log(ray.constructor === FemaleIdolModel); // false
console.log(ray.constructor === IdolModel); // true
console.log(gaEul.constructor === IdolModel); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

// FemaleIdolModel의 prototype 자체를 IdolModel.prototype으로 변경
FemaleIdolModel.prototype = IdolModel.prototype;

// 인스턴스를 생성할 때 부터 적용됨
const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true
console.log(eSeo.sayHello()); // 이서 인사를 합니다.