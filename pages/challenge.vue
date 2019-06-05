<template>
  <div>
    <b-container fluid>
      <bravadoNavigation></bravadoNavigation>
    </b-container>
    <hr>
    <b-container fluid>
      <template v-if="upLoader">
        <div class="d-flex justify-content-center mb-3">
          <b-spinner label="Spinning"></b-spinner>
        </div>
      </template>
      <template v-else>
        <b-button block variant="primary" v-if="isParticipated">Submit Assignment</b-button>
        <b-button block variant="info" v-else @click="joinChallenge">Join Challenge</b-button>
      </template>
      <hr>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="About" active>
            <b-card-text>
              <b-media>
                <b-img slot="aside" :src="reward.imageURL" width="150" alt="placeholder"></b-img>

                <h3 class="mt-0 mb-1">{{title}}</h3>
                <b-badge variant="info">Start Date: {{startDate | prettyDate}}</b-badge>
                <b-badge variant="warning">Finish Date: {{finishDate | prettyDate}}</b-badge>
                <b-badge variant="danger">Goal: {{goal}}</b-badge>
                <hr>
                <p class="mb-0">{{content}}</p>
              </b-media>
            </b-card-text>
          </b-tab>
          <b-tab title="Feeds">
            <b-card-text>Tab Contents 2</b-card-text>
          </b-tab>
          <b-tab title="Participants">
            <b-card-text>Tab Contents 2</b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
      <hr>
      <b-button block variant="danger" v-show="isParticipated">Quit Challenge</b-button>
    </b-container>
  </div>
</template>

<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'
import { mapActions } from 'vuex'
export default {
  layout: 'user',
  beforeMount: function() {
    const { id } = this.$route.params
    if (id === undefined) {
      alert('Challenge is not found')
      this.$router.push({ path: '/profile' })
    } else {
      this.$store.dispatch('challenge/GET_CHALLENGE', { id })
      this.isParticipated =
        this.challengeId in this.$store.state.user.participations
    }
  },
  filters: {
    prettyDate: function(val) {
      if (val !== undefined) return val.split('T')[0]
    }
  },
  data: function() {
    return {
      isParticipated: null,
      upLoader: null
    }
  },
  computed: {
    challengeId: function() {
      return this.$store.state.challenge.challengeId
    },
    title: function() {
      return this.$store.state.challenge.title
    },
    content: function() {
      return this.$store.state.challenge.content
    },
    startDate: function() {
      return this.$store.state.challenge.startDate
    },
    finishDate: function() {
      return this.$store.state.challenge.finishDate
    },
    goal: function() {
      return this.$store.state.challenge.goal
    },
    reward: function() {
      return this.$store.state.challenge.reward
    },
    participant: function() {
      return this.$store.state.challenge.participant
    }
  },
  components: { bravadoNavigation },
  methods: {
    ...mapActions({
      joinChallenge(dispatch) {
        let self = this
        this.upLoader = true
        dispatch('user/JOIN_CHALLENGE', {
          challengeId: self.challengeId,
          onSuccess: function() {
            self.isParticipated = true
            self.upLoader = false
          },
          onFailure: function(err) {
            self.isParticipated = false
            self.upLoader = false
          }
        })
      }
    })
  }
}
</script>

<style>
</style>
