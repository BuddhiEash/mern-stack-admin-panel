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

connection.query("SELECT name FROM tbl_user", function (err, result, fields) {
  if (err) throw err;
  console.log("Result is : ");
  console.log(result[0].name);
});
  
connection.end()

app.get('/', (req, res) => {
  res.send('ExpressJS Server!!')
})

app.listen(app_port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${app_port}`)
})