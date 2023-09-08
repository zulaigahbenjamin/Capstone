<template>
  <div>
    <div class="containers ">
      <label>Name</label><br/>
      <input type="text" autocomplete="on" required name="prodName" v-model="prodName" />
      <br/>
      <label>Quantity</label>
      <input type="text" autocomplete="ofn" required name="quantity" v-model="quantity" />
      <label>Price</label>
      <input type="number" autocomplete="off" required name="amount" v-model="amount" />
      <label>Category</label>
      <input type="text" autocomplete="off" required name="category" v-model="category" />
      <label>Image</label>
      <input type="text" autocomplete="off" required name="prodUrl" v-model="prodUrl" />
      <!-- <label>Description</label>
  
        <input
          type="text"
          autocomplete="off"
          required
          name="description"
          v-model="description"
        /> -->

      <button @click="addProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      prodName: "",
      quantity: "",
      amount: "",
      category: "",
      prodUrl: "",
     
    };
  },
  methods: {
    async addProduct() {
      try {
        await axios.post("https://zulaigahcapstoneapi.onrender.com/products", {
          prodName: this.prodName,
          quantity: this.quantity,
          amount: this.amount,
          category: this.category,
          prodUrl: this.prodUrl,
          // description: this.description,
        });

        this.productName = "";
        this.quantity = "";
        this.amount = "";
        this.category = "";
        this.prodUrl = "";
        //   this.description = "";

        this.$router.push("/products");
        alert("Product has been created");
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>
  
<style scoped>
label {
  color:black;
  
}

.containers {
  margin-bottom:20px;
}

label {
  font-size: 1.5rem;
  margin-top: 2.5rem;
}

input {
  font-size: 1.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
  width:200px;
}

.btn-submit {
  margin-top: 2rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background-color: brown;
  color: #ef87ec;
  text-align: center;
  width: fit-content;
  border-radius: 0.2rem;
  font-size: 1.5rem;
}
</style>