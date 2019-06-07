import axios from 'axios'

const endpoint = 'http://localhost:3000/api/auth/login'
describe('/api/auth/login', () => {
  test('email', async () => {
    try {
      let request = await axios.post(endpoint, {
        email: 'ekdlsk@ggmail.com',
        password: '',
      })
      expect(request.data).toMatchObject({

        status: 'error',
        key: 'email',
        msg: 'Email is not valid'
      })
    } catch (error) {}
  })
  test('password', async () => {
    try {
      let request = await axios.post(endpoint, {
        email: 'ekdlsk@ggmail.com',
        password: '',
      })
      expect(request.data).toMatchObject({

        status: 'error',
        key: 'password',
        msg: 'Password is not true'
      })
    } catch (error) {}
  })
})
