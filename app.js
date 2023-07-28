const colors = require("colors");

const { createFile } = require('./helpers/mutiplier');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);

// const [,,arg3] = process.argv;
// const [,base] = arg3.split("=");

// console.log(base);

const { base, list, until } = argv;

createFile(base, list, until)
    .then(fileName => console.log(fileName.rainbow, "created!"))
    .catch(err => console.log(err));
