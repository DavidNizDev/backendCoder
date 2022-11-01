const express = require("express");
const { Router } = express;
const path = require("path");
const app = express();
const Contenedor = require("./contenedor.js")

const productosRouter = Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/productos", productosRouter);

const prods = new Contenedor("./productos.json");

prods.init();

app.get("/", (req, res) => {
    res.send("index.html");
})

productosRouter.get("/", async (req, res) => {
    const productos = await prods.getAll();
    res.json(productos);
});

productosRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await prods.getById(id))
})

productosRouter.post("/", async (req, res) => {
    let obj = req.body;
    res.json(prods.save(obj));
})

productosRouter.put("/:id", (req, res) => {
	let obj = req.body;
	let id = req.params.id;
	return res.json(prods.update(id, obj));
});

productosRouter.delete("/:id", (req, res) => {
    let id = req.params.id;
    res.send(prods.deleteById(id));
})

app.listen(8000, () => {
    console.log("Server running");
})
    .on("error", (err) => {
        console.log(`Ha ocurrido un error: ${err}`);
    });

