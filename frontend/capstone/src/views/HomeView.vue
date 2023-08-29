<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="https://i.postimg.cc/XvjyBSgY/span-et-parallax-bg-1.png"> -->
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
 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
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
