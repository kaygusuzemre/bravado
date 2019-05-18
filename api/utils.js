import jwt from 'jsonwebtoken'
import randtoken from 'rand-token'

const SECRET_KEY = 'development'

export function createSessionId() {
  return randtoken.suid(16)
}

export function createAuthToken(session) {
  return jwt.sign(session, SECRET_KEY)
}

export function verifyAuthToken(token) {
  return jwt.verify(token, SECRET_KEY)
}

export default {
  createSessionId,
  createAuthToken,
  verifyAuthToken
}
