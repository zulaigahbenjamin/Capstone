<template>
  <div>
    <div class="container flex-container" v-if="product">
      <form @submit.prevent="updateProduct">
        
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

     
        <button class="btn-submit" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    prodId: Number, // Define id as a prop of type Number
  },

  data() {
    return {
      product: {
     
      prodName: "",
      quantity: "",
      amount: "",
      category: "",
      prodUrl: "",
      }
   
    }


  },
  methods: {
    async updateProduct() {
      try {
        const payload = {
        
          prodName: this.product.prodName,
          quantity: this.product.quantity,
          amount: this.product.amount,
          category: this.product.category,
          prodUrl: this.product.prodUrl,
        };
        await this.$store.dispatch("updateProduct", payload);
       
        this.product.prodName = "";
        this.product.quantity = "";
        this.product.amount = "";
        this.product.category = "";
        this.product.prodUrl = "";

        this.$router.push("/admin");
        alert("Product has been updated");
      } catch (err) {
        console.log(err);
      }
    },
    async updateProduct(updatedProduct) {
  // Check if this.products is defined before using findIndex
  if (this.products && this.products.length > 0) {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      // Update the product in the array
      this.products[index] = updatedProduct;
    }
  }
},

  },
  computed: {
   
  },
  mounted() {
    // Fetch product data from the store if not already loaded
    if (!this.product) {
      this.$store.dispatch("fetchProducts");
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
