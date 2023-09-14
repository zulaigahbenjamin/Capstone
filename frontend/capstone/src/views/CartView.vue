<!-- <template>
  <div class="container">
    <h1>Whats In Your Bag</h1>
    <table v-if="products && products.length > 0">
      <tr>
        <td colspan="4">Your cart is empty.</td>
      </tr>
    </table>
    <table v-else>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in getCart" :key="product.prodId">
          <td><img :src="product.prodUrl" alt="" class="w-25" /></td>
          <td>{{ product.prodName }}</td>
          <td>R{{ product.amount }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <button @click="removeFromCart(product.cartId)">Remove</button>
          </td>
        </tr>
      </tbody>

      <button>
        <router-link to="/checkout" class="text-white text-decoration-none"
          >Checkout</router-link
        >
      </button>
    </table>
  </div>
</template>

<script>
export default {
  Name: "setCart",
  computed: {
    getCart() {
      console.log(this.$store.state.cart);
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.userData;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },

  mounted() {
    this.$store.dispatch("getCart", this.user.userId);
  },
  methods: {
    removeFromCart(cartId) {
      const userId = this.user.userId;

      this.$store
        .dispatch("removeFromCart", { userId, cartId })
        .then(() => {})
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    },
  },
};
</script>
<style scoped>
.container {
  height: 80vh;
}
th {
  color: white;
}
td {
  color: white;
}
button {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge var(--secondary-color);
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  margin: 14px;
}
</style> -->


<template>
  <div>
 
    <div class="checkout" v-if="cart.length > 0">
      <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.product.prodId">
            <td>{{item.product.prodId }}</td>
            <td>{{ item.product.prodName }}</td>
            <td>{{ item.product.category }}</td>
            <td><img class="prod" :src="item.product.prodUrl" alt=""></td>
            <td>R {{ item.product.amount }}</td>
            <td>

              <button @click="RemoveItem(item)" class="btn btn-sm btn-secondary">-</button>
              {{item.product.quantity }}
              <button @click="AddItem(item)" class="btn btn-sm btn-secondary">+</button>
            </td>
            <td>R {{ calculateTotal(item) }}</td>
            <td>
              <button @click="deleteProduct(productId)" class="btn btn-sm ">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      <div class="d-flex justify-content-end w-100" v-if="cart.length > 0">
      <!-- ... Existing code for displaying cart items ... -->
      <div id="grandTotal" class="text-black">Your Total: R {{ grandTotal }}</div>
    </div>
    <div class="container">
        <h2 class="heading">Select Your Payment </h2>
        <form id="payment-form">
            <div class="form-group">
                <label for="credit-card">
                    <input type="radio" id="credit-card" name="payment-option" value="credit" required> Pay with Credit Card
                </label>
            </div>
            <div class="form-group">
                <label for="debit-card">
                    <input type="radio" id="debit-card" name="payment-option" value="debit" required> Pay with Debit Card
                </label>
            </div>
            <button  @click="checkout()" type="submit" class="btn btn-sm btn-secondary">Checkout</button>
        </form>
    </div>
    </div>
  </div>
</template>

<script>
import sweet from 'sweetalert2'
export default {
  data() {
    return {
      cart: [], // Initialize cart data
    };
  },
  created() {
    // Retrieve cart data from local storage or your store
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.cart = cart;
  },
  methods: {
    AddItem(item) {
      item.product.quantity++;
      this.saveCart();
    },
    RemoveItem(item) {
      if (item.product.quantity > 1) {
        item.product.quantity--;
        this.saveCart();
      }
    },
    deleteProduct(productId) {
     
      const updatedCart = this.cart.filter(item => item.product.prodId !== productId);
      this.cart = updatedCart;
      this.saveCart();
    },
    saveCart() {
     
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    calculateTotal(item) {
      // Calculate the total price for an item based on its quantity
      return item.product.amount * item.product.quantity;
    },
    checkout(){
      sweet({
            title: "Checkout",
            text: "Payment Successful",
            icon: "success",
            timer: 2000
          })
    }
  },
  computed: {
  grandTotal() {
    let total = 0;
    for (const item of this.cart) {
      total += this.calculateTotal(item);
    }
    return total;
  },
}
};
</script>

