console.log('helloworld');
// ch.9 타입 변환과 단축 평가

// 타입 변환
// - 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(explicit coercion)또는 타입 캐스팅(type casting)이라 함.
// - 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 변환되는 것을 암묵적 타입 변환(implicit coercion)또는 타입 강제 변환(type coercion)이라 함.

console.log('10'+2);            // 102
console.log(typeof ('10'+2));   // string

console.log(5 * '10');          // 50
console.log(typeof (5 * '10')); // number

console.log(('b'+'a'+ + 'a'+'a').toLowerCase());
// 'b' + 'a' + (+'a') + 'a' 로 인식 --> baNaNa

// 명시적 타입 변환
// 1. 문자열 타입으로 변환
//      - String 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(String(1));
console.log(String(NaN));
console.log(String(Infinity))
//      - Object.prototype.toString 메서드를 사용하는 방법
console.log((1).toString());
console.log((NaN).toString());
console.log((Infinity).toString());
//      - 문자열 연결 연산자를 이용하는 방법
console.log(1+'');
console.log(NaN + '');
console.log(Infinity + '');

// 2. 숫자 타입으로 변환
//      - Number 생성자 함수를 new 연산자 없이 호출하는 방법
//      - parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
//      - '+' 단항 산술 연산자를 이용하는 방법
//      - '*' 산술 연산자를 이용하는 방법

// 3. 불리언 타입으로 변환
//      - Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
//      - ! 부정논리 연산자를 두번 사용하는 방법


// 단축 평가를 사용한 매개변수의 기본값 설정
//undefined 로 인해 발생할 수 있는 에러 방지
function getStringLength(str){
    str = str || '';
    return str.length;
}

console.log(getStringLength());         //  0
console.log(getStringLength('hi')); //  2

// ES6의 매개변수의 기본값 설정
function getStringLength2(str = ''){
    return str.length;
}

console.log(getStringLength2());            //  0
console.log(getStringLength2('hi'));    //  2