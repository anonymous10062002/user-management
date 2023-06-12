const sql=require('mysql2');
require('dotenv').config();

const connection = sql.createConnection({
    host: 'localhost',
    user: process.env.sqlUsername,
    password: process.env.sqlPass, 
    database: process.env.sqlDB,
});

module.exports={connection}