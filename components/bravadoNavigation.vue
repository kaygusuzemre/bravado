<template>
  <b-nav id="navigation" tabs justified align="center">
    <b-nav-item href="/dashboard" active>
      <b-img src="/icons/svg/036-employee-2.svg" fluid/>
      <hr>
      <span>Dashboard</span>
    </b-nav-item>

    <b-nav-item href="/profile">
      <b-img src="/icons/svg/042-winner.svg" fluid/>
      <hr>
      <span>My profile</span>
    </b-nav-item>
    <b-nav-item href="/challanges">
      <b-img src="/icons/svg/003-worlwide.svg" fluid/>
      <hr>
      <span>All challanges</span>
    </b-nav-item>
    <b-nav-item @click="logout()">
      <b-img src="/icons/svg/047-employee-5.svg" fluid/>
      <hr>
      <span>Log out</span>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  methods: {
    logout: function() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
</style>
