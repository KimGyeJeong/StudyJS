console.log('helloworld');
// ch.14 전역 변수의 문제점

// 변수의 생명주기
// - 지역 변수의 생명 주기는 함수의 생명 주기와 일치함.
// - var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치함.

// 암묵적 결합(implicit coupling)
// 전역 변수를 선언한 의도는 코드 어디서든 참조하고 할당할 수 있는 변수를 사용하겠다는 것으로,
// 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합을 허용한다.
// 변수의 유효범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.

// 전역 변수는 생명 주기가 길다.
// 전역 변수는 스코프 체인 상에서 종점에 존재한다. 변수를 검색할때 가장 마지막에 검색되기에 검색 속도가 가장 느리다.
// 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유한다.


// 전역 변수의 사용을 억제하는 방법
// - 즉시 실행 함수 : 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역변수가 된다
// (function (){
//     var foo = 10;
// }());
// console.log(foo);   //ReferenceError: foo is not defined

// - 네임스페이스 객체(namespace) : 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법
// var MYAPP = {}; // 전역 네임스페이스 객체
// MYAPP.name = 'Lee';
// console.log(MYAPP.name);    //  Lee
// 네임스페이스 객체에 또 다른 네임스페이스 객체를 프로퍼티로 추가해서 네임스페이스를 계층적으로 구상할수도 있다
// var MYAPP = {};
// MYAPP.person = {
//     name : 'Lee',
//     address : 'Seoul'
// };
// console.log(MYAPP.person.name);
// console.log(MYAPP.person);

// - 모듈 패턴 : 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈로 만듬
// var Counter = (function (){
//     //private 변수
//     var num = 0;
//     return{
//         increase() {
//             return ++num;
//         },
//         decrease(){
//             return --num;
//         }
//     }
// }());
//
// //private 변수는 외부로 노출되지 않음
// console.log(Counter.num);           //  undefined
// console.log(Counter.increase());    //  1
// console.log(Counter.increase());    //  2
// console.log(Counter.decrease());    //  1

// ES6모듈 : ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공함.
// 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아님
// 자바스크립트 파일은 모듈로서 동작하며 모듈의 파일 확장자는 mjs를 권장함.