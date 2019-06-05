import axios from 'axios'

export const state = () => ({
  userId: '',
  name: '',
  surName: '',
  email: '',
  password: '',
  birthDate: '',
  gender: '',
  role: '',
  participations: {}
})

export const mutations = {
  register: state => {},
  UPDATE_USER: function(state, user) {
    const {
      userId,
      name,
      surName,
      email,
      password,
      birthDate,
      gender,
      role
    } = user
    state.userId = userId
    state.name = name
    state.surName = surName
    state.email = email
    state.password = password
    state.birthDate = birthDate
    state.gender = gender
    state.role = role
  },
  SET_PARTICIPATIONS: function(state, participations) {
    state.participations = Object.assign(state.participations, participations)
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
   * Get challange ids that participated by user.
   */
  async GET_PARTICIPATIONS({ rootState, commit }) {
    try {
      const { data } = await axios.get('/api/user/participations', {
        headers: {
          authorization: `Bearer ${rootState.auth.token}`
        }
      })
      commit('SET_PARTICIPATIONS', data)
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
  },
  /**
   * User joins challenge with challengeId
   */

  async JOIN_CHALLENGE(
    { rootState, commit, dispatch },
    { challengeId, onSuccess, onFailure }
  ) {
    try {
      const { data: req } = await axios.post(
        '/api/challenge/join',
        {
          challengeId
        },
        {
          headers: {
            authorization: `Bearer ${rootState.auth.token}`
          }
        }
      )
      if (req.status === 'error') {
        onFailure(req.msg)
        return
      }
      if (req.status === 'success') {
        await dispatch('GET_PARTICIPATIONS')
        onSuccess()
      }
    } catch (err) {
      onFailure(err)
    }
  }
}
