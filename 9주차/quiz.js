// 1.1
// function createMultiplier(multiplier) {
//     // 반환될 익명 함수 생성(Rest 파라미터 사용)
//     return function double(...args){
//         return args.map((a) => a*multiplier);
//     }
// }
//
// // 예시 호출
// const double = createMultiplier(2); // multiplier가 2인 함수 생성
// const result = double(3, 4); // 3과 4를 인자로 호출
// console.log(result); // [6, 8] 출력

// 1.2
// function countDistinctSubstrings(S) {
//     // 코드 작성
//     const countString = new Set();
//     const length = S.length;
//    
//     for (let i = 0; i<S.length - 1; i++){
//         for (let j=0; j<S.length+1; j++){
//             countString.add(S.slice(i, j));
//         }
//     }
//    
//    
//     return countString.size;
// }
//
// const S = 'ababc';
// console.log(countDistinctSubstrings(S)); // 12


// 2.2
// const employees = [
//     { name: 'Alice', company: 'Google' },
//     { name: 'Bob', company: 'Microsoft' },
//     { name: 'Charlie', company: 'Google' },
//     { name: 'David', company: 'Amazon' },
//     { name: 'Eve', company: 'Microsoft' },
// ];
//
// // 회사별 직원 관리
// const companyMap = new Map();
//
// employees.forEach(({ name, company }) => {
//     if (!companyMap.has(company)) {
//         companyMap.set(company, []);
//     }
//     companyMap.get(company).push(name);
// });
//
// console.log(typeof companyMap.values());
// console.log( Array.isArray(companyMap.values()));   // false
// console.log(companyMap.entries()); 
// // {
// // [ 'Google', [ 'Alice', 'Charlie' ] ],
// //     [ 'Microsoft', [ 'Bob', 'Eve' ] ],
// //     [ 'Amazon', [ 'David' ] ]
// // }
// console.log(typeof companyMap.get('Google'));
// console.log(Array.isArray(companyMap.get('Google')));   // true
//
// // 특정 회사 직원 출력
// console.log("Google 직원:", companyMap.get('Google')); // ['Alice', 'Charlie']

// 2.3
// const student1Courses = ['Math', 'Physics', 'Biology', 'Chemistry'];
// const student2Courses = ['Biology', 'Math', 'English', 'History'];
//
// // 1. 공통 과목 (교집합)
// const commonCourses = [...new Set(student1Courses)].filter(course =>
//     student2Courses.includes(course)
// );
// console.log("공통 과목:", commonCourses); // ['Math', 'Biology']
//
// const commCourse2 = new Set();
// for (const i of new Set(student1Courses)){
//     if (new Set(student2Courses).has(i)){
//         commCourse2.add(i);
//     } 
// }
// console.log(commCourse2);
//
//
// // 2. 모든 과목 (합집합)
// const allCourses = [...new Set([...student1Courses, ...student2Courses])];
// console.log("모든 과목:", allCourses);
// // ['Math', 'Physics', 'Biology', 'Chemistry', 'English', 'History']

// 3.1
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 12, d: 14 };
//
// const mergedObj = {...obj1, ...obj2};
//
//     // 결과
//     console.log(mergedObj) // { a: 1, b: 12, c: 3, d: 14 }
//
// const arr1 = [ 1, 2, 3 ];
// const arr2 = [ 11, 12 ];
//
// const mergedArr = [...arr1, ...arr2].sort();
//
//     // 결과
//     console.log(mergedArr) // [1, 11, 12, 2, 3]

// 3.2 
// let bookInfo = {
//     boodTitle: "Javascript",
//     author: "Jack",
// };
// bookInfo = {...bookInfo, author: "Mari"
// }
//     console.log("Book Info", bookInfo);

// 3.3
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const wordCount = new Map();
//
// words.forEach((word) => {
//     wordCount.set(word, (wordCount.get(word) || 0) + 1);
// });
//
// console.log(wordCount.get("apple"));    // 3
// console.log(wordCount);
// console.log(wordCount.keys());
// console.log(wordCount.values());
// console.log(wordCount.entries());


function solution(a, b, c, d) {
    // var answer = 0;
    let answer = 0;

    // var square_arr = [a, b, c, d];
    let square_arr = [a, b, c, d];
    // var square = new Set(square_arr);
    let square = new Set(square_arr);
    // var count = 0;
    let count = 0;
    // square.add(a).add(b).add(c).add(d);

    // console.log('----');
    const [p, q, r] = [...new Set(square_arr)];
    console.log(p, q, r);
    //
    switch (square.size) {
        case 1 :
            // answer = 1111 *  [...square]
            answer = 1111 * p;
            break;
        case 2 :
            // const [a1, a2] = [...square];

            // square_arr.forEach(a =>{
            //     if (a === a1)
            //         count++;
            // })
            square_arr.forEach(a => {
                if (a === p)
                    count++;
            })

            if (count === 3) {
                // a1이 3개
                // console.log('3개일치', a1)
                answer = Math.pow(10 * p + q, 2);
            } else if (count === 2) {
                // console.log('2개일치')
                answer = (p + q) * Math.abs(p - q);

            } else {
                //a2가3개일치
                answer = Math.pow(10 * q + p, 2);
            }
            break;
        case 3 :
            //2,5,2,6 --> 30
            let pCount = 0;
            let qCount = 0;
            square_arr.forEach((a) => {
                a === p && pCount++;
                a === q && qCount++;
            })

            if (pCount === 2) {
                answer = q * r;
            } else if (qCount === 2) {
                answer = p * r;
            } else {
                answer = q * p;
            }

            break;
            
        // case 4:
        default :
            // 가장 작은 숫자 출력
            answer = Math.min(...square);
    }

    return answer;
}

console.log(solution(1, 1, 1, 3));
console.log(solution(1, 1, 1, 1));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(6, 4, 2, 5));
