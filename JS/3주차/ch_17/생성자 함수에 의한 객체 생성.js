console.log('helloworld');
// ch.17 생성자 함수에 의한 객체 생성

// Object 생성자 함수
// - new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환함.

// // 1. 빈 객체의 생성
// const person = new Object();
// // 2. 프로퍼티 추가
// person.name = 'Lee';
// person.sayHello = function (){
//     console.log(`Hi. My name is ${this.name}`);
// };
// console.log(person);    // { name: 'Lee', sayHello: [Function (anonymous)] }
// person.sayHello();      // Hi. My name is Lee

// 생성자 함수(constructor)란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말함.
// 생성자 함수에 의해 생성된 객체를 인스턴스(instance)라 한다.

// 생성자 함수
// 1. 객체 리터럴에 의한 객체 생성 방식의 문제점
// - 객체 리터럴에 의한 객체 생성방식은 단 하나의 객체만 생성하기때문에, 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우
// 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적임

// const circle1 = {
//     radius: 5,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// };
// console.log(circle1.getDiameter()); // 10
//
// const circle2 = {
//     radius: 10,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// };
// console.log(circle2.getDiameter()); // 20

// 2. 생성자 함수에 의한 객체 생성 방식의 장점
// - 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

// //생성자 함수
// function Circle(radius){
//     //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킴
//     this.radius = radius;
//     this.getDiameter = function(){
//         return 2 * this.radius;
//     };
// }
//
// //인스턴스의 생성
// const circle1 = new Circle(5);
// const circle2 = new Circle(10);
//
// console.log(circle1.getDiameter()); // 10
// console.log(circle2.getDiameter()); // 20

// 자바와같은 클래스 기반 객체지향 언어의 생성자와는 다르게 그 형식이 정해져 있는 것이 아니라 일반 함수와 동일한 방법으로 생성자 함수를 정의하고
// new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작함.
// ---> new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작함.

//new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않음
// ---> 일반 함수로서 호출됨
// function Circle(radius){
//     //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킴
//     this.radius = radius;
//     this.getDiameter = function(){
//         return 2 * this.radius;
//     };
// }
// const circle3 = Circle(15);
// //일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환함.
// console.log(circle3);   // undefined
// //일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킴
// console.log(radius);    // 15

// console.log(circle3.radius);    // TypeError: Cannot read properties of undefined (reading 'radius')
// console.log(circle3.getDiameter());// TypeError: Cannot read properties of undefined (reading 'getDiameter')

// 3. 생성자 함수의 인스턴스 생성 과정
// - 생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)으로서 동작하여
// 인스턴스를 생성하는것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것이다.

// //생성자 함수
// function Circle(radius) {
//     //인스턴스 초기화
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }
// //인스턴스 생성
// const circle1 = new Circle(5);

// 자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다. new 연산자와 함께 생성자 함수를 호출하면 자바스크립트 엔진은
//다음과 같은 과정을 거쳐 암묵적으로 인스턴스를 생성하고 인스턴스를 초기화한 후 암묵적으로 인스턴스를 반환함.

// ㄱ. 인스턴스 생성과 this 바인딩
// function Circle(radius) {
//     // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 됨
//     console.log(this);  // Circle{}
//
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }

// ㄴ. 인스턴스 초기화
// function Circle(radius) {
//     // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 됨
//     console.log(this);  // Circle{}
//
//     // 2. this에 바인딩되어 있는 인스턴스를 초기화 함.
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
// }

// ㄷ. 인스턴스 반환
// function Circle(radius) {
//     // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 됨
//     console.log(this);  // Circle{}
//
//     // 2. this에 바인딩되어 있는 인스턴스를 초기화 함.
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
//     // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환됨
// }
//
// //인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환함
// const circle = new Circle(1);
// console.log(circle);    // Circle { radius: 1, getDiameter: [Function (anonymous)] }

// function Circle(radius) {
//     // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 됨
//     console.log(this);  // Circle{}
//
//     // 2. this에 바인딩되어 있는 인스턴스를 초기화 함.
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
//     // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환됨
//     // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시됨
//     return {};
// }
//
// //인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환함
// const circle = new Circle(1);
// console.log(circle);    // {}

// function Circle(radius) {
//     // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 됨
//     console.log(this);  // Circle{}
//
//     // 2. this에 바인딩되어 있는 인스턴스를 초기화 함.
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 * this.radius;
//     };
//     // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환됨
//     // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환됨
//     return 100;
// }
//
// //인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환함
// const circle = new Circle(1);
// console.log(circle);    // Circle { radius: 1, getDiameter: [Function (anonymous)] }
//
// // 궁금
// const circle2 = Circle(3);
// console.log(circle2);   // 100

// 생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손한다.
// 생성자 함수 내부에서 return 문을 반드시 생략해야한다.

