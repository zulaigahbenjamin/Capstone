<template>
  <div>
    <div class="container-fluid">
      <div class="row gap-3 justify-content-center" v-if="productData">
        <div class="card">
          <img
            :src="productData.prodUrl"
            class="card-img-top"
            style="padding: 1.6rem"
            height="550"
          />
          <div class="card-body justify-content-center">
            <h5 class="card-title">{{ productData.prodName }}</h5>
            <!-- <p class="card-text">{{ product.descrption }}</p> -->
            <p class="card-text">{{ productData.category }}</p>
            <p class="card-text">R {{ productData.amount }}</p>
            <router-link class="btn" to="/products">Go Back</router-link>
          </div>
        </div>
      </div>
      <div style="text-align: center !important; margin-top: 3rem" v-else>
        Loading...
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    product: Object,
  },
  data() {
    return {
      productData: null,
    };
  },
  created() {
    const prodId = this.$route.params.id;
    axios
      .get(`https://zulaigahcapstoneapi.onrender.com/products/${prodId}`)
      .then((response) => {
        this.productData = response.data;
      })
      .catch((error) => {
        console.error(error);
        this.error = "An error occurred while fetching product details.";
      });
  },
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
  .card-title {
margin-left: 10px;
text-align: center;
}
.card-text {
margin-left: 20px;
text-align: center;
font-size: 18px;
}
.btn{
    padding: 5px;
    background: #c47ec2d6;
  box-shadow: 0 0 25px #FFF3E3;
  cursor: pointer;
  width: 7%;

  }

  .btn:hover{
    box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFF3E3;

  }
.card-img-top{
height: 400px;
width: 500px;
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

  </style>
