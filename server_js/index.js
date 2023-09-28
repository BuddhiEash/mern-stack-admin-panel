import express from 'express'
import dotenv from 'dotenv'
// import mysql from 'mysql2'
// import bcrypt from 'bcrypt'
import dbConnection from './components/dbconnection.js'

const app = express()
dotenv.config()
const app_host = process.env.APP_HOST
const app_port = process.env.APP_PORT

// const connectionPool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
//   }).promise()

const query = `SELECT name FROM tbl_user`
// const userName = await connectionPool.query(query)
const userName = await dbConnection.get().query(query)

app.get('/', (req, res) => {
  res.send(`Hello ExpressJS Server!! I'm ` + userName[0][0].name)
})

app.listen(app_port, () => {
  console.log(`⚡️[server]: Server is running at ${app_host + app_port}`)
})
