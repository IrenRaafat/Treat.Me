<template>
    <div>
        <h1>System Details</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">dec</th>
      <th scope="col">image</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="al in all" :key="al.id">
      <th >{{ al.id }}</th>
      <td>{{ al.title }}</td>
      <td>{{ al.dec }}</td>
      <td><img :src="al.image" alt="" width="100" height="100"></td>
    </tr>
   
   
  </tbody>
  
</table>

<h1>{{ t }}</h1>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'SystemDetails',
        data(){
            return{
                // id:''
                all:[],
                t:''
            }
        },
        created(){
            // this.id = this.$route.params.id
            this.getAll()
        },
        methods:{
            getAll(){
                axios.get('http://localhost:2000/systems')
                .then((res)=>this.all=res.data)
                .catch(err=>console.log(err))
            }
        }


    }
</script>

<style scoped>

</style>