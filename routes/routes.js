const express = require("express");
const controller = require("../controllers/controller.js");
const app = express.Router();

app.post("/insert", controller.postInsert);
app.put("/update/:id", controller.postUpdate);
app.post("/search", controller.postSelect);

app.get('*', function(req, res) { res.render('error', {}); } );
module.exports = app;
