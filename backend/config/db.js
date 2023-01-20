let mysql  =require('mysql2');
let connection = mysql.createConnection({
    host : 'localhost',
    user: 'rootdev',
    password: 'root',
    database: 'dempartner'
});

connection.connect();

module.exports = connection;