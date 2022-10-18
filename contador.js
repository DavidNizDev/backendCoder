class Contador {
    constructor(propietario) {
    this.propietario = propietario;
    this.count = 0;
    }
    obtenerResponsable() {
        return this.propietario;
    }
    obtenerCuentaIndividual() {
        return
    }
    obtenerCuentaGlobal() {
        return Contador.contadorInstancias;
    }
    contar() {

    }
}
 let nuevo = new Contador("David")

 console.log(nuevo);
let Damian = new Contador();
let Fabrizio = new Contador();
let Stella = new Contador();
