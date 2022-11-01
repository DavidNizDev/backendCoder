
Promise.reject(30)
.then(x => x + 1)   // 11   // RESUELTA
.then(x => x * 2)   // 22   // RESUELTA
.then(x => {
    if(x == 22) throw "Error";
    else return 80
})                 // "ERROR" // RECHAZADA
.then(x => {
    return 30
})                 
.then(x => x / 2)  
.then( x => console.log(x) )
.catch( x => console.log(x) ); // MANEJA PROMESA RECHAZADA



Promise.resolve("hola")
.then(x => x + ", este") // "hola, este"
.then(x => x + " es un") // "hola, este es un"
.then(x => x + " ejemplo") // "hola, este es un ejemplo"
.then(x => { throw "Error!!" }) // ERROR! PROMESA RECHAZADA
.then(x => console.log(x + ", gracias!")) // NO PASA POR ACA, PROMESA ANTERIOR RECHAZADA!
.catch(x => console.log(x)) // ENTRA AL CATCH
