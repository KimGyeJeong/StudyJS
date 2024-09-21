function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
    return 300;
}

const circle = new Circle(10);
console.log(`1 : ${circle.getDiameter()}`);
console.log(`2 : ${circle}`);

circle.radius = 30;
console.log(`3: ${circle.radius}`);
console.log(`4: ${circle.getDiameter()}`);

Circle.radius = 40;
console.log(`5: ${circle.radius}`);
console.log(`6: ${Circle.radius}`);

const circle2 = Circle(20);
console.log(`7 : ${circle2.getDiameter}`);
console.log(`8 : ${circle2}`);
console.log(`9 : ${Circle(1000)}`);

Circle.radius2 = 80;
Circle.method = function (){
    console.log(`radius : ${this.radius}`);
    console.log(`radius2 : ${this.radius2}`)};
Circle.method();
console.log(`10 : ${Circle.radius}`);

const circle3 = new Circle(100);
console.log(`11 : ${circle3.radius2}`);
console.log(`12 : ${circle3.method()}`);        
console.log(`13 : ${circle3.method}`);
console.log(`14 : ${circle3.getDiameter()}`);


/**
 * 1 : 20
 * 2 : [object Object]
 * 3: 30
 * 4: 60
 * 5: 30
 * 6: 40
 * 7 : undefined
 * 8 : 300
 * 9 : 300
 * radius : 40
 * radius2 : 80
 * 10 : 40
 * 11 : undefined
 * 12 : // TypeError: circle3.method is not a function
 * 13 : undefined
 * 14 : 200
 */

/**
 * 1. 함수로서의 Circle
 * Circle 함수는 생성자 함수로도 사용되고, 일반 함수로도 호출되고 있습니다.
 *
 * new Circle(100)을 사용하면 생성자 함수로서 호출되고, 이때 생성된 객체에 radius 속성과 getDiameter 메서드가 생성됩니다.
 * Circle.radius2 = 80; 이 부분은 Circle 생성자 함수 자체에 radius2라는 속성을 추가한 것이지, 각 객체에 추가된 것이 아닙니다. 따라서 Circle 함수는 이 속성을 가지고 있지만, new Circle(100)으로 생성된 객체는 radius2 속성을 가지지 않습니다.
 * 2. Circle과 circle3의 관계
 * Circle.radius2 = 80;는 Circle 함수 자체에 radius2 속성을 추가한 것이므로, Circle 함수의 프로퍼티로 radius2가 존재합니다.
 * 하지만 new Circle(100)으로 생성된 circle3 객체는 Circle 함수의 프로퍼티를 상속받지 않으므로, circle3에는 radius2 속성이 없습니다.
 * 즉, Circle 함수에 직접 추가된 속성은 Circle 자체에만 존재하며, circle3과 같은 객체에는 존재하지 않기 때문에 circle3.radius2는 undefined가 나옵니다.
 *
 * 만약 radius2를 각 객체에서도 사용할 수 있도록 하고 싶다면, 생성자 함수 내부에 this.radius2를 정의해야 합니다.
 * function Circle(radius) {
 *     this.radius = radius;
 *     this.radius2 = 80;  // 각 인스턴스에 radius2 추가
 *     this.getDiameter = function () {
 *         return 2 * this.radius;
 *     };
 *     return 300;
 * }
 *
 * const circle3 = new Circle(100);
 * console.log(circle3.radius2); // 80
 */