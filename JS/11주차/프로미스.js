// const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
// const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
// const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));
//
// Promise.all([requestData1(),requestData2(), requestData3()]).then(console.log).catch(console.error);
// // [ 1, 2, 3 ]

// const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
// const requestData2 = () => new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 2')), 2000));
// const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));
// const requestData4 = () => new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 4')), 4000));
//
// Promise.all([requestData1(),requestData2(), requestData3(), requestData4()]).then(console.log).catch(console.error);
// Error: Error 2
//     at Timeout._onTimeout (/Users/kimgyejeong/Desktop/repos/study_js/11주차/프로미스.js:9:85)
//     at listOnTimeout (node:internal/timers:573:17)
//     at process.processTimers (node:internal/timers:514:7)

//
// try {
//     setTimeout(() => { throw new Error('Error!'); }, 1000);
// } catch (e) { // 에러 처리 불가 
//     console.log('캐치한 에러', e);
// }