<template>
    <div>
        <h2 class="text-center p-2" style="color: #2b3467;">Add Blog</h2>
        <form action="" @submit.prevent="handelSubmit" class="p-2">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="title" v-model="formValue.name">
                <label for="floatingInput">Name</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="formValue.imgCard">
                <label for="floatingInput">Card Image</label>
            </div>
            
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="formValue.overviewCard">
                <label for="floatingInput">Overview</label>
            </div>
            
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="formValue.img1">
                <label for="floatingInput">Image1</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="formValue.header1">
                <label for="floatingInput">Header1</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="formValue.subHeader1">
                <label for="floatingInput">SubHeader1</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="formValue.answer11">
                <label for="floatingInput">Answer11</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="formValue.answer12">
                <label for="floatingInput">Answer12</label>
            </div>
            

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="formValue.img2">
                <label for="floatingInput">Image2</label>
            </div>
            
            
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="price" v-model="formValue.header2">
                <label for="floatingInput">Header2</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="image" v-model="formValue.subHeader2">
                <label for="floatingInput">SubHeader2</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="image" v-model="formValue.answer21">
                <label for="floatingInput">Answer21</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="image" v-model="formValue.answer22">
                <label for="floatingInput">Answer22</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="image" v-model="formValue.header3">
                <label for="floatingInput">Header3</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="image" v-model="formValue.subHeader3">
                <label for="floatingInput">SubHeader3</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="image" v-model="formValue.answer31">
                <label for="floatingInput">Answer31</label>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="image" v-model="formValue.answer32">
                <label for="floatingInput">Answer32</label>
            </div>

            <button type="submit"
          class="btn text-light"
          style="background-color: #2b3467">Submit</button>
        </form>
        <br>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name:'AddBlog',
        data(){
            return{
                formValue:{
                    name:'',
                    imgCard:'https://i.postimg.cc/wBY826pS/asthma-Card-Img.jpg',
                    overveiwCard:'',
                    img1:'https://i.postimg.cc/50DmBrB2/Asthma-Img1.jpg',
                    header1:'',
                    subHeader1:'',
                    answer11:'',
                    answer12:'',
                    img2: 'https://i.postimg.cc/T175j5Mq/ASthma-Img2.jpg',
                    header2: '',
                    subHeader2: '',
                    answer21: '',
                    answer22: '',
                    header3: '',
                    subHeader3: '',
                    answer31: '',
                    answer32: ''
                }
            }
        },
        methods:{
            handelSubmit(){
                axios.post("http://localhost:4000/Blogs", this.formValue)
                .then((res)=> console.log(res))
                .catch((err)=> console.log(err))
                this.$router.push("/Blogs")
            }
        }
    }
</script>

<style scoped>

</style>