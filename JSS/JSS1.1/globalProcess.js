// const [,,firstName,lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`); 
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");
console.log(`${greeting} ${user}`);
// const {log} = require("util");
// const {getHeapStatistics} = require("v8");
// log(getHeapStatistics());
// const {EventEmitter} = require("events"); 
const util = require("util");
const path = require("path");
console.log(__filename)
console.log(path.basename(__filename));
util.log(path.basename(__filename));
const v8 = require("v8");
console.log(v8.getHeapStatistics());

