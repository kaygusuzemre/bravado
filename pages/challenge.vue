<template>
  <div>
    <b-container fluid>
      <bravadoNavigation></bravadoNavigation>
    </b-container>
    <hr>
    <b-container fluid>
      <b-button block variant="primary">Submit Assignment</b-button>
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
      <b-button block variant="danger">Quit Challenge</b-button>
    </b-container>
  </div>
</template>

<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'

export default {
  layout: 'user',
  beforeMount: function() {
    const { id } = this.$route.params
    if (id === undefined) {
      alert('Challenge is not found')
      this.$router.push({ path: '/profile' })
    } else {
      this.$store.dispatch('challenge/GET_CHALLENGE', { id })
    }
  },
  filters: {
    prettyDate: function(val) {
      if (val !== undefined) return val.split('T')[0]
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
  components: { bravadoNavigation }
}
</script>

<style>
</style>
