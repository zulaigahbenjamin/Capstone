<template lang="">
  <div>
    <section class=" overflow-x-hidden hero m-0 align-content-sm-start">
              <div class="hero-inner text-center">
                  <img src="https://i.postimg.cc/nzTTHzvG/Meubel-House-Logos-05.png" alt="">
                <p class="text">Profile</p>
               <a href="#" class="btn shadow__btn mb-2">Welcome<i class="fa-regular fa-greater-than">User</i></a>
              </div>
            </section>


              <!----featured info-->
              <section id="featured" class="mt-3 text-center">
                <div class="container">
                <h2 class="text-black">Your Safety Is Our Priority</h2>
                </div>
              </section>
              <!--categories--->
      <div class="container-fluid">
  <div class="row gap-3 justify-content-center" v-if="user"  :key="user.userId" :user="user">
    <div class=" text-center" >
      <div style="width:100%;height:100%; margin-bottom: 2rem" class="card justify-content-center">
        <img :src="user.UserProfile" class="card-img-top" style="padding: 1.6rem;" height="550">
        <div class="card-body justify-content-center">
          <h5 class="card-title">{{ user.firstName }}</h5>
          <h5 class="card-text">{{ user.lastName }}</h5>
          <p class="card-text"> {{ user.emailAddress }}</p>
          <p class="card-text"> {{ user.Address }}</p>
          <!-- <p class="card-text"> {{ user.UserPass }}</p> -->
          <p class="card-text"> {{ user.userrole }}</p>


          <router-link class="btn-prod" to="/">Go Back</router-link>
          

        </div>
      </div>
    </div>
  </div>
  <div style="text-align:center !important; margin-top:3rem; margin-bottom:5rem;" v-else>
    Loading...
    <SpinnerComp/>
  </div>
</div>
  </div>
</template>



<script>
import SpinnerComp from '@/components/spinnerComp.vue';
import UpdateUser from "@/components/UserEditComp.vue";
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies();
export default {
computed: {
  user() {
    return cookies.get('userToken').result;
  },
},
components:{SpinnerComp,UpdateUser,},

};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');
body{
  overflow-x: hidden;
}

#featured, h2, p{
    font-family: 'REM', sans-serif;
}
* {
  box-sizing: border-box;
}
body {
 font-family: 'REM', sans-serif;
  background-color:#eaeaea;
}
.hero {
width: 100vw;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
/* background-image: url(https://i.postimg.cc/y8yHbMPv/shoe-sneaker-mockup-psfiles-758x569.jpg); */
background-image: url(https://i.postimg.cc/Kv6FByBX/new-walll-light.png);
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
font-weight: 600;
font-size: 50px;
font-family: 'REM', sans-serif;
}
.hero{
  width: auto;
}
.hero-inner{
font-size:65px;
/* background-color: #E9D5B7; */
color: black;
}
#featured, h2, p{
    font-family: 'REM', sans-serif;
}
* {
  box-sizing: border-box;
}
body {
 font-family: 'REM', sans-serif;
  background-color:#eaeaea;
}
.container{
  width:900px;
  margin:0px auto;
}
.text-black{
text-align: center;
font-weight: bold;
margin: 3rem;
font-size: 25px !important;

}
.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: black;
  border-radius: 7px;
  letter-spacing: 6px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}
.card-title {
margin-left: 10px;
text-align: center;
}
.card-text {
margin-left: 20px;
text-align: center;
font-size: 18px;
}
.btn-prod{
  padding: 5px;
  background: #B88E2F;
box-shadow: 0 0 25px #FFF3E3;
cursor: pointer;
width: 11%;
color: black;
text-decoration: none;
border-radius: 5px;

}

.btn-prod:hover{
  color: black;
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFF3E3;

}
.card{
  border: none;
}
.card-img-top{
  height: 300px !important;
  width: 300px !important;
  padding: 10px !important;
}
.card-img-top{
height: 390px;
width: 315px;
margin: auto;
border-radius: 30px;
box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFF3E3;
margin-top: 2rem;
}

.Sponsors {
display: flex;
justify-content: space-between;
}
.text-sponsor{
font-size: 26px;
color: black;
}
.sponsors-law{
color: black;
font-size: 16px;
}

.Sponsors div {
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
}

.Sponsors div i {
font-size: 20px;
margin-bottom: 8px; /* Adjust spacing between icon and text */
}

.Sponsors{
  background: #E9D5B7;
  padding:20px;
  margin-top: 5rem;
  margin-bottom: 5rem;
 
}


.text-black{
text-align: center;
font-weight: bold;
font-size: 38px;
margin-top: 3rem;

}

.text-blacks{
text-align: center;
margin-bottom: 3rem;
font-size: 20px;
}

@media screen and (max-width: 500px){

.hero-inner {
  font-size: 30px;
}
.text-black {
  font-size: 18px !important;
}
.card-text {
  font-size: 14px;
}
.btn-prod {
  width: 30%;
  font-size: 14px;
}
.container{
  width: auto;
}
.card-img-top{
  height: 220px;
  width: 210px;
  padding: 10px !important;
}
.card{
  padding: 10px;
}

}



</style>



