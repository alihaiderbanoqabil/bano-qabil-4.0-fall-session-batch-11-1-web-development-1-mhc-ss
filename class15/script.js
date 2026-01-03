// console.log("Class 3 of JS");
// console.log(typeof parseFloat("10.988"));
// const num = parseFloat("10.988");

// // console.log(typeof parseInt("10.988"), parseInt("10.988"));
// console.log(typeof num, num);
// console.log(typeof "10.988");


// // Operators in JS
// console.log(10 + 20);
// console.log(10 - 20);
// console.log(10 * 20);
// console.log(10 / 2);
// console.log(10 % 3); // modulus operator / remainder    
// console.log(10 ** 3);  // exponentiation operator
// console.log(Math.pow(10, 3));  // exponentiation operator
// console.log(Math.random());  // random number between 0 and 1
// console.log(Math.max(10, 20, 40, 5020));  // random number between 0 and 1
// console.log(Math.min(10, 20, 40, 5020));  // random number between 0 and 1

// let a = 10;
// a = a + 1; // a += 1
// a++;
// a++;
// a++;
// a++;
// a++;
// console.log(a, "a");
// a = a - 1; // a -= 1
// a--;
// console.log(a, "a");

let x = 10;
let y = 20;
x = x + y; // x += y
x += y;

console.log(x, "x");

let age = 25;
let color = `rfdsfsed`;

// if (age <= 18) {

//     // code to execute if the condition is true
//     console.log("You are 18+");

// } else {
//     console.log("You are under 18");
// }

// if (age <= 18) {

//     // code to execute if the condition is true
//     console.log("You are 18+");

// }

// // else {
// //     console.log("You are under 18");
// // }




// if (age >= 18 && color === `red`) {

//     // code to execute if the condition is true
//     console.log("You are 18+ and color is red");
// } else {
//     console.log("Either you are under 18 or color is not red");
// }


// if (age >= 18 && color == `red`) {

//     // code to execute if the condition is true
//     console.log("You are 18+ and color is red");
// } else {
//     console.log("Either you are under 18 or color is not red");
// }

// if (age >= 18 || color == `red`) {

//     // code to execute if the condition is true
//     console.log("You are 18+ and color is red");
// } else {
//     console.log("Either you are under 18 or color is not red");
// }
// if (age <= 18 || color == `red`) {

//     // code to execute if the condition is true
//     console.log("You are 18+ and color is red");
//     if (age === 20) {
//         console.log("Age is 20");

//     } else {
//         console.log("Age is not 20");
//     }
// } else {
//     console.log("Either you are under 18 or color is not red");
//     if (age === 25) {
//         console.log("Age is 25");

//     } else {
//         console.log("Age is not 25");
//     }
// }



// if (color === "red") {
//     console.log("Color is red");
// } else if (age >= 20) {
//     console.log("Age is 20 or more");
// } else if (color === "green") {
//     console.log("Color is green");
// }

// if (color === "red") {
//     console.log("Color is red");
// }
// if (age >= 20) {
//     console.log("Age is 20 or more");
// }
// if (color === "green") {
//     console.log("Color is green");
// }
// else {
//     console.log("Color is not green");
// }


// if (color === "red") {
//     console.log("Color is red");
// } else if (color === "blue") {
//     console.log("Color is blue");
// } else if (color === "green") {
//     console.log("Color is green");
// } else {
//     console.log("Color is not red, blue or green");
// }

// if (color === "red" && age >= 18) {
//     console.log("Color is red");
// } else if (color === "blue" && age <= 18) {
//     console.log("Color is blue");
// } else if (color === "green" && age >= 18) {
//     console.log("Color is green");
// } else {
//     console.log("Color is not red, blue or green");
// }

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
// switch (color) {
//     case "red":
//         console.log("Color is red");
//         break;
//     case "blue":
//         console.log("Color is blue");
//         break;
//     case "green":
//         console.log("Color is green");
//         break;

//     default:
//         console.log("Color is not red, blue or green");
//         break;
// }

