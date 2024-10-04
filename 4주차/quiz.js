// const Animal = (function() {
//     function Animal(name) {
//         this.name = name;
//     }
//
//     Animal.prototype.makeSound = function() {
//         console.log(`${this.name} makes a sound.`);
//     }
//
//     return Animal;
// }());
//
// const Person = (function() {
//     function Person(name) {
//         Animal.call(this, name);
//     }
//
//     Person.prototype = Object.create(Animal.prototype);
//     Person.prototype.constructor = Person;
//
//     Person.prototype.sayHello = function() {
//         console.log(`Hi! My name is ${this.name}`);
//     }
//
//     return Person;
// }());
//
// const employee = new Person('Alice');
// employee.sayHello(); // 1)
// employee.makeSound(); // 2)
//
// Person.prototype = {
//     sayHello() {
//         console.log(`Hello! I'm ${this.name}`);
//     }
// };
//
// const newEmployee = new Person('Bob');
//
// newEmployee.sayHello(); // 3)
// newEmployee.makeSound(); // 4)
//
// ////
// function Circle(r) {
//     this.r = r;
//     this.getArea1 = function () {
//         return Math.PI * this.r ** 2;
//     }
// }
//
// Circle.prototype.getArea2 = function () {
//     return Math.PI * this.r ** 2;
// }
//
// const c1 = new Circle(2);
// const c2 = new Circle(4);
//
// console.log(c1.getArea1 === c2.getArea1); // false
// console.log(c1.getArea2 === c2.getArea2); // true
// /////
// function Food(name) {
//     this.name = name || "food";
// }
//
// Food.prototype.getName = function () {
//     console.log(`Food name is ${this.name}`);
// };
//
// const f1 = new Food();
// f1.getName();
//
// const f2 = new Food("banana");
// // 오버라이딩 코드 작성
// f2.getName();
//
// ////

function Food(name) {
    this.name = name || "Food";
}

Food.prototype.getName = function () {
    return this.name;
};

function fruit(name) { }

fruit.prototype = new Food();
const f1 = new fruit("Grape");
console.log(`f1.getName(): ${f1.getName()}`);  // Food

const f2 = Object.create(fruit.prototype);
f2.name = 'Grape';
console.log(`f2.getName(): ${f2.getName()}`);  // Grape