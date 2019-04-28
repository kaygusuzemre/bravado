<template>
   <div >
<b-container id="registerform">
<p id="mainheader">BRAVADO Registeration</p>
<b-card border-variant="dark" >
  <div id="socialdiv" class="text-center">
  <p id="header">Start with your Social Account</p>
  
  <b-button-group vertical>
<b-button href="" size="lg" variant="primary">  Login via Facebook</b-button>
<b-button href="" size="lg" variant="danger">  Login via Gmail</b-button>
</b-button-group>
</div>


   <div id="registerform">
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
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.Password"
          type='password'
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
    
  </div>
</b-card>






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
    },
   
  }
</script>

<style>
#mainheader{
  font-size:50px;
  text-align:center;
  background-color: lightblue;
  color: black;
  padding: 40px;
}

#header{
  font-size:30px;
  text-align:center;
  
  color: black;
  padding: 40px;
}
#socialdiv{
background-color:rgb(177, 171, 90);
padding:30px;
margin-bottom:40px;
}
#registerform{


}
</style>
