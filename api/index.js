import express from 'express'
import mysql from 'mysql'
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'bravado'
})

connection.connect()
// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

router.get('/popular', (req, res) => {
  res.json({
    kitap: 100,
    spor: 50
  })
})

router.post('/register', (req, res) => {
  if (req.body.name === '') {
    res.json({
      ok: false
    })
    return
  }

  connection.query(
    `
INSERT INTO user 
(name, surname, password, email, age, gender)
VALUES ('${req.body.name}', '${req.body.surName}', '${req.body.password}', '${
      req.body.email
    }', ${req.body.age}, '${req.body.gender}');
`,
    function(error, results, fields) {
      if (error) throw error
      console.log('ADD USER ✔ ')
      res.json({ ok: true })
    }
  )
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
