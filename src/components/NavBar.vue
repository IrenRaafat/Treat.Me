<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top ">
        <div class="container ">
            <router-link to="/home" class=""><span class="t">T</span><span class="reat">reat.</span><span class="me">ME</span></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item mx-3">
                <router-link class="nav-link " aria-current="page" to="/home">Home</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link class="nav-link" to="/Blogs">Blogs</router-link>
              </li>
              <li class="nav-item mx-3" v-if="loggedIn">
                <router-link class="nav-link" to="/check-your-symptoms">Check Your Symtoms</router-link>
              </li>
              <li class="nav-item mx-3" v-if="!loggedIn">
                <router-link class="nav-link" to="/Login">Check Your Symtoms</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link class="nav-link" to="/doctors">Doctors</router-link>
              </li>
              <!-- <li class="nav-item mx-3" v-if="loggedIn">
                <router-link class="nav-link" to="/doctors">Doctors</router-link>
              </li>
              <li class="nav-item mx-3" v-if="!loggedIn">
                <router-link class="nav-link" to="/Login">Doctors</router-link>
              </li> -->
            </ul>
            
          </div>
          <div class="">
            <button class="btn me-3" type="submit" @click="move()" v-if="!loggedIn">
              <!-- <router-link to="/login" id="click"> -->
                LogIn/SignUp
              <!-- </router-link> -->
            </button> 
            <button class="btn" v-if="loggedIn" @click="logOut">
                Log Out
              </button>
            <!-- <router-link to="/login"><input type="button" class="Btn-signin px-2 mx-3" value="Log In/Sign Up" ></router-link> -->
            <router-link class="navbar-brand" to="/ProfileSaved" v-if="loggedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </router-link>
            <router-link class="navbar-brand" to="/Login" v-if="!loggedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </router-link>
          </div>
        </div>
      </nav>

    </div>
</template>

<script>
    export default {
      name: 'NavBar',

      methods:{
        move(){
          window.location.href = '/Login'
        },
        logOut(){
          localStorage.clear();
          this.changeLogin();
          this.$router.push('/')
        }
      },
      data(){
        return{
          // loggedIn : false,
        }
      },
      inject:["loggedIn","changeLogin"],
      created(){
        // this.loggedIn = JSON.parse(localStorage.getItem('loggedIn'))
      },
        
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Sofia Sans;
}
a{
    text-decoration: none;
    /* color: black; */
    color: rgb(231, 231, 231);
    
}
a .t{
    font-size: 25px;
    color:#2B3467;
    font-weight: 800;
}
.me{
    color: rgb(231, 231, 231);
    font-size:20px;
    font-weight: 500;
    background-color: #2B3467;
    border-radius: 5px;
    padding: 0 2px;
}
.reat{
    font-size: 19px;
}

svg{
    color: #2B3467;
}
li{
    font-size: 20px;

}
nav{
    background-color:#48A9A6;
    position: fixed;
}

button{
  color: rgb(231, 231, 231);
  background-color: transparent;
  border: solid rgb(231, 231, 231) 2px;
}

button:hover{
  color: #2B3467;
  background-color: rgb(231, 231, 231);
}

#click:hover{
  color: #2B3467;
}

</style>