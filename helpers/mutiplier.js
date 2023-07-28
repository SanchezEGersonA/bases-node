const fs = require('fs');
const colors = require("colors");

// const createFile = (base) => {

//     return new Promise((resolve, reject) => {

//         console.log("=======================");
//         console.log(`      Tabla del ${base}`);
//         console.log("=======================");

//         let output = "";
//         for (let i = 1; i <= 12; i++) {
//             output += `${base} x ${i} = ${5 * i}\n`;
//         }

//         console.log(output);

//         fs.writeFile(`tabla-${base}.txt`, output, (error) => {
//             if (error) reject(error)
//             resolve(`tabla-${base}.txt`);
//         });

//     });

// }

const createFile = async (base, list, until) => {

    try {

        let output = "";
        let outputConsole = "";
        for (let i = 1; i <= until; i++) {
            output += `${base} x ${i} = ${base * i}\n`;
            outputConsole += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
        }

        if (list) {
            console.log("=======================".green);
            console.log(`      ${colors.green("Tabla del")} ${colors.blue(base)}`);
            console.log("=======================".green);
            console.log(output);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, output)
        
        return `tabla-${base}.txt`

    } catch (error) {
        throw error;
    }

}

module.exports = {
    createFile
}
