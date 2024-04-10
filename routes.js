const dotenv = require('dotenv');
const mysql = require('mysql2');
const express = require('express');
const app = express();

dotenv.config();

// Create MySQL pools
module.exports.node1 = mysql.createPool({
    host: process.env.HOSTNAME,
    port: process.env.PORT1,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE1,
  });
  
  module.exports.node2 = mysql.createPool({
    host: process.env.HOSTNAME,
    port: process.env.PORT2,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE2,
  });
  
  module.exports.node3 = mysql.createPool({
    host: process.env.HOSTNAME,
    port: process.env.PORT3,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE3,
  });
  
  // Access MySQL pools and handle connections
  module.exports.node1.getConnection((err, connection) => {
    if (err) {
        console.error(`Error connecting to node 1: ${err.message}`);
    } else {
        console.log('Successfully connected to node 1');
        connection.release(); // Release the connection
    }
  });
  
  module.exports.node2.getConnection((err, connection) => {
    if (err) {
        console.error(`Error connecting to node 2: ${err.message}`);
    } else {
        console.log('Successfully connected to node 2');
        connection.release(); // Release the connection
    }
  });
  
  module.exports.node3.getConnection((err, connection) => {
    if (err) {
        console.error(`Error connecting to node 3: ${err.message}`);
    } else {
        console.log('Successfully connected to node 3');
        connection.release(); // Release the connection
    }
  });
  
module.exports = app;