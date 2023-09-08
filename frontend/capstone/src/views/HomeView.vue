

<template>
  <div class="container-fluid p-0">
    <!--hero-->
    <section class="overflow-x-hidden hero m-0 align-content-sm-start">
      <div class="hero-inner text-center">
        <p class="text-white" style="font-size: 3rem;">
          URBAN BEAN BISTRO
        </p>
        <button><router-link to="/products">Shop</router-link></button>
      </div>
    </section>


    <section class="sec">
      <div class="best">
        <h1 style="font-family: 'Abril Fatface', cursive;font-family: 'Oswald', sans-serif;font-family: 'Pacifico', cursive;">THE BEST COFFEE SHOP</h1>
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
          <div class="text">
            <h5>Fresh coffee beans emit a powerful and alluring aroma. This aroma is a result of various volatile
              compounds present in the beans, which contribute to the overall sensory experience. Fresh coffee beans are
              known to be at their peak flavor within a few days to a few weeks after roasting. During this time, the
              flavors and aromas are most vibrant and distinct.</h5>
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
    <section>
      <h1 style="padding-top:20px;">Our Best selling Products</h1>
      <div class="category" id="category">
        <div class="category-title">

        </div>
        <div class="category-box">
          <div class="box woman-box">
            <div class="box-content b2">
              <h3 class="prod-shop">FACIAL SKIN CARE</h3>
              <label class="prod-shop">FOR DRY SKIN</label>
              <button style="color:chocolate;" class="feature-btn" ><router-link to="/products">Here</router-link>
                </button>
            </div>
            <img src="https://i.postimg.cc/J0P0zZQB/Prods-1.jpg" loading="lazy" class="image-feature">
          </div>
          <div class="box man-box">
            <div class="box-content b2">
             
             
              
                <button class="learn-more"><router-link to="/products">CLick here</router-link></button>
            </div>
            <img src="https://i.postimg.cc/x1H99r49/arabica-coffee.png" loading="lazy" class="image-feature">
          </div>
          <div class="box man-box">
            <div class="box-content b2">
              <h3 class="prod-shop" style="color:#eb5e28 ;">FOOT SKIN CARE</h3>
              <label class="prod-shop" style="color:#eb5e28 ;">COMBINATION SKIN</label>
              <a style="background-color:white ; color: #eb5e28;" class="feature-btn" href="./Products.vue">Go Here</a>
            </div>
            <img src="https://i.postimg.cc/dtCYgBMS/K-images.jpg" loading="lazy" class="image-feature">
          </div>
          <div class="box man-box">
            <div class="box-content b2">
              <h3 class="prod-shop" style="color: #3f9bd4;">FOOT SKIN CARE</h3>
              <label class="prod-shop" style="color: #3f9bd4;">COMBINATION SKIN</label>
              <a style="background-color: white;color: #3f9bd4;" class="feature-btn" href="./Products.vue">Go Here</a>
            </div>
            <img src="https://i.postimg.cc/Hs8YdmMz/k-image-3.jpg" loading="lazy" class="image-feature">
          </div>
        </div>
      </div>
    </section>
    <div class="img-2">
      <div class="bean">
        <h2>GREAT COFFEE</h2>
        <div class="my-paragraph">
          Whether you’re an individual, business of 2 or 2000, a restaurant or coffee shop, Truth Coffee Roasting is adept
          at providing coffee solutions for any size and nature of organization.We’ve taken the guess work out for you
          with our Bean, Machine, Team model and innovative turnkey solutions that covers all your required coffee
          operations allowing you to offer world class artisanal coffee offerings with minimal effort.
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

  color: black;
}

* {
  box-sizing: border-box;
}


.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
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
  padding-left: 520px;

}

.best {
  padding-top: 50px;
}
section {
  background-color: rgb(231, 196, 171);
  padding-bottom: 20px;
}
.bean {
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding-top: 150px;
  padding-left: 90px;
}


