import validator from 'validator'
import md5 from 'md5'
import redis from 'redis'
import utils from '../utils'
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
  router.get('/challenge/all', (req, res) => {})

  /**
   * Get popular challanges by category
   * @param string  category
   *                    defauult = all
   */
  router.get('/challenge/popular', (req, res) => {})

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
   *
   */
  router.post('/challenge/add', (req, res) => {})

  /**
   * Delete challenge
   * @only  Challenge Owner OR admin
   *        @if req.user.serId === challengeOwnerId
   *        @elseIf req.user.role === admin
   */
  router.post('/challenge/delete', (req, res) => {})
}
