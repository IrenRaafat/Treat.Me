import { createApp } from 'vue'
import App from './App.vue'
import {createRouter ,createWebHistory} from 'vue-router'
const LandPage =()=> import( './components/LandPage')
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import HomePage from './components/Home/HomePage'
import ErrorPage from './components/ErrorPage'
import NervousSystem from './components/Home/NervousSystem'
import CirculatorySystem from './components/Home/CirculatorySystem'
import ImmuneSystem from './components/Home/ImmuneSystem'
import SystemDetails from './components/Home/SystemDetails'
import RespiratorySystem from './components/Home/RespiratorySystem'
import DigestiveSystem from './components/Home/DigestiveSystem'
import UrinaryTract from './components/Home/UrinaryTract'
import LymphaticSystem from './components/Home/LymphaticSystem'
import ReproductiveSystem from './components/Home/ReproductiveSystem'
import EndocrineSystem from './components/Home/EndocrineSystem'
import MusculoskeletalSystem from './components/Home/MusculoskeletalSystem'
import IntegumentarySystem from './components/Home/IntegumentarySystem'
import DoctorsPage from './components/Doctors/DoctorsPage'

import BlogsPage from './components/Pages/BlogsPage.vue'
import BookingPage from './components/Pages/BookingPage.vue'
import CancelPage from './components/Pages/CancelPage.vue'
import CheckYourSymptoms from './components/Pages/CheckYourSymptoms.vue'
import CommonCold from './components/Pages/CommonCold.vue'
import LogInPage from './components/Pages/LogInPage.vue'
import MyBookings from './components/Pages/MyBookings.vue'
import PolicesPage from './components/Pages/PolicesPage.vue'
import SignUpPage from './components/Pages/SignUpPage.vue'
import SocializingBlogDetails from './components/Pages/SocializingBlogDetails.vue'
import SuccessCancel from './components/Pages/SuccessCancel.vue'
import UnScuessfulCancel from './components/Pages/UnScuessfulCancel.vue'
import WelcomingPage from './components/Pages/WelcomingPage.vue'
import BlogDetails from './components/Pages/BlogDetails'
import DoctorDetaile from './components/Doctors/DoctorDetaile'
import ProfileSaved from './components/Pages/ProfileSaved.vue'
import ProfileHistory from './components/Pages/ProfileHistory.vue'
import ProfileManageHistory from './components/Pages/ProfileManageHistory.vue'
import ProfileDeleteAll from './components/Pages/ProfileDeleteAll.vue'

import DoctorLogin from './components/Pages/DoctorLogin.vue'
import DoctorProfile from './components/Pages/DoctorProfile.vue'

import DrinksPage from './components/Pages/DrinksPage.vue'
import DrinkDetails from './components/Pages/DrinkDetails.vue'

import AdminProfile from './components/Admin/AdminProfile.vue'
import AllDoctors from './components/Admin/AllDoctors.vue'
import AddDoctor from './components/Admin/AddDoctor.vue'
import UpdateDoctor from './components/Admin/UpdateDoctor.vue'
import AllBlogs from './components/Admin/AllBlogs.vue'
import AddBlog from './components/Admin/AddBlog.vue'
import UpdateBlog from './components/Admin/UpdateBlog.vue'

import HeadCard from './components/Symptoms/Head/HeadCard.vue'
import HeadCheck from './components/Symptoms/Head/HeadsCheck.vue'
import HeadDetails from './components/Symptoms/Head/HeadDetails.vue'

import LegsCard from './components/Symptoms/Legs/LegsCard.vue'
import LegsCheck from './components/Symptoms/Legs/LegsCheck.vue'
import LegsDetails from './components/Symptoms/Legs/LegsDetails.vue'

import HandsCard from './components/Symptoms/Hands/HandsCard.vue'
import HandsCkeck from './components/Symptoms/Hands/HandsCkeck.vue'
import HandsDetails from './components/Symptoms/Hands/HandsDetails.vue'

import ChestCkeck from './components/Symptoms/Chest/ChestCkeck.vue'
import ChestCard from './components/Symptoms/Chest/ChestCard.vue'
import ChestDetails from './components/Symptoms/Chest/ChestDetails.vue'

import ShoulderCards from './components/Symptoms/Shoulder/ShoulderCards.vue'
import ShoulderCheck from './components/Symptoms/Shoulder/ShoulderCheck.vue'
import ShoulderDetails from './components/Symptoms/Shoulder/ShoulderDetails.vue'

import StomachCard from './components/Symptoms/Stomach/StomachCard.vue'
import StomachCheck from './components/Symptoms/Stomach/StomachCheck.vue'
import StomachDetails from './components/Symptoms/Stomach/StomachDetails.vue'

