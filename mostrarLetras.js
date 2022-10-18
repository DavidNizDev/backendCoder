const mostrarLetras = (string, CBfin, intervalTime) => {

    let contador = 0;

    let interval = setInterval(() => {
        if (contador < string.length) {
            console.log(string[contador]);
            contador++;
        } else {
            clearInterval(interval);
            CBfin();
        }
    }, intervalTime)



}

const fin = () => {
    console.log("Terminé")
}

mostrarLetras("Lagrimas", fin, 250);
