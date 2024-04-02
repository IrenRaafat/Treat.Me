<template>
    <div>
        <main>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/landing1.jpg" class="d-block w-100 h-100 image-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h2>We’re Here For You</h2>
              <p>Because Your Health Matters The Most</p>
              <router-link to="/home"><input type="button" class="discover-btn px-3 py-1" value="Discover Treat.ME"></router-link>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/Capture.jpg" class="d-block w-100 h-100 image-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block m-b-5">
              <h2>Healthy Starts Here</h2>
              <p>Practical Naturopathy & Herbal Medicine</p>
              <router-link to="/home"><input type="button" class="discover-btn px-3 py-1" value="Discover Treat.ME"></router-link>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/Capture2.jpg" class="d-block w-100 h-100 image-fluid" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h2>Medical Services That
                You Can Trust 100%</h2>
              <p>Your Most Trusted Health Partner</p>
              <router-link to="/home"><input type="button" class="discover-btn  px-3 py-1" value="Discover Treat.ME"></router-link>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </main> 

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.carousel-inner .carousel-item img{
    height: 100vh;
}
main{
    margin-top: 50px;
}
.carousel-caption{
    margin-top: -200px;
    position: absolute;
    top: 70%;
}


.carousel-caption p{
    font-size: 20px;
}
.carousel-caption h2{
    font-size: 36px;
}
.carousel-item{
    position: relative;
}
.discover-btn{
    background-color: #2B3467;
    color: #fff;
    border: none;
    font-size: 18px;
}
.discover-btn:hover{
    background-color: #fff;
    border: 2px solid #2B3467;
    color: #2B3467;
   
}

</style>