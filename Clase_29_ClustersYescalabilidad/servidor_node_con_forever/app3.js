const express = require('express');
const { PORT3 } = require('./config');
const { router } = require('./router/router');
const app = express();

app.use('/', router);

app.listen(PORT3, () => console.log(`Server listening on PORT: ${PORT3} - PDI: ${process.pid}`));