console.log('helloworld');
// ch.21 빌트인 객체

// // String 생성자 함수에 의한 String 객체 생성
// const strObj = new String('Kim');
// console.log(typeof strObj); // object
// console.log(strObj);        // [String: 'Kim']
//
// // Number 생성자 함수에 의한 Number 객체 생성
// const numObj = new Number(100);
// console.log(typeof numObj); // object
// console.log(numObj);        // [Number: 100]
//
// // Boolean 생성자 함수에 의한 Boolean 객체 생성
// const boolObj = new Boolean(true);
// console.log(typeof boolObj);    // object
// console.log(boolObj);           // [Boolean: true]
//
// let boolObj2 = new Boolean(0);
// console.log(boolObj2);      // [Boolean: false]
// boolObj2 = new Boolean(1);
// console.log(boolObj2);      // [Boolean: true]
// boolObj2 = new Boolean(null);
// console.log(boolObj2);      // [Boolean: false]
// boolObj2 = new Boolean(undefined);
// console.log(boolObj2);      // [Boolean: false]
//
// // Function 생성자 함수에 의한 Function 객체(함수) 생성
// const func = new Function('x','return x+x');
// console.log(typeof func);   // function
// console.log(func);          // [Function: anonymous]
// console.log(func(3));       // 6
//
// // Array 생성자 함수에 의한 Array 객체(배열) 생성
// const arr = new Array(1,2,3);
// console.log(typeof arr);    // object
// console.log(arr);           // [ 1, 2, 3 ]
//
// // RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
// const regExp = new RegExp(/ab+c/i);
// console.log(typeof regExp); // object
// console.log(regExp);        // /ab+c/i
//
// // Date 생성자 함수에 의한 Date 객체 생성
// const date = new Date();
// console.log(typeof date);   // object
// console.log(date);          // 2024-10-04T10:19:17.792Z

// const str = 'hello';
//
// //원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
// console.log(str.length);        // 5
// console.log(str.toUpperCase()); // HELLO

// const str = 'hi';
//
// //원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환함
// console.log(str.length);        // 2
// console.log(str.toUpperCase()); // HI
//
// //래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
// console.log(typeof str);        // string


// // console.log(x); // ReferenceError: x is not defined
// // 표현식인 문
// eval('1+2;');
// // 표현식이 아닌 문
// eval('var x = 5');
//
// // eval 함수에 의해 런타임에 변수 선언문이 실행되어 변수가 선언됨
// console.log(x); // 5
//
// // 객체 리터럴은 반드시 괄호로 둘러싼다
// const o = eval('({a: 1})');
// console.log(o); // { a: 1 }
//
// // 함수 리터럴은 반드시 괄호로 둘러싼다
// const f = eval('(function (){return 1;})');
// console.log(f());   // 1
//
// // 인수로 전달받은 문자열 코드가 여러 개의 문으로 이루어져 있다면 모든 문을 실행한 다음, 마지막 결과값을 반환함
// eval('1+2; 3+4');
// console.log(eval('1+2; 3+4'));  // 7
//
// // eval 함수는 자신이 호출된 위치에 해당하는 기존의 스코프를 런타임에 동적으로 수정한다.
// const y = 1;
//
// function foo(){
//     eval('var y = 3');
//     console.log(y); // 3
// }
// foo();
// console.log(y);     // 1

// // 인수가 유한수이면 true를 반환함
// console.log(isFinite(0));       // true
// console.log(isFinite(2e65));    // true
// console.log(isFinite('100'));   // true
// // null을 숫자로 변환하여 검사를 수행했기 때문에 true. null을 숫자타입으로 변환하면 0.
// console.log(isFinite(null));    // true
//
// // 인수가 무한수 또는 NaN으로 평가되는 값이라면 false를 반환함
// console.log(isFinite(Infinity));    // false
// console.log(isFinite(-Infinity));   // false
// console.log(isFinite(NaN));     // false
// console.log(isFinite('Hello')); // false
// console.log(isFinite('2005/12/12'));    // false

// // 숫자
// console.log(isNaN(NaN));        // true
// console.log(isNaN(10)); // false
//
// // 문자열
// console.log(isNaN('blablabla'));    // true NaN
// console.log(isNaN('10'));           // false 10
// console.log(isNaN('10.12'));        // false 10.12
// console.log(isNaN(''));             // false 0
// console.log(isNaN(' '));            // false 0
//
// // 불리언
// console.log(isNaN(true));       // true 1
// console.log(isNaN(null));       // false 0
//
// // undefined
// console.log(isNaN(undefined));  // true NaN
//
// // 객체
// console.log(isNaN({}));     // true NaN
//
// // date
// console.log(isNaN(new Date()));     // false Number
// console.log(isNaN(new Date()).toString());  // true NaN


