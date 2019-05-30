import axios from 'axios'

export const state = () => ({
  token: undefined,
  response: undefined
})

export const mutations = {
  SET_TOKEN: function(state, token) {
    state.token = token
  },
  SET_RESPONSE: function(state, response) {
    state.response = response
  }
}

export const actions = {
  /**
   * endpoint : /api/auth/login
   * params: email:string, password:sting
   * returns: error
   */
  async login({ commit }, { email, password }) {
    try {
      const { data } = await axios.post('/api/auth/login', {
        email,
        password
      })
      commit('SET_TOKEN', data.token)
      commit('SET_RESPONSE', data)
    } catch (error) {
      commit('SET_RESPONSE', error.response.data)
    }
  },

  async logout({ commit }) {
    await axios.post('/api/auth/logout')
    commit('SET_TOKEN', null)
  }
}
