<template>
    <div>
        <h1 class="text-center p-3" style="color: #2b3467;">All Doctors</h1>
        
        <div class="d-flex justify-content-between p-2">
            <button class="btn btn-sm" @click="prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg></button>

            <input type="search" class="form-control rounded" placeholder="Search by Specialty" aria-label="Search" aria-describedby="search-addon" v-model="input"/>

            <button class="btn btn-sm" @click="next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg></button>

        </div>
        <table class="table text-center text-light border mt-2">
            <tr class="bg-dark border">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Gender</th>
                <th scope="col">Specialty</th>
                <th scope="col">Location</th>
                <th scope="col">Rate</th>
                <th scope="col">Options</th>
            </tr>
            <tr class="table-light" v-for="(doctor, index) in handleSearch" :key="index">
                <template v-if="index>=min && index<max">
                <td>{{index +1}}</td>
                <td>{{doctor.name}}</td>
                <td><img :src="doctor.image" alt="" width="100" height="100"></td>
                <td>{{doctor.gender}}</td>
                <td>{{doctor.spe}}</td>
                <td>{{doctor.location}}</td>
                <td>{{doctor.rate}}</td>
                <td>
                    <router-link :to="`/UpdateDoctor${doctor.id}`"><button class="btn btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></button>
                    </router-link>
                    
                    <button class="btn btn-sm" @click="deletePrd(doctor.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>
                    
                </td>
                </template>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'AllDoctors',
        data(){
            return{
                doctors:[],
                input:'',
                min:0,
                max:5
            }
        },
        created(){
            this.getAllData()
        },
        methods:{
            getAllData(){
                axios.get("http://localhost:3000/doctors")
                .then((res)=> this.doctors= res.data)
                .catch(err=> console.log(err))
            },
            next(){
                this.min +=5
                this.max +=5

            },
            prev(){
                this.min -=5
                this.max -=5
            },
            deletePrd(id){
                axios.delete(`http://localhost:3000/doctors/${id}`)
                .then((res)=> console.log(res))
                .catch(err=> console.log(err))
                this.getAllData()
            }
        },
        computed:{
            handleSearch(){
                return this.doctors.filter((elem)=> elem.spe.toLowerCase().includes(this.input.toLowerCase()))
            }
        }
    }
</script>

<style scoped>

</style>