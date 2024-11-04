// 클로저
// function count() {
//     var i;
//     for (i = 0; i < 10; ++i) {
//         setTimeout(function() {
//             console.log(i)
//         }, 100)
//     }
// }
//
// count(); // 10이 10번출력

// function count() {
//     for (let i = 0; i < 10; ++i) {
//         setTimeout(function() {
//             console.log(i)
//         }, 100)
//     }
// }
//
// count(); // 0 ~ 9 출력

// 클로저 2
// const func = function() {
//     let a = 10;
//     let b = function() {
//         return a;
//     }
//     return b;
// }
//
// let c = func();
// console.log(c()); // 10

// let count;
//
// function makeCounter() {
//     count = 0;
//     return function () {
//         return ++count;
//     };
// }
//
// const counter1 = makeCounter();
// console.log(counter1()); // 1
// console.log(counter1()); // 2
//
// const counter2 = makeCounter();
// console.log(counter2()); // 1. 1
// console.log(counter1()); // 2. 3
// console.log(counter2()); // 3. 2

// 클래스
// class Shape {
//     constructor(a) {
//         this.a = a;
//     }
// }
//
// class Circle extends Shape {
//     constructor(a) {
//         super(a);
//     }
//     getArea(){
//         return this.a*this.a*Math.PI;
//     }
// }
//
// class Square extends Shape {
//     constructor(a) {
//         super(a);
//     }
//     getArea(){
//         return this.a*this.a;
//     }
// }
//
// const circle = new Circle(5);
// console.log(circle.getArea()); // 78.53981633974483
//
// const square = new Square(4);
// console.log(square.getArea()); // 16

class Burger {
    constructor() {
        this.price = 4000;
        this.description = "Burger";
    }

    // getPrice = () => this.price;
    getPrice() {
        return this.price
    }

    getDescription = () => this.description;
    // getDescription() {
    //     return this.description
    // }
}

class CheeseBurger extends Burger {
    constructor() {
        super();
    }

    // getDescription() {
    //     return `${this.description} with Cheese`;
    // }
    getDescription=()=>`1111`;

    getPrice() {
        return this.price + 1000;
    }
}

const cheeseBurger = new CheeseBurger();
console.log(cheeseBurger.getDescription()); // "Burger with Cheese"
console.log(cheeseBurger.getPrice()); // 5000


// -----------
// function count() {
//     var i;
//     for (i = 0; i < 10; ++i) {
//         (function(c) {
//             setTimeout(function() {
//                 console.log(c);
//             }, 100);
//         })(i);
//     }
// }
//
// count();


let message = "Hello!";
global.message = "안녕하세요!";

function outerFunction(){
    let message = "Hi!";

    return function innerFunction(){
        console.log(message);
        console.log(this.message);
    };
}

const myClosure = outerFunction();
myClosure();


let count;

function makeCounter() {
    count = 0;
    return function() {
        return ++count;
    };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = makeCounter();
console.log(counter2()); // 1. ??
console.log(counter1()); // 2. ??
console.log(counter2()); // 3. ??