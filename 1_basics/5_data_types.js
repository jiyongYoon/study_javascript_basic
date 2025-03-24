/**
 * Data Types
 *
 * 여섯개의 Primitive Type
 * 한개의 Object Type
 *
 * Primitive Type
 * 1) number
 * 2) string
 * 3) boolean
 * 4) undefined (정의되지 않음)
 * 5) null
 * 6) symbol
 *
 * Object Type
 * 1) Object
 *      - Function
 *      - Array
 *      - Object
 */

const age = 32;
const temperature = -10;
const pi = 3.14;

// number
console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('-----')
const infinity = Infinity;

const nInfinity = -Infinity;
console.log(infinity); // Infinity

console.log(nInfinity); // -Infinity
console.log(typeof infinity); // number
console.log(typeof nInfinity); // number
console.log('-----')

// string
const ive = "'아이브' 안유진";
console.log(ive);
const codeFactory = '"코드" 팩토리';
console.log(codeFactory);

/**
 * Template Literal
 *
 * 1) newLine : \n
 * 2) tab : \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번
 */
const iveYuJin = '아이브\n안유진';
const iveWonYoung = '아이브\t장원영';
const backSlash = '아이브\\코드팩토리';

console.log(iveYuJin);
console.log(iveWonYoung);
console.log(backSlash);

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);
// 아이브
// 장원영

// `(백틱) -> 입력한 그대로 출력됨

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 장원영`);
console.log('-----')

/**
 * boolean
 */

const isTrue = true;
const isFalse = false;

console.log(isTrue);
console.log(typeof isTrue);

/**
 * undefined
 *
 * 사용자가 값을 초기화하지 않았을 때 지정되는 값.
 * undefined는 개발자가 직접 사용하지 않음.
 */

let noInit;
console.log(noInit); // undefined
console.log(typeof noInit); // undefined

/**
 * null
 *
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용.
 */

let init = null;
console.log(init); // null
console.log(typeof init); // object -> 실제로는 버그이지만 js에서 이대로 사용중임

/**
 * symbol
 *
 * 유일무이한 값을 생성할 때 사용.
 * 다른 프리미티브 타입들과 다르게 Symbol 함수를 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '2';
const test3 = '1';
console.log(test1 === test2); // false
console.log(test1 === test3); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('2');
console.log(symbol1 === symbol2); // false

/**
 * object
 *
 * Map
 * key:value 쌍으로 이루어져있다.
 */

const dictionary = {
    apple: '사과',
    banana: '바나나',
};

console.log(dictionary); // { apple: '사과', banana: '바나나' }
console.log(dictionary['apple']) // 사과
console.log(typeof dictionary); // object

/**
 * Array - 값 나열
 */

const array = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(array);
console.log(array[0]); // 안유진
console.log(array[6]); // undefined
array[6] = '코드팩토리'
console.log(array);
console.log(array[6]);
console.log(typeof array); // object
console.log(Array.isArray(array)); // true

/**
 * static typing : 변수 선언 시 타입 명시
 * dynamic typing : 할당하는 값에 의해 타입 추론 (JS는 dynamic typing)
 */
