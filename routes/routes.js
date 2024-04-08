const express = require('express');
const controller = require('../controllers/controller.js');
const app = express.Router();

app.post('/create', controller.postInsert);
app.put('/edit/:id', controller.postUpdate);
app.post('/search', controller.postSelect);

app.get('*', function(req, res) { res.render('error', {}); } );
module.exports = app;