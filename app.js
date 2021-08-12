const express = require('express');
const routesCarrito = require('./routes/routesCarrito')
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, './public');
const port = 3000;

app.use(express.static(publicPath));

app.use('/shopping_bag', routesCarrito);

app.listen(port, () => {
    console.log("OldMilano On-Line on http://127.0.0.1:" + port + " or http://localhost:"+port);
})