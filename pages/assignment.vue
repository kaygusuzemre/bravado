<template>
  <div>
    <b-container fluid>
      <bravado-navigation></bravado-navigation>
      <hr>
    </b-container>
    <b-container fluid>
      <b-form>
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
            <b-button size="lg" variant="primary">Send</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'

export default {
  layout: 'user',
  components: { bravadoNavigation },
  data() {
    return {
      text: ''
    }
  }
}
</script>
<style>
#assignment {
  font-size: 25px;
  text-align: center;
}
</style>