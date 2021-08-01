/*const config = require("../Config/config");
const mysql = require('mysql');

const connection = mysql.createConnection(config);

module.exports = connection;*/
const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect('mongodb+srv://Fedi:FediFad@pointssystem.a3ry5.mongodb.net/PointsSystem?retryWrites=true&w=majority', { useNewUrlParser: true });
// Validation
mongoose.connection
  .once('open', () => {console.log('Connected to the database!')})
  .on('error', err => console.log('Error with the database!', err));
