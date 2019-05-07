<template>
  <div>
    <b-container fluid>
      <bravado-navigation></bravado-navigation>
    </b-container>
    <hr>
    <b-container id="profile" fluid>
      <b-row>
        <b-col md="3">
          <b-card border-variant="light" header="John doe" class="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png"
              class="img-fluid"
              alt="Responsive image"
            >
          </b-card>
        </b-col>
        <b-col md="2" align-self="center">
          <b-button v-b-modal.modal-1>Edit Profile</b-button>

          <b-modal id="modal-1" title="Change Account Settings">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="mail" label="Change Email address:" label-for="mail">
                <b-form-input
                  id="mail"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Change email"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Change Email</b-button>
              <hr>
            </b-form>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="password" label="Change Password:" label-for="password">
                <b-form-input
                  id="password"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Change Password"
                ></b-form-input>

                <hr>

                <b-form-input
                  id="passwordagain"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Enter Password again"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Change Password</b-button>
            </b-form>
          </b-modal>
        </b-col>
        <b-col md="7" align-self="center">
          <b-card border-variant="light" header="Stability" class="text-center"></b-card>
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

export default {
  layout: 'user',
  components: { bravadoNavigation },
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      form: {
        email: '',
        name: '',
        surName: '',
        password: '',
        password2: '',
        gender: '',
        age: 0
      },

      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
