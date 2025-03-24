function IdolModel(name, year) {
    // new.target은 new가 어느 객체에 실행되는지를 말하는데,
    // new IdolModel() 처럼 생성자를 사용하면 IdolModel 이 target이 된다.
    // 그러나 실수로 new를 사용하지 않으면 new.target은 undefined가 된다.

    // 즉, 이 부분은 new를 붙이지 않고 생성자 함수를 사용했을 때를 방지해주는 if문이다.
    if (!new.target) {
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진', 2003); // TypeError: IdolModelArrow is not a constructor