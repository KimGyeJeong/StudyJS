// function testScope() {
//     var x = 10;
//     let y = 20;
//     const z = 30;
//
//     if (true) {
//         var x = 40; // 1
//         let y = 50; // 2
//         const z = 60; // 3
//
//         console.log(x); // 4
//         console.log(y); // 5
//         console.log(z); // 6
//     }
//
//     console.log(x); // 7
//     console.log(y); // 8
//     console.log(z); // 9
//
//     for (var i = 0; i < 1; i++) {
//         let j = 1; // 10
//         const k = 2; // 11
//
//         console.log(i); // 12
//         console.log(j); // 13
//         console.log(k); // 14
//     }
//
//     console.log(j); // 15
//     console.log(k); // 16
// }
//
// testScope();

const firstObject = { name: "", age: "" };

const secondObject = firstObject;

firstObject.name = "test";

console.log(secondObject.name);