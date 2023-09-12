<template>
  <div>
    <div class="container-fluid">
      <div class="row gap-3 justify-content-center">
        <div class="card" v-if="products">
          <img :src="products.prodUrl" class="card-img-top" style="padding: 1.6rem" height="550" />
          <div class="card-body justify-content-center">
            <h5 class="card-title">{{ products.prodName }}</h5>
            <p class="card-text">{{ products.category }}</p>
            <p class="card-text">R {{ products.amount }}</p>
            <router-link class="btn" to="/products">Go Back</router-link>
          </div>
        </div>
        <div style="text-align: center !important; margin-top: 3rem" v-else>
          <spinner />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import spinner from "@/components/spinnerComp.vue"

export default {
  components: { spinner },

  computed: {
    products() {
            return this.$store.state.product;
        },
    id() {
      return this.$route.params.id;
    },
    userData() {
      return this.$store.state.productData;
    },
  },
  // mounted() {
  //   this.$store.dispatch("fetchProduct", this.$route.params.id);
  // },
  //   mounted() {
  //   const productId = this.$route.params.id;
  //   this.$store.dispatch('fetchProduct', productId);
  // },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    addToCart(prodId) {
      if (this.userData && this.userData.userId) {
        // Call the addToCart action with userId and prodId
        this.$store.dispatch("addToCart", {
          userId: this.userData.userID,
          prodId,
        });
      } else {
      }
    },
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=REM:wght@200&display=swap');

body {
  overflow-x: hidden;
}

#featured,
h2,
p {
  font-family: 'REM', sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'REM', sans-serif;
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
  box-shadow: 0 0 25px #FFF3E3;
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
  background: #E9D5B7;
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
