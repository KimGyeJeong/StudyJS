// const counter = (function (){
//     let count = 0;
//    
//     function increase(n){
//         count++;
//         console.log("inner increase");
//     }
//    
//    
//     return function (functionName){
//         count = functionName(count);
//         return count;
//     }
// }());
//
// function increase(n){
//     return ++n;
// }
// function decrease(n){
//     return --n;
// }
//
// console.log(counter(increase));
// console.log(counter(increase));
// console.log(counter(increase));
// console.log(counter(increase));
// console.log(counter(increase));
// console.log(counter(increase));
// console.log(counter(increase));

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