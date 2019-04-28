<template>
  <div>
    <b-container id="login-register">
      <p id="mainheader">BRAVADO Registeration</p>
      <nuxt-link to="/">Homepage</nuxt-link>
      <b-row>
        <b-col md="6">
          <div id="socialdiv">
            <p id="header" class="text-center">LOGIN FORM</p>

            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.Password"
                  type="password"
                  required
                  placeholder="Password"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" size="lg" variant="primary">Login via account</b-button>

              <b-button href size="lg" variant="danger">Login via Gmail</b-button>
            </b-form>
          </div>
        </b-col>
        <b-col md="6">
          <div id="registerform">
            <p id="header" class="text-center">REGISTER FORM</p>

            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Surname:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.name" required placeholder="Enter surname"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Age:" label-for="input-2">
                <b-form-input
                  type="number"
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Enter age"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Your gender">
                <b-form-radio v-model="selected" name="some-radios" value="A">Male</b-form-radio>
                <b-form-radio v-model="selected" name="some-radios" value="B">Female</b-form-radio>
              </b-form-group>

              <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.Password"
                  type="password"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Password gender:" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.Password"
                  type="password"
                  required
                  placeholder="Password gender"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: null,
        checked: []
      },

      show: true
    }
  }
}
</script>

<style>
body {
  background: #d9e9e9;
}

#mainheader {
  font-size: 50px;
  text-align: center;
  background-color: lightblue;
  color: black;
  padding: 40px;
}

#login-register {
  background: white;
  padding: 10px;
}

#header {
  font-size: 30px;
  text-align: center;

  color: black;
  padding: 40px;
}
</style>
