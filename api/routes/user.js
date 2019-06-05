import validator from 'validator'
import md5 from 'md5'
import utils from '../utils'

export default function(router, db, cache) {
  /**
   * Challenges which are created by the user.
   * @only user
   */
  router.get(
    '/user/challenges',
    utils(db, cache).restrictByUserRole('user'),
    (req, res) => {
      db.query(
        `SELECT * FROM challenge WHERE owner=?`,
        [req.user.userId],
        function(error, results, fields) {
          if (error)
            res.json({
              status: 'error',
              msg: 'Unknown error',
              error: error
            })
          else res.json(results)
        }
      )
    }
  )

  /**
   * Challanges which are participated by user
   * @only user
   */

  router.get(
    '/user/participations',
    utils(db, cache).restrictByUserRole('user'),
    (req, res) => {
      db.query(
        `SELECT * FROM progress WHERE userId=?`,
        [req.user.userId],
        function(error, results, fields) {
          if (error)
            res.json({
              status: 'error',
              msg: 'Unknown error',
              error: error
            })
          else
            res.json(
              results.reduce((obj, item) => {
                obj[item.challengeId] = item
                return obj
              }, {})
            )
        }
      )
    }
  )

  router.post(
    '/user/update',
    utils(db, cache).restrictByUserRole('user'),
    (req, res) => {
      if (!validator.isEmail(req.body.email))
        res.json({ status: 'error', key: 'email', msg: 'Email is not valid' })
      else if (
        req.body.updatePasswordState === true &&
        !(req.body.password === req.body.password2)
      )
        res.json({
          status: 'error',
          key: 'password',
          msg: 'Passwords do not match'
        })
      else if (
        req.body.updatePasswordState === true &&
        !validator.matches(String(req.body.password), /(?=.*[0-9])/)
      )
        res.json({
          status: 'error',
          key: 'password',
          msg: 'The password must contain at least 1 numeric character'
        })
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
      else {
        let sqlQuery

        if (req.body.updatePasswordState === true)
          sqlQuery = `UPDATE user SET  name=? ,surname=?,email=? ,password=? WHERE userId=${
            req.user.userId
          }`
        else
          sqlQuery = `UPDATE user SET name=? ,surname=?,email=? WHERE userId=${
            req.user.userId
          }`

        db.query(
          sqlQuery,
          [
            req.body.firstName,
            req.body.lastName,
            req.body.email,
            md5(req.body.password)
          ],
          function(error, results, fields) {
            if (error && error.code === 'ER_DUP_ENTRY')
              res.json({
                status: 'error',
                key: 'email',
                msg: 'Please change something to save.'
              })
            else if (
              error &&
              error.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD'
            )
              res.json({
                status: 'error',
                msg: 'Invalid value, please control your credentials.'
              })
            else if (results && results.affectedRows)
              res.json({ status: 'success', msg: 'success' })
            else {
              res.json({ status: 'error', msg: 'Unknown error' })
            }
          }
        )
      }
    }
  )
}
