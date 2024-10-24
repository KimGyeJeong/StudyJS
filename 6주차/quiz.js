// #1.1
console.log(a); // 1. undefined

function test() {
    console.log(a); // 2. undefined
    var a = 5;
    console.log(a); // 3. 5
}

test();

console.log(a); // 4. undefined

var a = 10;

// #1.2
// const obj = {
//     value: 42,
//     method: function() {
//         console.log(this.value); // 1. 42
//
//         function inner() {
//             console.log(this.value); // 2. 100 --> undefined
//         }
//
//         inner();
//     }
// };
//
// obj.method();
//
const globalValu = 100;
console.log(this.globalValue); // 3. 100 --> undefined


// #3.1
// console.log(a);     //undefined
// var a = 1;
// console.log(a);     // 1
//
// // console.log(b);     // Reference Error
// let b = 2;
// console.log(b);     // 2