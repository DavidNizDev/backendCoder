/* const fs = require('fs');
const data = fs.readFileSync('./txt/test-sf.txt', 'utf-8');
console.log(data); */

/* const fs = require('fs');
const fyh = `La fecha y hora local es: ${new Date().toLocaleString()}`
try {
    const write = fs.writeFileSync('./txt/fyh.txt', fyh);
    const read = fs.readFileSync('./txt/fyh.txt', 'utf-8')
    console.log(read);

} catch (error) {
    console.log(error);
} */


const fs = require('fs');
fs.readFile('./package.json', 'utf-8', (error, contenido) => {
    if (error) {
        console.log(error);
    } else {
        try {
            const string = JSON.stringify(contenido, null, 2);
            const obj = JSON.parse(contenido);

            const info = {
                contenidoStr: string,
                contenidoObj: obj,
                size: "Tamaño del JSON en bytes, pendiente"
            }
            const infoStringified = JSON.stringify(info);
           // console.log(`Leyendo JSON: ${JSON.stringify(info)}`);

            fs.appendFile('./info.txt', `${infoStringified}\n`, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Guardado!");
                }
            });

        } catch (error) {
            console.log(`EL ERRORCITO ES: ${error}`);
        }
    }
})

fs.readdir('C:\Users\dalos\Desktop\Workgroup Notebook\Backend Coder\Primeros pasos', (error, nombres) => {
    if (error) {
        console.log(error);             
    } else {
        console.log(nombres);
    }
})
