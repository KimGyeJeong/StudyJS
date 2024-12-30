console.log('helloworld');
// ch.10 객체 리터럴

// 객체는 프로퍼티와 메서드로 구성된 집합체이다.
// - 프로퍼티: 객체의 상태를 나타내는 값(data)
// - 메서드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)

// c++나 자바 같은 클래스 기반 객체지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 함께 생성자(constructor)를 호출하여
//인스턴스를 생성하는 방식으로 객체를 생성함

// 객체 리터럴은 자바스크립트의 유연함과 강력함을 대표하는 객체 생성 방식이다.
// 객체를 생성하기 위해 클래스를 먼저 정의하고 new 연산자와 함께 생성자를 호출할 필요가 없음.

// 프로퍼티
// - 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성됨
// var person = {
//     // 프로퍼티 key는 name, 프로퍼티 값은 'Lee'
//     name : 'Lee',
//     // 프로퍼티 key는 age, 프로퍼티 값은 20
//     age : 20
// };

// 네이밍 규칙
// var person = {
//     firstName : 'Ung-mo',   //  식별자 네이밍 규칙을 준수하는 프로퍼티 키
//     'last-name' : 'Lee'     //  식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
// };
//
// console.log(person);

// 메서드
// 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드(method)라 부른다.
// 메서드는 객체에 묶여 있는 함수를 의미한다.
// var circle = {
//     raduis: 5,
//     getDiameter: function () {  // 메서드
//         return 2 * this.raduis; //  this는 circle을 가리킴
//     }
// };
// console.log(circle.getDiameter());

// 프로퍼티 접근
// 프로퍼티에 접근하는 방법은 두가지가 있다.
// - 마침표 표기법. dot notation. 마침표 프로퍼티 접근연산자(.)를 사용
// - 대괄호 표기법. bracket notation. 대괄호 프로퍼티 접근 연산자([...])
// var person = {
//     name : 'Lee'
// };
// //마침표 표기법
// console.log(person.name);
// //대괄호 표기법
// console.log(person['name']);    // 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야함.

// var person = {
//     name : 'Lee',
//     1 : 10
// };
// console.log(person[0]); // undefined 
// console.log(person[1]); // 10 
// console.log(person['1']); // 10 

// 프로퍼티 값 갱신
// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신됨
// var person = {
//     name : 'Lee'
// };
// person.name = 'Kim';
// console.log(person['name']);    //  Kim

// 프로퍼티 동적 생성
// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당됨
// var person = {
//     name : 'Lee'
// };
// person.age = 20;
// console.log(person.age);    // 20

// 프로퍼티 삭제
// delete 연산자는 객체의 프로퍼티를 삭제함.
// delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 함.
// 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시됨.
var person = {
    name : 'Lee'
};
person.age = 20;
console.log(person);    //{ name: 'Lee', age: 20 }

delete person.age;
console.log(person);    //{ name: 'Lee' }

delete person.address;
console.log(person);    //{ name: 'Lee' }

person.age = 30;
console.log(person);    //{ name: 'Lee', age: 30 }

if ('age' in person)
    delete person.age;
console.log(person);    //{ name: 'Lee' }
