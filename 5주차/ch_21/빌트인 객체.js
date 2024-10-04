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

// 숫자
console.log(isNaN(NaN));
console.log(isNaN(NaN));

// 문자열
console.log(isNaN(NaN));



