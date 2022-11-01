// EJERCICIO: Creamos una funcion que recibe un objecto "doc", que dentro tiene una propiedad "data".
// "data" es un arreglo de objetos que contiene informacion de usuarios, pero ésta se encuentra corrompida, ya que la propiedad "username" de cada uno de estos objetos no es la correcta.
// La funcion debe devolver una copia del objeto modificado correctamente

let documento = {
  id: 166,
  state: true,
  data: [
    {
      id: 0,
      username: "OLBAp", // Pablo
    },
    {
      id: 1,
      username: "NAUj",  // Juan
    },
    {
      id: 3,
      username: "NATANOj",  // Jonatan
    },
  ],
};

function formatDocument(doc) {
  const resultDoc = Object.assign({}, doc);
  const { data } = resultDoc;
  console.log(resultDoc);

  for (let i = 0; i < data.length; i++) {
    let { username } = data[i];
    username = username.toLowerCase().split('').reverse().join('');
    username = username.charAt(0).toUpperCase() + username.slice(1);

    data[i].username = username
  }

  return resultDoc
}

let newDocument = formatDocument(documento);
console.log(newDocument);