// loops in JS

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let index = 0; index < 100; index++) {
//     console.log("Hello World", index);

// }
// const categories = [
//     {
//         "id": 178,
//         "name": "Headphones",
//         "slug": "headphones",
//         "category_cover": "https://bucket-amanoon-staging.s3.ap-southeast-1.amazonaws.com/categories/category_cover/ILNp8GFCf5WGSl0LUZh9DEFs0loHOw8WgCBCmbnl.png"
//     },
//     {
//         "id": 2,
//         "name": "Graphic Cards",
//         "slug": "graphic-cards",
//         "category_cover": "https://amanoon-bucket.s3.me-central-1.amazonaws.com/amanoon_pk_live/categories/category_cover/PjoYwR9UPgudbVgRjcQp0TNQ9hFknARRe4A21yf9.png"
//     },
//     {
//         "id": 62,
//         "name": "Laptops",
//         "slug": "laptops",
//         "category_cover": "https://bucket-amanoon-staging.s3.ap-southeast-1.amazonaws.com/categories/category_cover/IDYlTlSfRotR7j1sUtuPy3WixW8Qz66Ip4FS6Tsl.png"
//     },
//     {
//         "id": 81,
//         "name": "iPhones",
//         "slug": "iphones",
//         "category_cover": "https://bucket-amanoon-staging.s3.ap-southeast-1.amazonaws.com/categories/category_cover/u763FReO2kkDqPBgtkunoTZx6B4jKNM6ydPhhWDz.png"
//     },
//     {
//         "id": 42,
//         "name": "Desktops & Monitors",
//         "slug": "desktops-and-monitors",
//         "category_cover": "https://bucket-amanoon-staging.s3.ap-southeast-1.amazonaws.com/categories/category_cover/oMrumlVklFITbIMyRaoL6nC3tjWnFyA4PjuhM5IY.png"
//     },
//     {
//         "id": 6,
//         "name": "Motherboard",
//         "slug": "motherboards",
//         "category_cover": "https://amanoon-bucket.s3.me-central-1.amazonaws.com/amanoon_pk_live/categories/category_cover/Npf8QmBkkOBQjYRB1Y63ETvvLVBrxBfTtaeyp4dU.png"
//     },
//     {
//         "id": 79,
//         "name": "Mobiles & Tablets",
//         "slug": "mobiles-and-tablets",
//         "category_cover": "https://bucket-amanoon-staging.s3.ap-southeast-1.amazonaws.com/categories/category_cover/r3Kn5oQOQTTZ2VV28sXmJTP5a7SbTJGjgjo5yTSS.png"
//     },
//     {
//         "id": 128,
//         "name": "Gaming",
//         "slug": "gaming",
//         "category_cover": "https://bucket-amanoon-staging.s3.ap-southeast-1.amazonaws.com/categories/category_cover/qC8gmQ1SymekBNhYByqlwVxhr3oym5tw5jxclTbg.png"
//     },
//     {
//         "id": 138,
//         "name": "Printers & Ink",
//         "slug": "printers-and-ink",
//         "category_cover": "https://bucket-amanoon-staging.s3.ap-southeast-1.amazonaws.com/categories/category_cover/F06jaGsV8Qw1cq7kQeopFj9xnY6tEDEpIT9t22re.png"
//     },
//     {
//         "id": 109,
//         "name": "DSLR Cameras",
//         "slug": "dslr-cameras",
//         "category_cover": "https://bucket-amanoon-staging.s3.ap-southeast-1.amazonaws.com/categories/category_cover/ZOvxaPTajVMXV476EdFcXUlDsgPYH3pX6ZhuK9EF.png"
//     },
//     {
//         "id": 12,
//         "name": "Memory / RAM",
//         "slug": "memory",
//         "category_cover": "https://amanoon-bucket.s3.me-central-1.amazonaws.com/amanoon_pk_live/categories/category_cover/4zreKCjq1RJqIk5XVnTgFCg7x6gghQVb6vuOGGQ1.png"
//     },
//     {
//         "id": 38,
//         "name": "Keyboards & Mice",
//         "slug": "keyboards_and_mice",
//         "category_cover": "https://amanoon-bucket.s3.me-central-1.amazonaws.com/amanoon_pk_live/categories/category_cover/cP792eAHesjrbG9eeuq77u7BKSTyP4BLHikaxIR7.png"
//     }
// ]


const categories = ["Headphones", "Graphic Cards", "Laptops", "iPhones", "Desktops & Monitors", "Motherboard", "Mobiles & Tablets", "Gaming", "Printers & Ink", "DSLR Cameras", "Memory / RAM", "Keyboards & Mice"];
console.log(categories, "categories");

// for (let index = 0; index < categories.length; index++) {
//     const element = categories[index];
//     console.log(element, "element", index);
// }

for (let index = categories.length - 1; index >= 0; index--) {
    const element = categories[index];
    console.log(element, "element outer", index);
    
    for (let index = categories.length - 1; index >= 0; index--) {
        const element = categories[index];
        console.log(element, "element inner", index);
    }
}
