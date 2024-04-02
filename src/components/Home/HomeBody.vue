<template>
    <div>
        <Body id="body">
        <div class=" row mx-auto my-5 ">
            <div class="col-sm-12 col-md-6 col-lg-6">
                <a class=" ms-auto "><img usemap="#mymap" src="../../assets/body3.jpg" class="ms-auto" alt=""></a>
         
            </div>
 
 
            <div class="col-sm-12 col-md-6 col-lg-6 m-auto mx-auto m-s-5">
       
               <div class="row  doctors mx-auto mt-sm-5">  
                 <router-link to="/doctors"><h4 class="text-center">Doctors</h4></router-link>
       
                    <div id="carouselExampleControls" class="carousel slide position-relative" data-bs-ride="carousel">
                        <div v-for="doc in docs" :key="doc.id" class="carousel-inner">
                            <div v-if="doc.id==1" class="carousel-item active ">
                                <div class="card1 pt-2  col-sm-12 mb-2 shadow pb-3 pe-3 mb-3 bg-body rounded-3 w-50 mx-auto" style="background-color: #FFFDDO;">
                                    <img :src="doc.image" class="card-img-top  mx-auto d-block mt-2 rounded-circle start-50" alt="">
                                    <br>
                                    <h6 class="text-center">{{ doc.name }}</h6>
                                    <h6 class="text-center" style="color: #48A9A6;">{{ doc.spe }}</h6>
                                   
                                    <div class="rate">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                       
                                    </div>
                                    <br>
                                    <br>
                                   
                                    <div class="position-relative">
                                        <router-link class="position-absolute bottom-0 end-0 " :to="`/doctors/doctordetails/${doc.id}`">Read more..</router-link>
                                    </div>
                                </div>
                            </div>
                            <!-- <div v-else class="carousel-item  col-lg-4 col-md-6 col-sm-12">
                                <div class="card1 h-auto col-lg-4 col-md-6 col-sm-12 mb-2 shadow pb-3 pe-3 mb-3 bg-body rounded-3 w-50 mx-auto" style="background-color: #FFFDDO;">
                                    <img :src="doc.image" class="card-img-top  mx-auto d-block mt-2 pt-2 rounded-circle start-50" alt="">
                                    <br>
                                    <h6 class="text-center">{{ doc.name }}</h6>
                                    <h6 class="text-center" style="color: #48A9A6;">{{ doc.spe }}</h6>
                                    <div  class="rate">
                                        <svg v-if="doc.rate>=1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg>
                                        <svg v-if="doc.rate>=2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg><svg v-if="doc.rate>=3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg><svg v-if="doc.rate>=4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg>
                                        <svg v-if="doc.rate>=5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="position-relative">
                                        <router-link class="position-absolute bottom-0 end-0 " :to="`/doctors/doctordetails/${doc.id}`">Read more..</router-link>
                                    </div>
                                </div>
                            </div> -->
                           
 
                        </div>
                        <button class="carousel-control-prev position-absolute " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next position-absolute" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>  
 
 
                <div class="row  blogs mx-auto">
                    <router-link to="/blogs"><h4 class="text-center">Blogs</h4></router-link>
                    <div  id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div v-for="blog in blogs" :key="blog.id" class="carousel-inner">
                            <div v-if="blog.id==1" class="carousel-item active ">
                                <div  class="card1  col-lg-4 col-md-6 col-sm-12 mb-2 shadow p-3 mb-3 bg-body rounded-3 w-50 mx-auto" style="background-color: #FFFDDO;">
                                    <img :src="blog.imgCard" class="card-img-top   mx-auto d-block  rounded-circle start-50" alt="">
                                    <br>
                                    <h6 class="text-center">{{ blog.name }}</h6>
                                    <h6 class="text-center" style="color: #48A9A6;">{{ blog.overviewCard }}</h6>
                                    <br>
                                    <br>
                                    <div class="position-relative">
                                        <router-link class="position-absolute bottom-0 end-0 " :to="`/blogs/blogdetails/${blog.id}`">Read more..</router-link>
                                    </div>
                                </div>
                            </div>
                            <!-- <div v-else  class="carousel-item ">
                                <div class="card1 h-auto col-lg-4 col-md-6 col-sm-12 mb-2 shadow p-3 mb-3 bg-body rounded-3 w-50 mx-auto" style="background-color: #FFFDDO;">
                                    <img :src="blog.imgCard" class="card-img-top  mx-auto d-block  rounded-circle start-50" alt="">
                                    <br>
                                    <h6 class="text-center">{{ blog.name }}</h6>
                                    <h6 class="text-center" style="color: #48A9A6;">{{ blog.overviewCard }}</h6>
                                    <br>
                                    <br>
                                    <div class="position-relative">
                                        <router-link class="position-absolute bottom-0 end-0 " :to="`/blogs/blogdetails/${blog.id}`">Read more..</router-link>
                                    </div>
                                </div>
                            </div> -->
                       
 
 
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next position-absolute" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                   
                    </div>
                </div>
 
               <div class="row  drinks mx-auto">
                    <router-link to="/drinks"><h4 class="text-center">Drinks</h4></router-link>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div v-for="drink in drinks" :key="drink.id" class="carousel-inner">
                            <div v-if="drink.id==1" class="carousel-item active">
                             
                                <div class="card1 h-auto col-lg-4 col-md-6 col-sm-12 mb-2 shadow p-3 mb-3 bg-body rounded-3 w-50 mx-auto" style="background-color: #FFFDDO;">
                                    <img :src="drink.image" class="card-img-top  mx-auto d-block  rounded-circle start-50" alt="">
                                    <br>
                                    <h6 class="text-center">{{ drink.name }}</h6>
                                    <h6 class="text-center" style="color: #48A9A6;">{{ drink.diseases }}</h6>
                                    <br>
                                    <br>
                                    <div class="position-relative">
                                        <!-- <router-link class="position-absolute bottom-0 end-0 " :to="`/blogs/blogdetails/${blog.id}`">Read more..</router-link> -->
                                    </div>
                                </div>
                             
                            </div>
                            <!-- <div v-else class="carousel-item">
                               
                                <div class="card1 h-auto col-lg-4 col-md-6 col-sm-12 mb-2 shadow p-3 mb-3 bg-body rounded-3 w-50 mx-auto" style="background-color: #FFFDDO;">
                                    <img :src="drink.image" class="card-img-top  mx-auto d-block  rounded-circle start-50" alt="">
                                    <br>
                                    <h6 class="text-center">{{ drink.name }}</h6>
                                    <h6 class="text-center" style="color: #48A9A6;">{{ drink.diseases }}</h6>
                                    <br>
                                    <br>
                                    <div class="position-relative">
                                        <router-link class="position-absolute bottom-0 end-0 " :to="`/blogs/blogdetails/${blog.id}`">Read more..</router-link>
                                    </div>
                                </div>
                               
                            </div> -->
                           
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <!-- <div id="carouselExampleControls" class="carousel slide position-relative" data-bs-ride="carousel">
                        <div v-for="doc in docs" :key="doc.id" class="carousel-inner">
                            <div v-if="doc.id==1" class="carousel-item active ">
                                <div class="card1 pt-2  col-sm-12 mb-2 shadow pb-3 pe-3 mb-3 bg-body rounded-3 w-50 mx-auto" style="background-color: #FFFDDO;">
                                    <img :src="doc.image" class="card-img-top  mx-auto d-block mt-2 rounded-circle start-50" alt="">
                                    <br>
                                    <h6 class="text-center">{{ doc.name }}</h6>
                                    <h6 class="text-center" style="color: #48A9A6;">{{ doc.spe }}</h6>
                                   
                                    <div class="rate">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                       
                                    </div>
                                    <br>
                                    <br>
                                   
                                    <div class="position-relative">
                                        <router-link class="position-absolute bottom-0 end-0 " :to="`/doctors/doctordetails/${doc.id}`">Read more..</router-link>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="carousel-item  col-lg-4 col-md-6 col-sm-12">
                                <div class="card1 h-auto col-lg-4 col-md-6 col-sm-12 mb-2 shadow pb-3 pe-3 mb-3 bg-body rounded-3 w-50 mx-auto" style="background-color: #FFFDDO;">
                                    <img :src="doc.image" class="card-img-top  mx-auto d-block mt-2 pt-2 rounded-circle start-50" alt="">
                                    <br>
                                    <h6 class="text-center">{{ doc.name }}</h6>
                                    <h6 class="text-center" style="color: #48A9A6;">{{ doc.spe }}</h6>
                                    <div  class="rate">
                                        <svg v-if="doc.rate>=1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg>
                                        <svg v-if="doc.rate>=2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg><svg v-if="doc.rate>=3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg><svg v-if="doc.rate>=4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg>
                                        <svg v-if="doc.rate>=5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                        </svg>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="position-relative">
                                        <router-link class="position-absolute bottom-0 end-0 " :to="`/doctors/doctordetails/${doc.id}`">Read more..</router-link>
                                    </div>
                                </div>
                            </div>
                           
 
                        </div>
                        <button class="carousel-control-prev position-absolute " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next position-absolute" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div> -->
                </div>
               
              <!-- /////////   -->
             
            </div>    
        </div>
       
   
        <map name="mymap"  >
            <area class="a1" shape="circle" coords="451,42,41" href="/home/nervous-system" alt="Nervous System" title="Nervous System">
            <area shape="rect" coords="117,62,200,137" href="/home/circulatory-system" alt="" title="Circulatory System">
            <area shape="circle" coords="486,168,41" href="/home/immune-system" alt="Immune System" title="Immune System">
            <area shape="circle" coords="78,233,41" href="/home/respiratory-system" alt="Respiratory System" title="Respiratory System">
            <area shape="circle" coords="518,293,41" href="/home/digestive-system" alt="Digestive System" title="Digestive System">
            <area shape="circle" coords="42,376,41" href="/home/urinary-tract" alt="Urinary Tract" title="Urinary Tract">
            <area shape="circle" coords="525,424,41" href="/home/lymphatic-system" alt="Lymphatic System" title="Lymphatic System">
            <area shape="circle" coords="46,526,41" href="/home/reproductive-system" alt="Reproductive System" title="Reproductive System">
            <area shape="circle" coords="531,558,41" href="/home/endocrine-system" alt="Endocrine System" title="Endocrine System">
            <area shape="circle" coords="94,674,41" href="/home/musculoskeletal-system" alt="Musculoskeletal System" title="Musculoskeletal System">
            <area shape="circle" coords="469,687,41" href="/home/Integumentary-system" alt="Integumentary System" title="Integumentary System">
 
   
        </map>
    </Body>
   
