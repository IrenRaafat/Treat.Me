<template>
    <div id="container">
        <br>
        <br>

        <div style="color: #2B3467;" class="text-center"><h3>Cancellation Unsuccessful.</h3></div>
        <br>

        <div class="text-center">
            <h5>Cancellations are available for 2 days after the booking or at least</h5>
        </div>

        <div class="text-center">
            <h5>24 hours before the appointment.</h5>
        </div>
        <br>
        <br>

        <div class="text-center">
            <h5>Please contact the clinic for further information.</h5>
        </div>
        <br>
        <br>

        <div class="text-center">
            <button type="button" class="btn text-light" style="background-color: #2B3467;">Done</button>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'UnScuessfulCancel'
    }
</script>

<style scoped>
    #container{
        width:800px;
        height: 400px;
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