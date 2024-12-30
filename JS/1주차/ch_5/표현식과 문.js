console.log('helloworld');
// ch.5 표현식과 문

// 값(value)은 식(표현식 expression)이 평가(evaluate)되어 생성된 결과를 말한다.

// 리터럴
// - 리터럴(literal)은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법(notation)을 말한다
console.log('정수 리터럴 : ', 100, typeof 100);
console.log('부동소수점 리터럴 : ', 10.5, typeof 10.5);
console.log('2진수 리터럴 : ', 0b01000001, typeof 0b01000001);
console.log('8진수 리터럴 : ', 0o101, typeof 0o101);
console.log('16진수 리터럴 : ', 0x41, typeof 0x41);
console.log('문자열 리터럴 : ', 'Hello', typeof 'Hello');
console.log('불리언 리터럴 : ', true, typeof true);
console.log('null 리터럴 : ', null, typeof null);
console.log('undefined 리터럴 : ', undefined, typeof undefined);
console.log('객체 리터럴 : ', {name : 'Kim', address : 'Seoul'}, typeof {name : 'Kim', address : 'Seoul'});
console.log('배열 리터럴 : ', [1,2,3], typeof [1,2,3]);
console.log('함수 리터럴 : ', function(){}, typeof function (){});
console.log('정규표현식 리터럴 : ', /[A-Z]+/g, typeof /[A-Z]+/g);

// 정수 리터럴 :  100 number
// 부동소수점 리터럴 :  10.5 number
// 2진수 리터럴 :  65 number
// 8진수 리터럴 :  65 number
// 16진수 리터럴 :  65 number
// 문자열 리터럴 :  Hello string
// 불리언 리터럴 :  true boolean
// null 리터럴 :  null object
// undefined 리터럴 :  undefined undefined
// 객체 리터럴 :  { name: 'Kim', address: 'Seoul' } object
// 배열 리터럴 :  [ 1, 2, 3 ] object
// 함수 리터럴 :  [Function (anonymous)] function
// 정규표현식 리터럴 :  /[A-Z]+/g object

// 표현식
// 표현식(expression)은 값으로 평가될 수 있는 문(statement)이다. 즉 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조함

// 문
// 문(statement)은 프로그램을 구성하는 기본 단위이자 최소 실행단위다.
// 문은 여러 토큰으로 구성됨

// 토큰
// 토큰(token)이란 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소를 의미함.
