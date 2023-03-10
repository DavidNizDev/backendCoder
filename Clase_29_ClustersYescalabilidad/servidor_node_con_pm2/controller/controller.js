const { PORT } = require('../config');

const home = (req, res) => res.send(`Servidor express en puerto: ${PORT} - PID: ${process.pid} - Fecha y hora actual: ${new Date().toLocaleString()}`);

module.exports.home = home;