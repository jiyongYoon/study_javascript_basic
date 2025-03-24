/**
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티
 *                    getter, setter
 */

const yuJin = {
    name: '안유진',
    year: 2003,
}
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name')); // { value: '안유진', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year')); // { value: 2003, writable: true, enumerable: true, configurable: true }

/** 1) 데이터 프로퍼티의 값
 * 1) value - 실제 프로퍼티 값
 * 2) writable - 값을 수정할 수 있는지 여부
 * 3) enumerable - 열거가 가능한지 여부 (for ...in 룹 등을 사용할 수 있는지)
 * 4) configurable - 프로퍼티 어트리뷰트 재정의가 가능한지 여부
 *                   단, writable이 true인 경우, 값 변경과 writable을 변경하는 것은 가능하다.
 */

console.log(Object.getOwnPropertyDescriptors(yuJin)); // 모든 프로퍼티 내용들이 다 나옴

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    },
}

console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }
console.log(yuJin2.age); // 22
yuJin2.age = 32;
console.log(yuJin2.age); // 32
console.log(yuJin2.year); // 1993

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
/* 엑세스 프로퍼티의 값
{
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
}
 */

yuJin2.height = 172;
console.log(yuJin2); // { name: '안유진', year: 1993, age: [Getter/Setter], height: 172 }
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // { value: 172, writable: true, enumerable: true, configurable: true }

Object.defineProperty(yuJin2, 'weight', {
    value: 55,
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(yuJin2);
/*
{
  name: '안유진',
  year: 1993,
  age: [Getter/Setter],
  height: 172,
  weight: 55
}
 */
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'weight')); // { value: 55, writable: true, enumerable: true, configurable: true }

// writable 변경해보기
yuJin2.weight = 60;
console.log(yuJin2); // { name: '안유진', year: 1993, age: [Getter/Setter], height: 172, weight: 60 }

// writable 속성 false로 변경
Object.defineProperty(yuJin2, 'weight', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'weight'));

// writable 변경해보기
yuJin2.weight = 65;
// 변경 안됨
console.log(yuJin2); // { name: '안유진', year: 1993, age: [Getter/Setter], height: 172, weight: 60 }

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2)); // [ 'name', 'year', 'age', 'height', 'weight' ]
Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
});
console.log(Object.keys(yuJin2)); // [ 'year', 'age', 'height', 'weight' ] <-- name 프로퍼티 열거 안됨
console.log(yuJin2); // { year: 1993, age: [Getter/Setter], height: 172, weight: 60 } <-- 여기서도 안보임
console.log(yuJin2.name); // 안유진 --> 값은 있음

/**
 * Configurable
 *
 * 한번 false로 바꾸면 더이상 재정의가 불가능
 * 단, writable이 true라면 false로 변경은 가능하며, false인 경우는 재정의 불가능
 */
Object.defineProperty(yuJin2, 'weight', {
    configurable: false,
});
// Object.defineProperty(yuJin2, 'weight', {
//     enumerable: false,
// }); // TypeError: Cannot redefine property: weight <- 더 이상 프로퍼티 변경이 불가능
// Object.defineProperty(yuJin2, 'weight', {
//     configurable: true,
// }); // TypeError: Cannot redefine property: weight <- 한번 바뀌면 다시 바꾸는것도 안됨
// Object.defineProperty(yuJin2, 'weight', {
//     enumerable: false,
// }); // TypeError: Cannot redefine property: weight
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'weight')); // { year: 1993, age: [Getter/Setter], height: 172, weight: 60 }
// Object.defineProperty(yuJin2, 'weight', {
//     writable: true,
// }); // TypeError: Cannot redefine property: weight
yuJin2.weight = 50;
console.log(yuJin2);