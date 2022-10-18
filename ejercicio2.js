class Contador {
    constructor(autor) {
        this.autor = autor;
        this.count = 0;
    }

    static globalCount = 0;

    obtenerResponsable() {
        return this.autor;
    }

    obtenerCuentaIndividual() {
        return this.count;
    }

    obtenerCuentaGlobal() {
        return Contador.globalCount;
    }

    contar() {
        this.count++;
        Contador.globalCount++;
    }
}

let persona1 = new Contador('allan');
let persona2 = new Contador('felix');
let persona3 = new Contador('joaquin');

console.log(Contador.globalCount);

persona1.contar();
persona1.contar();
persona1.contar();
persona1.contar();
persona1.contar();
persona2.contar();
persona2.contar();
persona2.contar();
persona2.contar();
persona3.contar();
persona3.contar();
persona3.contar();
console.log(`El contador de Allan es: ` + persona1.count)
console.log(`El contador de Felix es: ` + persona2.count)
console.log(`El contador de Joaquin es: ` + persona3.count)
console.log(`El contador global es: ` + Contador.globalCount)
