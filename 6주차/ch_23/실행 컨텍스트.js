console.log('helloworld');
// ch.23 실행 컨텍스트

// var x = 1;
// const y = 2;
//
// function foo(a){
//     var x = 3;
//     const y = 4;
//
//     function bar(b){
//         const z = 5;
//         console.log(a+b+x+y+z); // 42
//     }
//     bar(10);
// }
//
// foo(20);


// function first() {
//     console.log('first');
// }
//
// function second() {
//     first();
//     console.log('second');
// }
//
// function third() {
//     second();
//     console.log('third');
// }
//
// third();


// - 콜 스택
// 소스코드(전역 코드나 함수 코드 등) 평가 과정에서 생성된 실행 컨텍스트가 추가되고 제거되는
// 스택 자료구조인 실행 컨텍스트 스택이 바로 콜 스택이다.

function first(){
    console.log('first');
}

function second(){
    first();
    console.log('second');
    third();
    fifth();
}

function third(){
    console.log('third');
    fourth();
}

function fourth(){
    console.log('fourth')
}

function fifth(){
    console.log('fifth');
}

second();