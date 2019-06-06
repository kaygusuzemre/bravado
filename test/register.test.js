import axios from 'axios'
var Chance = require('chance')
var chance = new Chance()

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
  test('password', async () => {
    let request = await axios.post(endpoint, {
      firstName: '',
      lastName: '',
      email: 'emrekaygusuz95@gmail.com',
      age: '',
      gender: '',
      password: '',
      password2: ''
    })
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'password',
      msg: 'The password must contain at least 1 numeric character'
    })
  })
  test('differentpassword', async () => {
    let request = await axios.post(endpoint, {
      firstName: '',
      lastName: '',
      email: 'emrekaygusuzz95@gmail.com',
      age: '',
      gender: '',
      password: 'a',
      password2: 'b'
    })
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'password',
      msg: 'Passwords do not match'
    })
  })
  test('firstName', async () => {
    let request = await axios.post(endpoint, {
      firstName: '',
      lastName: '',
      email: 'emrekaygusuzz95@gmail.com',
      age: '',
      gender: 'male',
      password: 'aaaaa1',
      password2: 'aaaaa1'
    })
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'firstName',
      msg: 'A name can contain only Alpha Characters'
    })
  })
  test('gender', async () => {
    let request = await axios.post(endpoint, {
      firstName: '',
      lastName: '',
      email: 'emrekaygusuzz95@gmail.com',
      age: '',
      gender: '',
      password: 'aaaaa1',
      password2: 'aaaaa1'
    })
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'gender',
      msg: 'gender is needed'
    })
  })
  test('lastName', async () => {
    let request = await axios.post(endpoint, {
      firstName: 'Emre',
      lastName: '',
      email: 'emrekaygusuz95@gmail.com',
      age: '23',
      gender: 'male',
      password: 'aaaaa1',
      password2: 'aaaaa1'
    })
    expect(request.data).toMatchObject({
      status: 'error',
      key: 'lastName',
      msg: 'A surname can contain only Alpha Characters'
    })
  })
  test('success', async () => {
    let request = await axios.post(endpoint, {
      firstName: 'Emre',
      lastName: 'Kaygusuz',
      email: chance.email(),
      age: '23',
      gender: 'male',
      password: 'aaaaa1',
      password2: 'aaaaa1'
    })
    expect(request.data).toMatchObject({
      status: 'success',
      msg: 'success'
    })
  })
})
