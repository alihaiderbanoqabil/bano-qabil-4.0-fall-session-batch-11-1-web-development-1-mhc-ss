"use strict";
// https://www.pexels.com/api/documentation/
console.log("Class 9 of JS");


const object = {
    name: "ali",
    age: 30,
    city: "New York",
    greet: function () {
        console.log("this from regular function: ", this);
        return "Hello from regular function, my name is " + this.name;
    },
    greeting: (name) => {
        console.log("this from arrow function: ", this);
        return "Hello from arrow function, my name is " + name;
    },
    add() {
        return this.age + 5;
    }
};

// console.log("Alone, this refers to the global object.", this);


// function greet(name, age, city) {
//     console.log("In a function, this refers to the global object.", this);
// }

// greet("ali", 30, "New York");

// console.log(object.age);
// console.log(object.greet());
// console.log(object.greeting("ali"));


// const date = new Date();

// function greet(name, age, city) {
//     console.log("In a function, this refers to the global object.", this);
// }

// greet("ali", 30, "New York");

// class Person(name, age, city) {
// class Person {
//     constructor(name, age, city) {
//         // console.log("this before", this);
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         // console.log("this after", this);
//     }

//     introduce() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`;
//     }
//     haveBirthday() {
//         // this.age += 1;
//         // this.age = this.age + 1;
//         this.age++;
//         return `Happy birthday ${this.name}! You are now ${this.age} years old.`;
//     }
//     moveTo(newCity) {
//         this.city = newCity;
//         return `${this.name} has moved to ${this.city}.`;
//     }
// }

// const person1 = new Person("Alice", 28, "Los Angeles");
// console.log(person1.introduce());
// console.log(person1.haveBirthday());
// console.log(person1.moveTo("New York"));

// const person2 = new Person("Bob", 35, "Chicago");
// console.log(person2.introduce());
// console.log(person2.haveBirthday());
// console.log(person2.moveTo("Miami"));


// class Animal {
//     // #balance = 0; // private property
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating.`);
//     }
// }

// class Bird extends Animal {
//     constructor(name, canFly) {
//         super(name); // calls the parent (Animal) constructor
//         this.canFly = canFly;
//     }

//     chirp() {
//         console.log(`${this.name} is chirping!`);
//     }

//     fly() {
//         if (this.canFly) {
//             console.log(`${this.name} is flying 🕊️`);
//         } else {
//             console.log(`${this.name} can't fly.`);
//         }
//     }
// }


// class Eagle extends Bird {
//     constructor(name) {
//         super(name, true); // Eagles can fly
//     }

//     hunt() {
//         console.log(`${this.name} is hunting.`);
//     }
// }


// const eagle1 = new Eagle("Mighty Eagle");
// eagle1.eat();
// eagle1.chirp();
// eagle1.fly();
// eagle1.hunt();