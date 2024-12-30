console.log('helloworld');
// ch.26 ES6 함수의 추가 기능

// 1. 기본 매개변수
// function calculatePrice(price, tax = 0.1) {
//     return price + (price * tax);
// }
//
// console.log(calculatePrice(100));
// console.log(calculatePrice(100, 0.2));
// console.log(calculatePrice(100, 0.5, 'kim'));

/**
 *      110
 *      120
 *      150
 */

// 2. 나머지 매개변수
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4));    // 10

// 3. 화살표 함수
const person = {
    name: 'John',
    sayHi: () => `Hi, I'm ${this.name}`
};

console.log(person.sayHi());
// Hi, I'm undefined
// 화살표 함수는 this가 함수가 정의된 문맥을 따릅니다. sayHi 메서드에서 화살표 함수를 사용했기 때문에, this는 person 객체가 아닌 전역 객체를 가리킵니다. 전역 객체에는 name 속성이 없으므로 결과는 Hi, I'm undefined가 됩니다.


const person2 = {
    name: 'John',
    sayHi: function() {
        return `Hi, I'm ${this.name}`;
    }
};

console.log(person2.sayHi());
// Hi, I'm John


function calculatePrice(price, tax = 0.1) {
    return price + (price * tax);
}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));
console.log(calculatePrice(100, 'kim'));