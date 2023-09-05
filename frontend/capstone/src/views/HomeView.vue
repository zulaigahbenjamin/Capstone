<!-- <template>
  <div class="home">
   <img alt="Vue logo" src="https://i.postimg.cc/XvjyBSgY/span-et-parallax-bg-1.png"> 
    <div class="container">
    <div class="background-image"></div>
    <div class="text-container">
      <h1>URBAN BEAN BISTRO</h1>
      <p>Serving only thhe best since 2017</p>
      <button><router-link to="/products">Shop</router-link></button>
    </div>
  </div> 
  <section class="sec">
<div class="best">
  <h1>THE BEST COFFEE SHOP</h1>
</div>
  <div class="container2">
  <div class="row">
    <div class="col-sm">
      <img src="https://i.postimg.cc/yxBcRcd4/icon-1-png.png">
     <h2>Best Beans</h2>
    </div>
    <div class="col-sm">
     <img src="https://i.postimg.cc/90p8wWcb/icon-2-png.png">
     <h2>Quality Milk</h2>
    </div>
    <div class="col-sm">
     <img src="https://i.postimg.cc/j2p5NrvW/icon-3-png.png">
     <h2>Perfect Blend</h2>
    </div>
  </div>
      <div class="about-button">
      <button><router-link to="/about">About Us</router-link></button>
      </div>
    </div>
 
  </section>
   <div class="container3">
      <div class="row">
        <div class="col-lg w-100 fresh mt-4">
       <h2>FRESH BEANS</h2>
       <div class="text" >
        <h5>Fresh coffee beans emit a powerful and alluring aroma. This aroma is a result of various volatile compounds present in the beans, which contribute to the overall sensory experience. Fresh coffee beans are known to be at their peak flavor within a few days to a few weeks after roasting. During this time, the flavors and aromas are most vibrant and distinct.</h5>
       </div>
       
       <a href="https://barasportswear.com/blogs/news/9-interesting-facts-about-coffee-you-didnt-know">
          <button class="learn-button">Learn More</button>
        </a>
        </div>
        <div class="col-lg">
        <img src="https://i.postimg.cc/QCn3Qc3Y/div-et-pb-column.png" class="img">
        </div>
      </div>
    </div>
  </div>
  <div class="img-2">
    <div class="bean">
      <h2>GREAT COFFEE</h2>
      <div class="my-paragraph">
        Whether you’re an individual, business of 2 or 2000, a restaurant or coffee shop, Truth Coffee Roasting is adept at providing coffee solutions for any size and nature of organization.We’ve taken the guess work out for you with our Bean, Machine, Team model and innovative turnkey solutions that covers all your required coffee operations allowing you to offer world class artisanal coffee offerings with minimal effort.
      </div>
    </div>
     
  </div>
 
</template> -->

<template>
  <div class="container-fluid p-0">
    <!--hero-->
    <section class="overflow-x-hidden hero m-0 align-content-sm-start">
      <div class="hero-inner text-center">
        <p class="text">
          URBAN BEAN BISTRO
        </p>
        <button><router-link to="/products">Shop</router-link></button>
      </div>
    </section>
    <!----featured info-->
   


    <!--categories--->
    <section class="sec">
<div class="best">
  <h1>THE BEST COFFEE SHOP</h1>
</div>
  <div class="container2">
  <div class="row">
    <div class="col-sm">
      <img src="https://i.postimg.cc/yxBcRcd4/icon-1-png.png">
     <h2>Best Beans</h2>
    </div>
    <div class="col-sm">
     <img src="https://i.postimg.cc/90p8wWcb/icon-2-png.png">
     <h2>Quality Milk</h2>
    </div>
    <div class="col-sm">
     <img src="https://i.postimg.cc/j2p5NrvW/icon-3-png.png">
     <h2>Perfect Blend</h2>
    </div>
  </div>
      <div class="about-button">
      <button><router-link to="/about">About Us</router-link></button>
      </div>
    </div>
 
  </section>

    <div class="container3">
      <div class="row">
        <div class="col-lg w-100 fresh mt-4">
       <h2 style="padding:10px;">FRESH BEANS</h2>
       <div class="text" >
        <h5>Fresh coffee beans emit a powerful and alluring aroma. This aroma is a result of various volatile compounds present in the beans, which contribute to the overall sensory experience. Fresh coffee beans are known to be at their peak flavor within a few days to a few weeks after roasting. During this time, the flavors and aromas are most vibrant and distinct.</h5>
       </div>
       <a href="https://barasportswear.com/blogs/news/9-interesting-facts-about-coffee-you-didnt-know">
          <button class="learn-button">Learn More</button>
        </a>
        </div>
        <div class="col-lg">
        <img src="https://i.postimg.cc/QCn3Qc3Y/div-et-pb-column.png" class="img">
        </div>
      </div>
    </div>
    <div class="img-2">
    <div class="bean">
      <h2>GREAT COFFEE</h2>
      <div class="my-paragraph">
        Whether you’re an individual, business of 2 or 2000, a restaurant or coffee shop, Truth Coffee Roasting is adept at providing coffee solutions for any size and nature of organization.We’ve taken the guess work out for you with our Bean, Machine, Team model and innovative turnkey solutions that covers all your required coffee operations allowing you to offer world class artisanal coffee offerings with minimal effort.
      </div>
    </div>
     
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap");
body {
  overflow-x: hidden;
}

