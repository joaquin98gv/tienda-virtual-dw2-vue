<template>
  <div id="app">

    <nav-bar-m-d-b/>
    <router-view/>
    <footer-m-d-b/>
  </div>
</template>

<script>
import NavBarMDB from './components/NavBarMDB.vue'
import FooterMDB from './components/FooterMDB.vue'

export default {
  name: 'App',
  components:{
    NavBarMDB,
    FooterMDB
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


</style>
