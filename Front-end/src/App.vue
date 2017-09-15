<template>
  <div id="app">
    <img src="./assets/logo.png">
  
      <li>
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="login" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link to="register" class="nav-link">Register</router-link>
      </li>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 0px;
}
</style>
