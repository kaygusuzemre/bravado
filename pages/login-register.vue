<template>
  <div>
    <b-container id="login-register">
      <p id="mainheader">BRAVADO Registeration</p>
      <nuxt-link to="/">Homepage</nuxt-link>
      <b-row>
        <b-col md="6">
          <div id="socialdiv">
            <p id="header" class="text-center">LOGIN FORM</p>
            <login-form></login-form>
          </div>
        </b-col>
        <b-col md="6">
          <register-form></register-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import loginForm from '~/components/auth/loginForm.vue'
import registerForm from '~/components/auth/registerForm.vue'
export default {
  components: {
    loginForm,
    registerForm
  },
  data() {
    return {
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
    onReset: function() {
      this.form.email = ''
      this.form.name = ''
      this.form.surName = ''
      this.form.password = ''
      this.form.password2 = ''
      this.form.gender = ''
      this.form.age = 0
    },
    onSubmit: function() {}
  }
}
</script>

<style>
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
