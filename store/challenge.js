import axios from 'axios'

export const state = () => ({
  challengeId: undefined,
  title: undefined,
  content: undefined,
  startDate: undefined,
  finishDate: undefined,
  goal: undefined,
  reward: {},
  participant: {}
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
    state.participant = Object.assign(state.participant, participants)
  },
  RESET_ALL: function(state) {
    state.id = undefined
    state.title = undefined
    state.content = undefined
    state.startDate = undefined
    state.finishDate = undefined
    state.goal = undefined
    state.reward = undefined
    state.participant = {}
  }
}

export const actions = {
  async GET_CHALLENGE({ commit }, { id }) {
    try {
      const { data } = await axios.get(`/api/challenge/get/${id}`)
      if (data.length) commit('SET_CHALLENGE', data[0])
    } catch (error) {}
  }
}
