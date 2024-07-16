
const express = require('express'); // Import Express framework. With Express, you can create server-side logic, handle routing, manage requests, and build RESTful APIs with ease
const mysql = require('mysql'); // Import MySQL client
const bodyParser = require('body-parser'); // Import body-parser for parsing JSON
require('dotenv').config(); // Load environment variables from .env file

const app = express(); // Create an Express application
app.use(bodyParser.json()); // Use body-parser to parse JSON data

const connection = mysql.createConnection({ // Create MySQL connection
  host: process.env.DB_HOST, // Database host
  user: process.env.DB_USER, // Database user
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME // Database name
});

connection.connect((err) => { // Connect to MySQL database
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});
