const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes.js');
const app = express();

dotenv.config();

// Serve static files from the 'public' directory
app.use(express.static('./public'));
// Route for the root URL ('/')
app.get('/', routes);

// Start the server
const host = 'localhost';
const port = '8080';
app.listen(port, host, () => {
    console.log(`Server is running on https://${host}:${port}`);
});
