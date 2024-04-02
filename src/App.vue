<template>
   <div>
    <NavBar v-if="! this.$route.meta.hideNavbar"></NavBar>
    <div style="min-height:90vh">
    <router-view></router-view>
  </div>
    <FooTer v-if="! this.$route.meta.hideFooter"></FooTer>
  
  <!-- <landPage></landPage> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooTer from './components/FooTer.vue'
import { computed } from 'vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooTer
  },
  data(){
    return{
      loggedIn:false,
    }
  },
  methods:{
    changeLogin(){
      this.loggedIn = !this.loggedIn
    }
  },
  provide(){
    return{
      loggedIn:computed(()=>this.loggedIn),
      changeLogin : this.changeLogin
    }
  },
  created(){
    this.loggedIn = JSON.parse(localStorage.getItem('loggedIn'))
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
