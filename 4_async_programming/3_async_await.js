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

runner4();