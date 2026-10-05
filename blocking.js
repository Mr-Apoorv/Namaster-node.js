const crypto = require('crypto');

console.log("Hello World");

var a = 1078698;
var b = 20986;

//synchronous function to generate a key using PBKDF2
crypto.pbkdf2Sync("password", "salt", 50000000, 50, "sha512");
console.log("First key is generated.");

//asynchronous function to generate a key using PBKDF2
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    if (err) throw err;
    console.log("Second key is generated.");
});

function multiplyNumbers(a,b){
    let result = a * b;
    return result;
}

let c = multiplyNumbers(a, b);

console.log("Multiplication result:", c);
