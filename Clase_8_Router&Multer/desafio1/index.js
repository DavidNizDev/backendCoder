const express = require("express");
const { Router } = express;
const app = express();

const routerPersonas = Router();
const routerMascotas = Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/personas", routerPersonas);
app.use("/mascotas", routerMascotas);

let personas = [{ nombre: "Juan", apellido: "Perez", edad: 21 }];
let mascotas = [{ nombre: "Pichicho", raza: "Sacachispas", edad: 2 }];

routerPersonas.get("/", (req, res) => {
  res.json(personas);
});

routerPersonas.post("/", (req, res) => {
  personas.push(req.body);
  res.json(personas);
});

routerMascotas.get("/", (req, res) => {
  res.json(mascotas);
})

routerMascotas.post("/", (req, res) => {
  mascotas.push(req.body);
  res.json(mascotas);
})

app.listen(8000, () => {
  console.log("Server running");
})
  .on("error", () => {
    console.log("Ha ocurrido un error");
  });
