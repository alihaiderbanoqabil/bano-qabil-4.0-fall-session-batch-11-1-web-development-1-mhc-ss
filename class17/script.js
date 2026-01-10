console.log("Class 5 of JS");

// https://www.w3schools.com/jsref/jsref_obj_string.asp
// https://www.w3schools.com/js/js_array_reference.asp


// const name = "       ali      Haider     ";
const name = "ali Haider";
// console.log(name);

// console.log(name.length);          // 10
// console.log(name[0]);              // 'a'
// console.log(name.charAt(0));       // 'a'

// const name2 = "hasnain";
// console.log(name2);

// console.log(name.concat(name2));                 // 'ali Haiderhasnain'
// console.log(name.concat(" ", name2));             // 'ali Haider hasnain'
// console.log(name.concat(" ", name2, "usman"));    // 'ali Haider hasnainusman'

// console.log(name.at(0));           // 'a'
// console.log(name.charAt(name.length - 1)); // 'r'
// console.log(name.at(-1));          // 'r'

// console.log(name.endsWith("r"));   // true
// console.log(name.endsWith("er"));  // true
// console.log(name.endsWith("ar"));  // false

// console.log(name.startsWith("a"));   // true
// console.log(name.startsWith("al"));  // true
// console.log(name.startsWith("au"));  // false

// console.log(name.includes("li"));    // true
// console.log(name.includes("li", 3)); // false

// console.log(name.indexOf(3));     // -1
// console.log(name.indexOf("l"));   // 1
// console.log(name.indexOf(" "));   // 3
// console.log(name.indexOf("h"));   // -1
// console.log(name.indexOf("H"));   // 4
// console.log(name.indexOf("a"));   // 0
// console.log(name.indexOf("a", 3)); // 5

// console.log(name.split());        // ['ali Haider']
// console.log(name.split(""));      // ['a','l','i',' ','H','a','i','d','e','r']
// console.log(name.split(" "));     // ['ali','Haider']

// let text = "How are you doing today?";
// const myArray1 = text.split(" ", 3);
// console.log(myArray1);             // ['How','are','you']

// const myArray2 = text.split(" ");
// console.log(myArray2);             // ['How','are','you','doing','today?']

// console.log(name.toUpperCase());   // 'ALI HAIDER'
// console.log(name.toLowerCase());   // 'ali haider'

// const name = "ali Haider";

// console.log(name.replace("haider", "anwar")); 
// // 'ali Haider'  (case-sensitive)

// console.log(name.replace("Haider", "anwar")); 
// // 'ali anwar'

// const string = "my name is ali, i am a friend of ali";
// console.log(string);

// // replace → sirf pehla match change karta hai
// console.log(string.replace("ali", "hasnain"));  
// // 'my name is hasnain, i am a friend of ali'

// // replaceAll → saare matches change karta hai
// console.log(string.replaceAll("ali", "hasnain"));  
// // 'my name is hasnain, i am a friend of hasnain'

// // regex ke sath replace
// // i = case-insensitive
// // g = global (saare matches)
// console.log(string.replace(/ali/ig, "hasnain"));  
// 'my name is hasnain, i am a friend of hasnain'


// // isNaN examples
// console.log(isNaN(10));    // false
// console.log(isNaN(NaN));   // true
// console.log(isNaN(10));    // false


// // slice examples
// let text = "Hello world!";
// console.log(text);

// console.log(text.slice(0, 5));  
// // 'Hello'

// console.log(text.slice());      
// // 'Hello world!'

// console.log(text.slice(5));     
// // ' world!'

// console.log(text.slice(5, 10)); 
// // ' worl'

// console.log(text.slice(5, 2));  
// // '' (start > end, isliye empty string)

// const result1 = text.slice(0, 5);
// console.log(result1);           
// // 'Hello'

// console.log(text);              
// // 'Hello world!' (original string change nahi hoti)

// const result2 = text.slice(-1, -5);
// console.log(result2);           
// // '' (negative start > negative end)

// console.log(text.slice(-1, -5)); 
// // ''

// const capitalize = (string) => {
//     if (!string) return "";
//     const arrayOfStrings = string.split(" ");
//     const capitalizedStringArray = arrayOfStrings.map((word) => {
//         const firstLetter = word.charAt(0).toUpperCase();
//         const remainingLettersOfWord = word.slice(1);
//         console.log(word, "word", firstLetter, remainingLettersOfWord);
//         return firstLetter + remainingLettersOfWord
//     })
//     console.log(capitalizedStringArray.join(" "), "capitalizedStringArray");
//     return capitalizedStringArray.join(" ")

// }
const capitalize = (string) => string.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}).join(" ")

// console.log(capitalize("ali haider"));
// console.log(capitalize("slice() extracts a part of a string and returns the extracted part:"));


// // Array declaration
// const cars = ["Saab", "Volvo", "BMW"];
// console.log("Initial cars:", cars);

// // at()
// console.log("cars.at(1):", cars.at(1));
// console.log("cars.at(-1):", cars.at(-1));

// // concat()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log("After concat:", cars.concat(fruits));

// // push()
// cars.push("Toyota");
// console.log("After push Toyota:", cars);

// cars.push("Honda");
// console.log("After push Honda:", cars);

// cars.push("Civic", "Changan", "Kia");
// console.log("After pushing multiple:", cars);

// // pop()
// console.log("Popped:", cars.pop());
// console.log("After pop:", cars);

// console.log("Popped:", cars.pop());
// console.log("Popped:", cars.pop());
// console.log("Popped:", cars.pop());
// console.log("After multiple pops:", cars);

// // unshift()
// cars.unshift("Honda", "Civic", "Changan");
// console.log("After unshift:", cars);

// cars.unshift("Kia");
// console.log("After unshift Kia:", cars);

// // shift()
// console.log("Shifted:", cars.shift());
// console.log("Shifted:", cars.shift());
// console.log("After shifts:", cars);

// // includes()
// console.log("Includes BMW:", cars.includes("BMW"));
// console.log("Includes BMw:", cars.includes("BMw"));
// console.log("Includes abc:", cars.includes("abc"));
// console.log("Includes Changan:", cars.includes("Changan"));
// console.log("Includes Changan from index 2:", cars.includes("Changan", 2));

// // join & toString
// console.log("Join default:", cars.join());
// console.log("Join with space:", cars.join(" "));
// console.log("toString:", cars.toString());
// console.log("Join with 'ali':", cars.join("ali"));

// // reverse()
// cars.reverse();
// console.log("After reverse:", cars);

// // sort (strings)
// cars.sort();
// console.log("After sort:", cars);

// cars.sort().reverse();
// console.log("Sort + reverse:", cars);

// // Numbers sorting
const numbers = [1, 20, 45, 10, 34, 9];
// console.log("Numbers original:", numbers);

// numbers.sort();
// console.log("Numbers default sort:", numbers);

// numbers.sort((a, b) => a - b);
// console.log("Numbers ascending:", numbers);

// numbers.sort((a, b) => b - a);
// console.log("Numbers descending:", numbers);

// At position 2, add "Lemon" and "Kiwi"
// fruits.splice(2, 0, "Lemon", "Kiwi");
// fruits.splice(2, 0, "Lemon"); // add
// fruits.splice(2, 1, "Lemon"); // update
// fruits.splice(2, 1); // delete


console.log(numbers, "numbers");

const twoTimesArray = numbers.map((value, index, array) => {
    console.log(value * value);

    return value * value

})
console.log(twoTimesArray, "twoTimesArray");


// numbers.map(function (value, index, array) {
//     console.log(value, index, array);

// })

