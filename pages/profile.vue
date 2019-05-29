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
          <hr>

          <b-button block variant="light" v-b-modal.modal-1>Edit Profile</b-button>
          <b-modal id="modal-1" title="Change Account Settings" @ok="onSubmit">
            <b-form-group>
              <b-form-group
                label-cols-sm="4"
                label="Name:"
                label-align-sm="right"
                label-for="nested-name"
              >
                <b-form-input v-model="user.firstName" id="nested-name" placeholder="Enter name"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="4"
                label="Surname:"
                label-align-sm="right"
                label-for="nested-surname"
              >
                <b-form-input
                  v-model="user.lastName"
                  id="nested-surname"
                  placeholder="Enter surname"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="4"
                label="Email:"
                label-align-sm="right"
                label-for="nested-email"
              >
                <b-form-input v-model="user.email" id="nested-email" placeholder="Enter e-mail"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="4"
                label="Password:"
                label-align-sm="right"
                label-for="nested-password"
              >
                <b-form-input
                  v-model="user.password"
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
                  v-model="user.password2"
                  id="nested-password-again"
                  type="password"
                  placeholder="Enter password again"
                ></b-form-input>
              </b-form-group>
            </b-form-group>
            <div slot="modal-footer" slot-scope="{ ok, cancel }" class="w-100">
              <b-row>
                <b-col>
                  <p class="float-left">{{reqMsg}}</p>
                </b-col>
                <b-col>
                  <b-button variant="success" @click="ok()" class="float-right">OK</b-button>
                  <b-button
                    variant="danger"
                    @click="cancel()"
                    class="float-right"
                    style="margin-right:10px;"
                  >Cancel</b-button>
                </b-col>
              </b-row>
            </div>
          </b-modal>
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
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
      },
      reqMsg: null,
      selectedYear: 2019
    }
  },
  components: { bravadoNavigation, stability },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      const req = await this.$axios.$post('/api/user/update', this.user)
      if (req.status === 'error' || req.status === 'success')
        this.reqMsg = req.msg
      else this.reqMsg = null
    }
  }
}
</script>