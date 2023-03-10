const express = require('express');
const app = express();

app.get('/datos', (req, res) => {
    console.log(`Port: ${PORT} -> Date: ${Date.now()}`);
    res.send(`Servidor express <span style='color: blueviolet;'>(Nginx)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`);
});

const PORT = parseInt(process.argv[2]) || 8080;
app.listen(PORT, error => {
    if (!error) console.log(`Server express listening on PORT ${PORT} - PID Worker ${process.pid}`);
});