// 4. 내부 메서드 [[Call]] 과 [[Construct]]
// - 생성자 함수로서 호출한다는 것은 new 연산자와 함께 호출하여 객체를 생성하는것을 의미
// - 함수는 객체이므로 일반객체(ordinary object)와 동일하게 동작할 수 있다.
// //함수는 객체다
// function foo(){}
// //함수는 객체이므로 프로퍼티를 소유할 수 있다
// foo.prop = 10;
// //함수는 객체이므로 메서드를 소유할 수 있다.
// foo.method = function (){
//     console.log(this.prop);
// };
// // console.log(foo.method());  // undefined
// // console.log(typeof foo.method); // function
// // console.log(foo.method);    // [Function (anonymous)]
// foo.method();   // 10

// 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
// 함수가 일반 함수로서 호출되면 함수 객체의 내부 메서드 [[Call]]이 호출되고
// new 연산자와 함께 생성자 함수로서 호출되면 내부 메서드 [[Construct]]가 호출된다.
// function foo() {
// }
//
// //일반적인 함수로서 호출: [[Call]]이 호출됨.
// foo();
// //생성자 함수로서 호출:[[Construct]]이 호출됨
// new foo();

// 모든 함수 객체는 내부 메서드 [[Call]]를 갖고 있으므로 호출할 수 있다.
// 하지만 모든 함수 객체가 [[Construct]]를 갖는 것은 아니다.
// 함수 객체는 callable 이면서 constructor 이거나 callable 이면서 non-constructor 다.

// 5. constructor 와 non-constructor 의 구분
// - constructor : 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
// - non-constructor : 메서드(ES6 메서드 축약 표현), 화살표 함수

// //일반 함수 정의 : 함수선언문, 함수표현식
// function foo(){}
// const bar = function (){};
// //프로퍼티x 의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않음.
// const baz = {
//     x : function (){}
// };
//
// //일반 함수로 정의된 함수만이 construct다.
// new foo();  // -> foo{}
// new bar();  // -> bar{}
// new baz.x();// -> x{}
//
// //화살표 함수 정의
// const arrow = () => {};
// // new arrow();    // TypeError: arrow is not a constructor
//
// //메서드 정의:ES6의 메서드 축약 표현만 메서드로 인정함
// const obj = {
//     x(){},
//     y:function (){}
// };
// new obj.y();
// new obj.x();    // TypeError: obj.x is not a constructor

// 함수를 일반 함수로서 호출하면 함수 객체의 내부 메서드 [[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출하면 내부 메서드 [[Construct]]가 호출됨.
// non-constructor인 함수 객체는 내부 메서드 [[Construct]]를 갖지 않는다. 따라서 non-constructor인 함수 객체를 생성자 함수로서 호출하면 에러가 발생함.

// function foo() {
// }
//
// //일반적인 함수로서 호출
// //[[Call]]이 호출됨. 모든 함수 객체는 [[Call]]이 구현되어 있음
// foo();
// //생성자 함수로서 호출
// //[[Construct]]이 호출됨. 이때 [[Construct]]를 갖지 않으면 에러가 발생함.
// new foo();

// 6. new 연산자
// new 연산자와 함께 호출하는 함수는 non-constructor 가 아닌 constructor 이어야 함.

// //생성자 함수로서 정의하지 않은 일반 함수
// function add(x, y) {
//     return x + y;
// }
//
// // 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
// let inst = new add();
// // 함수가 객체를 반환하지 않았으므로 반환문이 무시됨. 따라서 빈 객체가 생성되어 반환됨.
// console.log(inst);  // add{}

// // 궁금
// let inst2 = add();
// console.log(inst2); // NaN
// let inst3 = add;
// console.log(inst3); // [Function: add]

// // 객체를 반환하는 일반 함수
// function createUser(name, role){
//     return {name,  role};
// }
// // 일반 함수를 new 연산자와 함께 호출
// inst = new createUser('Lee', 'admin');
// // 함수가 생성한 객체를 반환함
// console.log(inst);          //{ name: 'Lee', role: 'admin' }
// console.log(typeof inst);   // object

// // 생성자 함수
// function Circle(radius){
//     this.radius = radius;
//     this.getDiameter = function (){
//         return 2 * this.radius;
//     };
// }
// // new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출됨
// const circle = Circle(5);
// console.log(circle);    // undefined
//
// // 일반 함수 내부의 this는 전역 객체 window를 가리킴
// console.log(radius);    // 5
// console.log(getDiameter()); // 10
//
// circle.getDiameter();   // TypeError: Cannot read properties of undefined (reading 'getDiameter')

// 7. new.target
// - new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킴.
// - new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined이다.

// //생성자 함수
// function Circle(radius){
//     //이 함수가 new 연산자와 함께 호출되지 않았다면 new.target 은 undefined다.
//     if (!new.target){
//         //new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환함
//         return new Circle(radius);
//     }
//    
//     this.radius = radius;
//     this.getDiameter = function (){
//         return 2 * this.radius;
//     };
// }
//
// // new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출됨
// const circle = Circle(5);
// console.log(circle.getDiameter());
// console.log(typeof circle); // object
//
//
//
// const circle2 = new Circle(5);
// console.log(typeof circle2);    // object
//
// console.log(circle === circle2);    // false