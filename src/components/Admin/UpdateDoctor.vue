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
        name : "UpdateDoctor",
        data (){
            return {
                doctors : {
                    name:'',
                    rate:'',
                    spe: '',
                    image: "https://i.postimg.cc/J0hgqcRR/g1.jpg",
                    gender: '',
                    des: '',
                    location: ''
                    
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
                    axios.get(` http://localhost:3000/doctors/${this.id}`)
                    .then((res)=>{
                        console.log(res.data)
                        this.doctors = res.data
                      })
                    .catch((err)=>console.log(err))
                
                },
                updatingtheproduct(){
                  this.id = this.$route.params.id
                  axios.put(` http://localhost:3000/doctors/${this.id}`,this.doctors)
                  .then((res)=>{
                        console.log(res.data)
                        alert("your doctor has been updated successfully :)")
                    })
                  .catch((err)=>console.log(err));
                  this.$router.push("/AllDoctors")
                
                }
            }
    }
</script>

<style scoped>

</style>