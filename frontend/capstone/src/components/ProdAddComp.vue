<template>
  <div>
    <div class="container flex-container">
      <form @submit.prevent="addProduct">
        <label>Product Id</label>
        <input type="text" autocomplete="off" required name="prodId" v-model="prodId" />
        <label>Name</label>
        <input type="text" autocomplete="off" required name="prodName" v-model="prodName" />
        <label>Quantity</label>
        <input type="text" autocomplete="off" required name="quantity" v-model="quantity" />
        <label>Price</label>
        <input type="number" autocomplete="off" required name="amount" v-model="amount" />
        <label>Category</label>
        <input type="text" autocomplete="off" required name="category" v-model="category" />
        <label>Image</label>
        <input type="text" autocomplete="off" required name="prodUrl" v-model="prodUrl" />


        <button class="btn-submit" type="submit">Submit</button>
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
      quantity: 0,
      amount: "",
      category: "",
      prodUrl: "",
    };
  },
  computed: {
    Msg() {
      return this.$store.state.Msg;
    },
  },

  methods: {
    async addProduct() {
      try {
          this.$store.dispatch("addProduct", {
          prodId: this.prodId,
          prodName: this.prodName,
          quantity: this.quantity,
          amount: this.amount,
          category: this.category,
          prodUrl: this.prodUrl,
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

<style scoped>
label {
  color: rgb(13, 13, 13);
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

/* .btn-submit {
  margin-top: 2rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background-color: #09ff00;
  color: #ffffff;
  text-align: center;
  width: fit-content;
  border-radius: 0.2rem;
  font-size: 1.5rem;
} */
</style>