// // 문자열을 실수로 해석하여 반환함
// console.log(parseFloat('3.14'));    // 3.14
// console.log(parseFloat('10.00'));   // 10
//
// // 공백으로 구분된 문자열은 첫 번째 문자열만 변환함
// console.log(parseFloat('34 45 66'));    // 34
// console.log(parseFloat('40 years'));    // 40
//
// // 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환함
// console.log(parseFloat('He was 40'));   // NaN
//
// // 앞뒤 공백은 무시됨
// console.log(parseFloat(' 60 '));    // 60


// // 문자열을 정수로 해석하여 반환한다.
// console.log(parseInt(10));      // 10
// console.log(parseInt(10.123));  // 10
//
// // 두번째 인수로 진법을 나타내는 기수(2~36)를 전달할 수 있다.
// // 기수를 지정하면 첫 번째 인수로 전달된 문자열을 해당 기수의 숫자로 해석하여 반환하는데 반환값은 언제나 10진수이며,
// // 기수를 생략하면 첫 번째 인수로 전달된 문자열을 10진수로 해석하여 반환한다.
// console.log(parseInt('10',2));  // 2
// console.log(parseInt('10',8));  // 8
// console.log(parseInt('10', 16));// 16
//
// // 기수를 지정하여 10진수 숫자를 해당 기수의 문자열로 변환하여 반환하고 싶을 때는 Number.prototype.toString 메서드를 사용한다.
// const x = 15;
//
// // 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환한다.
// console.log(x.toString(2)); // '1111'
// // 문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
// console.log(parseInt(x.toString(2), 2));    // 15
//
// // 첫번째 인수로 전달된 문자열이 0x 또는 0X로 시작하는 16진수 리터럴이라면 16진수로 해석하여 10진수 정수로 반환한다.
// console.log(parseInt('0xf'));       // 15
// console.log(parseInt('f',16));  // 15
//
// // 하지만 2진수, 8진수 리터럴은 제대로 해석하지 못한다
// // 2진수 리터럴(0b로 시작)은 제대로 해석하지 못한다. 0 이후가 무시된다.
// console.log(parseInt('0b10'));  // 0
// // 8진수 리터럴(ES6에서 도입. 0o로 시작)은 제대로 해석하지 못한다. 0 이후가 무시된다.
// console.log(parseInt('0o10'));  // 0
//
// // 첫 번째 인수로 전달한 문자열의 첫 번째 문자가 해당 지수의 숫자로 변환될 수 없으면 NaN을 반환한다.
// console.log(parseInt('A0'));    // NaN
// console.log(parseInt('20', 2));    // NaN
//
// // 첫 번째 인수로 전달한 문자열의 두 번째 문자부터 해당 진수를 나타내는 숫자가 아닌 문자와 마주치면 이 문자와 계속되는 문자들은 전부 무시되며 해석된 정수값만 반환된다.
// console.log(parseInt('1A0'));   // 1    10진수로 해석할 수 없는 'A'
// console.log(parseInt('102', 2));    // 2    2진수로 해석할 수 없는 '2'
// console.log(parseInt('58', 8)); // 5    8진수로 해석할 수 없는 '8'
// console.log(parseInt('FG', 16)) // 15   16진수로 해석할 수 없는 'G'
//
// // 첫 번째 인수로 전달한 문자열에 공백이 있다면 첫 번째 문자열만 해석하여 반환하며 앞뒤 공백은 무시된다. 첫번째 문자열을 숫자로 해석할 수 없는 경우 NaN을 반환한다.
// console.log(parseInt('34 45 66'));  // 34
// console.log(parseInt('40 years'));  // 40
// console.log(parseInt('He was 40')); // NaN
// console.log(parseInt(' 60 '));      // 60

// // 완전한 URI
// const uri = 'http://example.com?name=김이름&job=programmer&teacher';
//
// // encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
// const enc = encodeURI(uri);
// console.log(enc);   // http://example.com?name=%EA%B9%80%EC%9D%B4%EB%A6%84&job=programmer&teacher
//
// const dec = decodeURI(enc);
// console.log(dec);   // http://example.com?name=김이름&job=programmer&teacher