.hero {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url(https://i.postimg.cc/y8yHbMPv/shoe-sneaker-mockup-psfiles-758x569.jpg); */
  background-image: url('https://i.postimg.cc/RZhxxw5m/span-et-parallax-bg-1.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-weight: 600;
  font-size: 50px;
  font-family: "REM", sans-serif;
}
.hero {
  width: auto;
}
.hero-inner {
  font-size: 25px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* background-color: #E9D5B7; */
  color: black;
}

* {
  box-sizing: border-box;
}
body {
  font-family: "REM", sans-serif;
  background-color: #eaeaea;
}
.container {
  width: 900px;
  margin: 0px auto;
}
/* Float three columns side by side */
.column {
  float: left;
  width: 33.33%;
  padding: 0 10px;
}
/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Responsive columns */
@media screen and (max-width: 700px) {
  .container {
    width: 100%;
  }
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
/* Style the counter cards */
.card {
  padding: 5px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
}
.card .profile {
  border-radius: 10px;
  transition: 0.2s;
}
.card:hover .profile {
  transform: scale(1.4);
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
}
.card .content {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.card .content .back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1e6;
  transition: 1s;
  z-index: 1;
  padding: 10px;
}
.from-left {
  top: 0;
  left: -100%;
}
.card:hover .content .from-left {
  left: 0%;
}
.from-bottom {
  top: 100%;
  left: 0;
}
.card:hover .content .from-bottom {
  top: 0%;
}
.from-right {
  top: 0%;
  right: -100%;
}
.card:hover .content .from-right {
  right: 0;
}
.card .content .back h3 {
  font-size: 15px;
  letter-spacing: 2px;
}
.card .content .back .tem-img {
  border-radius: 100%;
}
.card .content .back .des {
  font-size: 13px;
  padding: 20px 0px;
}
.card .content .back {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
.card .content .back li {
  display: inline-block;
}
.card .content .back li a {
  display: block;
  background: #333;
  color: #fff;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 100%;
}
.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}





details {
  background: #f6f6f6;
  padding: 10px 20px;
  border-radius: 7px;
  margin-top: 20px;
  font-family: "Rubik";
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
}

button {
  background-color: rgba(220, 164, 125, 1);
  color: white;
  text-align: center;
  border: 0px;
  text-decoration: none;
}

.my-paragraph {
  text-align: left;
  padding-left:520px;
}
.best {
  padding-top:50px;
}
.bean {
  text-align:center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding-top:150px;
  padding-left:90px;
}
/* .bean, p {
  padding-top:100px;
  padding-left:20px;
} */
.text{
  margin-left:20px;
  text-align:left ;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.img{
  width:100%;
  height:50vh;
}
.img-2 {
  background-image: url('https://i.postimg.cc/t4wkwkyt/div-et-pb-section.png');
  background-size:cover;
 width:100%;
 height: 100vh;
}
.about-button {
  margin-top:20px;
  margin-bottom:20px;
}
body {
  margin: 0;
  padding:0;
}
.learn-button {
margin-top:10px;

}
section {
  background-color: rgb(231, 196, 171);
  padding-bottom: 20px;
}
.container {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust the height as needed */
}
.container2 {
  margin-top:80px;
}
.background-image {
  background-image: url('https://i.postimg.cc/XvjyBSgY/span-et-parallax-bg-1.png'); /* Replace with your image path */
  background-size:cover;
  padding:0;
 margin:0;
  width:100%;
  height: 100%;
}
.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
h1, p {
  color: rgba(51, 51, 51, 1);
}
.text-container h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Oswald';
}
.text-container p {
  font-size: 1.2rem;
  font-family: 'Oswald';
}
button {
  background-color: rgba(220, 164, 125, 1);
  color: white;
  text-align: center;
  border: 0px;
}
a {
  color: white;
  text-decoration: none;
  padding:20px;
}
</style>
