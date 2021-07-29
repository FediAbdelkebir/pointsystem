const mysql = require('mysql');
const db = mysql.createConnection({
host: "btkwtefcjd1rc6mtpgp5-mysql.services.clever-cloud.com",
user: "uxfjsdpm3ubtowbr",
password: "LTg5U2TvPdztQeetIJ1F",
database:"btkwtefcjd1rc6mtpgp5" 
});

module.exports = db;
