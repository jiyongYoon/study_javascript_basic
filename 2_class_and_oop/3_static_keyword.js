/**
 * Static Keyword
 */

class IdolModel {
    name;
    year;
    static groupName = '아이브';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {
        return '아이브';
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }

console.log(IdolModel.groupName); // 아이브
console.log(IdolModel.returnGroupName()); // 아이브

/**
 * factory constructor
 */

class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new IdolModel2(
            object.name,
            object.year,
        );
    }

    static fromList(list) {
        return new IdolModel2(
            list[0],
            list[1],
        );
    }
}

const yuJin2 = IdolModel2.fromObject({
    name: '안유진',
    year: 2003
});
console.log(yuJin2); // IdolModel2 { name: '안유진', year: 2003 }

const wonYoung = IdolModel2.fromList([
    '장원영', 2004
]);
console.log(wonYoung); // IdolModel2 { name: '장원영', year: 2004 }