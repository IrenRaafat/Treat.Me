<template>
  <div>
      <!-- profile card -->
  <div class="col-12 d-flex flex-column align-items-center">
    <img
      class="userImg col-2 rounded-circle mt-3"
      src="../../assets/images.jpg"
    />
    <h1 class="m-3" style="color: #1C315E;">Clara Mohammad</h1>
    <h4 style="color: #48A9A6;">@clara21</h4>
  </div>

  <!-- buttons -->
  <div class="d-flex justify-content-center">
    <!-- <button class="secondaryButton"><a href="/AdditionalInformationPage">Edit Profile</a></button> -->
    <router-link to="/" class="text-light">
    <button class="primaryButton">
        Sign Out
      </button>
      </router-link>
  </div>

  <!-- History&Saved -->
  <div class="d-flex justify-content-center">
    <router-link to="/ProfileHistory" class="profileCategory highlight">History</router-link>
    <router-link to="/ProfileSaved" class="profileCategory">Saved</router-link>
  </div>

  <!-- Body -->
  <div class="body d-flex row col-12 justify-content-around">
    <!-- card -->
    <div class="card col-8">
      <!-- Date -->
      <h4 class="mb-5">Today</h4>
      <!-- progress bars and icons -->
      <div class="d-flex row">
        <div class="d-flex col-12 align-items-center">
          <!-- icon -->
          <div
            class="rounded-circle profileIcon mb-5 d-flex justify-content-center align-items-center"
          >
            <img
              src="../../assets/Migraine-and-asthma-management-with-Sahaja-Yoga.png"
              alt="headache"
              class="profileIConImg"
            />
          </div>

          <!-- bar -->
          <div class="col-8 mb-5">
            <div class="progress">
              <div
                class="progress-bar active"
                role="progressbar"
                aria-valuenow="  45"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%"
              >
                <span class="historyItem"><strong>Headache</strong></span>
              </div>
            </div>
          </div>

          <!-- delete -->
          <div class="col-2 d-flex justify-content-end align-self-start mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>

        <!-- icon -->
        <div class="d-flex col-12 align-items-center">
          <div
            class="rounded-circle profileIcon mb-5 d-flex justify-content-center align-items-center"
          >
            <img
              src="../../assets/3668104.jpg"
              alt="Fever"
              class="profileIConImg"
            />
          </div>

          <!-- bar -->
          <div class="col-8 mb-5">
            <div class="progress">
              <div
                class="progress-bar active"
                role="progressbar"
                aria-valuenow="  45"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 40%"
              >
                <span class="historyItem"><strong>Fever</strong></span>
              </div>
            </div>
          </div>

          <!-- delete -->
          <div class="col-2 d-flex justify-content-end align-self-start mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- Date -->
      <h4 class="mb-5">October 15th</h4>
      <!-- progress bars and icons -->
      <div class="d-flex row">
        <div class="d-flex col-12 align-items-center">
          <!-- icon -->
          <div
            class="rounded-circle profileIcon mb-5 d-flex justify-content-center align-items-center"
          >
            <img
              src="../../assets/Migraine-and-asthma-management-with-Sahaja-Yoga.png"
              alt="headache"
              class="profileIConImg"
            />
          </div>

          <!-- bar -->
          <div class="col-8 mb-5">
            <div class="progress">
              <div
                class="progress-bar active"
                role="progressbar"
                aria-valuenow="  45"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 45%"
              >
                <span class="historyItem"><strong>Headache</strong></span>
              </div>
            </div>
          </div>

          <!-- delete -->
          <div class="col-2 d-flex justify-content-end align-self-start mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>

          <!-- icon -->
        </div>
        <div class="d-flex col-12 align-items-center">
          <div
            class="rounded-circle profileIcon mb-5 d-flex justify-content-center align-items-center"
          >
            <img
              src="../../assets/3668104.jpg"
              alt="Fever"
              class="profileIConImg"
            />
          </div>

          <!-- bar -->
          <div class="col-8 mb-5">
            <div class="progress">
              <div
                class="progress-bar active"
                role="progressbar"
                aria-valuenow="  45"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%"
              >
                <span class="historyItem"><strong>Fever</strong></span>
              </div>
            </div>
          </div>

          <!-- delete -->
          <div class="col-2 d-flex justify-content-end align-self-start mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- manage -->
    <div class="row d-flex col-3 align-content-start">
      <!-- search bar -->
      <div class="col-12 mb-5">
        <div
          class="searchHistory d-flex justify-content-around align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
          <input
            type="text"
            class="form-control"
            placeholder="Search History..."
          />
        </div>
      </div>

      <!-- Manage History -->
      <div class="col-12 d-flex mb-3">
        <div class="d-flex justify-content-around">
          <div class="col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-briefcase"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </div>
          <a href="#" class="options highlight">Manage History</a>
        </div>
      </div>

      <!-- Delete All History -->

      <div class="col-12 d-flex">
        <div class="d-flex justify-content-around">
          <div class="col-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
              />
              <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
              />
            </svg>
          </div>
          <a href="/ProfileDeleteAll" class="options">Delete All History</a>
        </div>
      </div>
    </div>
  </div>
  <br>
  <br>
  </div>
