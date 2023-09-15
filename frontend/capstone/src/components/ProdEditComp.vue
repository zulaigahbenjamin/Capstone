<template>
  <div>
    <div class="container flex-container" v-if="product">
<form @submit.prevent="updateProduct" >
      <label for="productName">Name</label>
      <input type="text" autocomplete="off" required id="productName" name="productName" v-model="product.prodName"
        :placeholder="product.prodName" />

      <label for="quantity">Quantity</label>
      <input type="text" autocomplete="off" required id="quantity" name="quantity" v-model="product.quantity"
        :placeholder="product.quantity" />

      <label for="quantity">Price</label>
      <input type="text" autocomplete="off" required id="amount" name="amount" v-model="product.amount"
        :placeholder="product.amount" />

      <label for="quantity">Category</label>
      <input type="text" autocomplete="off" required id="category" name="category" v-model="product.category"
        :placeholder="product.category" />

      <label for="image">Image</label>
      <input type="text" autocomplete="off" required id="prodUrl" name="prodUrl" v-model="product.prodUrl"
        :placeholder="product.prodUrl" />

      <label for="category">Category</label>
      <input type="text" autocomplete="off" required id="category" name="category" v-model="product.category"
        :placeholder="product.category" />

      <button  class="btn-submit" type="submit">Submit</button>
    </form>
    </div>
  </div>
</template>

<script>


export default {

  data() {
    return {
    prodId: "",
        prodName: "",
        quantity: "",
        amount: "",
        category: "",
        prodUrl: "https://i.postimg.cc/43GzNPSc/img1.jpg",
      }


  },
  methods: {
    async updateProduct() {
      try {
        const payload = {
          prodId: this.$route.params.id,
          prodName: this.product.prodName,
          quantity: this.product.quantity,
          amount: this.product.amount,
          category: this.product.category,
          prodUrl: this.product.prodUrl,
        };
        await this.$store.dispatch("updateProduct", payload);
        this.prodId = "",
        this.prodName = "";
        this.quantity = "";
        this.amount = "";
        this.category = "";
        this.prodUrl = "";

        this.$router.push("/admin");
        alert("Product has been updated");
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    // Fetch product data from the store if not already loaded
    if (!this.product) {
      this.$store.dispatch("fetchProduct", this.$route.params.id);
    }
  },
};
</script>

<style scoped>
label {
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
}

label {
  font-size: 1.5rem;
  margin-top: 2.5rem;
}

input {
  font-size: 1.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
}

.btn-submit {
  margin-top: 2rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background-color: #0033ff;
  color: #ffffff;
  text-align: center;
  width: fit-content;
  border-radius: 0.2rem;
  font-size: 1.5rem;
}
</style>
