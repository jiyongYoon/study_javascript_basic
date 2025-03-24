/**
 * Callback -> Promise -> async/await
 *
 * 콜백함수? 다시 불리우는 함수.
 * 비동기로 어떤 작업을 한 응답이 다음 요청에 필요한 경우, 콜백함수를 통해 해당 변수를 넘겨주게 된다.
 *
 * [ES6 이전]
 * Callback 함수 사용
 *
 * [ES6 이후]
 * Promise로 비동기 작업 해결
 * 그러나 기존처럼 코드를 작성하는게 아니라 Promise에 해당하는 체이닝 형태로 작성해야하는 특징이 있음
 * ( 비동기 처리를 염두한 코드 작업 )
 *
 * [ES7 이후]
 * Async/Await로 동기 코드를 작성하듯 작성할 수 있게 됨
 */

/**
 * Callback
 * 단점1 => 가독성 헬
 * 단점2 => 모든 콜백에서 각각 에러 핸들링을 해줘야 함
 */
function waitAndRunCallbackHell() {
    setTimeout(() => {
        console.log('1번 콜백 끝');
        setTimeout(() => {
            console.log('2번 콜백 끝');
            setTimeout(() => {
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    }, 2000);
}

// waitAndRunCallbackHell();

function firstFunction(parameters, callback) {
    const response1 = request(`http://abc.com?id=${parameters.id}`);
    callback(response1);
}

function secondFunction(response1, callback) {
    const response2 = request(`http://bcd.com`, response1);
    callback(response2);
}

firstFunction(para, function(response1) {
    secondFunction(response1, function() {
        thirdFunction(response2, function() {
            // ...
        })
    })
})

/**
 * Promise
 * 미래에 맞이할 비동기 작업의 완료(resolve), 혹은 실패(reject)와 그 결과값을 나타냄
 */

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// timeoutPromise.then((res) => {
//     console.log('---then---')
//     console.log(res); // 완료
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료'); // .then()을 실행시킴
    }, seconds * 1000);
});

// getPromise(3)
//     .then((res) => {
//         console.log('-----first then-----');
//         console.log(res);
//         return getPromise(3); // 함수 자체를 리턴해서
//     })
//     .then((res) => { // 잡아서 chaining
//         console.log('-----second then-----');
//         console.log(res);
//         // 만약 함수 자체를 리턴을 안하면
//     })
//     .then((res) => { // res에 넘어오는게 없으니까
//         console.log('-----thrid then-----');
//         console.log(res); // undefined
//         return '새로운 리턴'; // 새로운 값을 리턴하면
//     })
//     .then((res) => {
//         console.log('-----fourth then-----');
//         console.log(res); // 새로운 리턴
//     });

/**
 * resolve() 의 인자값 ==> then((res) => {}) 의 res 값으로 넘어옴
 */

const getPromise2 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('에러'); // .catch()를 실행시킴
    }, seconds * 1000);
});

// getPromise2(3)
//     .then((res) => { // 실행 안됨
//         console.log('-----first then-----');
//         console.log(res);
//     })
//     .catch((res) => { // 실행 됨
//         console.log('-----first catch-----');
//         console.log(res);
//     })
//     .finally((res) => {
//         console.log('-----first finally-----');
//         console.log(res); // undefined
//     });

/* resolve와 reject는 이런식으로 써서 성공 및 실패에 대한 처리를 할 수 있다.
const getPromise3 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (xxx) {
            resolve();
        } else (yyy) {
            reject();
        }
    })
});
 */

Promise.all([
    getPromise(1),
    getPromise(2),
    getPromise(3)
]).then((res) => { // 모든 함수결과가 다 나와야 then이 실행된다.
    console.log(res); // [ '완료', '완료', '완료' ]
});
