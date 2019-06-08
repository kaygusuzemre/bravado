import validator from 'validator'
import utils from '../utils'

function twoDigits(d) {
  if (0 <= d && d < 10) return '0' + d.toString()
  if (-10 < d && d < 0) return '-0' + (-1 * d).toString()
  return d.toString()
}

Date.prototype.toMysqlFormat = function() {
  return (
    this.getUTCFullYear() +
    '-' +
    twoDigits(1 + this.getUTCMonth()) +
    '-' +
    twoDigits(this.getUTCDate())
  )
}

export default function(router, db, cache) {
  /**
   * Get all challenges
   * @param string  searchQuery
   * @param sortBy  sort
   * @param filters filter
   * @param int     page
   *
   * @sortBy    :  Popularity, difficulty, period, A-Z
   * @filters   :  Finished, Continuing
   */
  router.post(
    '/challenge/all',
    utils(db, cache).restrictByUserRole('user'),
    (req, res) => {
      let sql = 'SELECT * FROM challenge '
      const { sort, filter, search } = req.body
      let now = new Date().toMysqlFormat()
      if (filter === 'FINISHED') sql += `WHERE finishDate>="${now}" AND `
      else if (filter === 'CONTINUING') sql += `WHERE finishDate<="${now}" AND `
      else if (search !== '' && search !== undefined) sql += ` WHERE `

      if (search !== '' && search !== undefined)
        sql += ` title LIKE "%${search}%" `
      if (sort === 'ASC') sql += `ORDER BY startDate ASC `
      else if (sort === 'DESC') sql += `ORDER BY startDate DESC `

      db.query(sql, [], function(error, results, fields) {
        if (error)
          res.json({ status: 'error', msg: 'Unknown error', error: error })
        else res.json(results)
      })
    }
  )

  /**
   * Get popular challanges by category
   * @param string  category
   *                    default = all
   */
  router.post('/challenge/popular', (req, res) => {})

  /**
   * Add  challange
   * @only user
   *
   * @param string      title
   * @param string[]    categories
   * @param string      startDate
   * @param string      finishDate
   * @param int         Goal
   * @param string      desription
   * @param BadgeObject badge
   *
   *
   * @BadgeObject
   *    string rotate
   *    string edge
   *    string color
   *    string imageURL
   */
  router.post(
    '/challenge/add',
    utils(db, cache).restrictByUserRole('user'),
    (req, res) => {
      const {
        title,
        categories,
        startDate,
        finishDate,
        Goal,
        description,
        badge
      } = req.body
      if (validator.isEmpty(validator.trim(title)))
        res.json({
          status: 'error',
          key: 'title',
          msg: 'title cannot be empty'
        })
      else if (categories.length < 1)
        res.json({
          status: 'error',
          key: 'categories',
          msg: 'at least one category is needed.'
        })
      else if (
        !validator.matches(
          String(startDate),
          /^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9])(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/
        )
      )
        res.json({
          status: 'error',
          key: 'startDate',
          msg: 'startDate is not valid.'
        })
      else if (
        !validator.matches(
          String(finishDate),
          /^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9])(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/
        )
      )
        res.json({
          status: 'error',
          key: 'finishDate',
          msg: 'finishDate must be in valid interval.'
        })
      else if (!validator.isInt(Goal))
        res.json({ status: 'error', key: 'Goal', msg: 'Goal is not valid.' })
      else if (validator.isEmpty(validator.trim(description)))
        res.json({
          status: 'error',
          key: 'description',
          msg: 'description cannot be empty'
        })
      else if (!validator.isHexColor(validator.trim(badge.color)))
        res.json({ status: 'error', key: 'badge', msg: 'color is not hex ' })
      else
        db.query(
          'INSERT INTO challenge (owner,title,startDate,finishDate,goal,content,reward) VALUES (?,?,?,?,?,?,?)',
          [
            req.user.userId,
            title,
            startDate,
            finishDate,
            Goal,
            description,
            JSON.stringify(badge)
          ],
          function(error, results, fields) {
            if (error && error.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD')
              res.json({
                status: 'error',
                msg: 'Invalid value, please control your credientials.'
              })
            else if (results && results.affectedRows)
              res.json({ status: 'success', msg: 'success' })
            else {
              res.json({ status: 'error', msg: 'Unknown error' })
            }
          }
        )
    }
  )

  /**
   * Delete challenge
   * @only  Challenge Owner OR admin
   *        @if req.user.serId === challengeOwnerId
   *        @elseIf req.user.role === admin
   */
  router.post('/challenge/delete', (req, res) => {})

  /**
   * Get specific challenge
   * @only  user
   *
   * @param int   id;
   */
  router.get(
    '/challenge/get/:id',
    utils(db, cache).restrictByUserRole('user'),
    (req, res) => {
      db.query(
        `SELECT * FROM challenge WHERE challengeId=?`,
        [req.params.id],
        function(error, results, fields) {
          if (error)
            res.json({ status: 'error', msg: 'Unknown error', error: error })
          else res.json(results)
        }
      )
    }
  )

  /**
   * Join specific challenge
   * @only  user
   *
   * @param int   challengeId;
   * @param int   userId
   */
  router.post(
    '/challenge/join',
    utils(db, cache).restrictByUserRole('user'),
    (req, res) => {
      db.query(
        `INSERT INTO progress (challengeId,userId,status) VALUES (?,?,?)`,
        [req.body.challengeId, req.user.userId, 'inProgress'],
        function(error, results, fields) {
          if (error)
            res.json({ status: 'error', msg: 'Unknown error', error: error })
          else res.json({ status: 'success' })
        }
      )
    }
  )
  /**
   * Quit participated challenge
   * @only  user
   *
   * @param int   challengeId;
   * @param int   userId
   */
  router.post(
    '/challenge/quit',
    utils(db, cache).restrictByUserRole('user'),
    (req, res) => {
      db.query(
        `UPDATE progress SET status='gaveUp' WHERE challengeId=? AND  userId=?`,
        [req.body.challengeId, req.user.userId],
        function(error, results, fields) {
          if (error)
            res.json({ status: 'error', msg: 'Unknown error', error: error })
          else res.json({ status: 'success' })
        }
      )
    }
  )

  /**
   * Challenge participants
   * @only user
   *
   * @param int challengeId
   */

  router.get(
    '/challenge/participants/:id',
    utils(db, cache).restrictByUserRole('user'),
    (req, res) => {
      db.query(
        `
        SELECT GROUP_CONCAT(status) as progress, name,surname,gender,userID FROM (
            SELECT  CONCAT('"',status,'":',count) as status, name,surname,gender,userID FROM (
                SELECT score.status, score.userID, score.count, user.name, user.surname, user.gender FROM (
                    SELECT userID, count(userID) as count, status FROM progress WHERE challengeId=? GROUP BY status , userID
                ) AS score
                INNER JOIN user ON score.userID = user.userID
            ) as result
        ) as concatedTable GROUP BY userID
        `,
        [req.params.id],
        function(error, results, fields) {
          if (error)
            res.json({ status: 'error', msg: 'Unknown error', error: error })
          else
            res.json(
              // Array to object
              results.reduce((obj, item) => {
                obj[item.userID] = item
                return obj
              }, {})
            )
        }
      )
    }
  )
}
