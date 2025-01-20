// const fs = require('fs');
// fs.writeFileSync("example.txt", "Hello, World!");
// let data = fs.readFileSync("example.txt");
// data = data+"$"
// console.log(data);
const fs = require('fs');
fs.writeFile("example.txt", "Hello, World2!", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File successfully created");
        fs.readFile("example.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                data = data + "$";
                console.log(data);
            }
        });
    }
});