import express from 'express'
import dotenv from 'dotenv'
import { user } from './components/user.js'

const app = express()
dotenv.config()
const app_host = process.env.APP_HOST
const app_port = process.env.APP_PORT

app.get('/', (req, res) => {
  res.send(`Hello ExpressJS Server!! I'm from Node environment` + user())
})

app.listen(app_port, () => {
  console.log(`⚡️[server]: Server is running at ${app_host + app_port}`)
})
