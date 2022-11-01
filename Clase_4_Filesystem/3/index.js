import fs from 'fs'

fs.promises.readFile('info.txt', 'utf-8')
.then( contenido => {
    console.log('info.json: lectura exitosa')

    let info = JSON.parse(contenido)
    console.log(info)

    info.contenidoObj.author = 'Coderhouse'

    fs.promises.writeFile('package.json.coder', JSON.stringify(info.contenidoObj, null, '\t'))
    .then( () => console.log('info.txt: escritura exitosa') )
    .catch( error => {
        console.log(`Error en escritura: ${error}`)
    })
})
.catch(error => console.log(`Error en lectura: ${error}`))
