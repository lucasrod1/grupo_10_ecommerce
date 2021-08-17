const express = require('express');
const routesCarrito = require('./routes/routesCarrito');
const routeHome = require('./routes/routeHome');
const routeDetallesP = require('./routes/routeDetallesP');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../public');
const port = 3000;

app.use(express.static(publicPath));

// Configuracion EJS
app.set('views', './src/views');
app.set('views engine', 'ejs');

// Configuracion de rutas a sitio
app.use('/shopping_bag', routesCarrito);
app.use('/', routeHome);
app.use('/detallesProducto', routeDetallesP);

// Configuracion Server
app.listen(port, () => {
    console.log("OldMilano On-Line on http://127.0.0.1:" + port + " or http://localhost:"+port);
})