<template>
  <div id="app">Welcome
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {

  },
  methods: {
    getLogin() {
      console.log('wwwwww')
    }
   
  }
}
</script>
<style>
@import url('assets/css/base.css');
#app {
  width: 100vw;
  height: 100vh;
}
</style>
