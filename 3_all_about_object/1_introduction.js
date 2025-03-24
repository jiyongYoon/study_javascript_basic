/**
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object 생성 -> {}
 * 2) class를 인스턴스화 해서 생성 -> class and oop
 * 3) function을 사용해서 객체 생성
 */

// 1)
const yuJin = {
    name: '안유진',
    year: 2003,
}

console.log(yuJin); // { name: '안유진', year: 2003 }
console.log(typeof yuJin); // object

// 2)
class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const yuJin2 = new Idol('안유진', 2003);
console.log(yuJin2); // Idol { name: '안유진', year: 2003 }
console.log(typeof yuJin2); // object

// 3) 생성자 함수
function IdolFunction(name, year) {
    this.name = name;
    this.year = year;
}

const yuJin3 = new IdolFunction('안유진', 2003);
console.log(yuJin3); // IdolFunction { name: '안유진', year: 2003 }
console.log(typeof yuJin3); // object

