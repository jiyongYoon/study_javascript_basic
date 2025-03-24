class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요, ${this.name}입니다.`
    }
}

class FemaleIdolModel extends IdolModel {
    part;

    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    sayHello() {
        // return `안녕하세요, ${super.name}입니다. ${this.part}를 맡고 있습니다.`; --> 프로퍼티를 사용하려면 constructor가 아닌 곳에서는 super가 아닌 this를 써야함... js가 그렇게 생겨먹음
        // return `안녕하세요, ${this.name}입니다. ${this.part}를 맡고 있습니다.`;
        return `${super.sayHello()}. ${this.part}를 맡고 있습니다.`; // 함수는 super로 호출 가능함... js가 그렇게 생겨먹음
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }
console.log(yuJin.sayHello()); // 안녕하세요, 안유진입니다. 보컬를 맡고 있습니다.

const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung); // IdolModel { name: '장원영', year: 2004 }
console.log(wonYoung.sayHello()); // 안녕하세요, 장원영입니다.