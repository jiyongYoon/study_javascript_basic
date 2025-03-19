function runner() {
    console.log('Hello');

    throw new Error('큰 문제가 생김');

    console.log('Code Factory');
}

try {
    runner();
} catch (e) {
    console.log(e.message);
}

/*
Hello
큰 문제가 생김
 */

function runner2() {
    try {
        console.log('Hello');
        throw new Error('큰 문제가 생김');
        console.log('Code Factory');
    } catch (e) {
        console.log('catch!')
        console.log(e);
    }
}

runner2();
/*
Hello
catch!
Error: 큰 문제가 생김
    at runner2 (D:\dev_yoon\study_javascript\study_javascript_basic\1_basics\15_try_catch.js:23:15)
    at Object.<anonymous> (D:\dev_yoon\study_javascript\study_javascript_basic\1_basics\15_try_catch.js:31:1)
    ...
 */