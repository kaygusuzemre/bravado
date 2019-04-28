<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="result!==true">
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
        <b-form-input id="input-2" v-model="form.name" placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Surname:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.surName" required placeholder="Enter surname"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" required placeholder="Enter surname"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="form.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Individual radios">
        <b-form-radio v-model="form.gender" name="some-radios" value="male">Male</b-form-radio>
        <b-form-radio v-model="form.gender" name="some-radios" value="female">Female</b-form-radio>
      </b-form-group>

      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button type="submit" variant="success">Register</b-button>
    </b-form>

    <div v-if="result">Successfully registrated</div>
    <div v-if="result===false">Error</div>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: 'davutkara55@mgmail.com',
        name: 'Davut',
        surName: 'KARA',
        password: 'test',
        age: '23',
        gender: 'male'
      },
      result: null
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      const req = await this.$axios.$post('/api/register', this.form)
      this.result = req.ok
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>