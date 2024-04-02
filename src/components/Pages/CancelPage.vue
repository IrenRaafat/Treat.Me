<template>
    <div id="container">
        <br>
        <br>

        <div style="color: #2B3467;" class="text-center"><h3>Verify your information</h3></div>
        <br>

        <div class="text-center">
            Username/Email <br>
            <input type="text" class="rounded-pill" style="width:60%;">
        </div>
        <br>

        <div class="text-center">
            Password <br>
            <input type="text" class="rounded-pill" style="width:60%;">
        </div>
        <br>

        <div class="text-center">
            <button type="button" class="btn text-light" style="background-color: #2B3467;"><a href="/UnScuessfulCancel" class="text-light">Cancel my Appointment</a></button>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'CancelPage'
    }
</script>

<style scoped>
    #container{
        width:50%;
        height: 50%;
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