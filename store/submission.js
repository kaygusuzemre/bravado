import axios from 'axios'

export const state = () => ({
  id: null,
  challenge: null,
  owner: null,
  rate: 0,
  content: '',
  approvers: []
})

export const mutations = {
  SET_SUBMISSION(state, submission) {
    state.id = submission.id
    state.challenge = submission.challenge
    state.owner = submission.owner
    state.rate = submission.rate
    state.content = submission.content
    state.approvers = submission.approvers
  }
}

export const actions = {
  async SEND_TO_API(
    { rootState, commit },
    { submission, onSuccess, onFailure }
  ) {
    try {
      const { data } = await axios.post(
        process.env.baseUrl + `/api/challenge/submission/add`,
        {
          progressId:
            rootState.user.participations[submission.challengeId].progressId,
          ...submission
        },
        {
          headers: {
            authorization: `Bearer ${rootState.auth.token}`
          }
        }
      )

      if (data.status === 'error') onFailure(data)
      else if (data.status === 'success') onSuccess(data)
      // commit('SET_SUBMISSION', submission)
    } catch (error) {
      onFailure(error)
    }
  }
}
