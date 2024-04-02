<template>
    <div>
        <header>
       
       <div class="row header">
           <img src="../../assets/landing1.jpg" class="w-100 h-100" alt="">
           <div class="header-txt">
               <h2>Welcome to Treat.ME</h2>
               <a href="#body"><input type="button" class="discover-btn px-3 py-1" value="Discover Your Body"></a>
           </div>
       </div>
       
       </header>

    </div>
</template>

<script>

    export default {
        name:'HomeHeader',
        components:{


        }
        
    }
</script>


<style scoped>
.header{
    position: relative; 
    margin-top: 30px;
    
}
.header-txt{
    position: absolute;
    top:40%;
    left: 5%;
    width: 35%;
    
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