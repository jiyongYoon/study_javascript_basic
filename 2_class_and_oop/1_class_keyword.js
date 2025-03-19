/**
 * 클래스: 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메서드(함수)를 정의하는 일종의 틀이다. - Wikipedia
 * Class Keyword
 *
 * 1) 클래스는 function 타입이다. (typeof IdolModel)
 * 2) 인스턴스는 object 타입이다. (typeof yuJin)
 */

class IdolModel {
    name = '기본값';
    year = 2000;

    // SyntaxError: A class may only have one constructor --> 생성자는 하나밖에 못만드네
    // constructor() {
    // }

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName() {
        console.log(`안녕하세요, 저는 ${this.name}입니다.`)
    }
}

const defaultIdol = new IdolModel();
console.log(defaultIdol); // IdolModel { name: undefined, year: undefined } --> 기본값이 들어가지 않는다.

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

yuJin.sayName(); // 안녕하세요 저는 안유진입니다.

console.log(typeof IdolModel); // function
console.log(typeof yuJin); // object

const ive = [];
ive.push(
    yuJin,
    new IdolModel('장원영', 2004),
    new IdolModel('가을', 2002),
    new IdolModel('레이', 2004),
    new IdolModel('이서', 2007),
    new IdolModel('리즈', 2004),
);

console.log(ive);

/**
 * 이렇게 생성자만 사용해도 클래스 프로퍼티 정의가 가능하다.
 * 그러나 안좋은 형태이니 쓰진 말자.
 */
class IdolModel2 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

console.log(new IdolModel2('안유진', 2003));