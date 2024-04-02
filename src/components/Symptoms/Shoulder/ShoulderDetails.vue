<template>
    <div class="container" style="text-align: start">
      <h2 class="text-center p-4">{{ shoulder.name }}</h2>
  
      <div class="row mt-3 pt-3">
        <div class="col-12">
          <h3>Overview</h3>
          <p>{{ shoulder.overview }}</p>
        </div>
      </div>
  
      <div class="row mt-3 pt-3">
        <div class="col-sm-12 col-md-5 col-lg-6">
          <img :src="shoulder.img1" alt="" />
        </div>
        <div class="col-sm-12 col-md-7 col-lg-6">
          <h3>Recovery Period</h3>
          <p>{{ shoulder.recoveryPeriod }}</p>
        </div>
      </div>
  
      <div class="row mt-3 pt-3">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <h3>Symptoms</h3>
          <p>{{ shoulder.Symptoms }}</p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
          <img :src="shoulder.img2" alt="" />
        </div>
        <h3>
          Treat.Me offers you Doctors that will help
          <router-link to="/doctors"> Treat.Me Doctors </router-link>
        </h3>
      </div>
      <br />
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "ShoulderDetails",
    data() {
      return {
        id: "",
        shoulder: {},
      };
    },
    created() {
      this.getBlogById();
    },
    methods: {
      getBlogById() {
        this.id = this.$route.params.id;
        axios
          .get(`http://localhost:5000/shoulder/${this.id}`)
          .then((res) => (this.shoulder = res.data))
          .catch((err) => console.log(err));
      },
    },
  };
  </script>
  
  <style scoped>
  img {
    max-width: 80%;
    max-height: 80%;
    border-radius: 3%;
  }
  h2,
  h4 {
    color: #48a9a6;
  }
  h3 {
    color: #2b3467;
  }
  </style>
  