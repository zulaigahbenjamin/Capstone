<template>
  <div>
    <h1>YOUR ITEMS</h1>
    <div v-if="cart && cart.length > 0">
      <div v-for="(product, prodId) in cart" :key="prodId">
        <h1>{{ product.prodName }}</h1>
        <img :src="product.prodUrl" alt="" class="w-20" />
        <h2>Quantity: {{ product.quantity }}</h2>
        <h3>Price: R{{ product.amount }}</h3>

        <button @click="removeProductFromCart(index)">Remove</button>
      </div>
    </div>
    <div v-else>
      <p>Add TO Your Cart!</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
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