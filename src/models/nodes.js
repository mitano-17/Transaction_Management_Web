const mysql = require('mysql2/promise');
const dotenv = require('dotenv').config();

const node0 = mysql.createPool({
    host: process.env.HOSTNAME,
    port: process.env.PORT1,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 64,
    queueLimit: 0
});

const node1 = mysql.createPool({
    host: process.env.HOSTNAME,
    port: process.env.PORT2,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 64,
    queueLimit: 0
});

const node2 = mysql.createPool({
    host: process.env.HOSTNAME,
    port: process.env.PORT3,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 64,
    queueLimit: 0
});

const nodes = [node0, node1, node2];

const node_utils = {
    pingNode: async function (n) {
        try {
            const [rows, fields] = await nodes[n].query('SELECT 1');
            return true;
        }
        catch (err) {
            console.log(`Failed to ping node ${n}`);
            return false;
        }
    }, 

    getConnection: async function (n) {
        try {
            return await nodes[n].getConnection();
        } catch (err) {
            console.log(`Failed to connect to node ${n}`);
        }
    }
}

module.exports = node_utils;
