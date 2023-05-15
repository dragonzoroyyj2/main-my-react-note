var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'test_react',
    port : 3306
});


module.exports = db;