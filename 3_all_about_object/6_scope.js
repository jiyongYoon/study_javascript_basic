var numberOne = 20;

function levelOne() {
    console.log(numberOne);
}

levelOne(); // 20

function levelTwo() {
    var numberOne = 40;

    console.log(numberOne);
}

levelTwo(); // 40

console.log(numberOne); // 20

function levelThree() {
    var numberOne = 40;

    function levelFour() {
        var numberTwo = 99;

        console.log(`levelFour numberTwo: ${numberTwo}`); // levelFour numberTwo: 99
        console.log(`levelFour numberOne: ${numberOne}`); // levelFour numberOne: 40
    }

    levelFour();
    console.log(`levelThree numberOne: ${numberOne}`); // levelThree numberOne: 40
}

levelThree();

/**
 * 가장 가까운 스코프{}부터 상위로 넘어가면서 변수를 찾음
 * 하위 스코프{}로는 접근 불가
 */

/** JS는 이렇게 동작함
 * Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 */
/** JS는 이거 아님
 * Dynamic Scope
 * 사용한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;
function functionOne() {
    var numberThree = 100;

    functionTwo();
}

function functionTwo() {
    console.log(numberThree);
}
functionOne(); // 3

/**
 * var 키워드의 Scope는 함수가 선언될때만 생성된다.
 * for, while 등의 블록 레벨 스코프는 생성되지 않는다.
 */
var i = 999;

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`) // i in global scope : 10

/**
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어 낸다.
 */
i = 999;

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`) // i in global scope : 999
