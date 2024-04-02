<template>
    <div>
        <h2 class="text-center p-2" style="color: #2b3467;">Add Doctor</h2>
        <form action="" @submit.prevent="register" class="p-2">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="title" v-model="name">
                <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="title" v-model="email">
                <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingInput" placeholder="password" v-model="password">
                <label for="floatingInput">Password</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="spe">
                <label for="floatingInput">Specialty</label>
            </div>
            
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="des">
                <label for="floatingInput">Description</label>
            </div>
            
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="location">
                <label for="floatingInput">Location</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="gender">
                <label for="floatingInput">Gender</label>
            </div>
            
            
            
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="rate">
                <label for="floatingInput">Rate</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="image" v-model="image">
                <label for="floatingInput">Doctor Image</label>
            </div>
            <button type="submit"
          class="btn text-light"
          style="background-color: #2b3467">Submit</button>
        </form>
        <br>
    </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
import axios from "axios";

    export default {
        name:'AddDoctor',
        data(){
            return{
                name:'',
                email:'',
                password:'',
                rate:'',
                spe: '',
                image: "https://i.postimg.cc/J0hgqcRR/g1.jpg",
                gender: '',
                des: '',
                location: '',
                // formValue:{
                //     name:'',
                //     email:'',
                //     password:'',
                //     rate:'',
                //     spe: '',
                //     image: "https://i.postimg.cc/J0hgqcRR/g1.jpg",
                //     gender: '',
                //     des: '',
                //     location: ''
                // },
                doctor:{}
            }
        },
        // methods:{
            // handelSubmit(){
            //     axios.post("http://localhost:3000/doctors", this.formValue)
            //     .then((res)=> console.log(res))
            //     .catch((err)=> console.log(err))
            //     this.$router.push("/AllDoctors")
            // },
       
        // }
        methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          // data.user.displayName = this.userName;
          console.log(data);
          const user = {
            id: data.user.uid,
            name: this.name,
            email: this.email,
            // password: this.password,
            rate: this.rate,
            spe: this.spe,
            image: this.image,
            gender: this.gender,
            des: this.des,
            location: this.location,
            booking: [],
            role: "doctor",
          };
          axios
            .post("http://localhost:3000/allDoctors", user)
            .then((res) => {
              console.log(res.data);
            //   localStorage.setItem("user", JSON.stringify(this.user));
            //   localStorage.setItem("loggedIn", JSON.stringify(true));
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => {
          // console.log(error.code);
          if (error.code == "auth/email-already-in-use") {
            this.errorMsg = "Email is Used";
          }
        });
    //   this.$router.push("/Login");
    },

    // signInwithGoogle() {
    //   const provider = new GoogleAuthProvider();
    //   signInWithPopup(getAuth(), provider)
    //     .then((result) => {
    //       console.log(result);
    //       const user = result.user;
    //       axios
    //         .post("http://localhost:3000/allDoctors", user)
    //         .then((res) => console.log(res.data))
    //         .catch((err) => console.log(err.message));
    //       console.log(user);
    //     })
    //     .catch((error) => {
    //       // console.log(error);
    //       if (error.code == "auth/email-already-in-use") {
    //         this.errorMsg = "Email in used";
    //       }
    //     });
    // },
  },
    }
</script>

<style scoped>

</style>