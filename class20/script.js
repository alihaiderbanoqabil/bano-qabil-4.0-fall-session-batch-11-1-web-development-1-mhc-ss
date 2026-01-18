console.log("Class 8 of JS");


console.log("Before API Calling");
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log(response, "response");
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data, "data");
//     })
// fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//         console.log(response, "response");
//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data, "data");
//     })
//     .catch((error) => {
//         console.log(error, "error");
//     });
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log(response, "response");
//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data, "data");
//     })
//     .catch((error) => {
//         console.log(error, "error");
//     });
console.log("After API Calling");


function getAllData(url) {
    fetch(url)
        .then((response) => {
            console.log(response, "response");
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data, "data");
        })
        .catch((error) => {
            console.log(error, "error");
        });
}
// getAllData("https://fakestoreapi.com/products");
getAllData("https://jsonplaceholder.typicode.com/users");
// getAllData("https://jsonplaceholder.typicode.com/tasks");
// getAllData("https://jsonplaceholder.typicode.com/todos");
// getAllData("https://jsonplaceholder.typicode.com/photos");
// getAllData("https://jsonplaceholder.typicode.com/comments");
// getAllData("https://jsonplaceholder.typicode.com/todos/1");

function getAllData(entity) {
    fetch("https://jsonplaceholder.typicode.com/" + entity)
        .then((response) => {
            console.log(response, "response");
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data, "data");
        })
        .catch((error) => {
            console.log(error, "error");
        });
}

getAllData("products");
// getAllData("users");
// getAllData("posts");
// getAllData("todos");
// getAllData("photos");
// getAllData("comments");
// getAllData("albums");

// this token will recieve after login or signup from server
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",// POST, PUT, PATCH, DELETE
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " + TOKEN
//     },
//     body: JSON.stringify({
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     })
// })
//     .then((response) => {
//         console.log(response, "response");
//         if (!response.ok) {
//             throw new Error("Network response was not ok " + response.statusText);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data, "data");
//     })
//     .catch((error) => {
//         console.log(error, "error");
//     });


function getAllData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response, "response");
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data, "data");
        })
        .catch((error) => {
            console.log(error, "error");
        })
        .finally(() => {
            console.log("Fetch attempt finished.");
        });
}

let isLoading = false;
const getData = async () => {
    try {
        isLoading = true;
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response, "response");
        const data = await response.json();
        // isLoading = false;
        console.log(data, "data");
    } catch (error) {
        // isLoading = false;

        console.log(error, "error");
    } finally {
        isLoading = false;

        console.log("Fetch attempt finished.");
    }
}

getData();

// async function get() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
// }
