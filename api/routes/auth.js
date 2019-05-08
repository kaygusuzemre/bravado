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
    // Register function
  })
}
