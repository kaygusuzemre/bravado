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
#navigation img {
  max-width: 100px;
}

#navigation .nav-item {
  background: #f7f7f7;
  margin-right: 1em;
}

#navigation .nav-item:hover {
  background: #fff;
}

#navigation .nav-item:hover,
.nav-link.active {
  font-weight: bold;
}

#navigation .nav-item:hover img,
.nav-link.active img {
  padding-top: 1em;
}

#navigation .nav-item,
.nav-link.active {
  background: #f7f7f7;
  margin-right: 1em;
  -webkit-border-top-left-radius: 200px;
  -webkit-border-top-right-radius: 200px;
  -moz-border-radius-topleft: 200px;
  -moz-border-radius-topright: 200px;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
}

#navigation span {
  clear: both;
  font-size: 20pr;
}
</style>
