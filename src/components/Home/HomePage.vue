<template>
    <div>

        <!-- <NavBar></NavBar> -->
        <HomeHeader></HomeHeader>
        <HomeBody></HomeBody>
        <!-- <FooTer></FooTer> -->

    </div>
</template>

<script>
// import NavBar from '../../components/NavBar.vue'
// import FooTer from '../../components/FooTer.vue'
import HomeHeader from './HomeHeader.vue'
import HomeBody from './HomeBody.vue'
    export default {
        name: 'HomePage',
  components: {
    // NavBar,
    HomeHeader,
    HomeBody,

    // FooTer
   
  }
        
    }
</script>

<style scoped>

</style>