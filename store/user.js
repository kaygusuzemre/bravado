import axios from 'axios'

export const state = () => ({
  id: '',
  name: '',
  surName: '',
  email: '',
  password: '',
  birthDate: '',
  gender: '',
  role: ''
})

export const mutations = {
  register: state => {},
  UPDATE_USER: function(state, user) {
    state = Object.assign(state, user)
  },
  deleteMe: state => {},
  addChallenge: state => {}
}

export const getters = {}

export const actions = {
  /**
   * Get user data from /api/auth/me
   * Needs TOKEN
   */
  async GET_ME({ rootState, commit }) {
    try {
      const { data } = await axios.get('/api/auth/me', {
        headers: {
          authorization: `Bearer ${rootState.auth.token}`
        }
      })
      commit('UPDATE_USER', data)
    } catch (error) {}
  },
  /**
   * Update user with user data to path /api/user/update
   * Needs TOKEN
   */
  async update({ rootState, commit }, { user, onSuccess, onFailure }) {
    try {
      const { data: req } = await axios.post('/api/user/update', user, {
        headers: {
          authorization: `Bearer ${rootState.auth.token}`
        }
      })
      if (req.status === 'error' || req.status === 'success') {
        onFailure(req.msg)
        if (req.status === 'success') {
          commit('UPDATE_USER', {
            name: user.firstName,
            surName: user.lastName,
            email: user.email
          })
          onSuccess()
        }
      } else {
      }
    } catch (err) {
      onFailure(err)
    }
  }
}
