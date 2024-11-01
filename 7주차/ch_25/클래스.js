console.log('helloworld');
// ch.25 클래스

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     greet() {
//         console.log(`Hello, ${this.name}`);
//     }
// }
//
// class Student extends Person {
//     greet() {
//         console.log(`Hi, I am student ${this.name}`);
//     }
// }
//
// const student = new Student("Alice");
// student.greet();    // Hi, I am student Alice

// class BankAccount {
//     #balance = 1000;
//
//     deposit(amount) {
//         this.#balance += amount;
//     }
//
//     withdraw(amount) {
//         this.#balance -= amount;
//     }
//     getBalance(){
//         return this.#balance;
//     }
// }
//
// const account = new BankAccount();
// // console.log(account.#balance); // 오류 발생
// console.log(account.getBalance()); // 1000

// const Person = class {
//     #name;
//
//     constructor(name) {
//         this.#name = name;
//     }
//
//     getName() {
//         return this.#name;
//     }
// }
//
// const onePerson = new Person('Kim');
// console.log(onePerson.getName()); // Kim

// //ES5 생성자 함수
// var Person = (function(){
//     //생성자 함수
//     function Person(name){
//         this.name = name;
//     }
//
//     // 프로토타입 메서드
//     Person.prototype.sayHi = function(){
//         console.log(`Hi! My name is ${this.name}`);
//     };
//
//     // 생성자 함수 변환
//     return Person;
// }());
//
// // 인스턴스 생성
// var me = new Person('Kim');
// me.sayHi(); // Hi! My name is Kim

// // 클래스 선언문
// class Person{}
//
// // 익명 클래스 표현식
// const Person = class{};
//
// // 기명 클래스 표현식
// const Person = class MyClass{};

// // 클래스 선언문
// class Person{
//     // 생성자
//     constructor(name) {
//         // 인스턴스 생성 및 초기화
//         this.name = name; // name 프로퍼티는 public하다.
//     }
//
//     // 프로토타입메서드
//     sayHi(){
//         console.log(`Hi! My name is ${this.name}`);
//     }
//
//     // 정적 메서드
//     static sayHello(){
//         console.log('Hello! ');
//     }
// }
//
// // 인스턴스 생성
// const me = new Person('Kim');
//
// // 인스턴스의 프로퍼티 참조
// console.log(me.name);   // Kim
//
// // 프로토타입 메서드 호출
// me.sayHi(); // Hi! My name is Kim
//
// // 정적 메서드 호출
// Person.sayHello();  // Hello!

// // 클래스 선언문
// class Person{}
//
// console.log(typeof Person); // function


// console.log(Perosn);    // ReferenceError: Perosn is not defined
//
// class Person{}


// class Person{}
//
// // 인스턴스 생성
// const me = new Person();
// console.log(me);    // Person {}

// class Person{}
//
// // 클래스를 new 연산자 없이 호출하면 타입에러가 발생한다.
// const me = Person();    // TypeError: Class constructor Person cannot be invoked without 'new'


// const Person = class MyClass{};
//
// // 함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다.
// const me = new Person();
//
// // 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다.
// console.log(MyClass);   // ReferenceError: MyClass is not defined
//
// const you = new MyClass();  // ReferenceError: MyClass is not defined


// class Person{
//     // 생성자
//     constructor(name) {
//         // 인스턴스 생성 및 초기화
//         this.name = name;
//     }
// }

// // 클래스
// class Person{
//     // 생성자
//     constructor(name) {
//         // 인스턴스 생성 및 초기화
//         this.name = name;
//     }
// }
//
// // 생성자 함수
// function Person(name){
//     // 인스턴스 생성 및 초기화
//     this.name = name;
// }

// class Person {
//     constructor() {}
//     constructor() {}
// }
// // SyntaxError: A class may only have one constructor

// class Person{}

// class Person{
//     // constructor는 생략하면 아래와 같이 빈 constructor가 암묵적으로 정의된다.
//     constructor(){}
// }
//
// // 빈 객체가 생성된다.
// const me = new Person();
// console.log(me);    // Person {}

// class Person{
//     constructor() {
//         this.name = 'Kim';
//         this.address = 'Seoul';
//     }
// }
//
// // 인스턴스 프로퍼티가 추가된다
// const me = new Person();
// console.log(me);    // Person { name: 'Kim', address: 'Seoul' }

// class Person{
//     constructor(name, address) {
//         // 인수로 인스턴스 초기화
//         this.name = name;
//         this.address = address;
//     }
// }
//
// // 인수로 초기값을 전달한다. 초기값은 constructor에 전달된다.
// const me = new Person('Kim','Seoul');
// console.log(me);    // Person { name: 'Kim', address: 'Seoul' }

// // 생성자 함수
// function Person(name){
//     this.name = name;
// }
// // 프로토타입 메서드
// Person.prototype.sayHi = function(){
//     console.log(`Hi! My name is ${this.name}`);
// };
//
// const me = new Person('Kim');
// me.sayHi(); // Hi! My name is Kim

// class Person {
//     // 생성자
//     constructor(name) {
//         // 인스턴스 생성 및 초기화
//         this.name = name;
//     }
//
//     // 프로토타입 메서드
//     sayHi() {
//         console.log(`Hi My name is ${this.name}`);
//     }
// }
//
// const me = new Person('Kim');
// me.sayHi(); // Hi! My name is Kim

// // me 객체의 프로토타입은 Person.prototype이다.
// Object.getPrototypeOf(me) === Person.prototype; // true
// me instanceof Person;   // true
//
// // Person.prototype의 프로토타입은 Object.prototype이다.
// Object.getPrototypeOf(Person.prototype) === Object.prototype;   // true
// me instanceof Object;   // true
//
// // me 객체의 constructor는 Person 클래스다.
// me.constructor === Person;  // true

// // 생성자 함수
// function Person(name){
//     this.name = name;
// }
// // 정적 메서드
// Person.sayHi = function(){
//     console.log('Hi!');
// };
// // 정적 메서드 호출
// Person.sayHi(); // Hi

// class Person {
//     // 생성자
//     constructor(name) {
//         // 인스턴스 생성 및 초기화
//         this.name = name;
//     }
//
//     // 정적 메서드
//     static sayHi() {
//         console.log(`Hi!`);
//     }
// }
//
// // 정적 메서드는 클래스로 호출한다.
// // 정적 메서드는 인스턴스 없이도 호출할 수 있다.
// // Person.sayHi(); // Hi!
//
// // 인스턴스 생성
// const me = new Person('Kim');
// me.sayHi(); // TypeError: me.sayHi is not a function
// me.sayHi;   // 인스턴스 me에는 sayHi가 정의되지 않았으므로 에러는 발생하지 않고 undefined임

// class Square {
//     // 정적 메서드
//     static area(width, height) {
//         return width * height;
//     }
// }
//
// console.log(Square.area(10, 10));   // 100

// class Square {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     area() {
//         return this.width * this.height;
//     }
// }
//
// const square = new Square(10, 10);
// console.log(square.area()); // 100

// // 표준 빌트인 객체의 정적 메서드
// Math.max(1, 2, 3);				// 3
// Number.isNaN(NaN);				// true
// JSON.stringify({ a: 1 });		//. "{"a":1}"
// Object.is({}, {});				// false
// Reflect.has({ a: 1 }, 'a');		// true

// class Person {
//     // 생성자
//     constructor(name) {
//         // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
//         console.log(this);  // Parson {}
//         console.log(Object.getPrototypeOf(this) === Person.prototype);  // true
//
//         // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
//         this.name = name;
//
//         // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
//     }
// }

// class Person {
//     constructor(name) {
//         // 인스턴트 프로퍼티
//         this.name = name;	// name 프로퍼티는 public하다.
//     }
// }
// const me = new Person('Kim');
// console.log(me);    // Person { name: 'Kim' }

// class Person{
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
//     // getter 함수
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//
//     // setter 함수
//     set fullName(name){
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// }
//
// const me = new Person('name1', 'Kim');
// // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
// console.log(`${me.firstName} ${me.lastName}`);  // name1 Kim
//
// // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
// me.fullName = 'name2 Kim';
// console.log(me);    // Person { firstName: 'name2', lastName: 'Kim' }
//
// // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다
// console.log(me.fullName);   // name2 Kim
//
// // fullName은 접근자 프로퍼티다.
// // 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다
// console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName'));
// // {
// //   get: [Function: get fullName],
// //   set: [Function: set fullName],
// //   enumerable: false,
// //   configurable: true
// // }

// class Person {
//     // 클래스 필드 정의
//     name = 'Kim';
// }
// const me = new Person();
// console.log(me.name);   // Kim
// console.log(me);    // Person { name: 'Kim' }

// class Person {
//     // this에 클래스 필드를 바인딩해서는 안된다.
//     this.name = 'Kim';  // SyntaxError: Unexpected token '.'
// }

// class Person {
//     name;
// }
//
// const me = new Person();
// console.log(me);	// Person {name: undefined}

// class Person {
//     name = 'Kim';
//
//     // 클래스 필드에 함수를 할당
//     getName = function () {
//         return this.name;
//     }
//     // 화살표 함수로 정의할 수도 있다.
//     // getName = () => this.name;
// }
//
// const me = new Person();
// console.log(me);	// Person { name: 'Kim', getName: [Function: getName] }
// console.log(me.getName());	// Kim

// class Person{
//     // private 필드 정의
//     #name = '';
//     constructor(name) {
//         // private 필드 참조
//         this.#name = name;
//     }
// }
// const me = new Person('Kim');
//
// // private 필드 #name 은 클래스 외부에서 참조할 수 없다.
// console.log(me.#name);  // SyntaxError: Private field '#name' must be declared in an enclosing class

// class Person{
//     // private 필드 정의
//     #name = '';
//     constructor(name) {
//         // private 필드 참조
//         this.#name = name;
//     }
//     // name은 접근자 프로퍼티다.
//     get name(){
//         // private 필드를 참조하여 trim 한 다음 반환한다.
//         return this.#name.trim();
//     }
// }
// const me = new Person(' Kim ');
// console.log(me.name);   //Kim
//
// const me2 = new Person('Kim');
// console.log(me.name);   // Kim

// class Person{
//     constructor(name) {
//         //private 필드는 클래스 몸체에서 정의해야한다.
//         this.#name = name;
//         // SyntaxError: Private field '#name' must be declared in an enclosing class
//     }
// }

// class MyMath{
//     // static public 필드 정의
//     static PI = 22/7;
//
//     // static private 필드 정의
//     static #num = 10;
//
//     // static 메서드
//     static increment(){
//         return ++MyMath.#num;
//     }
// }
//
// console.log(MyMath.PI);     // 3.142857142857143
// console.log(MyMath.increment());    // 11

// class Animal {
//     constructor(age, weight) {
//         this.age = age;
//         this.weight = weight;
//     }
//
//     eat() { return 'eat'; }
//
//     move() { return 'move'; }
// }
//
// // 상속을 통해 Animal 클래스를 확장한 Bird 클래스
// class Bird extends Animal {
//     fly() { return 'fly'; }
// }
//
// const bird = new Bird(1, 5);
//
// console.log(bird);                      // Bird {age: 1, weight: 5}
// console.log(bird instanceof Bird);      // true
// console.log(bird instanceof Animal);    // true
//
// console.log(bird.eat());    // eat
// console.log(bird.move());   // move
// console.log(bird.fly());    // fly

// // 의사 클래스 상속 패턴
// var Animal = (function(){
//     function Animal(age, weight){
//         this.age = age;
//         this.weight = weight;
//     }
//
//     Animal.prototype.eat = function(){
//         return 'eat';
//     };
//     Animal.prototype.move = function(){
//         return 'move';
//     };
//
//     return Animal;
// }());
//
// // Animal 생성자 함수를 상속하여 확장한 Bird 생성자 함수
// var Bird = (function(){
//     function Bird(){
//         // Animal 생성자 함수에게 this와인수를 전달하면서 호출
//         Animal.apply(this, arguments);
//     }
//
//     // Bird.prototype을 Animal.prototype을 프로토타입으로 갖는 객체로 교체
//     Bird.prototype = Object.create(Animal.prototype);
//     // Bird.prototype.constructor을 Animal에서 Bird로 교체
//     Bird.prototype.constructor = Bird;
//
//     Bird.prototype.fly = function(){
//         return 'fly';
//     };
//
//     return Bird;
// }());
//
// var bird = new Bird(1,5);
//
// console.log(bird);  // Bird { age: 1, weight: 5 }
// console.log(bird.eat());    // eat
// console.log(bird.move());   // move
// console.log(bird.fly());    // fly

// // 생성자 함수
// function Base(a){
//     this.a = a;
// }
//
// // 생성자 함수를 상속받는 서브 클래스
// class Derived extends Base {}
//
// const derived = new Derived(1);
// console.log(derived);   // Derived { a: 1 }

// function Base1() {}
//
// class Base2 {}
//
// let condition = true;
//
// // 조건에 따라 동적으로 상속 대상을 결정하는 서브 클래스
// class Derived extends (condition ? Base1 : Base2) {}
//
// const derived = new Derived();
// console.log(derived);   // Derived {}
//
// console.log(derived instanceof Base1);  // true
// console.log(derived instanceof Base2);  // false

// constructor(...args) { super(...args); }

// // 수퍼클래스
// class Base {}
//
// // 서브클래스
// class Derived extends Base {}

// // 수퍼클래스
// class Base {
//     constructor() {}
// }
//
// // 서브클래스
// class Derived extends Base {
//     constructor(...args) { super(...args); }
// }
//
// const derived = new Derived();
// console.log(derived);	// Derived {}

// class Base {
//     constructor(a, b) {	// ➃
//         this.a = a;
//         this.b = b;
//     }
// }
//
// class Derived extends Base {
//     constructor(a, b, c) {	// ➁
//         super(a, b);		// ➂
//         this.c = c;
//     }
// }
//
// const derived = new Derived(1, 2, 3);	// ➀
// console.log(derived);					// Derived {a: 1, b: 2, c: 3}

// // 수퍼클래스
// class Base {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayHi() {
//         return `Hi ${this.name}`;
//     }
// }
//
// // 서브클래스
// class Derived extends Base {
//     sayHi() {
//         // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다.
//         return `${super.sayHi()}. how are you doing?`;
//     }
// }
//
// const derived = new Derived('Kim');
// console.log(derived.sayHi());   // Hi Kim. how are you doing?

// // 서브클래스 
// class Derived extends Base {
//     sayHi() {
//         // __super는 Base.prototype을 가리킨다.
//         const __super = Object.getPrototypeOf(Derived.prototype);
//         return `${__super.sayHi.call(this)} how are you doing?`;
//     }
// }

// const base = {
//     name: 'Kim',
//     sayHi() {
//         return `Hi! ${this.name}`;
//     }
// };
//
// const derived = {
//     __proto__: base,
//     // ES6 메서드 축약 표현으로 정의한 메서드다. 따라서 [[HomeObject]]를 갖는다.
//     sayHi() {
//         return `${super.sayHi()}. how are you doing?`;
//     }
// };
//
// console.log(derived.sayHi());	// Hi Kim. how are you doing?

// // 수퍼클래스
// class Base {
//     static sayHi() {
//         return 'Hi!';
//     }
// }
// // 서브클래스
// class Derived extends Base {
//     static sayHi() {
//         // super.sayHi는 수퍼클래스의 정적 메서드를 가리킨다.
//         return `${super.sayHi()} how are you doing?`;
//     }
// }
//
// console.log(Derived.sayHi());	// Hi how are you doing?

// // 수퍼클래스
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     getArea() {
//         return this.width * this.height;
//     }
//
//     toString() {
//         return `width = ${this.width}, height = ${this.height}`;
//     }
// }
// // 서브클래스
// class ColorReactangle extends Rectangle {
//     constructor(width, height, color) {
//         super(width, height);
//         this.color = color;
//     }
//
//     // 메서드 오버라이딩
//     toString() {
//         return super.toString() + `, color = ${this.color}`;
//     }
// }
//
// const colorReactangle = new ColorReactangle(2, 4, 'red');
// console.log(colorReactangle);   // ColorRectangle {width: 2, height: 4, color: "red"}
//
// // 상속을 통해 getArea 메서드 호출
// console.log(colorReactangle.getArea());     // 8
// // 오버라이딩된 toString 메서드를 호출
// console.log(colorReactangle.toString());    // width = 2, height = 4, color = red

// class Rectangle {
//     constructor(width, height) {
//         // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
//         console.log(this);	// ColorRectangle {}
//         // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
//         console.log(new.target);	// ColorRectangle
//     ...

// // 수퍼클래스
// class Rectangle {
//     constructor(width, height) {
//         // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
//         console.log(this);	// ColorRectangle {}
//         // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
//         console.log(new.target);	// ColorRectangle
//
//         console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);	// true
//         console.log(this instanceof ColorRectangle);	// true
//         console.log(this instanceof Rectangle);		// true
//     ...

// // 수퍼클래스
// class Rectangle {
//     constructor(width, height) {
//         // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
//         console.log(this);	// ColorRectangle {}
//         // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
//         console.log(new.target);	// ColorRectangle
//
//         // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype이 설정된다.
//         console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);	// true
//         console.log(this instanceof ColorRectangle);	// true
//         console.log(this instanceof Rectangle);		// true
//
//         // 인스턴스 초기화
//         this.width = width;
//         this.height = height;
//
//         console.log(this);	// ColorRectangle {width: 2, height: 4}
//     ...

// // 서브클래스
// class ColorRectangle extends Rectangle {
//     constructor(width, height, color) {
//         super(width, height);
//
//         // super가 반환한 인스턴스가 this에 바인딩된다.
//         console.log(this);	// ColorRectangle {width: 2, height: 4}
//     ...

// // 서브클래스
// class ColorRectangle extends Rectangle {
//     constructor(width, height, color) {
//         super(width, height);
//
//         // super가 반환한 인스턴스가 this에 바인딩된다.
//         console.log(this);	// ColorRectangle {width: 2, height: 4}
//
//         // 인스턴스 초기화
//         this.color = color;
//
//         // 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
//         console.log(this);	// ColorRectangle {width: 2, height: 4, color: "red"}
//     }
// ...

// // Array 생성자 함수를 상속받아 확장한 MyArray
// class MyArray extends Array {
//     // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
//     uniq() {
//         return this.filter((v, i, self) => self.indexOf(v) === i);
//     }
//
//     // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
//     average() {
//         return this.reduce((pre, cur) => pre + cur, 0) / this.length;
//     }
// }
//
// const myArray = new MyArray(1, 1, 2, 3);
// console.log(myArray);   // MyArray(4) [1, 1, 2, 3]
//
// // MyArray.prototype.uniq 호출
// console.log(myArray.uniq());    // MyArray(3) [1, 2, 3]
// // MyArray.prototype.average 호출
// console.log(myArray.average()); // 1.75

// console.log(myArray.filter(v => v % 2) instanceof MyArray);	// true

// // Array 생성자 함수를 상속받아 확장한 MyArray
// class MyArray extends Array {
//     // 모든 메서드가 Array 타입의 인스턴스를 반환하도록 한다.
//     static get [Symbol.species]() { return Array; }
//
//     // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
//     uniq() {
//         return this.filter((v, i, self) => self.indexOf(v) === i);
//     }
//
//     // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
//     average() {
//         return this.reduce((per, cur) => pre + cur, 0) / this.length;
//     }
// }
//
// const myArray = new MyArray(1, 1, 2, 3);
//
// console.log(myArray.uniq() instanceof MyArray);	// false
// console.log(myArray.uniq() instanceof Array);	// true
//
// // 메서드 체이닝
// // uniq 메서드는 Array 인스턴스를 반환하므로 average 메서드를 호출할 수 없다.
// console.log(myArray.uniq().average());
// // TypeError: myArray.uniq( ... ).average is not a function