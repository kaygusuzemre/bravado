import axios from 'axios'
var Chance = require('chance')
var chance = new Chance()
import token from './token'
const endpoint = `http://localhost:3000/api/challenge/add`
describe('/api/challenge/add', () => {
  test('title', async () => {
    const TOKEN = await token()

    const request = await axios.post(
      endpoint,
      {
        title: '',
        categories: [],
        startDate: '',
        finishDate: '',
        Goal: 0,
        description: ''
      },
      {
        headers: {
          authorization: `Bearer ${TOKEN}`
        }
      }
    )
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'title',
      msg: 'title cannot be empty'
    })
  })
})
