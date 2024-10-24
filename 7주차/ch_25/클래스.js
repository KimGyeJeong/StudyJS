console.log('helloworld');
// ch.25 클래스

class Person{
    constructor(name) {
        this.name = name;
        this.temp1 = 3;
    }
    temp2 = 4;
    sayHi(){
        console.log(`hello. my name is ${this.name}`);
    }
}

const me = new Person('Kim');

console.log(Person.prototype.hasOwnProperty('sayHi'));  // true
console.log(Person.prototype.hasOwnProperty('name'));  // false
console.log(Person.prototype.hasOwnProperty('temp1'));  // false
console.log(Person.prototype.hasOwnProperty('temp2'));  // false

console.log(me.hasOwnProperty('temp1'));    // true
console.log(me.hasOwnProperty('temp2'));    // true
