/* eslint-disable no-trailing-spaces */
<template>
  <v-app>
    <NavBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from '@/views/NavBar'
import Footer from '@/views/Footer'
export default {
  name: 'App',
  components: {
    Footer,
    NavBar
  }
}
</script>
