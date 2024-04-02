<template>
    <div class="container" style="text-align: start;">
        <h2 class="text-center p-4">{{ blog.name }}</h2>
        <div class="row mt-3 pt-3">
            <div class=" col-sm-12 col-md-5 col-lg-6">
                <img :src="blog.img1" alt="">
            </div>
            <div class="col-sm-12 col-md-7 col-lg-6">
                <h3>{{ blog.header1 }}</h3>
                <h4>{{ blog.subHeader1 }}</h4>
                <p>{{ blog.answer11 }}</p>
                <p>{{ blog.answer12 }}</p>
            </div>
        </div>

        <div class="row mt-3 pt-3">
            <div class=" col-sm-12 col-md-6 col-lg-6">
                <h3>{{ blog.header2 }}</h3>
                <h4>{{ blog.subHeader2 }}</h4>
                <p>{{ blog.answer21 }}</p>
                <p>{{ blog.answer22 }}</p>
                
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
                <img :src="blog.img2" alt="">
            </div>
        </div>

        <div class="row mt-3 pt-3">
            <div class="col-12">
                <h3>{{ blog.header3 }}</h3>
                <h4>{{ blog.subHeader3 }}</h4>
                <p>{{ blog.answer31 }}</p>
                <p>{{ blog.answer32 }}</p>
            </div>
        </div>


    </div>
</template>

<script>
 import axios from 'axios'
    export default {
        name:'BlogDetails',
        data(){
            return{
                id:'',
                blog:{}
            }
        },
        created(){
            this.getBlogById()
        },
        methods:{
            getBlogById(){
                this.id=this.$route.params.id
                axios.get(`http://localhost:4000/Blogs/${this.id}`)
                .then(res=>this.blog = res.data)
                .catch(err=>console.log(err))
            }
        }
        
    }
</script>

<style scoped>
img{
    max-width: 80%;
    max-height: 80%;
    border-radius: 3%;
}
h2 ,h4{
    color: #48A9A6;
}
h3{
    color: #2B3467;
}
</style>