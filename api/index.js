import express from 'express'
import mysql from 'mysql'
import auth from './routes/auth'

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'bravado'
})

connection.connect()
const router = express.Router()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

auth(router)

export default {
  path: '/api',
  handler: router
}
