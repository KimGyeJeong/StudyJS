console.log('helloworld');
// ch.19 프로토타입

// 자바스크립트는 클래스 기반 객체지향 프로그래밍 언어보다 효율적이며 더 강력한 객체지향 프로그래밍 능력을 지니고 있는 프로토타입 기반의 객체지향 프로그래밍 언어이다.
// ES6에서 클래스가 도입되었지만, 클래스도 함수이며 기존 프로토타입 기반 패턴의 문법적 설탕(syntactic sugar)이라고 볼수있다.

/// 문법적 설탕(syntactic sugar)
/// - 문법적 기능은 그대로 인데 그것을 읽는 사람이 직관적으로 쉽게 코드를 읽을 수 있게 만든다는 것.
// 예.
// function startGame(user, point){
//     this.user = user;
//     this.point = point;
// }
// startGame.prototype.addPoint = function (point){
//     this.point += point;
// };
//
// const playerGame = new startGame("Kim", 0);
// playerGame.addPoint(20);
//
// console.log(playerGame.point);
//
// class StartGame{
//     constructor(user, point) {
//         this.user = user;
//         this.point = point;
//     }
//     addPoint(point){
//         this.point += point;
//     }
// }
// const playerGame2 = new StartGame("Kim", 100);
// playerGame2.addPoint(300);
// console.log(playerGame2.point);


// 자바스크립트는 객체 기반의 프로그래밍 언어이며 자바스크립트를 이루고 있는 거의 '모든 것'이 객체임.



//p.g 267 예제 19-07
// const person = {name : 'Lee'};
//
// console.log(person.hasOwnProperty('__proto__'));
//
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));


// const parent = {};
// const child = {};
//
// // child의 프로토타입을 parent로 설정
// child.__proto__ = parent;
// // parent의 프로토타입을 child로 설정
// parent.__proto__ = child;  // TypeError: Cyclic __proto__ value 

// p.g 271 예제 19-14
// function Person(name){
//     this.name = name;
//     this.whatIsMyName = function (){
//         console.log(`my name is ${this.name}`);
//     };
// }
//
// const me = new Person('Kim');
// me.prototype.whatIsMyName();    // TypeError: Cannot read properties of undefined (reading 'whatIsMyName')
// me.whatIsMyName();  // my name is Kim

// p.g 272 예제 19-15
// obj 객체를 생성한 생성자 함수는 Object다.
// const obj = new Object();
// console.log(obj.constructor === Object);    // true
//
// // add 함수 객체를 생성한 생성자 함수는 Function이다.
// const add = new Function('a','b','return a+b');
// console.log(add.constructor === Function);  // true
// console.log(add.constructor === Object);    // false
//
// // 생성자 함수
// function Person(name){
//     this.name = name;
// }
// // me 객체를 생성한 생성자 함수는 Person이다
// const me = new Person('Kim');
// console.log(me.constructor === Person); // true
// console.log(typeof me.constructor)  // function

// console.log(Person.prototype);
//
// function Person(name){
//     this.name = name;
// }

// p.g 277 예제 19-20, 21

// // 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성됨
// console.log(Person.prototype);
//
// // 생성자 함수
// function Person(name){
//     this.name = name;
// }

// p.g 288 예제 19-36
// const Person = (function (){
//     // 생성자 함수
//     function Person(name){
//         this.name = name;
//     }
//
//     // 프로토타입 메서드
//     Person.prototype.sayHello = function (){
//         console.log(`Hi! My name is ${this.name}`)
//     };
//
//     return Person;
// }());
//
// const me = new Person('Kim');
//
// // 인스턴스 메서드
// me.sayHello = function (){
//     console.log(`Hey! My name is ${this.name}`);
// };
//
// // 인스턴스 메서드가 호출됨. 프로토 타입 메서드는 인스턴스 메서드에 의해 가려짐
// me.sayHello();  // Hey! My name is Kim
//
// // p.g 290 예제 19-37, 38
// // 19-36연결
// delete me.sayHello;
//
// // 인스턴스에는 sayHello 메서드가 없으므로 프로토타입 메서드가 호출된다.
// me.sayHello();  // Hi! My name is Kim
//
// delete me.sayHello;
//
// // 인스턴스에는 sayHello 메서드가 없으므로 프로토타입 메서드가 호출된다.
// me.sayHello();  // Hi! My name is Kim
//
//
// // p.g 290 예제 19-39
// // 프로토타입 메서드 변경
// Person.prototype.sayHello = function (){
//     console.log(`Heey! My name is ${this.name}`)
// };
// me.sayHello();  // Heey! My name is Kim
//
// delete Person.prototype.sayHello;
// me.sayHello();  // TypeError: me.sayHello is not a function


// p.g 291 예제 19-40
// const Person = (function (){
//     function Person(name){
//         this.name = name;
//     }
//    
//     Person.prototype = {
//         sayHello(){
//             console.log(`Hi! My name is ${this.name}`);
//         }
//     };
//     return Person;
// }());
//
// const me = new Person('Kim');
// me.sayHello();  // Hi! My name in Kim
//

// p.g 292 예제 19-42
// const Person = (function(){
//     function Person(name){
//         this.name = name;
//     }
//    
//     // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
//     Person.prototype = {
//         // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
//         constructor : Person, 
//         sayHello(){
//             console.log(`Hi, My name is ${this.name}`);
//         }
//     };
//     return Person;
// }());
//
// const me = new Person('Kim');
//
// // constructor 프로퍼티가 생성자 함수를 가리킨다
// console.log(me.constructor === Person); // true
// console.log(me.constructor === Object); // false


// p.g 293 예제 19-43
function Person(name){
    this.name = name;
}
const me = new Person('Kim');

// 프로토타입으로 교체할 객체
const parent = {
    sayHello(){
        console.log(`Hi! My name is ${this.name}`);
    }
};

// me 객체의 프로토타입을 parent 객체로 교체한다
Object.setPrototypeOf(me, parent);
// 위의 코드는 me.__proto__ = parent; 와 동일하게 동작한다

me.sayHello();  // Hi! My name is Kim

// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person); // false
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor === Object); // true