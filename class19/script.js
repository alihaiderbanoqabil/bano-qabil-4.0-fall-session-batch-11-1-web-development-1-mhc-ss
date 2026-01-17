// console.log("Class 7 of JS");
// https://www.w3schools.com/jsref/jsref_date_new.asp
// // https://miro.medium.com/v2/1*O70Ml_4EqDa7i3uV0dlK1A.png

// const products = [
//     { id: 1, name: "Laptop", price: 45000 },
//     { id: 2, name: "Phone", price: 25000 },
//     { id: 3, name: "Tablet", price: 15000 },
//     { id: 4, name: "Monitor", price: 20000 },
// ];
// const product = { id: 1, name: "Laptop", price: 45000 }
// // window.localStorage.setItem("name", "ali Haider");
// // window.localStorage.setItem("age", "23");
// // OR 
// localStorage.setItem("name", "hasnain");
// localStorage.setItem("age", 24);
// localStorage.setItem("isMale", true);
// // localStorage.setItem("products", products);
// // localStorage.setItem("product", product);
// localStorage.setItem("productsJSON", JSON.stringify(products));
// localStorage.setItem("productJSON", JSON.stringify(product));

// console.log(localStorage.getItem("name")); // "hasnain"
// console.log(localStorage.getItem("names")); // null

// const age = localStorage.getItem("age")
// console.log(age, typeof age, Number(age)); // "24" "string"
// const isMale = localStorage.getItem("isMale")
// // console.log(isMale, typeof isMale, Boolean(isMale)); 
// // console.log(isMale, typeof isMale, !!isMale); 
// // console.log(isMale, typeof isMale, !!!isMale); 
// // const productsFromStorageJSON = localStorage.getItem("productsJSON");
// // const parsedProducts = JSON.parse(productsFromStorageJSON);
// // console.log(productsFromStorageJSON, typeof productsFromStorageJSON);
// // console.log(parsedProducts, typeof parsedProducts);
// // const productFromStorageJSON = localStorage.getItem("productJSON");
// // const parsedProduct = JSON.parse(productFromStorageJSON);
// // console.log(productFromStorageJSON, typeof productFromStorageJSON);
// // console.log(parsedProduct, typeof parsedProduct);


// // localStorage.removeItem("age");
// // localStorage.removeItem("name");
// function deleteNameFromLocalStorage() {
//     localStorage.removeItem("name");
// }
// function deleteAgeFromLocalStorage() {
//     localStorage.removeItem("age");
// }
// function deleteValueFromLocalStorage(key) {
//     localStorage.removeItem(key);
// }


// console.log(localStorage.length);
// console.log(localStorage.key(1));
// localStorage.clear();
// console.log(localStorage.length);


// // window.document.cookie = "username=ali Haider;";
// document.cookie = "age=27;";
// document.cookie = "age=50;";
// document.cookie = "isMale=true;";
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// console.log(document.cookie);

// // sessionStorage.setItem("name", "ali Haider");


function setCookie(cookieName, cookieValue, expirDays) {
    const d = new Date();
    const daysInMilliSeconds = expirDays * 24 * 60 * 60 * 1000;
    d.setTime(d.getTime() + daysInMilliSeconds);
    let expires = "expires=" + d.toUTCString();
    console.log(daysInMilliSeconds, expires,);

    // document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
}

setCookie("user", "ali Haider", 5);
setCookie("age", "23", 10);
setCookie("isMale", "true", 15);


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

console.log(getCookie("user"));
console.log(getCookie("gender"));
console.log(getCookie("age"));
