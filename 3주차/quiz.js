// 1. 에러가 발생하는 라인과 이유 설명
function animal() {}
const plant = function() {};
const livingThing = { type: function() {} };
new animal();
new plant();
new livingThing.type();
// const vehicle = () => {};
// new vehicle();
// const machine = { operate() {} };
// new machine.operate();

// 2. 실행 결과 예측
function func(a, b, c) {
    console.log('Arguments length:', arguments.length);
    console.log('Function length:', func.length);

    return a + b + c;
}

const result1 = func(1, 2, 3);
console.log('Result 1:', result1);

const result2 = func(1, 2, 3, 4);
console.log('Result 2:', result2);

//
function Func(a) {
    this.a = a;
    this.b = function () {
        return a * 2;
    }
}
const nCon = Func(5);
console.log(nCon);
// Func를 생성자 함수로 호출되기 위해 new.target를 사용해 수정하면?