<template>
    <div>
      <br />
      <h2 class="text-center" style="color: #2b3467">Symptoms Results of Shoulder</h2>
      <br />
      <br />
  
      <div class="row grid gap-4 col-12 ps-5 mb-5">
        <div class="col-3" id="check">
          <h3 class="ps-3 text-start" style="color: #2b3467">
            Select what you feel
          </h3>
          <br />
          <div class="div ps-3 text-start">
            <div class="form-check mb-3" id="box">
              <input
                class="form-check-input mb-2"
                type="checkbox"
                id="gridCheck1"
                value="Disturb sleep, Be accompanied by arm weakness and Make it difficult to comb your hair or reach behind your back"
                v-model="input"
              />
              <label class="form-check-label" for="gridCheck1"
                >Disturb sleep, Be accompanied by arm weakness and Make it difficult to comb your hair or reach behind your back.</label
              >
            </div>
  
            <div class="form-check mb-3" id="box">
              <input
                class="form-check-input mb-2"
                type="checkbox"
                id="gridCheck4"
                value="Pain when lifting your arm, lowering your arm from a raised position or when reaching, Pain and tenderness in the front of your shoulder and Pain when your arms are extended above your head"
                v-model="input"
              />
              <label class="form-check-label" for="gridCheck1"
                >Pain when lifting your arm, lowering your arm from a raised position or when reaching, Pain and tenderness in the front of your shoulder and Pain when your arms are extended above your head.</label
              >
            </div>
  
            <div class="form-check mb-3" id="box">
              <input
                class="form-check-input mb-2"
                type="checkbox"
                id="gridCheck5"
                value="Intense pain, Swelling or bruising and A visibly deformed or out-of-place shoulder"
                v-model="input"
              />
              <label class="form-check-label" for="gridCheck1"
                >Intense pain, Swelling or bruising and A visibly deformed or out-of-place shoulder.</label
              >
            </div>
  
            <div class="form-check mb-3" id="box">
              <input
                class="form-check-input mb-2"
                type="checkbox"
                id="gridCheck6"
                value="Pain at the front of the joint, Swelling that develops rapidly and Inability to move the shoulder"
                v-model="input"
              />
              <label class="form-check-label" for="gridCheck1"
                >Pain at the front of the joint, Swelling that develops rapidly and Inability to move the shoulder.</label
              >
            </div>
  
            <div class="form-check mb-3" id="box">
              <input
                class="form-check-input mb-2"
                type="checkbox"
                id="gridCheck7"
                value="pain radiating to the neck or shoulder, Bruising and Swelling"
                v-model="input"
              />
              <label class="form-check-label" for="gridCheck1"
                >pain radiating to the neck or shoulder, Bruising and Swelling.</label
              >
            </div>
          </div>
        </div>
  
        <div class="col-1"></div>
  
        <div class="col-7 pt-1 gab-5">
          <div v-for="shoulder in handelSearch" :key="shoulder.id">
            <div class="card mb-3 container">
              <div class="row g-0">
                <div class="col-md-4 mt-5">
                  <img :src="shoulder.CardImg" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style="color: #48a9a6">
                      {{ shoulder.name }}
                    </h5>
                    <p class="card-text">{{ shoulder.overview }}</p>
                    <br />
                    <div class="position-relative">
                      <router-link
                        class="bottom-0 end-0 text-center"
                        :to="`/ShoulderDetails/${shoulder.id}`"
                        >Discover more..</router-link
                      >
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "ShoulderCheck",
  
    data() {
      return {
        // id:''
  
        shoulder: [],
        input: [],
      };
    },
    created() {
      this.getAllBlogs();
    },
    methods: {
      getAllBlogs() {
        axios
          .get("http://localhost:5000/shoulder")
          .then((res) => (this.shoulder = res.data))
          .catch((err) => console.log(err));
      },
    },
  
    computed: {
      handelSearch() {
        if (this.input.length === 0) {
          return [];
        } else {
          return this.shoulder.filter(
            (elem) => this.input.indexOf(elem.chcekListSymptoms1) !== -1
          );
        }
      },
    },
  };
  </script>
  
  <style scoped>
  #check {
    width: 25%;
    height: 30%;
    background-color: #f2e9c9;
    border-radius: 10px;
    padding-top: 15px;
    padding-left: 15px;
    font-size: 20px;
    box-shadow: 5px 5px 5px rgb(126, 127, 128);
    border: solid #48a9a6 1px;
  }
  
  img {
    border-radius: 3%;
    width: 70%;
    height: 60%;
  }
  
  /* img{
          width: 50%;
          height: 10%;
          padding-left: 15px;
          border-radius: 50%;
          -webkit-transition:all .9s ease; 
          -moz-transition:all .9s ease; 
          -o-transition:all .9s ease;
          -ms-transition:all .9s ease; 
        } */
  
  /* img:hover{
          opacity: 0.8;
          -webkit-transform:scale(1.15);
          -moz-transform:scale(1.15);
          -ms-transform:scale(1.15);
          -o-transform:scale(1.15);
          transform:scale(1.15);
        } */
  .container {
    background-color: #f2e9c9;
    border-radius: 10px;
    border-color: solid #48a9a6;
  
    margin: 20px;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
    border: solid #48a9a6 1px;
  }
  
  .container:hover {
    box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    margin-top: 50px;
  }
  </style>
  