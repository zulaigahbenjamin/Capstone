<template>
  <div>
    <div class="container-fluid">
      <!-- Check if productData is available -->
      <div v-if="productData">
        <!-- Display product details -->
        <div class="card">
          <img
            :src="productData.prodUrl"
            class="card-img-top"
            style="padding: 0.6rem"
            height="390"
          />
          <div class="card-body">
            <h5 class="card-title">{{ productData.prodName }}</h5>
            <!-- <p class="card-text">{{ product.descrption }}</p> -->
            <p class="card-text">{{ productData.category }}</p>
            <p class="card-text">R {{ productData.amount }}</p>
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
    const productId = this.$route.params.id;
    axios
      .get(`https://zulaigahcapstoneapi.onrender.com/products/${productId}`)
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
