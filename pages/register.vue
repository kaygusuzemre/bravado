<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h2>Register</h2>
            <b-form @submit="onSubmit">
              
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" v-model="user.firstName" v-validate="'required'" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">
                  {{ errors.first("firstName") }}
                </div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" v-model="user.lastName" v-validate="'required'" id="lastName" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">
                  {{ errors.first("lastName") }}
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="user.email" v-validate="'required|email'" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }" />
                <div v-if="submitted && errors.has('email')" class="invalid-feedback">
                  {{ errors.first("email") }}
                </div>
              </div>
              <b-form-group id="input-group-2" label="Age" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="user.age"
          
        ></b-form-input>
      </b-form-group>

<b-form-group label="Gender">
        <b-form-radio v-model="user.gender" name="some-radios" value="male">Male</b-form-radio>
        <b-form-radio v-model="user.gender" name="some-radios" value="female">Female</b-form-radio>
      </b-form-group>

              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="user.password" v-validate="{ required: true, min: 6 }" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">
                  {{ errors.first("password") }}
                </div>

                <div class="form-group">
                <label for="password2">Password again</label>
                <input type="password2" v-model="user.password2" v-validate="{ required: true, min: 6 }" id="password2" name="password2" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password2') }" />
                <div v-if="submitted && errors.has('password2')" class="invalid-feedback">
                  {{ errors.first("password2") }}
                </div>
                </div>
              </div>
             <b-button variant="outline-info"><b-link to="/login" >Do You Have an Account</b-link> </b-button>
             <b-button type="submit" variant="success">Register</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        age:"",
        gender:"",
        password: "",
        password2:""
      },
      result: null
    };
  },
  
  methods: {
        async onSubmit(e) {
          e.preventDefault()
      this.submitted = true;
      alert(JSON.stringify(this.user))
      const req = await this.$axios.$post('/api/routes/auth', this.user)
      
      }
  }
};
</script>
