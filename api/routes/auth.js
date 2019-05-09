import validator from 'validator';

export default function(router) {
  router.post('/login', (req, res) => {
    // Login function
  })

  router.post('/logout', (req, res) => {
    delete req.session.authUser
    res.json({
      ok: true
    })
    // Logout function
  })

  router.post('/register', (req, res) => {
    if (!validator.isEmail(req.body.email))
    res.json({
      status: 'error',
      key: 'email',
      msg: 'Email is not valid'
    })
  })
}
