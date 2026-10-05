const fs = require('fs');
const https = require('https');

console.log("Hello World");

var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/products", (res) => {
    console.log("Fetched data successfully");
})

setTimeout(() => {
    console.log("Settimeout function called after 5 seconds");
}, 5000);

fs.readFile('./textFile.txt', "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});

function multiplyNumbers(a,b){
    let result = a * b;
    return result;
}

let c = multiplyNumbers(a, b);

console.log("Multiplication result:", c);
