const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql');
const app_port = process.env.APP_PORT;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

connection.connect();

connection.query('SHOW DATABASES', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows)
  })
  
connection.end()

app.get('/', (req, res) => {
  res.send('ExpressJS Server!!')
})

app.listen(app_port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${app_port}`)
})