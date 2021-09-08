const express = require('express');
//Require de modulos route
const methodOverride = require('method-override');
const routeFormulario = require('./routes/routeAbmProducto.js');
const mainRoute = require('./routes/mainRoute.js');
const usersRoute = require('./routes/usersRoute.js');

const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../public');
const port = 3000;

app.use(express.static(publicPath));

//Configuracion para permitir envio de datos POST json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//configuracion de method-override:
app.use(methodOverride('_method'));

// Configuracion EJS
app.set('views', './src/views');
app.set('views engine', 'ejs');

// Configuracion de rutas a sitio
app.use('/', mainRoute)
app.use('/users', usersRoute)

// Configuracion Server
app.listen(port, () => {
    console.log("OldMilano On-Line on http://127.0.0.1:" + port + " or http://localhost:"+port);
})