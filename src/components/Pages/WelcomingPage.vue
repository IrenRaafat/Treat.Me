<template>
    <div id="container">
        <br>

        <div style="color: #2B3467;" class="text-center"><h3>We’re Waiting for You, Clara!</h3></div>

        <div class="text-center">
            <h6 style="color:#48A9A6;">Thursday, 20th of November 2026</h6>
        </div>

        <div class="text-center">
            <h6 style="color:#48A9A6;">5:00PM </h6>
        </div>
        <br>

        <div class="text-center">
            <h5>You will be contacted shortly by the clinic on your registered phone number.</h5>
        </div>
        <div class="text-center">
            <h5>You’ll be required to pay with cash upon arrival. Please</h5>
        </div>

        <div class="text-center">
            <h5>make sure to be there on time!</h5>
        </div>      
        <br>
        <br>

        <div class="text-center">
            <button type="button" class="btn text-light" style="background-color: #2B3467;"><a href="/MyBookings" class="text-light">Done</a></button>
        </div>
        <br>

        <div class="text-center">
            <h5><a href="#">Wanna cancel?</a></h5>
        </div>
    </div>
</template>

<script>
    export default {
        name:'WelcomingPage'
    }
</script>

<style scoped>
    #container{
        width:50%;
        height: 60%;
        border-radius: 20px;
        background-color: #F2E9C9;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        box-shadow: 5px 5px 5px rgb(126, 127, 128);
    };
</style>