// // URI의 쿼리 스트링
// const uriComp = 'name=김이름&job=programmer&teacher';
//
// // encodeURIComponent 함수는 인수로 전달받은 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주한다.
// // 따라서 쿼리 스트링 구분자로 사용되는 =, ?, & 까지 인코딩한다
// let enc = encodeURIComponent(uriComp);
// console.log(enc);   // name%3D%EA%B9%80%EC%9D%B4%EB%A6%84%26job%3Dprogrammer%26teacher
//
// let dec = decodeURIComponent(enc);
// console.log(dec);   // name=김이름&job=programmer&teacher
//
// // encodeURI 함수는 인수로 전달받은 문자열을 완전한 URI로 간주한다.
// enc = encodeURI(uriComp);
// console.log(enc);   // name=%EA%B9%80%EC%9D%B4%EB%A6%84&job=programmer&teacher
//
// dec = decodeURI(enc);
// console.log(dec);   // name=김이름&job=programmer&teacher

// var x = 10;
//
// function foo(){
//     // 선언하지 않은 식별자에 값을 할당
//     y = 20; // window.y = 20;
// }
//
// console.log(x+y);   // ReferenceError: y is not defined
//
// foo();
// console.log(x+y);   // 30

// // 전역 변수 x는 호이스팅이 발생한다.
// console.log(x); // undefined
// // 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않는다.
// console.log(y); // ReferenceError: y is not defined
//
//
// var x = 10;
//
// function foo(){
//     // 선언하지 않은 식별자에 값을 할당
//     y = 20; // window.y = 20;
// }
// foo();
//
// // 선언하지 않은 식별자 y를 전역에서 참조 할 수 있다.
// console.log(x+y);   // 30


// // 브라우저에서 실행
// var x = 10;
//
// function foo(){
//     // 선언하지 않은 식별자에 값을 할당
//     y = 20; // window.y = 20;
//     console.log(x+y);   // 30
// }
// foo();
//
// console.log(window.x);  // 10
// console.log(window.y);  // 20
//
// delete x;   // 전역 변수는 삭제되지 않는다.
// delete y;   // 프로퍼티는 삭제된다.
//
// console.log(window.x);  // 10
// console.log(x); // 10
// console.log(window.y);  // undefined
// console.log(y); // Uncaught ReferenceError: y is not defined

// function foo() {
//     console.log(`foo's this :  ${this}`);      // [object global]
//
//     function bar() {
//         console.log(`bar's this : ${this}`);    // [object global]
//     }
//
//     bar();
// }
//
// foo();

// // var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
// var value = 1;
// // const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다.
// // const value = 1;
//
// // const obj = {
// //     value : 100,
// //     foo(){
// //         console.log(`foo's this : ${this}`);            // [object Object]
// //         console.log(`foo's this.value : ${this.value}`);// 100
// //        
// //         // 메서드 내에서 정의한 중첩 함수
// //         function bar(){
// //             console.log(`bar's this : ${this}`);            // [object global]
// //             console.log(`bar's this.value : ${this.value}`);// 
// //         }
// //         bar();
// //     }
// // };
// // obj.foo();

// var value = 1;
//
// const obj = {
//     value: 100,
//     foo() {
//         console.log("foo's this: ", this); // {value: 100, foo: ƒ}
//         // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
//         setTimeout(function () {
//             console.log("callback's this: ", this); // window
//             console.log("callback's this.value: ", this.value); // 1
//         }, 100);
//     }
// };
//
// obj.foo();

// var value = 1;
// const obj = {
//     value : 100,
//     foo(){
//         // this 바인딩(obj)을 변수 that에 할당한다.
//         const that = this;
//        
//         // 콜백 함수 내부에서 this 대신 that을 참조한다.
//         setTimeout(function (){
//             console.log(that.value);    // 100
//         }, 100);
//     }
// };
// obj.foo();

// var value = 1;
//
// const obj = {
//     value : 100,
//     foo(){
//         // 콜백 함수에 명시적으로 this를 바인딩 한다.
//         setTimeout(function (){
//             console.log(this.value); // 100
//         }.bind(this), 100);
//     }
// };
// obj.foo();

// var value = 1;
//
// const obj = {
//     value: 100,
//     foo() {
//         // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
//         setTimeout(() => console.log(this.value), 100); // 100
//     }
// };
// obj.foo();

