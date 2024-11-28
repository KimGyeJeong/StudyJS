// Set 객체는 중복되지 않는 유일한 값들의 집함

// const setMap = new Set([1,2,3]);
//
// console.log(setMap.has(2));


const studentAnswers = {
    Alice: ['A', 'B', 'C', 'A'],
    Bob: ['B', 'C', 'C', 'A'],
    Charlie: ['A', 'B', 'A', 'D'],
};
const correctAnswers = ['A', 'B', 'C', 'D'];

// 학생별 점수를 저장할 Map
const scoresMap = new Map();

Object.entries(studentAnswers).forEach(([student, answers]) => {
    // 1. 중복 제거
    const uniqueAnswers = new Set(answers);

    // 2. 점수 계산
    let score = 0;
    uniqueAnswers.forEach(answer => {
        if (correctAnswers.includes(answer)) {
            score += 1;
        }
    });

    // 3. Map에 점수 저장
    scoresMap.set(student, score);
});

// 결과 출력
scoresMap.forEach((score, student) => {
    console.log(`${student}: ${score}`);
});

// 결과:
// Alice: 3
// Bob: 3
// Charlie: 4


console.log(...new Map([]))