</div>
</template>
 
<script>
import axios from 'axios'
    export default {
        name:'HomeBody',
        data(){
            return{
                // id:''
                docs:[],
                blogs:[],
                drinks:[],
               
            }
       
        } ,
        created(){
            // this.id = this.$route.params.id
            this.getAllDocs(),
            this.getAllBlogs(),
            this.getAllDrinks()
        },
        methods:{
            getAllDocs(){
                axios.get('http://localhost:3000/doctors')
                .then((res)=>this.docs=res.data)
                .catch(err=>console.log(err))
            },
 
            getAllBlogs(){
                axios.get('http://localhost:4000/Blogs')
                .then((res)=>this.blogs=res.data)
                .catch(err=>console.log(err))
            },
 
            getAllDrinks(){
                axios.get('http://localhost:4000/drinks')
                .then((res)=>this.drinks=res.data)
                .catch(err=>console.log(err))
            }
        }
    }
</script>
 
<style scoped>
.body{
    width: 80%;
}
img{
    max-width: 100%;
}
#body{
    margin-top: 100px;
}
.card1{
    background-color: #F2E9C9 !important;
}
 
.card1 img{
    width: 20%;
    height: 20%;
}
/* area[shape="circle"]:hover
{border:2px solid #16c1f5; }
.a1:hover{
    border:2px solid #16c1f5;
 
} */
svg{
    color: #c59b08;
}
.carousel-control-prev{
    left:25% !important;
}
 
.carousel-control-next{
    right: 25% !important;
}
/*ssssssssssssssssssssssss/*/
h4{
    text-decoration: none;
    color:#48A9A6 ;
}
a{
    text-decoration: none;
}
.carousel-control-prev-icon{
    color: black;
}
</style>