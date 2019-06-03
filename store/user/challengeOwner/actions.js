import axios from 'axios'

export default {
  GET_CHALLANGES: async ({ rootState, commit }) => {
    try {
      const { data } = await axios.get('/api/user/challenges', {
        headers: {
          authorization: `Bearer ${rootState.auth.token}`
        }
      })
      commit('SET_CHALLANGES', data)
    } catch (error) {}
  },
  updateChallenge: state => {},
  deleteChallenge: state => {}
}
