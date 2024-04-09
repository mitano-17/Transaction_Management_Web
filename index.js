const dotenv = require(`dotenv`).config();;
const express = require('express');
const hbs = require('hbs');
//const path = require('path');

// Modules
const connect = require('./src/models/db.js');
const { node_utils } = require('./src/models/nodes.js');
const replicator = require('./src/models/replicator.js');
const sync = require(`./src/models/sync.js`);

const routes = require('./src/routes/routes.js');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static('./public'));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use('/', routes);

// const port = process.env.SERVER_PORT;
// const hostname = process.env.HOSTNAME;
const port = process.env.SERVER_PORT || 8080;
const hostname = 'localhost';

app.get('/', (req, res) => {
    res.send('test');
});

app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});