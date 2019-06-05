<template>
  <div>
    <b-container fluid>
      <bravado-navigation></bravado-navigation>
    </b-container>
    <hr>
    <b-container fluid>
      <b-card title="All challenges">
        <b-card-text>
          If you can not find a challenge which satisfies,
          <nuxt-link to="/create-challenge">create a new challenge</nuxt-link>
        </b-card-text>
        <hr>
        <b-row>
          <b-col>
            <b-button-toolbar key-nav aria-label="Toolbar with button groups">
              <b-button-group class="mx-auto">
                <b-button variant="outline-secondary">&laquo;</b-button>
                <b-button variant="outline-secondary">&lsaquo;</b-button>
              </b-button-group>
              <b-dropdown variant="outline-danger" class="mx-1" right text="Sort by">
                <b-dropdown-item>Popularity</b-dropdown-item>
                <b-dropdown-item>Difficulty</b-dropdown-item>
                <b-dropdown-item>Period</b-dropdown-item>
                <b-dropdown-item>A-Z</b-dropdown-item>
              </b-dropdown>
              <b-dropdown variant="outline-danger" class="mx-1" right text="Filters">
                <b-dropdown-item>Finished</b-dropdown-item>
                <b-dropdown-item>Continuing</b-dropdown-item>
              </b-dropdown>
              <b-button-group class="mx-auto">
                <b-button variant="outline-secondary">&rsaquo;</b-button>
                <b-button variant="outline-secondary">&raquo;</b-button>
              </b-button-group>
            </b-button-toolbar>
          </b-col>
          <b-col>
            <b-form class="mx-auto" inline>
              <b-input placeholder="Write keywords to search then enter" class="w-100"></b-input>
            </b-form>
          </b-col>
        </b-row>
        <hr>
        <b-row class="pb-5" v-for="(o,i) in [1,2,3,4,5]" :key="i">
          <b-col v-for="(o,i) in [1,2,3,4]" :key="i">
            <nuxt-link
              :to="{
                name: `challenge`,
                params: {
                  id : 1
                }
              }"
            >
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
              >
                <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

                <b-progress :value="100-i*10" :max="100" show-progress animated></b-progress>
              </b-card>
            </nuxt-link>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'

export default {
  layout: 'user',
  components: { bravadoNavigation }
}
</script>

<style>
</style>
