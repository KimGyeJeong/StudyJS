// ch 26
// 1
// 함수 작성
const power = (a, b) => a ** b;

console.log(power(2, 3)); // 8

// 2
class Counter {
    constructor() {
        this.count = 0;
    }

    // increase() {
    //     // 아래 코드를 수정하여 1초 후에 카운트를 증가시키고 출력하도록 하세요.
    //     setTimeout(function() {
    //         this.count++;
    //         console.log(this.count);
    //     }, 1000);
    // }


    increase() {
        // 아래 코드를 수정하여 1초 후에 카운트를 증가시키고 출력하도록 하세요.
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
}

const counter = new Counter();
// counter.increase(); // NaN


// 27
// const arr = [3, 2, 1, 5];
//
// // 코드 작성
// console.log(Math.max(arr));


const arr = [3, 2, 1, 5];
let result = [];

// push를 이용하여 작성
for (let i = 0; i < arr.length; i++) {
    if (i !== arr.indexOf(1))
        result.push(arr[i]);
}
console.log(result);

// slice를 이용하여 작성
result = [];
result = [...(arr.slice(0, arr.indexOf(1))), ...(arr.slice(arr.indexOf(1) + 1, arr.length))];
console.log(result);
////////////////
num = 10;
let fibNum = [];

// 코드 작성
// 출력 결과: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
for (i = 0; i <= num; i++) {
    if (i === 0 || i === 1) {
        fibNum.push(i)
    } else {
        fibNum.push(fibNum[i - 1] + fibNum[i - 2])
    }
}
console.log(fibNum)


//sort, foreach, map, filter, reduce 각 메소드들의 원본 배열 수정 여부는?
// 수정. sort,
// 수정불가능. map, filter, reduce

const orders = [
    {id: 1, customer: 'Alice', amount: 250, status: 'completed'},
    {id: 2, customer: 'Bob', amount: 150, status: 'pending'},
    {id: 3, customer: 'Charlie', amount: 300, status: 'completed'},
    {id: 4, customer: 'David', amount: 200, status: 'cancelled'},
    {id: 5, customer: 'Eve', amount: 100, status: 'completed'},
    {id: 6, customer: 'Frank', amount: 350, status: 'completed'},
];

console.log(orders.filter(order => order.status === 'completed').reduce((acc, cur) => acc + cur.amount, 0));

console.log('------------');

const arrnew = [3, 2, 1, 5];
console.log(arrnew.sort().reverse()[1])

console.log('------------------$$');
const arr1 = [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [8, 7, 6, 5, 4, 3, 2, 1];
const arr3 = [0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5];

function createPhoneNumber(arr){
    if (arr.length !== 11) 
        arr.unshift(0,1,0);
    return `(${arr.slice(0,3).join('')})${arr.slice(3,7).join('')}-${arr.slice(7,arr.length).join('')}`;
}

let output = createPhoneNumber(arr1);
console.log(output);
console.log(createPhoneNumber(arr2));
console.log(createPhoneNumber(arr3));