// const person = {
//     name : 'Lee',
//     getName(){
//         // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
//         return this.name;
//     }
// };
//
// //메서드 getName을 호출한 객체는 person이다.
// console.log(person.getName());  // Lee
//
// const anotherPerson ={
//     name : 'Kim'
// };
// // getName 메서드를 anotherPerson 객체의 메서드로 할당
// anotherPerson.getName = person.getName;
//
// // getName 메서드를 호출한 객체는 anotherPerson이다.
// console.log(anotherPerson.getName());   // Kim
//
// // getName 메서드를 변수에 할당
// const getName = person.getName;
//
// // getName 메서드를 일반 함수로 호출
// console.log(getName()); // ''
//
// // 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
// // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 '' 이다.
// // Node.js 환경에서 this.name은 undefined 이다.

// function Person(name){
//     this.name = name;
// }
// Person.prototype.getName = function (){
//     return this.name;
// };
//
// const me = new Person('Lee');
//
// // getName 메서드를 호출한 객체는 me다.
// console.log(me.getName());  // Lee
//
// Person.prototype.name = 'Kim';
//
// // getName 메서드를 호출한 객체는 Person.prototype이다.
// console.log(Person.prototype.getName());    // Kim
//
// console.log(me.getName());  // Lee

// //생성자 함수
// function Circle(radius){
//     this.radius = radius;
//     this.getDiameter = function (){
//         return 2 * this.radius;
//     };
// }
//
// // 반지름이 5인 Circle을 생성
// const circle1 = new Circle(5);
// // 반지름이 10인 Circle을 생성
// const circle2 = new Circle(10);
//
// console.log(circle1.getDiameter()); // 10
// console.log(circle2.getDiameter()); // 20
//
// // new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다. 일반적인 함수의 호출로 동작한다.
// const circle3 = Circle(15);
//
// // 일반 함수로 호출한 Circle에는 반환문이 없으므로 암묵적으로 undefined를 반환한다.
// console.log(circle3);   // undefined
//
// // 일반 함수로 호출된 Circle 내부의 this는 전역 객체를 가리킨다.
// console.log(radius);    // 15

// function getThisBinding(){
//     return this;
// }
// // this 로 사용할 객체
// const thisArgs = { a: 1};
//
// console.log(getThisBinding());  // window
//
// // getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
// console.log(getThisBinding.apply(thisArgs));    // { a: 1 }
// console.log(getThisBinding.call(thisArgs));     // { a: 1 }

// function getThisBinding() {
//     // console.log('함수호출!',arguments);
//     console.log(arguments);
//     return this;
// }
//
// // this로 사용할 객체
// const thisArgs = {a: 1};
//
// // getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
// // apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
// console.log(getThisBinding.apply(thisArgs, [1, 2, 3]));
// // [Arguments] { '0': 1, '1': 2, '2': 3 }
// // { a: 1 }
//
// // call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
// console.log(getThisBinding.call(thisArgs, 1, 2, 3));
// // [Arguments] { '0': 1, '1': 2, '2': 3 }
// // { a: 1 }

// function convertArgsToArray(){
//     console.log(arguments);
//    
//     // arguments 객체를 배열로 변환
//     // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성한다.
//     const arr = Array.prototype.slice.call(arguments);
//     // const arr = Array.prototype.slice.apply(arguments);
//     console.log(arr);
//    
//     return arr;
// }
// convertArgsToArray(1,2,3);
// // [Arguments] { '0': 1, '1': 2, '2': 3 }
// // [ 1, 2, 3 ]

// function getThisBinding(){
//     return this;
// }
//
// //this로 사용할 객체
// const thisArgs = { a: 1};
//
// // bind 메서드는 첫 번째 인수로 전달한 thisArgs로 this 바인딩이 교체된
// // getThisBinding 함수를 새롭게 생성해 반환한다.
// console.log(getThisBinding.bind(thisArgs));     // [Function: bound getThisBinding]
// // bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
// console.log(getThisBinding.bind(thisArgs)());   // { a: 1 }

// const person = {
//     name : 'Kim',
//     foo(callback){
//         // 1
//         setTimeout(callback,  100);
//     }
// };
//
// person.foo(function (){
//     console.log(`Hi! my name is ${this.name}`); // 2 Hi! my name is undefined
//
//     // 일반 함수로 호출된 콜백 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
//     // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 '' 이다.
//     // Node.js 환경에서 this.name은 undefined이다.
// });

// const person = {
//     name : 'Kim',
//     foo(callback){
//         //bind 메서드로 callback 함수 내부의 this 바인딩을 전달
//         setTimeout(callback.bind(this), 100);
//     }
// };
//
// person.foo(function (){
//     console.log(`Hi! my name is ${this.name}`); // Hi! my name is Kim
// });