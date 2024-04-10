const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mysql = require('mysql');

dotenv.config();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('test'); // This will never be executed because 'index.html' will be served first
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const host = 'localhost';
const port = '8080';

var connection = mysql.createConnection({
  host: host,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: port,  
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// export const node1Pool = mysql.createPool({
//     host: process.env.HOSTNAME,
//     port: process.env.PORT1,
//     user: process.env.USERNAME,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// });

// export const node2Pool = mysql.createPool({
//     host: process.env.HOSTNAME,
//     port: process.env.PORT2,
//     user: process.env.USERNAME,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// });

// export const node3Pool = mysql.createPool({
//     host: process.env.HOSTNAME,
//     port: process.env.PORT3,
//     user: process.env.USERNAME,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// });
