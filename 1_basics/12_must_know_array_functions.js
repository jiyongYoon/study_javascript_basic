/**
 * Array Function
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
];
console.log(iveMembers);

// array 직접 변경
let number = iveMembers.push('이서'); // 추가한 후 array 길이 반환
console.log(iveMembers);
console.log(number);

let lastMember = iveMembers.pop();
console.log(lastMember);
console.log(iveMembers);
iveMembers.push(lastMember);
console.log(iveMembers);

let firstMember = iveMembers.shift();
console.log(iveMembers);
console.log(firstMember);

let number2 = iveMembers.unshift(firstMember);
console.log(number2);
console.log(iveMembers);

let threeMembers = iveMembers.splice(0, 3);
console.log(threeMembers);
console.log(iveMembers);
console.log('------');

/**
 * 현대에는 immutable하게 변수를 선언하여 직접 수정을 하지 않는 쪽으로 코딩을 한다.
 * 따라서 위 함수들은 웬만하면 사용하지 않는다.
 */
iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
];

let newIveMembers = iveMembers.concat('이서');
console.log(iveMembers);
console.log(newIveMembers);

let newThreeMembers = newIveMembers.slice(0, 3);
console.log(newThreeMembers);
console.log(newIveMembers);

/**
 * spread operator는 원소를 가지고 펼쳐서 새로운 array를 만드는 것임
 */
let iveMembers2 = [
    ...newIveMembers,
];
console.log(iveMembers2); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

let iveMembersNoSpread = [
    newIveMembers
];
console.log(iveMembersNoSpread); // [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ]

let iveMembers3 = newIveMembers;
console.log(iveMembers3); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// join
console.log(newIveMembers.join()); // 안유진,가을,레이,장원영,리즈,이서
console.log(typeof newIveMembers.join()); // string
console.log(newIveMembers.join('/')); // 안유진/가을/레이/장원영/리즈/이서

// sort, reverse -> 원래 array 수정
newIveMembers.sort();
console.log(newIveMembers);
newIveMembers.reverse();
console.log(newIveMembers);

let numbers = [
    1, 9, 7, 4, 2
];
console.log(numbers); // [ 1, 9, 7, 4, 2 ]

/* 원래 array 변경함
a > b를 비교했을 때
1) a를 앞에 두려면 0보다 큰 숫자를 반환
2) b를 앞에 두려면 0보다 작은 숫자를 반환
3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers); // [ 1, 2, 4, 7, 9 ]

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers); // [ 9, 7, 4, 2, 1 ]

numbers = [
    1, 9, 7, 4, 2
];
numbers.sort((a, b) => 0);
console.log(numbers); //[ 1, 9, 7, 4, 2 ]

// map --> 원래 array 변경 안함
console.log(newIveMembers.map((x) => x)); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]
console.log(newIveMembers.map((x) => `아이브: ${x}`)); // [ '아이브: 장원영', '아이브: 이서', '아이브: 안유진', '아이브: 리즈', '아이브: 레이', '아이브: 가을' ]
console.log(newIveMembers.map((x) => {
    if (x === '안유진') {
       return `최애: ${x}`;
    } else {
        return x;
    }
})); // [ '장원영', '이서', '최애: 안유진', '리즈', '레이', '가을' ]
console.log(newIveMembers); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

// forEach
newIveMembers.forEach(function (value, index, array) {
    console.log(`${index}: ${value} in ${array}`);
});
/*
index: value in array
0: 장원영 in 장원영,이서,안유진,리즈,레이,가을
1: 이서 in 장원영,이서,안유진,리즈,레이,가을
2: 안유진 in 장원영,이서,안유진,리즈,레이,가을
3: 리즈 in 장원영,이서,안유진,리즈,레이,가을
4: 레이 in 장원영,이서,안유진,리즈,레이,가을
5: 가을 in 장원영,이서,안유진,리즈,레이,가을
 */

// filter -> 모든 요소 순회
numbers = [1, 9, 7, 4, 2];
console.log(numbers.filter((x) => x > 5)); // [ 9, 7 ]

// find -> 첫번째 만족하는 요소 반환하고 끝
console.log(numbers.find((x) => x > 5)); // 9

// findIndex
console.log(numbers.findIndex((x) => x > 5)); // 1

// reduce
console.log(numbers.reduce((p, n) => p + n, 0)); // 23

/**
 * [1, 9, 7, 4, 2].reduce((p, n) => p + n, 0);
 * 콜백함수: (p, n) => p + n
 * 초기값: 0
 *
 * 1. 0 + 1 = 1
 * 2. 1 + 9 = 10
 * 3. 10 + 7 = 17
 * 4. 17 + 4 = 21
 * 5. 21 + 2 = 23
 */