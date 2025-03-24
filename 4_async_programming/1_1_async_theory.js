/**
 * 기본적인 동기처리 상황
 */
function syncLongWork() {
    const now = new Date();

    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2 * 1000; // 2초 뒤

    while (new Date().getTime() < afterTwoSeconds) {
        // 2초동안 while loop가 돌 것이다.
    }

    console.log('완료');
}

console.log('Hello');
syncLongWork();
console.log('World');
/*
Hello
완료
World
 */

/**
 * 비동기 처리 상황
 */
function asyncLongWork() {
    // `setTimeout(handler, timeout)` timeout milliseconds 후에 handler 함수를 비동기로 실행하는 함수
    setTimeout(() => {
        console.log('완료');
    }, 2000);
}

console.log('Hello');
asyncLongWork();
console.log('World');
/*
Hello
World
완료
 */