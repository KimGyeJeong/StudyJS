console.log('helloworld');
// ch.13 스코프

// 스코프
// - 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정됨
// - 식별자가 유효한 범위를 말함
// - 식별자를 검색할때 사용하는 규칙

// 코드는 전역(global)과 지역(local)로 구분할 수 있다.
// 전역변수는 어디서든지 참조할 수 있다.
// 지역변수는 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

// 스코프 체인
// 함수는 중첩될 수 있으므로 함수의 지역 스코프도 중첩될 수 있다.
// 스코프가 함수의 중첩에 의해 계층의 구조를 갖는다.
// 스코프가 계층적으로 연결된 것을 스코프 체인(scope chain)이라 한다.
// 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여
//상위 스코프 방향으로 이동하며 선언된 변수를 검색(identifier resolution)한다.

// 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만 하위 스코프에서 유요한 변수를 상위 스코프에서 참조할 수 없음
// function foo (){
//     console.log('global function foo');
// }
// function bar(){
//     //중첩함수
//     function foo(){
//         console.log('local function foo');
//     }
//     foo();
// }
// bar();  // local function foo

// 함수 레벨 스코프
// - var 키워드로 선언된 변수는 오로지 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정함. 이러한 특성을 함수 레벨 스코프(function level scope)라 함.
// var i = 10;
// for (var i = 0; i<5; i++)
//     console.log(i); // 0 1 2 3 4
// // 의도치 않게 변수의 값이 변경됨
// console.log(i); // 5

// 렉시컬 스코프
// var x = 1;
// function foo(){
//     var x = 10;
//     bar();
// }
//
// function bar(){
//     console.log(x);
// }
// foo();  // 1
// bar();  // 1
// bar 함수는 전역에서 정의된 함수. bar 함수객체는 자신이 정의된 스코프, 전역 스코프를 기억함.

// 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정함.
// 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다. 함수의 상위 스코프는 언제나 자신이 정의된 스코프이다.
// 함수의 상위 스코프는 함수 정의가 실행될 때 정적으로 결정됨.
// 함수 정의(함수 선언문 또는 함수 표현식)가 실행되어 생성된 함수 객체는 이렇게 결정된 상위 스코프를 기억한다.
// 함수가 호출될 때마다 상위 스코프를 참할 필요가 있기 때문이다.
