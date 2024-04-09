const express = require('express');
const path = require('path');
const controller = require("../controllers/controller.js");

const app = express.Router();

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '../views/index.html');
    res.sendFile(indexPath);
});
// app.post('/insert', controller.postInsert);
// app.put('/update/:id', controller.postUpdate);
// app.post('/search', controller.postSelect);

module.exports = app;
