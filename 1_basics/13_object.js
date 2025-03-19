// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function() {
        return `${this.name}이 춤을 춥니다`;
    }
};

console.log(yuJin); // { name: '안유진', group: '아이브', dance: [Function: dance] }
console.log(yuJin.name); // 안유진
console.log(yuJin['name']); // 안유진

const key = 'name';
console.log(yuJin[key]); // 안유진

console.log(yuJin.dance); // [Function: dance]
console.log(yuJin.dance()); // 안유진이 춤을 춥니다

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const danceKey = 'dance';

const yuJin2 = {
    [nameKey]: nameValue, // 변수를 key로 사용할때는 [대괄호] 안에 사용
    [groupKey]: groupValue,
    [danceKey]: function() {
        return `${this.name}이 춤을 춥니다`;
    }
}

console.log(yuJin2.dance()); // 안유진이 춤을 춥니다

yuJin2[groupKey] = '코드팩토리';
console.log(yuJin2); // { name: '안유진', group: '코드팩토리', dance: [Function: dance] }
yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2); // { name: '안유진', group: '코드팩토리', dance: [Function: dance], englishName: 'An Yu Jin' }

delete yuJin2['englishName'];
console.log(yuJin2); // { name: '안유진', group: '코드팩토리', dance: [Function: dance] }

/**
 * const 변수에 값을 변경하는게 안된다고 했는데, 왜 값이 변경이 가능한가?
 * -> 객체 자체를 변경하진 않고 객체 안의 프로퍼티나 메서드를 변경했기 때문에 가능
 */

const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung); // { name: '장원영', group: '아이브' }

// wonYoung = {} // TypeError: Assignment to constant variable.

let wonYoung2 = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung2); // { name: '장원영', group: '아이브' }

wonYoung2 = {}; // 가능
console.log(wonYoung2); // {}

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(yuJin2)); // [ 'name', 'group', 'dance' ]

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(yuJin2)); // [ '안유진', '코드팩토리', [Function: dance] ]

const name = '안유진';
const group = '아이브';

const yuJin3 = {
    name, // 변수명이 동일하면 이렇게 선언 가능
    // groupName, // 변수명이 동일하지 않으면 정의 안됨 // ReferenceError: groupName is not defined
}
console.log(yuJin3); // { name: '안유진' }

let originalObject = {
    name: '최지호',
    group: '코드팩토리',
}
let cloneObject = {
    name: '최지호',
    group: '코드팩토리',
}
console.log(originalObject === cloneObject); // false
console.log('-----');

/**
 * Spread Operator --> copy by value
 */
console.log(yuJin3); // { name: '안유진' }
const yuJin4 = {
    ... yuJin3,
};
console.log(yuJin4); // { name: '안유진' }
console.log(yuJin4 === yuJin3); // false

// Spread Operator는 순서가 영향이 있음
const yuJin5 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin5); // { name: '안유진' }