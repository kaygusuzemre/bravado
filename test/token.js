import axios from 'axios'
var Chance = require('chance')
var chance = new Chance()

export default async function() {
  const EMAIL = chance.email()
  let reg = await axios.post(`http://localhost:3000/api/auth/register`, {
    firstName: 'Emre',
    lastName: 'Kaygusuz',
    email: EMAIL,
    age: '23',
    gender: 'male',
    password: 'aaaaa1',
    password2: 'aaaaa1'
  })
  let req = await axios.post(`http://localhost:3000/api/auth/login`, {
    email: EMAIL,
    password: 'aaaaa1'
  })
  return req.data.token
}
