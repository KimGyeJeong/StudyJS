console.log('helloworld');
// ch.22 this

// const circle = {
//     // 프로퍼티 : 객체 고유의 상태 데이터
//     radius: 5,
//     // 메서드 : 상태 데이터를 참조하고 조작하는 동작
//     getDiameter() {
//         // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면 자신이 속한 객체인 circle을 참조할 수 있어야 한다.
//         return 2 * circle.radius;
//     }
// };
//
// console.log(circle.getDiameter());  // 10

// const circle = {
//     radius: 5,
//     getDiameter() {
//         // this는 메서드를 호출한 객체를 가리킨다.
//         return 2 * this.radius;
//     }
// };
//
// console.log(circle.getDiameter());  // 10

// //생성자 함수
// function Circle(radius){
//     // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
//     this.radius = radius;
// }
//
// Circle.prototype.getDiameter = function (){
//     // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
//     return 2*this.radius;
// };
//
// // 인스턴스 생성
// const circle = new Circle(5);
// console.log(circle.getDiameter());  // 10