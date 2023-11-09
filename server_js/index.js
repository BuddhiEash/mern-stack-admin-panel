import express from 'express'
import dotenv from 'dotenv'
import { user, login } from './components/user.js'
import routes from './routes.js'

const app = express()
dotenv.config()
const app_host = process.env.APP_HOST
const app_port = process.env.APP_PORT

app.get(routes().home, async (req, res) => {
  res.header('Access-Control-Allow-Origin', "http://localhost:3000")
  res.send(`Hello ExpressJS Server!! I'm from Node environment, and my name is : ` + await user())
})

app.get(routes().login, async (req, res) => {
  res.send(`Hello ExpressJS Server!! I checked the login, and my result is : ` + 
  await login(req.query.username, req.query.password))
})

app.listen(app_port, () => {
  console.log(`⚡️[server]: Server is running at ${app_host + app_port}`)
})
