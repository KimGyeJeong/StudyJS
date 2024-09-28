function Animal() {
    this.sound = "Roar";
}

Animal.prototype.makeSound = function () {
    return this.sound;
};

const lion = new Animal();
console.log(`1 : ${lion.makeSound()}`);
////////////////////////////
const carProto = {
    wheels: 4,
    drive() {
        return "Vroom!";
    }
};

const myCar = Object.create(carProto);
myCar.color = "red";

console.log(`2 : ${myCar.wheels}`);
console.log(`3 : ${myCar.drive()}`);
////////////////////////////
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, ${this.name}`;
};

const john = new Person("John");

Person.prototype.greet = function() {
    return `Hi, ${this.name}`;
};

console.log(`4 : ${john.greet()}`);


/**
 * 1. Roar
 * 2. 4
 * 3. Vroom!
 * 4. Hi, John
 */

/**
 * 1. Animal은 생성자 함수이고, Animal.prototype에 makeSound라는 메서드를 정의했습니다.
 * lion 객체는 Animal의 인스턴스이므로, lion은 makeSound 메서드를 상속받아 호출할 수 있습니다.
 * lion.sound는 "Roar"로 설정되었고, makeSound 메서드는 this.sound를 반환하므로 "Roar"가 출력됩니다.
 * 
 * 2, 3. Object.create(carProto)를 사용하여 myCar는 carProto를 프로토타입으로 상속받습니다.
 * myCar는 wheels 속성을 직접 가지고 있지 않지만, 프로토타입 체인을 통해 carProto.wheels 값을 참조할 수 있습니다.
 * drive 메서드도 carProto에서 상속되었으므로 호출 가능합니다. (2번과 3번 둘다 프로토타입에서 상속됨)
 * 
 * 4. Person.prototype.greet는 john 객체가 생성된 이후에 변경되었습니다.
 * 객체의 메서드는 해당 객체가 생성될 때 고정되는 것이 아니라, 프로토타입 체인에 의해 동적으로 참조됩니다.
 * 따라서 Person.prototype.greet를 변경한 이후에도 john.greet() 호출 시, 변경된 메서드가 호출됩니다.
 */