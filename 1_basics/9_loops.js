/**
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('------')
let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);
console.log('------')

const yuJin = {
    name: '안유진',
    year: 2003,
}

/**
 * for in loop
 */
// name, year과 같은 키
for (let key in yuJin) {
    console.log(key);
}

// // TypeError: yuJin is not iterable -> 배열만 가능
// for (let yuJinElement of yuJin) {
//     console.log(yuJinElement);
// }

/**
 * for of loop
 */

const iveMemberArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

// index를 가져옴
for (let iveMemberArrayKey in iveMemberArray) {
    console.log(iveMemberArrayKey);
}

// 값이 나옴
for (let string of iveMemberArray) {
    console.log(string);
}

console.log('-----');

let index = 0;
while (index < 10) {
    console.log(index++);
}

