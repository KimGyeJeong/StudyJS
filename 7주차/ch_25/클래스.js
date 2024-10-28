console.log('helloworld');
// ch.25 클래스

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     greet() {
//         console.log(`Hello, ${this.name}`);
//     }
// }
//
// class Student extends Person {
//     greet() {
//         console.log(`Hi, I am student ${this.name}`);
//     }
// }
//
// const student = new Student("Alice");
// student.greet();    // Hi, I am student Alice

// class BankAccount {
//     #balance = 1000;
//
//     deposit(amount) {
//         this.#balance += amount;
//     }
//
//     withdraw(amount) {
//         this.#balance -= amount;
//     }
//     getBalance(){
//         return this.#balance;
//     }
// }
//
// const account = new BankAccount();
// // console.log(account.#balance); // 오류 발생
// console.log(account.getBalance()); // 1000

const Person = class {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const onePerson = new Person('Kim');
console.log(onePerson.getName()); // Kim