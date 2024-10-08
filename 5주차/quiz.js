// const str = 'hello';
// str.name = 'ddd'; // 래퍼 객체에 name 프로퍼티 추가
// str.__proto__.name = 'eee';
// console.log(str.name); // undefined

// ch.21
function example() {
    x = 10;
    var y = 20;
    let z = 30;
    const a = 40;
}

example();

console.log(x); // 10
// console.log(y); // ERROR 
// console.log(z); // ERROR
// console.log(a); // ERROR
/////////
let str = "hello";
str.str2 = "world";

console.log(str.str2);  // undefined
// 래퍼객체로 인해 삭제됨.

// ch 22
const cat = {
    name: 'Berry',
    breed: 'Persian',
    getDetails: function () {
        return `${this.name} is a ${this.breed} cat.`;
    }
};

const getCatDetails = cat.getDetails;
console.log(getCatDetails());
// undefined is a undefined cat
//코드 수정
// const getCatDetails2 = cat.getDetails.bind('Berry', 'Persian');
// console.log(getCatDetails2.call(('Berry', 'Persian')));

let getCatDetails2 = cat.getDetails.bind(cat);
console.log(getCatDetails2());

// const cat = {
//     name: 'Berry',
//     breed: 'Persian',
//     getDetails: function () {
//         return `${this.name} is a ${this.breed} cat.`;
//     }
// };

getCatDetails2 = cat.getDetails(cat.getDetails.apply({ name: 'Berry', breed: 'Persian' }));
// console.log(getCatDetails2());
// Berry is a Persian cat.


////////
function a(num) {
    console.log(this.num); // undefined
    return num * 2;
}

a(3);
// 생성자 함수가 아닌 일반 함수로 실행시 this는 window, global으로 바라보게됨.




const cat2 = {
    name: 'Berry',
    breed: 'Persian',
    getDetails: function() {
        return `${this.name} is a ${this.breed} cat.`;
    }
};

// const getCatDetails = cat2.getDetails;
// console.log(getCatDetails());

const catObj = cat2;
console.log('----');
console.log(catObj.getDetails());



function a2(num){
    console.log('a2 : ',this.num); // undefined
    return num * 2;
}
a2(3);
console.log(new a2(4));