const express = require("express");
const app = express.Router();
const controller = require("../controllers/controller.js");

app.get('/', controller.getIndex);
app.post('/insert', controller.postInsert);
app.put('/update/:id', controller.postUpdate);
app.post('/search', controller.postSelect);

module.exports = app;
