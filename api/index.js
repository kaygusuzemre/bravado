import express from 'express'
import mysql from 'mysql'
import auth from './routes/auth'

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'bravado'
})

db.connect()
db.on('error', function() {})
const router = express.Router()
const app = express()

if (process.env.NODE_ENV === 'development') {
  router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })
}

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

auth(router, db)

export default {
  path: '/api',
  handler: router
}