.text {
  margin-left: 20px;
  text-align: left;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

.img {
  width: 100%;
  height: 50vh;
}

.img-2 {
  background-image: url('https://i.postimg.cc/t4wkwkyt/div-et-pb-section.png');
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.about-button {
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 2px;
}

body {
  margin: 0;
  padding: 0;
}

.learn-button {
  margin-top: 10px;
  border-radius: 2px;

}

.container2 {
  margin-top: 80px;
}




h1,
p {
  color: rgba(51, 51, 51, 1);
  font-family: 'Abril Fatface', cursive;
  font-family: 'Pacifico', cursive;
}


button {
  background-color: rgba(220, 164, 125, 1);
  color: white;
  text-align: center;
  border-radius: 3px;
}

a {
  color: white;
  text-decoration: none;
  padding: 20px;
}

.category-title {
  margin-top: 20px;
  margin-bottom: 10px;
}

.category-title h2 {
  text-align: center;
}

.category .category-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.category .category-box .box {
  margin: 30px 20px;
}

.category .category-box .box img {
  width: 600px;
  border-radius: 5px;
  height: 328px;
}

.category .category-box .box-content {
  position: absolute;
  z-index: 1;
  margin-left: 30px;
  margin-top: 100px;
}

.category .category-box .box-content h3 {
  color: #faaa94;
  font-size: 20px;
  margin-top: 40px;
}

.category .category-box .box-content label {
  display: block;
  font-size: 15px;
  color: #faaa94;
}

.category .category-box .box-content a {
  display: inline-block;
  margin-top: 10px;
  padding: 4px 10px !important;
  font-size: 14px;
  border-radius: 25px;
  background: white;
  transition: all 0.19s ease-in;
  color: white;
}

.category .category-box .box-content a:hover {
  background: #faaa94;
  color: white;
}

.category .category-box .box-content.b2 {
  margin: 15px;
  text-align: left;
  margin-top: 10px;
  margin-left: 70px;
}

/* banner section */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap");


@media screen and (max-width: 300px) {
  .prod-shop {
    margin-left: 39px;

  }

  .feature-btn {
    margin-left: 95px !important;
  }

  .box-content {
    margin: auto !important;


  }
}

.box {
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, .1);
  transition: 1s;

}

.box:hover {
  transform: scale(1.1);
  z-index: 2;
}




.image-feature {
  width: 100% !important;
  height: 300px !important;
}





h6 {
  font-size: 16px;
  font-weight: 700;
}

p {
  font-size: 16px;
  margin: 15px 0 20px 0;
  color: black;
}


body {
  width: 100%;
}




@media screen and (max-width: 300px) {

  .category-box h3 {
    float: left;
    padding-left: 150px;
    font-size: 23px !important;

  }

  .category-box label {
    float: left;
    padding-left: 150px;
    font-size: 20px !important;
  }

  .feature-btn {
    padding-top: 90px;
  }

  .image-feature {
    width: 100px;
    height: 80px;
  }

  html,
  body {
    overflow-x: hidden;
  }

  .feature-btn {
    float: left !important;
    margin-right: 10px !important;
    padding: 10px !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }
}


.feature-btn {
  text-decoration: none;
  margin-top: 165px !important;
  margin-left: 45px;
}

/* category */

.category-title {
  margin-top: 20px;
  margin-bottom: 10px;
}

.category-title h2 {
  text-align: center;
}

.category .category-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.category .category-box .box {
  margin: 30px 20px;
}

.category .category-box .box img {
  width: 600px;
  border-radius: 5px;
  height: 328px;
}

.category .category-box .box-content {
  position: absolute;
  z-index: 1;
  margin-left: 30px;
  margin-top: 100px;
}

.category .category-box .box-content h3 {
  color: #faaa94;
  font-size: 20px;
  margin-top: 40px;
}

.category .category-box .box-content label {
  display: block;
  font-size: 15px;
  color: #faaa94;
}

.category .category-box .box-content a {
  display: inline-block;
  margin-top: 10px;
  padding: 4px 10px !important;
  font-size: 14px;
  border-radius: 25px;
  background: white;
  transition: all 0.19s ease-in;
  color: white;
}

.category .category-box .box-content a:hover {
  background: #faaa94;
  color: white;
}

.category .category-box .box-content.b2 {
  margin: 15px;
  text-align: left;
  margin-top: 10px;
  margin-left: 70px;
}


</style>
