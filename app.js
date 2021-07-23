const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, './public');
const port = 3000;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './view/home.html'));
})

app.get('/detallesProducto', (req, res) => {
    res.sendFile(path.join(__dirname, './view/detallesProducto.html'));
})

app.listen(port, () => {
    console.log("OldMilano On-Line on http://127.0.0.1:" + port + " or http://localhost:"+port);
})