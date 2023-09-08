<!-- Example cart component template -->
<template>
  <div>
    <h2>Cart</h2>
    <ul>
      <li v-for="(product, index) in $store.state.cart" :key="index, product">
        <h3>{{ product.prodName }}</h3>
        <img :src="product.prodUrl" alt="Product Image" />
        <p>Quantity: {{ product.quantity }}</p>
        <p>Price: R {{ product.amount }}</p>

      </li>
    </ul>
  </div>
</template>


<script>
export default {
  computed: {
    cart() {
      this.$store.dispatch("addProductToCart", productObject);
    },
  },
  methods: {
    removeProductFromCart(index) {
      if (index >= 0 && index < this.cart.length) {
        this.$store.commit("removeProductFromCart", index);
      }
    },
  },
};
</script>