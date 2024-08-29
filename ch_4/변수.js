console.log('helloworld');
// ch.4 변수

// 변수 선언
// 1. var
//  - ES6 이전에 변수를 선언할 수 있는 유일한 키워드
//  - 대표적인 단점으로 block-level scope 를 지원하지 않고 function-level scope 를 지원하여 전역변수가 선언되어 심각한 부작용이 발생함.
// 2. let
// 3. const

// 변수 호이스팅 variable hoisting
// - 변수 선언문이 코드의 선두로 끌려 올려진 것처럼 동작하는 자바스크립트 고유의 특징

// 변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행됨
//예제 4.8
// console.log(score); // undefined
// var score;
// score = 80;
// console.log(score); // 80

//예제 4.9
// console.log(score); //  undefined
// var score = 80;
// console.log(score); //  80

// 값의 재할당
// 재할당이란 이미 값이 할당되어 있는 변수에 새로운 값을 또다시 할당하는 것을 말함
//예제 4.10
// var score = 80;
// score = 90;
// console.log(score); //  90

// 값을 재할당할 수 없어서 변수에 저장된 값을 변경할 수 없다면 변수가 아니라 상수(constant)라 한다.


//추가.
// 가비지 컬렉터, GC, Garbage Collector
// 애플리케이션이 할당한 메모리 공간을 주기적으로 검사하여 더 이상 사용되지 않는 메모리를 해제하는 기능을 말한다.
// 가비지 컬렉터를 통해 메모리 누수를 방지함




