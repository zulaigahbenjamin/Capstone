<template>
  <div>
    <div class="containers ">
      <label>Product ID</label>
      <input type="text" autocomplete="no" required name="prodId" v-model="prodId"/>
    <br/>

      <label>Name</label><br/>
      <input type="text" autocomplete="on" required name="prodName" v-model="prodName" />
      <br/>
      <label>Quantity</label>
      <input type="text" autocomplete="ofn" required name="quantity" v-model="quantity" />
      <br/>
      <label>Price</label>
      <input type="number" autocomplete="off" required name="amount" v-model="amount" />
      <br/>
      <label>Category</label>
      <input type="text" autocomplete="off" required name="category" v-model="category" />
      <br/>
      <label>Image</label>
      <input type="text" autocomplete="off" required name="prodUrl" v-model="prodUrl" />
      <br/>


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
      prodURL: "https://i.postimg.cc/43GzNPSc/img1.jpg",
   
    };
  },
  methods: {
    async addProduct() {
      try {
        this.$store.dispatch("addProduct", {
          prodName: this.prodName,
          quantity: this.quantity,
          amount: this.amount,
          category: this.category,
          prodURL: this.prodURL,
      
        });

        this.$router.push("/admin");
        alert("Product has been created");
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>
<!-- <script>
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
          prodId: this.prodId,
          prodName: this.prodName,
          quantity: this.quantity,
          amount: this.amount,
          category: this.category,
          prodUrl: this.prodUrl,
          // description: this.description,
        });
        this.prodId= "";
        this.prodName = "";
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
}; -->
<!-- </script> -->
  
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