import ArmCheck from './components/Symptoms/Arm/ArmCheck.vue'
import ArmDetails from './components/Symptoms/Arm/ArmDetails.vue'
import ArmCard from './components/Symptoms/Arm/ArmCard.vue'



const routes = [
    {path:'/',component:LandPage},
    {path:'/home',component:HomePage},
    {path:'/home/nervous-system',component:NervousSystem},
    {path:'/home/circulatory-system',component:CirculatorySystem},
    {path:'/home/immune-system',component:ImmuneSystem},
    {path:'/home/respiratory-system',component:RespiratorySystem},
    {path:'/home/digestive-system',component:DigestiveSystem},
    {path:'/home/urinary-tract',component:UrinaryTract},
    {path:'/home/lymphatic-system',component:LymphaticSystem},
    {path:'/home/reproductive-system',component:ReproductiveSystem},
    {path:'/home/endocrine-system',component:EndocrineSystem},
    {path:'/home/musculoskeletal-system',component:MusculoskeletalSystem},
    {path:'/home/integumentary-system',component:IntegumentarySystem},
    {path:'/doctors',component:DoctorsPage},
    {path:'/home/system-details:t',component:SystemDetails},
    {path:'/:NotFound(.*)*',component:ErrorPage,meta:{
        hideNavbar:true,
        hideFooter:true
    }},

    {path:'/blogs',component:BlogsPage},
    {path: '/blogs/blogdetails/:id',component:BlogDetails},
    {path: '/doctors/doctordetails/:id',component:DoctorDetaile},
    {path:'/booking',component:BookingPage},
    {path:'/cancel',component:CancelPage},
    {path:'/check-your-symptoms',component:CheckYourSymptoms}, 
    {path:'/common-cold',component:CommonCold},
    {path:'/Login',component:LogInPage},
    {path:'/MyBookings',component:MyBookings},
    {path:'/PolicesPage',component:PolicesPage},
    {path:'/SignUpPage',component:SignUpPage},
    {path:'/SocializingBlogDetails',component:SocializingBlogDetails},
    {path:'/SuccessCancel',component:SuccessCancel},
    {path:'/UnScuessfulCancel',component:UnScuessfulCancel},
    {path:'/WelcomingPage',component:WelcomingPage},
    {path:'/ProfileSaved',component:ProfileSaved},
    {path:'/ProfileHistory',component:ProfileHistory},
    {path:'/ProfileManageHistory',component:ProfileManageHistory},
    {path:'/ProfileDeleteAll',component:ProfileDeleteAll},

    {path:'/DoctorLogin',component:DoctorLogin},
    {path:'/doctor-profile',component:DoctorProfile},

    {path:'/drinks',component:DrinksPage},
    {path: '/drinks/drinkdetails/:id',component:DrinkDetails},

    {path:'/AdminProfile',component:AdminProfile},
    {path:'/AllDoctors',component:AllDoctors},
    {path:'/AddDoctor',component:AddDoctor},
    {path:'/UpdateDoctor:id',component:UpdateDoctor},
    {path:'/AllBlogs',component:AllBlogs},
    {path:'/AddBlog',component:AddBlog},
    {path:'/UpdateBlog:id',component:UpdateBlog},

    {path:'/HeadCard',component:HeadCard},
    {path:'/HeadCheck',component:HeadCheck},
    {path:'/HeadDetails/:id',component:HeadDetails},

    {path:'/LegsCard',component:LegsCard},
    {path:'/LegsCheck',component:LegsCheck},
    {path:'/LegsDetails/:id',component:LegsDetails},

    {path:'/HandsCard',component:HandsCard},
    {path:'/HandsCkeck',component:HandsCkeck},
    {path:'/HandsDetails/:id',component:HandsDetails},

    {path:'/ChestCard',component:ChestCard},
    {path:'/ChestCkeck',component:ChestCkeck},
    {path:'/ChestDetails/:id',component:ChestDetails},

    {path:'/ShoulderCards',component:ShoulderCards},
    {path:'/ShoulderCheck',component:ShoulderCheck},
    {path:'/ShoulderDetails/:id',component:ShoulderDetails},

    {path:'/StomachCard',component:StomachCard},
    {path:'/StomachCheck',component:StomachCheck},
    {path:'/StomachDetails/:id',component:StomachDetails},

    {path:'/ArmCard',component:ArmCard},
    {path:'/ArmCheck',component:ArmCheck},
    {path:'/ArmDetails/:id',component:ArmDetails},

    
]


const router = createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDTZ7njaAP0_ozZxRhKtTNnJvoyuoMAwxM",
  authDomain: "treatme-942ff.firebaseapp.com",
  projectId: "treatme-942ff",
  storageBucket: "treatme-942ff.appspot.com",
  messagingSenderId: "1078563928549",
  appId: "1:1078563928549:web:c2d43e8dcc149073c9970c",
  measurementId: "G-WX0KNG48YF",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

