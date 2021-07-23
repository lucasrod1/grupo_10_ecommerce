const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, './public');
const port = 3000;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './view/home.html'));
})

app.get('/shopping_bag', (req, res) => {
    res.sendFile(path.join(__dirname, './view/shopping_bag.html'));
})

app.listen(port, () => {
    console.log("OldMilano On-Line on http://127.0.0.1:" + port + " or http://localhost:"+port);
})