const mysql = require('mysql')

module.exports=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '!Anakharam123',
    database: 'movieindoxxi',
    port: '3306',
})