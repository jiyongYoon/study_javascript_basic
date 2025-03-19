/**
 * 프로퍼티에 #을 붙이면 외부로 노출이 안됨 (private 같은 개념)
 */
class IdolModel {
    #name;
    #year;

    constructor(name, year) {
        this.#name = name;
        this.#year = year;
    }

    get name() {
        return this.#name;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        this.#year = value;
    }
}

const yuJin = new IdolModel('안유진', 2000);
console.log(yuJin); // IdolModel {}
yuJin.year = 2003; // setter 사용
console.log(yuJin.year) // 2003
console.log(yuJin.name) // getter 사용
console.log(yuJin.name()) // yuJin.name is not a function