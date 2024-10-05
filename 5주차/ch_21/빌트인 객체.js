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
