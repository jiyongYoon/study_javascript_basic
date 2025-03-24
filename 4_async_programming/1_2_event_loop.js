/**
 * 의문 확인
 */
console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 0);
setTimeout(() => console.log('Timeout 3'), 0);

console.log('Middle');

for (let i = 0; i < 3; i++) {
    console.log(`Loop ${i}`);
}

console.log('End');

/*
Start
Middle
Loop 0
Loop 1
Loop 2
End
Timeout 1
Timeout 2
Timeout 3
 */