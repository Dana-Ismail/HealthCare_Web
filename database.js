const mysql = require('mysql2/promise');
module.exports = database = {};

connection()

async function connection() {
    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'DatabaseName'
    });
    database.connection = dbconnection;
}