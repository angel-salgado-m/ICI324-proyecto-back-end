//import mysql2 from 'mysql2';
const mysql2 = require('mysql2');
require('dotenv').config();


const connectionConfig = {
    host: process.env.DB_HOST,
    user: 'root',
    password: 'rootpass',
    database: 'gasvalpo'
};
/* The code is creating a connection to a MySQL database using the `mysql2` library. */

const connection = mysql2.createConnection({
    host: connectionConfig.host,
    user: connectionConfig.user,
    password: connectionConfig.password
});

module.exports = connectionConfig;