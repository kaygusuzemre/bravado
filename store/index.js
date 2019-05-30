const cookieparser = process.server ? require('cookieparser') : undefined

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      const { token } = cookieparser.parse(req.headers.cookie)
      commit('auth/SET_TOKEN', token)
    }
  }
}
