<template>
    <div>
        <!-- profile card -->
        <div class="col-12 d-flex flex-column align-items-center">
            <img class="userImg col-2 rounded-circle mt-3" v-if="user.gender == 'female' && user.role == 'user'" src="https://i.postimg.cc/bwRdFmhr/female-Icon.jpg" />
            <img class="userImg col-2 rounded-circle mt-3" v-if="user.gender == 'male' && user.role == 'user'" src="https://i.postimg.cc/Gp23grKg/maleIcon.jpg" />
            <img class="userImg col-2 rounded-circle mt-3" v-if="user.role == 'doctor'" :src="user.image" />
            <h1 class="m-3" style="color: #1C315E;">{{ user.userName }}</h1>
        </div>
  
        <div class="body d-flex row col-12 justify-content-around">
        <!-- card -->
            <div class="card col-8 text-start h-auto">
  
              <div class="d-flex gap-3"><h3>Name: </h3><p>{{user.name}}</p></div>
              <div class="d-flex gap-3"><h3>Email: </h3><p>{{user.email}}</p></div>
              <div class="d-flex gap-3"><h3>Gender: </h3><p>{{user.gender}}</p></div>
              <div class="d-flex gap-3"><h3>Specialty: </h3><p>{{user.spe}}</p></div>
              <div class="d-flex gap-3"><h3>Description: </h3><p>{{user.des}}</p></div>
              <div class="d-flex gap-3"><h3>Rate: </h3><p>{{user.rate}}</p></div>
              <div class="d-flex gap-3"><h3>Location: </h3><p>{{user.location}}</p></div>
              <hr>
              <h2 class="text-center">Apointment</h2>
              <div v-for="(apointment, index) in user.booking" :key='index'>
                <div class="d-flex gap-3"><h3>patient: </h3><p>{{apointment.patient}}</p></div>
                <div class="d-flex gap-3"><h3>Doctor: </h3><p>{{apointment.doctor}}</p></div>
                <div class="d-flex gap-3"><h3>Date: </h3><p>{{apointment.date}}</p></div>
                <div class="d-flex gap-3"><h3>Day: </h3><p>{{apointment.day}}</p></div>
                <div class="d-flex gap-3"><h3>Time: </h3><p>{{apointment.time}}</p></div>
                <button class="btn btn-danger" @click="deleteItem(index)">Delete</button>
                <hr>
              </div>
  
  
                
            </div>
            
        </div>
    <div>
  
    </div>
  
  
        <br>
        <br>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
    export default {
        name:'ProfileSaved',
        data(){
          return{
            user:{},
            
          }
        },
        methods:{
          move(){
            window.location.href = '/Login'
          },
          deleteItem(index){
            this.user.booking.splice(index,1);
            localStorage.setItem('user',JSON.stringify(this.user));
            axios.put(`http://localhost:3000/users/${this.user.id}`,this.user).then((res)=>{
              console.log(res.data);
            }).catch(err=>console.log(err))
          }
        },
        created(){
          this.user = JSON.parse(localStorage.getItem('user'));
        }
  
        
    }
  </script>
  
  <style scoped>
  
  
  
  
  div{
        overflow: hidden;
      }
      
      .card {
        border-radius: 20px;
        background-color: rgba(242, 233, 201, 1);
        padding: 50px;
       
      }
     
      .userImg {
        width: 275px;
        height: 275px;
      }
      h1 {
        font-size: 36px;
      }
      h3,h2{
        color:#1C315E;
      }
      p{
         font-size: 25px;
      }
  
    
  </style>