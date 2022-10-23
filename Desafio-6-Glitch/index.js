const express = require('express');
const app = express();
const Contenedor = require('./contenedor.js');
const PORT = 5080;

const archivo = new Contenedor('productos.txt');

app.get('/productos', async (request, response) => {
  const productos = await archivo.getAll();
  console.log(productos);
  response.send(productos);
})

app.get('/productoRandom', async (req, res) => {
  const productos = await archivo.getAll();
  const tamaño = productos.length;
  const randomId = Math.floor(Math.random() * (tamaño - 1 + 1) + 1);
  const producto = await archivo.getById(randomId);
  console.log(producto);
  res.send(producto);
});

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
// app.on('error', (error) => {console.log(error);});
