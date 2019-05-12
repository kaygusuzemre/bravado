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

        <b-col md="1" align-self="center">
          <b-button v-b-modal.modal-1>Edit Profile</b-button>
          <b-modal id="modal-1" title="Change Account Settings">
            <b-form-group>
              <b-form-group
                label-cols-sm="4"
                label="Name:"
                label-align-sm="right"
                label-for="nested-name"
              >
                <b-form-input v-model="name" id="nested-name" placeholder="Enter name"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="4"
                label="Surname:"
                label-align-sm="right"
                label-for="nested-surname"
              >
                <b-form-input v-model="surname" id="nested-surname" placeholder="Enter surname"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="4"
                label="Email:"
                label-align-sm="right"
                label-for="nested-email"
              >
                <b-form-input v-model="email" id="nested-email" placeholder="Enter e-mail"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="4"
                label="Password:"
                label-align-sm="right"
                label-for="nested-password"
              >
                <b-form-input
                  v-model="password"
                  id="nested-password"
                  type="password"
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="4"
                label="Password Again:"
                label-align-sm="right"
                label-for="nested-password-again"
              >
                <b-form-input
                  v-model="password2"
                  id="nested-password-again"
                  type="password"
                  placeholder="Enter password again"
                ></b-form-input>
              </b-form-group>

              <b-form-group label-cols-sm="4" label="Gender:" label-align-sm="right" class="mb-0">
                <b-form-radio-group class="pt-2" :options="['Male', 'Female']" v-model="gender"></b-form-radio-group>
              </b-form-group>
            </b-form-group>
          </b-modal>
        </b-col>
        <b-col md="9">
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
  components: { bravadoNavigation, stability },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>