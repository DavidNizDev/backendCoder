const fs = require('fs')
try {
    fs.writeFileSync('fyh.txt', new Date().toLocaleString())
}
catch(error) {
    console.log(`Error en escritura ${error}`)
}


try {
    let contenido = fs.readFileSync('index.js', 'utf-8')
    console.log(contenido)
}
catch(error) {
    console.log(`Error en lectura ${error}`)
}
