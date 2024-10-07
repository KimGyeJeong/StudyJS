// console.log(x); // ReferenceError: x is not defined
eval('var x = 5');

console.log(x);     // 5


// 퀴즈 1: 다음 코드에서 출력되는 값은 무엇일까요?
// const person = {
//     name: 'John',
//     getName: function() {
//         return this.name;
//     }
// };
//
// console.log(person.getName());
// undefined
// 'John'
// null
// 'name'
// 정답: 2. 'John'
// 해설: getName() 메서드는 객체 person의 name 속성을 반환합니다. 메서드가 객체 내에서 호출되었기 때문에 this는 person을 가리키며, 그 결과 'John'이 출력됩니다.

    // 퀴즈 2: 다음 코드에서 greet() 함수가 호출되었을 때 출력되는 값은?
// function greet() {
//     console.log(this.name);
// }
//
// const person1 = {
//     name: 'Alice',
//     greet: greet
// };
//
// const person2 = {
//     name: 'Bob',
//     greet: greet
// };
//
// person1.greet();
// person2.greet();
// 'undefined', 'undefined'
// 'Alice', 'Bob'
// 'Alice', 'Alice'
// 'Bob', 'Bob'
// 정답: 2. 'Alice', 'Bob'
// 해설: greet 함수는 각각 person1과 person2 객체에서 호출되었습니다. 객체가 greet() 메서드를 호출할 때 this는 호출한 객체를 가리키므로, person1에서 호출할 때는 'Alice', person2에서 호출할 때는 'Bob'이 출력됩니다.

    // 퀴즈 3: 다음 코드에서 출력되는 값은 무엇일까요?
// const car = {
//     brand: 'Tesla',
//     getBrand: function() {
//         return this.brand;
//     }
// };
//
// const getCarBrand = car.getBrand;
// console.log(getCarBrand());
// 'Tesla'
// null
// undefined
// 'brand'
// 정답: 3. undefined
// 해설: getCarBrand 변수에 car.getBrand 메서드를 할당하면서 this 바인딩이 사라집니다. 이 경우 this는 전역 객체를 가리키게 되며, 전역 객체에는 brand 속성이 없으므로 undefined가 출력됩니다. 함수 내부의 this는 호출 방식에 따라 바인딩되므로, 함수 호출 방식이 중요합니다.

    // 퀴즈 4: 다음 코드에서 출력되는 값은 무엇일까요?
// const myObject = {
//     data: 42,
//     logData: () => {
//         console.log(this.data);
//     }
// };
//
// myObject.logData();
// 42
// undefined
// null
// 에러 발생
// 정답: 2. undefined
// 해설: 화살표 함수는 자신만의 this를 가지지 않으며, 상위 스코프에서 this를 가져옵니다. 여기서 상위 스코프는 전역 객체가 되고, 전역 객체에는 data 속성이 없기 때문에 undefined가 출력됩니다. 화살표 함수에서는 this가 동적으로 바인딩되지 않는 점을 유의해야 합니다.

    // 퀴즈 5: 다음 코드에서 출력되는 값은 무엇일까요?
// const user = {
//     age: 25,
//     getAge: function() {
//         return this.age;
//     }
// };
//
// const getUserAge = user.getAge.bind(user);
// console.log(getUserAge());
// undefined
// 25
// null
// 에러 발생
// 정답: 2. 25
// 해설: bind() 메서드를 사용해 user 객체에 this를 명시적으로 바인딩했기 때문에, getUserAge()를 호출할 때 this는 user 객체를 가리킵니다. 따라서 user.age 값인 25가 출력됩니다. bind()는 함수의 this 바인딩을 고정할 수 있는 중요한 메서드입니다.


/////////////////
// 빌트인 객체
// const num = 100;
// const obj = new Number(100);
//
// console.log(`1 : ${typeof num}`);
// console.log(`2 : ${typeof obj}`);

// 'number', 'object'
// 'object', 'number'
// 'number', 'number'
// 'object', 'object'
// 정답: 1. 'number', 'object'
//
// 해설: num은 원시 타입 숫자이기 때문에 typeof num은 'number'를 반환합니다. 반면, obj는 new Number()로 생성된 Number 객체이므로 typeof obj는 'object'를 반환합니다.

// var y = 5;
//
// function myFunction() {
//     y = 10;  // var 키워드 없이 값만 할당
// }
//
// myFunction();
// console.log(y);

// 5
// 10
// undefined
// 에러 발생
// 정답: 2. 10
//
// 해설: 전역 변수 y는 이미 var로 선언되어 있습니다. 함수 myFunction에서 y에 값을 할당할 때, 이 값은 전역 변수 y에 할당됩니다. 따라서 console.log(y)는 10을 출력합니다. 암묵적 전역이 발생하지 않으며, 기존 전역 변수의 값이 덮어씌워집니다.

// function myFunction() {
//     var z = 30;
//     z = 40;
// }
// myFunction();
// // console.log(z);
// console.log(global.z);

// 30
// 40
// undefined
// 에러 발생
// 정답: 4. 에러발생
//
// 해설: 변수 z는 함수 내부에서 선언된 지역 변수이므로 함수 외부에서는 존재하지 않습니다. 따라서 console.log(z)를 실행하면 ReferenceError: z is not defined가 발생합니다.

// const person = {
//     name: 'Kim',
//     getName: () => {
//         return this.name;
//     }
// };
// console.log(person.getName());

// 'Kim'
// undefined
// null
// 에러 발생
// 정답: 2. undefined
//
// 해설: 화살표 함수는 자신만의 this를 가지지 않고, **상위 스코프의 this**를 참조합니다. 이 경우 person 객체가 아닌 **전역 객체의 this**를 가리키며, 전역 객체에 name 속성이 없으므로 undefined가 반환됩니다.

// const person = {
//     name: 'Lee',
//     getName: function() {
//         return this.name;
//     }
// };
// console.log(person.getName());

// 'undefined'
// 'Lee'
// null
// 에러 발생
// 정답: 2. 'Lee'
//
// 해설: person 객체의 메서드 getName에서의 this는 해당 메서드를 호출한 객체 person을 가리킵니다. 따라서 this.name은 'Lee'를 반환합니다.
