const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

let productos = [
    /* {
        nombre: 'Ejemplo',
        precio: '759',
        URL: 'https://cdn0.iconfinder.com/data/icons/customicondesignoffice5/256/examples.png'
    } */
];

const handlebarsConfig = {
    defaultLayout: 'index.handlebars'
}
app.engine('handlebars', exphbs(handlebarsConfig));
app.use(express.urlencoded({ extended: true }));

app.set('views', '../views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('formulario');
})

app.get('/productos', (req, res) => {
    res.render('productos', { productos })
    // res.redirect('/tabla');
})

app.post('/productos', (req, res) => {
    productos.push(req.body);
    console.log(productos);
    res.redirect('/');
});


const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error', error => console.log(`Error en servidor ${error}`));
