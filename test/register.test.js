import axios from 'axios'

const endpoint = 'http://localhost:3000/api/auth/register'
describe('/api/auth/register', () => {
  test('email', async () => {
    let request = await axios.post(endpoint, {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      gender: '',
      password: '',
      password2: ''
    })
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'email',
      msg: 'Email is not valid'
    })
  })
})
