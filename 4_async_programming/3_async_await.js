/**
 * Async (함수 앞에 붙일 수 있음)
 * Await (Promise로 만든 함수만 붙일 수 있음)
 * --> 비동기 코드를 동기 코드 짜듯 짜게 해준다.
 */

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000)
});


async function runner() {
    const result1 = await getPromise(1);
    console.log(result1);
}

// runner();
// console.log('runner1 실행 끝');
/* 윗부분만 실행
runner1 실행 끝
완료
 */

async function runner2() {
    const result1 = await getPromise(1);
    console.log(`result1 = ${result1}`);
    const result2 = await getPromise(3);
    console.log(`result2 = ${result2}`);
    const result3 = await getPromise(1);
    console.log(`result3 = ${result3}`);
}

// runner2();
// console.log('runner2 실행 끝');
/* 전체 다 실행
runner1 실행 끝
runner2 실행 끝
완료
result1 = 완료
result2 = 완료
result3 = 완료
 */

const getPromise2 = (seconds) => new Promise((resolve, reject) => {
    reject('에러');
});

async function runner3() {
    const result1 = await getPromise2(2);
    console.log(result1);
}

// runner3();
/** reject 처리를 안해서 발생
* node:internal/process/promises:279
*             triggerUncaughtException(err, true /* fromPromise /);
*             ^
*
* [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "에러".] {
*    code: 'ERR_UNHANDLED_REJECTION'
* }
 */

async function runner4() {
    try {
        const result1 = await getPromise2(2);
        console.log(result1);
    } catch (e) {
        console.log(e); // 에러
    }
}

// runner4();

// 그렇다면 global에서 await을 사용하면 어떻게 될까?
console.log('-- 그렇다면 global에서 await을 사용하면 어떻게 될까? --');
const one = () => Promise.resolve('One!');

async function runner5() {
    console.log('In runner5');
    const res = await one();
    console.log(res);
}

console.log('Before runner5');
// await runner5(); --> SyntaxError: await is only valid in async functions and the top level bodies of modules
console.log('After runner5');

/**
 * node.js 에서는 global에서 await을 사용할 수 없다. web에서 사용해보면 아래와 같은 순서로 출력된다.
 * 
 * Before runner5
 * In runner5
 * One!
 * After runner5
 * 
 * 해당 코드는 사실 이렇게 바꿀 수 있다.
 * ```
 * console.log('Before runner5');
 * runner5().then(() => {
 *    console.log('After runner5');
 * }
 * 
 * 때문에 console.log('After runner5');는 runner5의 콜백처럼 실행된다.
 */