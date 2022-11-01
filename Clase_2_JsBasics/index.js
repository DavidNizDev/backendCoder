function mostrarLista(dato1, dato2, dato3) {
    if (dato1) {
        console.log(dato1, dato2, dato3)
    } else {
        console.log("Lista vacía");
    }
}
mostrarLista();

let array = [1, 2, 3];
(function (lista) {
    if (lista.length > 0) {
        for (let i = 0; i < lista.length; i++)
            console.log(lista[i])

    } else {
        console.log("lista vacia")
    }
})(array)

