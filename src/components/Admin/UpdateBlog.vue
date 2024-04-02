<template>
    <div class="container">
        <br>
        <h1 style="color: #2b3467;">Update Doctor</h1>
        <form @submit.prevent="updatingtheproduct" class="text-start">
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" v-model="doctors.name">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Specialty</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Specialty" v-model="doctors.spe">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Description</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Description" v-model="doctors.des">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Location</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="location" v-model="doctors.location">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Gender</label>
        <input class="form-control" id="exampleFormControlTextarea1" placeholder="gender" v-model="doctors.gender">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Rate</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="rate" v-model="doctors.rate">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Doctor Image</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="image" v-model="doctors.image">
        </div>
        <button class="btn text-light"
          style="background-color: #2b3467">Update</button>
        </form>
        <br>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name : "UpdateBlog",
        data (){
            return {
                blogs : {
                    name:'',
                    imgCard:'https://i.postimg.cc/wBY826pS/asthma-Card-Img.jpg',
                    overveiwCard:'',
                    img1:'https://i.postimg.cc/50DmBrB2/Asthma-Img1.jpg',
                    header1:'',
                    subHeader1:'',
                    answer11:'',
                    answer12:'',
                    img2: 'https://i.postimg.cc/T175j5Mq/ASthma-Img2.jpg',
                    header2: '',
                    subHeader2: '',
                    answer21: '',
                    answer22: '',
                    header3: '',
                    subHeader3: '',
                    answer31: '',
                    answer32: ''
                    
                },
                id:""
            }
        },
        created(){
            this.gettingtheproduct()
        },
        methods:{
            gettingtheproduct(){
                    this.id = this.$route.params.id
                    axios.get(` http://localhost:4000/Blogs/${this.id}`)
                    .then((res)=>{
                        console.log(res.data)
                        this.blogs = res.data
                      })
                    .catch((err)=>console.log(err))
                
                },
                updatingtheproduct(){
                  this.id = this.$route.params.id
                  axios.put(` http://localhost:4000/Blogs/${this.id}`,this.blogs)
                  .then((res)=>{
                        console.log(res.data)
                        alert("your Blog has been updated successfully :)")
                    })
                  .catch((err)=>console.log(err));
                  this.$router.push("/AllBlogs")
                
                }
            }
    }
</script>

<style scoped>

</style>