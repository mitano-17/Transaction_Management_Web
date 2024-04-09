const dotenv = require(`dotenv`).config();;
const express = require('express');
const hbs = require('hbs');
//const path = require('path');

// Modules
const connect = require('./src/models/db.js');
const { node_utils } = require('./models/nodes.js');
const replicator = require('./models/replicator.js');
const sync = require(`./models/sync.js`);

const routes = require('./routes/routes.js');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static('./public'));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/', routes);

const port = process.env.SERVER_PORT;
const hostname = process.env.HOSTNAME;

app.listen(port, hostname, function() {
    console.log(`Server is running at http://${hostname}:${port}`);
});