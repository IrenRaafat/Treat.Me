<template>
  <div class="mt-5 m-auto mb-5 ms-auto">
    <br />

    <div style="color: #48a9a6" class="text-center">
      <h3>CREATE ACCOUNT</h3>
    </div>

    <br />
    <div id="container" class="mx-auto">
      <br />

      <div class="text-center">
        <label for="" class="form-label">User Name</label>

        <br />

        <input
          type="text"
          class="rounded-pill ps-2"
          style="width: 60%"
          v-model="userName"
          required
        />
      </div>

      <br />

      <div class="text-center">
        <lable>Email</lable>

        <br />

        <input
          type="text"
          class="rounded-pill ps-2"
          style="width: 60%"
          v-model="email"
          required
        />

        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <br />

      <div class="text-center">
        <lable>Password</lable>

        <br />

        <input
          type="password"
          class="rounded-pill ps-2"
          style="width: 60%"
          v-model="password"
          required
        />
      </div>

      <br />

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Birth Date</label>

        <input
          type="date"
          class="form-control mx-auto rounded-pill"
          id="exampleInputEmail1"
          placeholder="dd/mm/yyyy"
          aria-describedby="emailHelp"
          style="width: 60%"
          v-model="BD"
          required
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Do you suffer from chronic diseases?</label
        >

        <select
          class="form-select mx-auto rounded-pill"
          aria-label="Default select example"
          style="width: 60%"
          v-model="diseases"
          required
        >
          <option value="yes">Yes</option>

          <option value="no">No</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >What's your blood type?</label
        >

        <select
          class="form-select mx-auto rounded-pill"
          aria-label="Default select example"
          style="width: 60%"
          v-model="blood"
          required
        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="null">I don't know</option>
        </select>
      </div>

      <div class="row mb-3">
        <div class="col">
          <label for="exampleInputEmail1" class="form-label">Gender</label>
        </div>

        <div class="col">
          <div class="form-check">
            <input
              class="form-check-input ps-2"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              v-model="gender"
              value="female"
              required
            />

            <label class="form-check-label" for="flexRadioDefault1"
              >Female</label
            >
          </div>
        </div>

        <div class="col">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="male"
              v-model="gender"
              required
            />

            <label class="form-check-label" for="flexRadioDefault2">Male</label>
          </div>
        </div>
      </div>
      <p>{{ errorMsg }}</p>
      <div class="text-center text-light">
        <button
          @click="register()"
          type="button"
          class="btn text-light"
          style="background-color: #2b3467"
        >
          <!-- <router-link to="/ProfileSaved" class="text-light"> -->
          CREATE
          <!-- </router-link> -->
        </button>

        <div id="emailHelp" class="form-text">
          <a href="/">CRETURN TO HOME</a>
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
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";

export default {
  name: "SignUpPage",
  data() {
    return {
      userName: "",
      password: "",
      email: "",
      gender: "",
      BD: "",
      diseases: "",
      blood: "",
      errorMsg: "",
      role: "",
      user: {},
    };
  },
  inject: ["changeLogin"],
  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          // data.user.displayName = this.userName;
          console.log(data);
          const user = {
            id: data.user.uid,
            userName: this.userName,
            email: this.email,
            gender: this.gender,
            BD: this.BD,
            diseases: this.diseases,
            blood: this.blood,
            booking: [],
            role: "user",
          };

          axios
            .post("http://localhost:3000/users", user)
            .then((res) => {
              console.log(res.data);
              // localStorage.setItem("user", JSON.stringify(user));
              // this.changeLogin();
              // this.changeLogin()
              // changeLogin
              localStorage.setItem("user", JSON.stringify(this.user));
              localStorage.setItem("loggedIn", JSON.stringify(true));
            })
            .catch((err) => console.log(err.message));
        })
        .catch((error) => {
          // console.log(error.code);
          if (error.code == "auth/email-already-in-use") {
            this.errorMsg = "Email is Used";
          }
        });
      this.$router.push("/Login");
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
        .catch((error) => {
          // console.log(error);
          if (error.code == "auth/email-already-in-use") {
            this.errorMsg = "Email in used";
          }
        });
    },
  },
};
</script>

<style scoped>
#container {
  width: 40%;

  /* height: 400px; */

  border-radius: 20px;

  background-color: #f2e9c9;

  /* position: absolute;

 

      top: 50%;

 

      left: 50%;

 

      transform: translate(-50%, -50%); */

  padding: 10px;

  box-shadow: 5px 5px 5px rgb(126, 127, 128);

  color: #2b3467;
}
</style>
