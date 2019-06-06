import axios from 'axios'

export const state = () => ({
  challengeId: undefined,
  title: undefined,
  content: undefined,
  startDate: undefined,
  finishDate: undefined,
  goal: undefined,
  reward: {},
  participants: {}
})

export const mutations = {
  SET_CHALLENGE: function(state, challenge) {
    const {
      challengeId,
      title,
      content,
      startDate,
      finishDate,
      goal,
      reward
    } = challenge
    state.challengeId = challengeId
    state.title = title
    state.content = content
    state.startDate = startDate
    state.finishDate = finishDate
    state.goal = goal
    state.reward = JSON.parse(reward)
  },
  SET_PARTICIPANTS: function(state, participants) {
    state.participants = Object.assign(state.participants, participants)
  },
  RESET_ALL: function(state) {
    state.id = undefined
    state.title = undefined
    state.content = undefined
    state.startDate = undefined
    state.finishDate = undefined
    state.goal = undefined
    state.reward = undefined
    state.participants = {}
  }
}

export const actions = {
  async GET_CHALLENGE({ rootState, commit }, { id }) {
    try {
      const { data } = await axios.get(`/api/challenge/get/${id}`, {
        headers: {
          authorization: `Bearer ${rootState.auth.token}`
        }
      })
      if (data.length) commit('SET_CHALLENGE', data[0])
    } catch (error) {}
  },
  async GET_PARTICIPANTS({ rootState, commit }, { id }) {
    try {
      const { data } = await axios.get(`/api/challenge/participants/${id}`, {
        headers: {
          authorization: `Bearer ${rootState.auth.token}`
        }
      })
      commit('SET_PARTICIPANTS', data)
    } catch (error) {}
  }
}
