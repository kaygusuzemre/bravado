<template>
  <div>
    <b-container fluid>
      <bravado-navigation></bravado-navigation>
    </b-container>
    <hr>
    <b-container id="profile" fluid>
      <b-row>
        <b-col md="2">
          <b-card border-variant="light" header="John doe" class="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png"
              class="img-fluid"
              alt="Responsive image"
            >
          </b-card>
        </b-col>
        <b-col md="10">
          <b-card border-variant="light" class="text-center">
            <div slot="header" class="mb-0">
              Stability by
              <b-dropdown
                id="dropdown-1"
                :text="`year ${selectedYear}`"
                size="sm"
                variant="outline-secondary"
              >
                <b-dropdown-item @click="selectedYear= 2019">2019</b-dropdown-item>
                <b-dropdown-item @click="selectedYear = 2018">2018</b-dropdown-item>
              </b-dropdown>
            </div>
            <stability :year="selectedYear"></stability>
          </b-card>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col md="12">
          <b-card border-variant="light" header="Completed" class="text-center"></b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import bravadoNavigation from '~/components/bravadoNavigation.vue'
import stability from '~/components/stability.vue'
export default {
  layout: 'user',
  data() {
    return {
      selectedYear: 2019
    }
  },
  components: { bravadoNavigation, stability }
}
</script>
