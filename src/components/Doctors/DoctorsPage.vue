<template>
  <div>
  <br>
  <br>
  <div class="input-group container">
    <input type="search" class="form-control rounded" placeholder="Search By Location" aria-label="Search" aria-describedby="search-addon" v-model="input"/>
  </div>
  <br>
 
  <h1 class="text-center  p-2" style="color: #48A9A6;">Doctors</h1>
 
 
  <div class="container">
   
     
    <div  class="row">
 
      <div v-for="doc in handelSearch" :key="doc.id" class="card mx-auto sm-mx-auto sm-ms-5 col-sm-6 col-md-4 col-lg-4 ms-5  pb-0 pt-3 " style="width: 18rem;">
          <img :src="doc.image" class="card-img-top mx-auto mt-3 img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ doc.name }}</h5>
            <h6 class="card-text"> {{ doc.spe }}</h6>
            <p class="card-text"> {{ doc.location }}</p>
            <div  class="rate">
              <svg v-if="doc.rate>=1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>
              <svg v-if="doc.rate>=2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg><svg v-if="doc.rate>=3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg><svg v-if="doc.rate>=4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>
              <svg v-if="doc.rate>=5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
              </svg>
            </div>
            <!-- <div class="position-relative"> -->
               <router-link class="position-absolute bottom-0 end-0 me-2 mb-2" :to="`/doctors/doctordetails/${doc.id}`" v-if="loggedIn">Read more..</router-link>
               <router-link class="position-absolute bottom-0 end-0 me-2 mb-2" :to="`/Login`" v-if="!loggedIn">Read more..</router-link>
            <!-- </div> -->
          </div>
        </div>
 
    </div>
   
 
   </div>
  </div>
  </template>
 
  <script>
   import axios from 'axios'
    export default {
        name:'DoctorsPage',
        data(){
            return{
                // id:''
                docs:[],
                input:''
               
            }
       
        } ,
        created(){
            // this.id = this.$route.params.id
            this.getAllDocs()
        },
        methods:{
            getAllDocs(){
                axios.get('http://localhost:3000/allDoctors')
                .then((res)=>this.docs=res.data)
                .catch(err=>console.log(err))
            }
        } ,
        inject:["loggedIn","changeLogin"],
        computed:{
        handelSearch(){
          return this.docs.filter((elem)=>elem.location.toLowerCase().includes(this.input.toLowerCase()))
        }
      }
    }
</script>
 
 
  <style scoped>
 
  img{
        width: 60%;
        height: 40%;
        /* padding-left: 15px; */
        -webkit-transition:all .9s ease;
        -moz-transition:all .9s ease;
        -o-transition:all .9s ease;
        -ms-transition:all .9s ease;
      }
    img:hover{
      opacity: 0.9;
      -webkit-transform:scale(1.15);
      -moz-transform:scale(1.15);
      -ms-transform:scale(1.15);
      -o-transform:scale(1.15);
      transform:scale(1.15);
    }
   
    .card{
      background-color: #F2E9C9 !important;
      border-radius: 10px;
      border-color: solid #48A9A6;
      /* padding-left: 250px; */
      margin: 45px;
      -webkit-transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-in;
      -ms-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.40);
    }
 
    h6{
      color: #48A9A6;
    }
   
    .card:hover{
      box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.50);
      -webkit-transition: all 0.2s ease-in;
      -moz-transition: all 0.2s ease-in;
      -ms-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
      margin-top: 50px;
    }
    svg{
    color: #c59b08;
}

  </style>