<template>
    <div class="container">
        <h2 class="text-center p-4">{{ drinks.name }}</h2>
        <div class="row mt-3 pt-3">
           <div class="col-lg-4 col-sm-12 mx-auto"  >
                <img :src="drinks.image" alt="">
            </div>
            <div class="col-lg-8 col-sm-12 mx-auto"  >
                <h6 class="mb-3">diseases: {{ drinks.diseases }}</h6>
                <p>{{ drinks.paragraph }}</p>
               
            </div>
        </div>
 
 
 
     
 
 
    </div>
</template>
 
<script>
 import axios from 'axios'
    export default {
        name:'DrinkDetails',
        data(){
            return{
                id:'',
                drinks:{}
            }
        },
        created(){
            this.getBlogById()
        },
        methods:{
            getBlogById(){
                this.id=this.$route.params.id
                axios.get(`http://localhost:4000/drinks/${this.id}`)
                .then(res=>this.drinks = res.data)
                .catch(err=>console.log(err))
            }
        }
       
    }
</script>
 
<style scoped>
img{
   
    width: 60%;
    height: 80%;
    border-radius: 3%
}
h2 ,h4{
    color: #48A9A6;
}
h3{
    color: #2B3467;
}
</style>