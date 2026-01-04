console.log("Class 4 of JS");

const array = [10, 20, 30, 40, 50];
const object = {
    name: "ali",
    age: 10,
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
}
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     // console.log({ element: element, index: index });
//     console.log({ element, index });
//     // console.log("element: ", element);
//     // console.log("index: ", index);
// }
// console.log("**********************************************");

// 1. alert
// 2. confirm
// 3. prompt

// let index = 10;
// while (index < array.length) {
//     const element = array[index];
//     console.log({ element, index });
//     index++;
// }

// let index = 10;
// do {
//     const element = array[index];
//     console.log({ element, index });
//     index++;
// } while (index < array.length);


// alert("Account created successfully")
// window.alert("Account created successfully")


// const areYouSure = confirm("Are you sure you want to delete this post?")

// console.log("areYouSure:", areYouSure);

// const userEnteredName = prompt("Enter your name: ")
// console.log("userEnteredName:", userEnteredName);
// console.log({ userEnteredName });


// Generate a random number between 1 and 10
// function guessANumber() {
//     const secretNumber = Math.floor(Math.random() * 10) + 1;
//     console.log(secretNumber, "secretNumber");

//     let guess = null;

//     while (guess !== secretNumber) {
//         guess = Number(prompt("Guess a number between 1 and 10"));

//         if (guess > secretNumber) {
//             alert("Too high! Try again.");
//         } else if (guess < secretNumber) {
//             alert("Too low! Try again.");
//         } else {
//             alert("🎉 Correct! You guessed the number!");
//         }
//     }
// }


// guessANumber();


// const secretNumber = Math.floor(Math.random() * 10) + 1;
// console.log(secretNumber, "secretNumber");

// let guess = null;

// while (guess !== secretNumber) {
//     guess = Number(prompt("Guess a number between 1 and 10"));

//     if (guess > secretNumber) {
//         alert("Too high! Try again.");
//     } else if (guess < secretNumber) {
//         alert("Too low! Try again.");
//     } else {
//         alert("🎉 Correct! You guessed the number!");
//     }
// }


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log("element: ", element);
// }

// console.log(object, "before freez");
// console.log(Object.keys(object));
// console.log(Object.values(object));
// const entries = Object.entries(object)
// console.log(entries, "entries");
// console.log(Object.fromEntries(entries));
// // const freezedObject = Object.freeze(object)
// // console.log(Object.isFrozen(freezedObject));
// console.log(Object.isFrozen(object));

// object.name = "hasnain"
// delete object.age;

// object.gender = "male"
// console.log(object, "after freez");



// for (const element of array) {
//     console.log("element: ", element);
// }

// const objectKeysArray = Object.keys(object)
// console.log(objectKeysArray, "objectKeysArray");
// for (const key of objectKeysArray) {
//     // console.log("key: ", key);
//     // console.log("key: ", object.key);
//     console.log("key: ", key, object[key]);
// }

// for (const index in array) {
//     console.log("index: ", index, array[index]);
// }

// for (const key in object) {
//     console.log("key: ", key, object[key]);
// }


function greet() {
    console.log("Good Afternoon!");
}

// greet()
// greet()
// greet()

// console.log(sum(100, 500));

// function sum(num1 = 10, num2 = 20) {
//     console.log(arguments, "arguments");

//     // console.log(num1 + num2);
//     const add = num1 + num2;
//     // return num1 + num2;
//     return add;
//     // console.log("hello");
// }

// console.log(sum(10, 20));

// alert(sum(10, 200))
// // sum()
// document.write(sum(100))
// console.log(10 + 20);
// console.log(10 + 30);

// function geeting(name = 'Ali', age = 25) {
//     console.log(`Hello, ${name}. Good Afternoon, your age is ${age} years old!`);
// }



// geeting("Ali", 27)
// geeting("Hasnain", 25)
// geeting()

// function sum(num1 = 10, num2 = 20) {
//     console.log(num1, num2);
//     const add = num1 + num2;
//     // return num1 + num2;
//     return add;
//     // console.log("hello");
// }

// const sum = (num1 = 10, num2 = 20) => {
//     // console.log(arguments, "arguments");

//     const add = num1 + num2;
//     return add;
// }
// const sum = (num1 = 10, num2 = 20) => {
//     const add = num1 + num2;
//     return add;
// }

// OR 
// const sum = (num1 = 10, num2 = 20) => num1 + num2;

// console.log(sum());
// console.log(sum(20, 30));

// const multiply = function () {

// }

// const divide = () => {

// }


function sumOfNNumbers() {
    // console.log(arguments, "arguments");
    let sum = 0;
    for (const element of arguments) {
        // console.log(element, "element");
        sum = sum + element;
        return sum;
    }
    // return sum;
}

console.log(sumOfNNumbers(10, 20, 30, 40));

// console.log(sumOfNNumbers(10, 20, 30, 40, 50, 60));
