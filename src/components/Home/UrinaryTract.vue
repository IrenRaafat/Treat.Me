<template>
    <div class="container">
        <div class="m-5">
        <div class="row imag m-auto p-auto py-5">
            <img  src="../../assets/system-image/urinary-tract.jpg" class="w-10 h-10" alt="">
        </div>
        <div class="row">
            <h3>Urinary Tract</h3>
        </div>
        <div class="row">
            <p>
                The urinary tract is the body’s drainage system for removing urine, which is made up of wastes and extra fluid. For normal urination to occur, all body parts in the urinary tract need to work together, and in the correct order.
                The urinary tract includes two kidneys, two ureters, a bladder, and a urethra.
            </p>
            <h4>Organ Organs</h4>
            <div class=" ">
           
                <ul class="">
                <li>Kidney</li>
                <li>bladder</li>
                <li>Ureter</li>
                </ul>
            </div>
        
            <router-link to="/home"><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
              </svg> Back to Home</p></router-link>
        </div>

    </div>
    </div>
</template>

<script>
    export default {
        name:'UrinaryTract'
    }
</script>

<style scoped>

.imag{
    width: 35%;
    height: 35%;
}
h3 ,h4{
    color:#3a4793
}
ul{
    list-style-position: inside;
    
}
</style>