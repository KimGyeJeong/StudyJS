// function greet(name){
//     return `Hello, ${name}`;
// }
//
// const greeting = greet;
//
// console.log(greet('Kim'));      // 1번
// console.log(greeting('Lee'));   // 2번

//////

console.log(greet('Kim'));      // 3번
console.log(greeting('Lee'));   // 4번
console.log(typeof greeting)

function greet(name){
    return `Hello, ${name}`;
}

const greeting =greet;




// Hello, Kim
// Hello, Lee

// Hello, Kim
// ReferenceError: Cannot access 'greeting' before initialization