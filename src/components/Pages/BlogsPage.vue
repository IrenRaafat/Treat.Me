<template>
    <br>
    <br>
    <div class="input-group container">
      <input type="search" class="form-control rounded" placeholder="Search by name" aria-label="Search" aria-describedby="search-addon" v-model="input" />
    </div>
    <br>
    
    <h1 class="text-center  p-2" style="color: #48A9A6;">Blogs</h1>
    
    
    <div class="container  ">
    
      
      <div  class="row">
        <div v-for="blog in handelSearch" :key="blog.id" class="card1 mx-auto col-sm-6 col-md-4 col-lg-4 ms-5 mb-2 shadow mb-5 bg-body rounded w-25" >
          <ion-icon name="heart-outline"></ion-icon>
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-5 pt-2 h-5 d-block" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/></svg>
          <img :src="blog.imgCard" class="card-img-top  pb-3 rounded start-50" alt="">
          <h6 class="text-center">{{ blog.name }}</h6>
          <h6 class="text-center" style="color: #48A9A6;">{{ blog.overviewCard }}</h6>
          <br>
          <div class="position-relative">
          <router-link class="position-absolute bottom-0 end-0 " :to="`/blogs/blogdetails/${blog.id}`">Read more..</router-link>
          </div>
        </div>
    
      </div>
      
    
     </div>
    
    </template>
    
    <script>
    import axios from 'axios'
      export default {
            name : 'BlogsPage',
       

      data(){
            return{
                // id:''
                
                blogs:[],
                input:''
                
            }
       
        } ,
        created(){
            // this.id = this.$route.params.id
          
            this.getAllBlogs()
        },
        methods:{
        

            getAllBlogs(){
                axios.get('http://localhost:4000/Blogs')
                .then((res)=>this.blogs=res.data)
                .catch(err=>console.log(err))
            }
        
      },
      computed:{
        handelSearch(){
          return this.blogs.filter((elem)=>elem.name.toLowerCase().includes(this.input.toLowerCase()))
        }
      }
    }
    </script>
    
    <style scoped>
      img{
        width: 60%;
        height: 50%;
        padding-left: 15px;
        -webkit-transition:all .9s ease; 
        -moz-transition:all .9s ease; 
        -o-transition:all .9s ease;
        -ms-transition:all .9s ease; 
      }
      img:hover{
        opacity: 0.8;
        -webkit-transform:scale(1.15);
        -moz-transform:scale(1.15);
        -ms-transform:scale(1.15);
        -o-transform:scale(1.15);
        transform:scale(1.15);
      }
      svg{
        width: 50px;
        height: 50px;
        padding-block-end: 20px;
      }
      .card1{
        background-color: #FFFDD0;
        border-radius: 10px;
        border-color: solid #48A9A6;
      
        margin:20px;
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -ms-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.40);
      }
      
      .card1:hover{
        box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.50);
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -ms-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        margin-top: 50px;
      }
    svg:hover{
      color: red;
    }
    .card1{
      background-color: #F2E9C9 !important;
    }
    </style>