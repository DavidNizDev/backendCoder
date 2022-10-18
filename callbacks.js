

// function operacion(param1, param2, cb) {
//     let result = cb(param1, param2)
//     return result
// };

const operacion = (param1, param2, cb) => cb(param1, param2);

const suma = (param1, param2) => param1 + param2;
const resta = (param1, param2) => param1 - param2;
const multiplicar = (param1, param2) => param1 * param2;
const dividir = (param1, param2) => param1 / param2;
const modulo = (param1, param2) => param1 % param2;

let resultado = operacion(10, 20, modulo);

console.log(resultado)

