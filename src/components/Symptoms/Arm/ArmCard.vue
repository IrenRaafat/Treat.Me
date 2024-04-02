<template>
    <div class="d-flex justify-content-start g- position-relative" id="card">
      <div class="col-md-4 mb-md-0 p-md-3 ps-md-2">
        <img src="https://i.postimg.cc/cJqWVrD7/armFf.jpg" alt="ay7agea" />
      </div>
      <div class="col-md-8 p-4 ps-md-5 text-center">
        <h3 class="mt-0">Arm</h3>
        <p class="card-text" style="font-size: 12px">
          Part of the musculoskeletal and nervous system
        </p>
        <router-link to="/ArmCheck" style="font-size: 12px"
          >Show Symptoms...
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </template>
   
  <script>
  export default {
    name: "ArmCard",
  };
  </script>
   
  <style scoped>
  #card {
    background-color: #f2e9c9;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgb(126, 127, 128);
    border: solid #48a9a6 2px;
    width: 80%;
  }
   
  h5 {
    color: #48a9a6;
  }
   
  img {
    border-radius: 50%;
    width: 160%;
    height: 100%;
  }
  </style>