</template>

<script>
  export default {
      name:'ProfileManageHistory'
  }
</script>

<style scoped>
  div {
      overflow: hidden;
    }
    .profileIConImg {
      height: 70px;
      width: 70px;
    }
    .card {
      border-radius: 20px;
      background-color: rgba(242, 233, 201, 1);
      padding: 50px;
    }
    .primaryButton {
      border: rgba(43, 52, 103, 1) 3px;
      border-radius: 24px;
      padding-left: 21px;
      padding-right: 21px;
      height: 60px;
      color: white;
      background-color: rgba(43, 52, 103, 1);
      font-size: 26px;
      margin: 10px;
    }
    .secondaryButton {
      border: rgba(72, 169, 166, 1) solid 5px;
      border-radius: 24px;
      padding-left: 21px;
      padding-right: 21px;
      height: 60px;
      color: rgba(69, 69, 69, 1);
      background-color: transparent;
      font-size: 26px;
      margin: 10px;
    }
    .userImg {
      width: 275px;
      height: 275px;
    }
    h1 {
      font-size: 36px;
    }
    h4 {
      font-size: 28px;
    }
    .profileCategory {
      font-size: 26px;
      margin: 25px;
      color: rgba(69, 69, 69, 1);
    }
    .profileCategory:hover {
      font-weight: bold;
      color: rgba(69, 69, 69, 1);
      text-decoration: none;
    }

    .highlight {
      border-bottom: 2px solid rgba(69, 69, 69, 1);
      font-weight: bold;
    }
    .cardImg {
      height: 200px;
      margin: 25px;
      margin-bottom: 0;
      overflow: hidden;
    }

    .searchHistory {
      padding: 20px;
      border: none;
    }

    .inputs {
      position: relative;
    }

    .form-control {
      border: none;
      height: 45px;
      border-radius: 0px;
      border-bottom: 1px solid rgba(69, 69, 69, 1);
    }

    .form-control:focus {
      color: #495057;
      background-color: #fff;
      border-color: #eee;
      outline: 0;
      box-shadow: none;
      border-bottom: 1px solid blue;
    }

    .form-control:focus {
      color: blue;
    }

    .inputs i {
      position: absolute;
      top: 14px;
      left: 4px;
      color: #b8b9bc;
    }

    .options {
      color: rgba(69, 69, 69, 1);
    }

    .options:hover {
      font-weight: bold;
      color: rgba(69, 69, 69, 1);
      text-decoration: none;
    }

    .progress {
      border-radius: 20px;
      height: 25px;
      background-color: rgba(43, 52, 103, 1);
    }
    .historyItem {
      text-transform: uppercase;
      margin-left: 10px;
      padding-left: 10px;
      padding-top: 2.5px;
      float: left;
      font-family: "Raleway", sans-serif;
      font-size: 1.1em;
    }

    .progress .progress-bar,
    .progress .progress-bar.progress-bar-default {
      background-color: rgba(72, 169, 166, 1);
      border-radius: 20px;
    }
</style>