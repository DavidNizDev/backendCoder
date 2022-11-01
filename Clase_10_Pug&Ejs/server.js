const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/hello', (req, res) => {
    res.send("Hola Mundito");
})

app.get('/urlparam', (req, res) => {
    res.send(req.query);
})

app.post('/urljson', (req, res) => {
    res.send(req.body);
})

const PORT = 8080;

app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`))