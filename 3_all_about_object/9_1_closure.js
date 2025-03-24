/**
 * A closure is the combination of a function and the lexical environment
 * within that function was declared.
 *
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
 *
 * -> 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 clousure라고 한다.
 */
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber; // 함수 자체를 반환
}

const runner = getNumber();
console.log(runner); // [Function: innerGetNumber]
console.log(runner()); // 5
/**
 * getNumber() 함수는 Call Stack에서 사라졌는데, 그 다음에 runner() 함수가 실행된다.
 * 즉, 상위 함수 getNumber() 보다 runner에 담긴 innerGetNumber()이 더 늦게 살아서 실행되는 상황이다.
 */

/**
 * 1. 데이터 캐싱
 */
 function noClosureFunc(newNumb) {
     var number = 10 * 10; // 이 계산은 매우 오래 걸린다고 가정했을 때 => 캐싱 대상
     return number * newNumb;
}

console.log(noClosureFunc(10));
console.log(noClosureFunc(20));
console.log(noClosureFunc(30));

function closureFunc() {
    var number = 10 * 10; // 이 계산은 매우 오래 걸린다고 가정했을 때 => 캐싱 대상

    function innerCacheFunc(newNumb) {
        return number * newNumb;
    }

    return innerCacheFunc;
}

const runner2 = closureFunc(); // 이 오래걸리는 계산을 한번만 하게 됨
console.log(runner2(10));
console.log(runner2(20));
console.log(runner2(30));

/**
 * 2. 반복적으로 값을 변경할 때
 */

function cacheFunc2() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunc2(); // 여기에 number 값이 저장되어 있기 때문에
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102

/**
 * 3. 정보 은닉
 */
function Idol(name, year){
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear()); // 안녕하세요 저는 안유진입니다. 2003에 태어났습니다.

console.log(yuJin.name); // 안유진
console.log(yuJin._year); // undefined