<template>
  <div class="container" style="text-align: start">
    <h2 class="text-center p-4">{{ leg.name }}</h2>

    <div class="row mt-3 pt-3">
      <div class="col-12">
        <h3>Overview</h3>
        <p>{{ leg.overview }}</p>
      </div>
    </div>

    <div class="row mt-3 pt-3">
      <div class="col-sm-12 col-md-5 col-lg-6">
        <img :src="leg.img2" alt="" />
      </div>
      <div class="col-sm-12 col-md-7 col-lg-6">
        <h3>Recovery Period</h3>
        <p>{{ leg.recoveryPeriod }}</p>
      </div>
    </div>

    <div class="row mt-3 pt-3">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <h3>Symptoms</h3>
        <p>{{ leg.Symptoms }}</p>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <img :src="leg.img1" alt="" />
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
  name: "LegsDetails",
  data() {
    return {
      id: "",
      leg: {},
    };
  },
  created() {
    this.getBlogById();
  },
  methods: {
    getBlogById() {
      this.id = this.$route.params.id;
      axios
        .get(`http://localhost:5000/legs/${this.id}`)
        .then((res) => (this.leg = res.data))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
img {
  width: 80%;
  height: 80%;
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
