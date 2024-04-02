<template>
    <div>

    <center>
    <h1>Not Found!</h1>
    <p>
      <router-link to="/home">Go home?</router-link>
    </p>
  </center>

</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
body{
    width: 100vw;
    height: 100vh;
    background-color: #48A9A6;
}
  center {
    margin: 15vw;
  }

  h1 {
    color: var(--border);
    font-size: 2em;
  }
</style>