// 자바스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 가짐.
// = 동시에 2개 이상의 함수를 동시에 실행할 수 없음.

// console.log('A');
//
// setTimeout(() => {
//     console.log('B');
// }, 0);
//
// Promise.resolve().then(() => {
//     console.log('C');
// });
//
// console.log('D');
// // A
// // D
// // C
// // B

// console.log('A');
//
// setTimeout(() => {
//     console.log('B');
// }, 10); // 타이머를 10ms로 설정
//
// setImmediate(() => {
//     console.log('C');
// });
//
// Promise.resolve().then(() => {
//     console.log('D');
// });
//
// process.nextTick(() => {
//     console.log('E');
// });
//
// console.log('F');
// // A
// // F
// // E
// // D
// // C
// // B

console.log('A');

Promise.resolve().then(() => {
    console.log('D');
});

process.nextTick(() => {
    console.log('E');
});

setTimeout(() => {
    console.log('B');
}, 0);

setImmediate(() => {
    console.log('C');
});

console.log('F');
