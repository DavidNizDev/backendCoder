const express = require('express');
const server = express();

server.get('/', (pedido, respuesta) => {
  let msg = `Bienvenidos al servidor express`
  respuesta.send(`<h1 style="color: blue">${msg}</h1>`)
})

let visitas = 0;
server.get('/visitas', (pedido, respuesta) => {
  visitas++;
  respuesta.send(`El numero de visitas a la pagína es de: ${visitas}`)
});

server.get('/fyh', (pedido, respuesta) => {
  let data = {
    fyh: new Date().toLocaleString()
  };
  respuesta.send(data);
})


server.listen(8080, () => {
  console.log("Listening on port 8080")
})