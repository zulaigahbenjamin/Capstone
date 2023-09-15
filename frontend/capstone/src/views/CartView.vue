<template >
  <div style="background-color:rgba(236, 232, 231, 0.753);">
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
              <td>{{ item.product.prodId }}</td>
              <td>{{ item.product.prodName }}</td>
              <td>{{ item.product.category }}</td>
              <td><img class="prod" :src="item.product.prodUrl" alt=""></td>
              <td>R {{ item.product.amount }}</td>
              <td>

                <button @click="RemoveItem(item)" class="btn btn-sm btn-secondary">-</button>
                {{ item.product.quantity }}
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
        <button @click="clearCart()">Clear</button>
      </div>
      <div class="d-flex justify-content-end w-100" v-if="cart.length > 0">
        <!-- ... Existing code for displaying cart items ... -->
        <div id="grandTotal" class="text-black">Your Total: R {{ grandTotal }}</div>
      </div>
      <div class="container">
        <h2 class="heading">How would you like to pay </h2>
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
          <button @click="checkout()" type="submit" class="btn btn-sm btn-secondary">Checkout</button>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

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
      return item.product.amount * item.product.quantity;
    },
    clearCart() {
      // Clear the entire cart
      this.cart = [];
      this.saveCart();
    },
    checkout() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to proceed with the checkout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, proceed!',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          this.processCheckout();
        } else {
          // User clicked Cancel, do nothing or show a message
        }
      });
    },
    processCheckout() {
      // Perform your checkout logic here
      // You can use Swal to show success or error messages as needed
      Swal.fire('Success', 'Checkout completed successfully, Your Order is On Its Way :)!', 'success');
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

<style scoped>
.heading {
  text-align: center;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text {
  font-size: 45px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group {
  display: block;
  font-weight: bold;
}

.form-group {
  margin-right: 10px;
}

.prod {
  height: 5rem;
  width: 5rem;
}

.checkout {
  padding: 10rem;
}

#grandTotal {
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin-right: 5rem;
}

.hero {
  width: auto;
}

.hero-inner {
  font-size: 65px;
  /* background-color: #E9D5B7; */
  color: black;
}

#featured,
h2,
p {
  font-family: 'REM', sans-serif;
}

* {
  box-sizing: border-box;
}

.container {
  width: 900px;
  margin: 0px auto;
}

.text-black {
  text-align: center;
  font-weight: bold;
  margin: 3rem;
  font-size: 25px !important;

}

.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: black;
  border-radius: 7px;
  letter-spacing: 6px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}

@media screen and (max-width: 500px) {
  .hero-inner {
    font-size: 37px !important;
  }

  .text-black {
    font-size: 18px !important;
  }

  .btn {
    font-size: 10px !important;
  }

  .table {
    font-size: 12px !important;
  }

  .prod {
    height: 3rem;
    width: 3rem;
  }

  .checkout {
    padding: 0.5rem;
  }

  #grandTotal {
    margin-right: 0;
  }

  .container {
    max-width: 100%;
    padding: 0.5rem;
  }

}

/* css for card */
.rightside {
  background-color: #ffffff;
  width: 35rem;
  border-bottom-right-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  padding: 1rem 2rem 3rem 3rem;
}

/* p{
    display:block;
    font-size: 1.1rem;
    font-weight: 400;
    margin: .8rem 0;
} */

.inputbox {
  color: #030303;
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1.5px solid #ccc;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  font-family: 'Roboto', sans-serif;
  color: #615a5a;
  font-size: 1.1rem;
  font-weight: 500;
  outline: none;
}

.expcvv {
  display: flex;
  justify-content: space-between;
  padding-top: 0.6rem;
}

.expcvv_text {
  padding-right: 1.2rem;
}

.expcvv_text2 {
  padding: 0 1.2rem;
}

.button {

  padding: 10px;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 10px;
  width: 10%;
  letter-spacing: .11rem;
  outline: none;

}

.button:hover {
  transform: scale(1.05) translateY(-3px);
  box-shadow: 2px 2px 3px #38373785;
}

@media only screen and (max-width: 1000px) {
  .card {
    flex-direction: column;
    width: auto;

  }



  .rightside {
    width: auto;
    border-bottom-left-radius: 1.5rem;
    padding: 0.5rem 3rem 3rem 2rem;
    border-radius: 0;
  }
}</style>

