<template>
  <section class="overflow-x-hidden hero m-0 align-content-sm-start">
    <div class="hero-inner text-center">
      <h2 class="text">
        Contact us Now 
      </h2>
      <p>And stand a chance to win a 1 Large Americano , Mocha or Hazelnut Cuppecino Every Day for 2 weeks </p>
    </div>
  </section>

  <div class="row">
    
    <div class="col-lg w-100 fresh mt-4">
      <h1>EMAIL US</h1>
      <form>
        <div class="row mt-5">
          <div class="col">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div class="col">
            <input type="text" name="email" placeholder="Email Address" />
          </div>
        </div>

        <div class="mt-3 h-5">
          <input type="text" name="message" placeholder="Enter your message" />
        </div>
        <div class="but">
          <button method="POST" class="send">SEND</button>
        </div>
      </form>
    </div>
    <div class="col-lg">
      <div class="image">
        
        <h3 class="tee">Subscribe to our Newsletter</h3>
        <p style="color: white">
          Subscribe for all the latest deeals and daily discounts
        </p>
        <input type="text" class="sub" name="email" />
        <div class="w">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container3">
    <div class="row">
      <div class="col-lg freshe">
        <ul>
          <h2 class="two">Contact US</h2>
          <ul>
            <ol class="heading">
              PHONE
            </ol>
            <ol class="ol">
              063 630 2772
            </ol>
          </ul>
          <ul>
            <ol class="heading">
              MAIL
            </ol>
            <ol class="ol">
              UBB@gmail.com
            </ol>
          </ul>
          <ul>
            <ol class="heading">
              ADDRESS
            </ol>
            <ol class="ol">
              Wentworth, Durban
            </ol>
          </ul>
        </ul>
      </div>
      <div class="col-lg beann">
        <h2 class="h2">Come In Store for Daily Discounts</h2>

        <ul>
          <ul>
            <ol class="heading">
              WEEKDAYS
            </ol>
            <ol class="ol">
              MONDAYS - FRIDAYS
            </ol>
            <ol class="ol">
              08:30 - 20:30
            </ol>
          </ul>
          <ul>
            <ol class="heading">
              WEEKENDS
            </ol>
            <ol class="ol">
              SATURDAY - SUNDAY
            </ol>
            <ol>
              09:00 - 13:30
            </ol>
          </ul>
          <ol>
            <button>View our Menu</button>
          </ol>
        </ul>
      </div>
    </div>
    <div class="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.934053869278!2d18.413043688854962!3d-33.917096799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd669f885dbfeb1%3A0xfd6f1f60fa61cc5d!2sOrigin%20Coffee%20Roasting!5e0!3m2!1sen!2sza!4v1693822010647!5m2!1sen!2sza"
        width="1360"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2, p {
  color:white;
  opacity: none;
}
.send {
  float: right;
}
.h2 {
  color: white;
  padding-top: 30px;
}
.freshe {
  background-color: rgba(245, 245, 220, 1);
  padding-top: 30px;
}
.beann {
  background-color: rgba(0, 0, 0, 0.6);
}
.two {
  margin-left: 59px;
}
.ol {
  font-family: "Nunito";
}
.heading {
  color: rgba(220, 164, 125, 1);
  font-family: "Oswald";
  margin-top: 20px;
}
ul {
  display: grid;
  text-align: left;
}
.tee {
  padding-top: 50px;
  color: white;
}
.hero {
  background-image: url("https://i.postimg.cc/gJQwNXjz/span-et-parallax-bg-3.png");
  background-size: cover;
  margin: 0;
  margin: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-weight: 600;
  font-size: 50px;
  padding: 0;
  /* z-index: 0; */
    opacity: 0.5;
  height: 100vh;
}
input {
  width: 90%;
}

h1 {
  color: black;
}
.image {
  background-image: url("https://i.postimg.cc/C5r1ZPRK/div-et-pb-column-1.png");
  opacity: unset;
  background-repeat: no-repeat;
  height: 110vh;
  width: 100%;
}
button {
  color: white;
  background-color: rgba(220, 164, 125, 1);
  border: none;
  margin-top: 20px;
  width: 90%;
}
.but {
  color: white;
  border: 2px solid white;
  margin-top: 0;
  width: 20%;
  justify-content: center;
  text-align: center;
}
</style>
