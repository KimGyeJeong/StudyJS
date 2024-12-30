// 1
// console.log("시작");
//
// setTimeout(() => {
//     console.log("1초 후 실행");
// }, 1000);
//
// setTimeout(() => {
//     console.log("0초 후 실행");
// }, 0);
//
// console.log("끝");
//
// // 시작 끝 0초후실행 1초후실행

// 2
// function foo() {
//     console.log('foo');
// }
//
// function bar() {
//     console.log('bar');
// }
//
// setTimeout(foo, 0);
// bar();
// // bar - setTimeout - foo
// 실행순서이므로 setTimeout - bar - foo 임

// 3
// let num = 0;
//
// function showTime() {
//     console.log(`안녕하세요. 접속하신 지 ${num++}초가 지났습니다.`);
//     // if(num>5) clearInterval(tId);
//     // 안녕하세요. 접속하신 지 0초가 지났습니다.
//     // 안녕하세요. 접속하신 지 1초가 지났습니다.
//     // 안녕하세요. 접속하신 지 2초가 지났습니다.
//     // 안녕하세요. 접속하신 지 3초가 지났습니다.
//     // 안녕하세요. 접속하신 지 4초가 지났습니다.
//     // 안녕하세요. 접속하신 지 5초가 지났습니다.
//     if(num>=5) clearInterval(tId);
//     // 안녕하세요. 접속하신 지 0초가 지났습니다.
//     // 안녕하세요. 접속하신 지 1초가 지났습니다.
//     // 안녕하세요. 접속하신 지 2초가 지났습니다.
//     // 안녕하세요. 접속하신 지 3초가 지났습니다.
//     // 안녕하세요. 접속하신 지 4초가 지났습니다.
// }
//
// const tId = setInterval(showTime, 1000);

// 4
// let count = 10;
//
// const countDown = () => {
//     const tId = setInterval(() => {
//         if (count === 5) console.log('5초남았어요!')
//         console.log(count--);
//
//         if (count === 0) {
//             clearInterval(tId);
//             console.log('종료');
//         }
//     }, 100)
// };
//
// countDown();
//
// // 10
// // 9
// // 8
// // 7
// // 6
// // 5초 남았어요!
// // 5
// // 4
// // 3
// // 2
// // 1
// // 02. 
// // 종료

// 5
// const readline = require("readline");
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
// const quiz = [
//     {
//         question:
//             "현재 실행중인 태스크가 종료되지 않아도 다음 태스크를 곧바로 실행하므로 블로킹이 발생하지 않는 방식은? OOO",
//         answer: ["비동기"],
//     },
//     {
//         question:
//             "비동기함수인 SetTimeout의 콜백함수는 태스크큐에 푸시되어 대기하다가 OOO이 비게되면 푸시되어 실행된다. OOO은?",
//         answer: ["콜스택"],
//     },
//     {
//         question:
//             "브라우저가 서버에게 비동기방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 방식은?",
//         answer: ["ajax", "Ajax"],
//     },
// ];
//
// let currentIdx = 0; // 현재 퀴즈 인덱스
// let correctCount = 0; // 정답 카운트
// let timeoutId = null;
//
// function askQuiz() {
//     if (currentIdx >= quiz.length) {
//         console.log(`총 맞힌 문제: ${correctCount}/${quiz.length}`);
//         rl.close();
//         return;
//     }
//
//     const { question, answer } = quiz[currentIdx];
//     console.log(`Quiz ${currentIdx + 1}: ${question}`);
//
//     // 5초 타이머
//     timeoutId = setTimeout(() => {
//         console.log("시간 초과!");
//         currentIdx++;
//         askQuiz();
//     }, 10000);
//
//     // 사용자 입력
//     rl.question("정답: ", (userAnswer) => {
//         // 제한 시간 초기화
//         clearTimeout(timeoutId);
//         if (answer.includes(userAnswer.trim())) {
//             console.log("정답입니다!");
//             correctCount++;
//         } else {
//             console.log("오답입니다!");
//         }
//         currentIdx++;
//         askQuiz();
//     });
// }
//
// askQuiz();

function temp(a,b,c=3){
    console.log(a, b, c)
}
temp(4,5,6);