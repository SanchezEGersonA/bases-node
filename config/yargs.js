const argv = require('yargs')
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar"
    })
    .option("l", {
        alias: "list",
        type: "boolean",
        default: false,
        describe: "Muestra la tabla en consola"
    })
    .option("u", {
        alias: "until",
        type: "number",
        default: 12,
        describe: "Muestra el limite de los multiplando"
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw "The base argument must be a number!"
        }
        return true;
    })
    .argv;

module.exports = argv;