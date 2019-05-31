import validator from 'validator'
import md5 from 'md5'
import redis from 'redis'
import utils from '../utils'
export default function(router, db, cache) {
  /**
   * Get all categories
   */
  router.get('/category/all', (req, res) => {})

  /**
   * Add category name
   * @only admin
   *
   * @param string  category
   */
  router.post('/category/add', (req, res) => {})

  /**
   * Update category name
   * @only admin
   *
   * @param string  category
   */
  router.post('/category/update', (req, res) => {})

  /**
   * Delete challenge category
   * @only  admin
   */
  router.post('/category/delete', (req, res) => {})
}
