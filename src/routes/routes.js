const express = require('express');
const controller = require("../controllers/controller.js");

const app = express();

app.get('/', controller.getIndex);
app.post('/insert', controller.postInsert);
app.put('/update/:id', controller.postUpdate);
app.post('/search', controller.postSelect);

module.exports = app;
