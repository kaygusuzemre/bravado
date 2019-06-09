<template>
  <div>
    <b-container fluid>
      <bravado-navigation></bravado-navigation>
      <hr>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col>
          <nuxt-link
            :to="{
            name: `challenge`,
            params: {
               id : $route.params.id
            }
           }"
          >
            <b-button block size="lg" variant="light" href="/challenge">« Back to the challenge</b-button>
          </nuxt-link>
        </b-col>
      </b-row>
      <hr>
      <template v-if="upLoader">
        <div class="d-flex justify-content-center mb-3">
          <b-spinner label="Spinning"></b-spinner>
        </div>
      </template>
      <b-row>
        <b-col>
          <b-alert
            :show="response === 'success' ? 5 : 0"
            dismissible
            variant="success"
            @dismissed="()=> $router.replace({
            name: `challenge`,
            params: {
               id : $route.params.id
            }
           })"
            @dismiss-count-down="(val) => dismissCountDown=val"
          >
            <p>
              Assignment succuessfuly submitted.
              Redirecting in {{ dismissCountDown }} seconds...
            </p>
            <b-progress variant="success" :max="5" :value="dismissCountDown" height="4px"></b-progress>
          </b-alert>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form v-if="status === true && response !== 'success'" @submit="onSubmit">
            <b-row>
              <b-col md="12">
                <b-form-textarea
                  id="textarea-state"
                  v-model="text"
                  :state="text.length >= 50"
                  placeholder="Enter at least 50 characters"
                  rows="12"
                ></b-form-textarea>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col offset-md="11">
                <b-button type="submit" size="lg" variant="primary">Send</b-button>
              </b-col>
            </b-row>
          </b-form>
          <b-alert
            v-else-if="status === `NOT_STARTED`"
            show
            variant="warning"
          >CHALLENGE IS NOT STARTED</b-alert>
          <b-alert v-else-if="status === `FINISHED`" show variant="warning">CHALLENGE HAS FINISHED</b-alert>
          <b-alert
            v-else-if="status === `UNKNOWN`"
            show
            variant="warning"
          >There is a problem, please try again later.</b-alert>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'
import { mapActions } from 'vuex'
export default {
  layout: 'user',
  components: { bravadoNavigation },
  data() {
    return {
      dismissCountDown: 0,
      text: '',
      upLoader: null,
      response: null
    }
  },
  asyncData({ params }) {
    return {
      challengeId: params.id,
      startDate: params.startDate,
      finishDate: params.finishDate
    }
  },
  computed: {
    status() {
      const startTime = new Date(this.startDate).getTime()
      const finishTime = new Date(this.finishDate).getTime()
      const now = new Date().getTime()

      if (now < startTime) return 'NOT_STARTED'
      else if (now > finishTime) return 'FINISHED'
      else if (now > startTime && now < finishTime) return true
      else return 'UNKNOWN'
    }
  },
  methods: {
    ...mapActions({
      onSubmit(dispatch, e) {
        var self = this
        self.upLoader = true
        e.preventDefault()
        dispatch('submission/SEND_TO_API', {
          submission: { challengeId: this.challengeId, content: this.text },
          onSuccess(data) {
            self.response = 'success'
            self.upLoader = false
          },
          onFailure(data) {
            self.response = 'failure'
            self.upLoader = false
          }
        })
      }
    })
  }
}
</script>
<style>
#assignment {
  font-size: 25px;
  text-align: center;
}
</style>