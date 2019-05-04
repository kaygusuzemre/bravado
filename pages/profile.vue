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
          <NuxtLink to="/">Edit Profile</NuxtLink>
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