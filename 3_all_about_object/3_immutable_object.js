const yuJin = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    },
}

/**
 * Extensible
 *
 * 기본값은 true다
 */
console.log(Object.isExtensible(yuJin)); // true

yuJin['position'] = 'vocal';
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

// false로 만들기
Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin)); // false

yuJin['groupName'] = '아이브';
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' } <-- 에러는 발생하지 않으나 값이 추가되지는 않음

delete yuJin['position'];
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter] } <-- 삭제는 가능

/**
 * Seal (봉인 - 많이 사용)
 *
 * configurable - false로 변경하는 것과 동일함!
 */
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
console.log(Object.isSealed(yuJin2)); // false

// 봉인
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2)); // true

// 봉인하면 프로퍼티 추가도 안되고 삭제도 안된다
yuJin2['groupName'] = '아이브';
console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }
delete yuJin2['name'];
console.log(yuJin2); // { name: '안유진', year: 2003, age: [Getter/Setter] }

/**
 * Freezed - 동결
 *
 * 읽기 외에 모든 기능 불가능
 * 즉, writable, configurable 모두 false로
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    },
}
console.log(Object.isFrozen(yuJin3)); // false
Object.freeze(yuJin3);

yuJin3['groupName'] = '아이브';
delete yuJin3['name'];
// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리'
// }); // TypeError: Cannot redefine property: name
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
/*
{
  value: '안유진',
  writable: false,
  enumerable: true,
  configurable: false
}
 */

// 하위 object까지 영향을 주진 않는다.
const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false