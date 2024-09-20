console.log('helloworld');
// ch.18 함수와 일급 객체

// 일급객체
// - 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// - 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// - 함수의 매개변수에 전달할 수 있다.
// - 함수의 반환값으로 사용할 수 있다.

// 함수는 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)이라면 어디서든지 리터럴로 정의할 수 있으며 런타임(runtime)에 함수 객체로 평가됨.

// arguments 프로퍼티
// - 함수 객체의 arguments 프로퍼티 값은 arguments 객체다.
// - arguments 객체는 함수 호출 시 전ㄷ달된 인수(argument)들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용됨.
// 즉, 함수 외부에서는 참조할 수 없음.
// function multiply(x, y) {
//     console.log(arguments);
//     return x + y;
// }
//
// console.log(multiply());               // NaN
// console.log(multiply(1));           // NaN
// console.log(multiply(1, 2));     // 2
// console.log(multiply(1, 2, 3));  // 2

// arguments 객체는 인수를 프로퍼티 값으로 소유하며 프로퍼티 키는 인수의 순서를 나타냄.
// arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할때 유용함
// arguments 객체는 배열 형태로 인자 정보를 담고 있지만 실제 배열이 아닌 유사 배열 객체(array like object)다.

// ES6에서 Rest 파라미터의 도입으로 모던 자바스크립트에서는 arguments 객체의 중요성이 줄어들었다.


// length 프로퍼티
// - 함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킴
// function foo(){}
// console.log(foo.length);    // 0
//
// function foo2(){
//     let x;
// }
// console.log(foo2.length);   // 0
//
// function foo3(x,y,z){}
// console.log(foo3.length);   // 3

// arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있다.
// arguments 객체의 length 프로퍼티는 인자(arguments)의 개수를 가리키고, 함수 객체의 length 프로퍼티는 매개 변수(parameter)의 개수를 가리킴


// name 프로퍼티
// - 함수 객체의 name 프로퍼티는 함수 이름을 나타낸다.
// - 익명함수 표현식의 경우 ES5에서 name 프로퍼티는 빈 문자열을 값으로 갖지만 ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.

// __proto__ 접근자 프로퍼티
// - 모든 객체는 [[Prototype]] 이라는 내부 슬롯을 갖는다.
// - [[Prototype]] 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.
// - __proto__ 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다.
// - 내부 슬롯에는 직접 접근할 수 없고 간접적인 접근 방법을 제공하는 경우에 한하여 접근할 수 있다.

// const obj = {a:1};
// console.log(obj.__proto__ === Object.prototype); // true
//
// //객체 리터럴 방식으로 생성한 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다
// //hasOwnProperty 메서드는 Object.prototype의 메서드다.
// console.log(obj.hasOwnProperty('a'));           // true
// console.log(obj.hasOwnProperty('b'));           // false
// console.log(obj.hasOwnProperty('__proto__'));   // false


// prototype 프로퍼티
// - prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체이다. 즉 constructor 만이 소유하는 프로퍼티이다.
// - 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype 프로퍼티가 없다.

//함수 객체는 prototype 프로퍼티를 소유한다
console.log((function (){}).hasOwnProperty('prototype'));       // true
console.log((function (){}).hasOwnProperty('__proto__'));       // false

//일반 객체는 prototype 프로퍼티를 소유하지 않는다
console.log(({}).hasOwnProperty('prototype'));      // false