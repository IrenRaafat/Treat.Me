<template>
  <div div class="mt-5 m-auto mb-5 ms-auto">
    <br />
    <div style="color: #48a9a6" class="text-center"><h3>LOG IN</h3></div>
    <br />
    <div id="container" class="mx-auto">
      <br />
      <div class="text-center">
        <p v-if="errorMsg" style="color: rgb(128, 29, 29);">{{ errorMsg }}</p>

        <lable>Username/Email</lable>
        <br />
        <input
          type="text"
          class="rounded-pill ps-2"
          style="width: 60%"
          v-model="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <br />

      <div class="text-center">
        <lable>Password</lable> <br />
        <input
          type="password"
          class="rounded-pill ps-2"
          style="width: 60%"
          v-model="password"
        />
        <!-- <div id="emailHelp" class="form-text">
          <router-link to="#">Forgot your password?</router-link>
        </div> -->
      </div>
      <br />


      <div class="text-center">
        <button
          @click="logIn()"
          type="button"
          class="btn text-light"
          style="background-color: #2b3467"
        >
          LOGIN
        </button>
        <div id="emailHelp" class="form-text">
          <router-link to="/SignUpPage">Create Account</router-link>
        </div>
      </div>
      <hr />
      <div class="text-center">
        <p>or Login using</p>
        <div>
          <svg
          @click="signInwithGoogle()"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
            />
          </svg>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";

export default {
  name: "LogInPage",
  data() {
    return {
      email: '',
      password: '',
      role:'',
      errorMsg: '',
      user:{}
    };
  },
  inject:["changeLogin"],
  methods: {
    logIn() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          this.errorMsg = "";
          axios.get(`http://localhost:3000/users/${data.user.uid}`).then((res)=>{
            this.user = res.data
            this.changeLogin()
            // changeLogin
            localStorage.setItem('user',JSON.stringify(this.user));
            localStorage.setItem('loggedIn',JSON.stringify(true));
            if (this.user.role == 'admin') {
              this.$router.push('/AdminProfile');
            }
            else if (this.user.role == 'doctor') {
              this.$router.push('/DoctoreDetaile');
            }
            else{
              this.$router.push('/ProfileSaved');
            }
          }).catch((err)=>{
            console.log(err);
              axios.get(`http://localhost:3000/allDoctors/${data.user.uid}`).then((res)=>{
              this.user = res.data
              this.changeLogin()
              // changeLogin
              localStorage.setItem('user',JSON.stringify(this.user));
              localStorage.setItem('loggedIn',JSON.stringify(true));
              if (this.user.role == 'admin') {
                this.$router.push('/AdminProfile');
              }
              else if (this.user.role == 'doctor') {
                this.$router.push(`/doctors/doctordetails/${this.user.id}`);
              }
              else{
                this.$router.push('/ProfileSaved');
              }
            })
          })
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMsg = "Invalid Email/Password";
              break;
            case "auth/user-not-found":
              this.errorMsg = "No account with this email was found";
              break;
            case "auth/wrong-password":
              this.errorMsg = "Invalid Email/Password";
              break;
            default:
              this.errorMsg = "Invalid Email/Password";
              break;
          }
        });
        // window.location.reload();
    },

    signInwithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result);
          const user = result.user;
          axios
            .post("http://localhost:3000/users", user)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message));
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#container {
  width: 40%;
  border-radius: 20px;
  background-color: #f2e9c9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  box-shadow: 5px 5px 5px rgb(126, 127, 128);
  color: #2b3467;
}
</style>
