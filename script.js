// const pr = sum(2, 3);
// pr.then(console.log(5)).catch(function (err) {
//     console.log(err)
// })

// function sum(x, y) {
//     const promise = new Promise(function (resolve, reject) {
//         if (x + y > 5) {
//             resolve(console.log("success"))
//         } else {
//             reject("sorry")
//         }
//     })
//     return promise
// }
// sum("").then(function (sum) {
//     x = diff(sum);
//     return x;
// }).then(function (x) {
//     console.log(z(x))
// });

// function sum(x) {
//     let promise = new Promise(function (resolve, reject) {
//         if (x == "") {
//             x += "sssssssssssss";
//             resolve(x);
//         } else {
//             reject("sorry");
//         }
//     })
//     return promise;
// }
// function diff(s) {
//     s += "zzzzzzzzzzzzzzzzz"
//     return s;
// }

// function z(s) {
//     return s + "xxxxxx";
// }
var ar = [1, 2, 3, 4, 5];
function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    ar.forEach((x) => callback(x))
}

// Define the callback function
function callbackFunction(result, callback) {
    console.log("Result: " + result);
    callback(result)
}
function sum(result) {
    console.log(result)
}

// Call the main function with the callback function
mainFunction(function (x) {
    callbackFunction(x, function () {
        sum(x);
    });
});
//This code is contributed by Veerendra Singh Rajpoot
