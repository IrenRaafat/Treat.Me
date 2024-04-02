<template>
 
    <div class="mt-5 m-auto mb-5 ms-auto">
 
      <br>
 
      <div style="color: #48A9A6;" class="text-center"><h3>DOCTOR LOG IN</h3></div>
 
      <br>
 
      <div id="container" class=" mx-auto" >
 
        <br>
 
          <div class="text-center">
 
              <lable>Username</lable>
 
               <br>
 
              <input type="text" class="rounded-pill ps-2" style="width:60%;">
 
 
          </div>
 
          <br>
 
   
 
          <div class="text-center">
 
              <lable>Password</lable> <br>
 
              <input type="password" class="rounded-pill ps-2" style="width:60%;">
 
             
 
          </div>
 
          <br>
 
   
 
          <div class="text-center">
 
            <router-link to="/doctor-profile" class="text-light"><button class="btn text-light" style="background-color: #2B3467;">LOGIN</button></router-link>
 
         
 
        </div>
 
 
 
       
 
   
 
      </div>
 
    </div>
 
  </template>
 
   
 
  <script>
 
    export default {
 
      name: "DoctorLogin",
 
 
 
    }
 
  </script>
 
   
 
  <style scoped>
 
    #container{
 
        width:40%;
 
        /* height: 400px; */
 
        border-radius: 20px;
 
        background-color: #F2E9C9;
  /*
        position: absolute;
 
        top: 50%;
 
        left: 50%;
 
        transform: translate(-50%, -50%); */
 
        padding: 10px;
 
        box-shadow: 5px 5px 5px rgb(126, 127, 128);
 
        color: #2B3467;
 
    };
    a{
      text-decoration: none;
    }
 
  </style>