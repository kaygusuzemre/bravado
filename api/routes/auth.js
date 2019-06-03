import validator from 'validator'
import md5 from 'md5'
import utils from '../utils'
export default function(router, db, cache) {
  /**
   * Login user
   * @param string  email
   * @param string  password
   */
  router.post('/auth/login', (req, res) => {
    if (!validator.isEmail(req.body.email))
      res
        .status(400)
        .json({ status: 'error', key: 'email', msg: 'Email is not valid' })
    else if (!validator.matches(String(req.body.password), /(?=.*[0-9])/))
      res.status(400).json({
        status: 'error',
        key: 'password',
        msg: 'The password must contain at least 1 numeric character'
      })
    else
      db.query(
        'SELECT "ok" as status, userId as id  FROM user WHERE email=? AND password=?',
        [req.body.email, md5(req.body.password)],
        function(error, results, fields) {
          if (error)
            res.json({
              status: 'error',
              key: 'db',
              msg: 'Unknown error.'
            })
          if (results && results.length && results[0].status === 'ok') {
            const session = utils(db, cache).createSessionId()
            const token = utils(db, cache).createAuthToken(session)

            cache.set(session, results[0].id)
            res.cookie('token', token, { maxAge: 900000, httpOnly: true })
            res.header('authorization', `Bearer ${token}`)
            res.json({ status: 'success', msg: 'success', token: token })
          } else
            res.status(401).json({
              status: 'error',
              key: 'form',
              msg: `The email address or the password that you've entered doesn't match any account. Please try again.`
            })
        }
      )
  })

  router.post('/auth/logout', (req, res) => {
    delete req.session.authUser
    res.json({ ok: true })
    // Logout function
  })

  /**
   * Register user
   * @param string  email
   * @param string  password
   * @param string  password2
   * @param string  gender
   * @param string  firstName
   * @param string  lastName
   * @param int     age
   */
  router.post('/auth/register', (req, res) => {
    if (!validator.isEmail(req.body.email))
      res.json({ status: 'error', key: 'email', msg: 'Email is not valid' })
    else if (!(req.body.password === req.body.password2))
      res.json({
        status: 'error',
        key: 'password',
        msg: 'Passwords do not match'
      })
    else if (!validator.matches(String(req.body.password), /(?=.*[0-9])/))
      res.json({
        status: 'error',
        key: 'password',
        msg: 'The password must contain at least 1 numeric character'
      })
    else if (!(req.body.gender === 'male' || req.body.gender === 'female'))
      res.json({ status: 'error', key: 'gender', msg: 'gender is needed' })
    else if (!validator.matches(String(req.body.firstName), /^[a-zA-Z]+$/))
      res.json({
        status: 'error',
        key: 'firstName',
        msg: 'A name can contain only Alpha Characters'
      })
    else if (!validator.matches(String(req.body.lastName), /^[a-zA-Z]+$/))
      res.json({
        status: 'error',
        key: 'lastName',
        msg: 'A surname can contain only Alpha Characters'
      })
    else
      db.query(
        'INSERT INTO user (name,surname,password,email,age,gender) VALUES (?,?,?,?,?,?)',
        [
          req.body.firstName,
          req.body.lastName,
          md5(req.body.password),
          req.body.email,
          req.body.age,
          req.body.gender
        ],
        function(error, results, fields) {
          if (error && error.code === 'ER_DUP_ENTRY')
            res.json({
              status: 'error',
              key: 'email',
              msg:
                'This email has been registered before, please write different.'
            })
          else if (error && error.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD')
            res.json({
              status: 'error',
              msg: 'Invalid value, please control your credientials.'
            })
          else if (results && results.affectedRows)
            res.json({ status: 'success', msg: 'success' })
          else res.json({ status: 'error', msg: 'Unknown error' })
        }
      )
  })

  router.get('/auth/me', (req, res) => {
    let token
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      token = req.headers.authorization.split(' ')[1]
    }

    try {
      const session = utils(db, cache).verifyAuthToken(token)

      if (session === undefined) {
        res.set('WWW-Authenticate', 'Bearer realm="Authorization Required"')
        return res.status(401).send('Authorization Required')
      }
      cache.get(session, (err, id) => {
        if (err)
          res.status(400).json({
            status: 'error',
            msg: 'Cache error, please contact with developers'
          })
        db.query(
          `SELECT name,surName,role,email,age,gender FROM user WHERE userId=?`,
          [id],
          function(error, results, fields) {
            if (error)
              res.json({
                status: 'error',
                key: 'db',
                msg: 'Unknown error.'
              })
            res.json(results[0])
          }
        )
      })
    } catch (err) {
      res.status(400).json({
        status: 'error',
        key: 'jwt',
        msg: 'jwt error'
      })
    }
  })

  router.post('/auth/update', (req, res) => {
    // update query.
  })
}
