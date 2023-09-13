<template>
  <div>
    <div class="container-fluid">
      <div class="row gap-3 justify-content-center">
        <!-- Check if 'product' exists before rendering -->
        <div v-if="product" class="card">
          <div v-for="product of products" :key="product.prodId" class="col-12 col-sm-6 col-md-4 col-lg-3 my-4">

            <img :src="product.prodUrl" class="card-img-top" style="padding: 1.6rem" height="550" />
            <div class="card-body justify-content-center">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">{{ product.category }}</p>
              <p class="card-text">R {{ product.amount }}</p>
              <button @click="addToCart(product.prodId)">Add to Cart</button>
              <router-link class="btn" to="/products">Go Back</router-link>
            </div>
          </div>
        </div>

        <!-- Handle the case where 'product' is not defined -->
        <div v-else style="text-align: center !important; margin-top: 3rem">
          <SpinnerComp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComp from "@/components/spinnerComp.vue";
export default {
  components: { SpinnerComp },
  computed: {
    product() {
      return this.$store.state.product;
    },
    id() {
      return this.$route.params.prodId
    },
    userData() {
      return this.$store.state.userData;
    },
  },


  mounted() {
    this.$store.dispatch("fetchProduct", this.prodId);
  },
  methods: {
    addToCart(prodId) {
      if (this.userData && this.userData.userId) {
        this.$store.dispatch("addToCart", {
          userId: this.userData.userId,
          prodId,
        });
      } else {
        // Handle the case where the user is not logged in, prompt for login, etc.
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap");

body {
  overflow-x: hidden;
}

#featured,
h2,
p {
  font-family: "REM", sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "REM", sans-serif;
  background-color: #eaeaea;
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

.btn {
  padding: 5px;
  background: #c47ec2d6;
  box-shadow: 0 0 25px #fff3e3;
  cursor: pointer;
  width: 7%;
}

.btn:hover {
  box-shadow: 4px 4px 10px #ccc5b9, -4px -4px 10px#FFF3E3;
}

.card-img-top {
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

.text-sponsor {
  font-size: 26px;
  color: black;
}

.sponsors-law {
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
  margin-bottom: 8px;
  /* Adjust spacing between icon and text */
}

.Sponsors {
  background: #e9d5b7;
  padding: 20px;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.text-black {
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  margin-top: 3rem;
}

.text-blacks {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 20px;
}
</style>
