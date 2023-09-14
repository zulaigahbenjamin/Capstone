import { createStore } from "vuex";
import axios from 'axios'
const apiUrl = 'https://zulaigahcapstoneapi.onrender.com/';

import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    userData: null,
    userRole: null,
    msg: null,
    error: null,
    setRegistrationStatus: null,
    logStatus: null,
    cart: [],
    logStatus: null,
    userAuth: null,

  },

  getters: {
 cartTotalPrice(state) {
      // Use the reduce function to sum the amounts in the cart
      const totalPrice = state.cart.reduce(
        (total, product) => total + parseFloat(product.amount),
        0
      );

      // Use toFixed to round to 2 decimal places and convert it back to a string
      return totalPrice.toFixed(2);
    },
  },
  mutations: {

    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_PRODUCT(state, product) {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setRegistrationStatus(state, status) {
      state.setRegistrationStatus = status;
    },
    setLogStatus(state, status) {
      state.logStatus = status;
    },

    setToken(state, token) {
      state.token = token;
    },
    setUserData(state, userData) {
      state.userData = userData;
      if (userData && userData.userRole) {
        state.userRole = userData.userRole;
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(userData, userData.userRole);
      } else {
        state.userData = null;
        state.userRole = null;
        localStorage.removeItem("userData");
      }
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setError(state, error) {
      state.error = error;
    },
    setCart(state, value) {
      state.cart = value;
    },

    addProductToCart(state, product) {
      state.cart.push(product);
    },

    removeFromCart(state, cartId) {
      // Remove the item from the cart state
      state.cart = state.cart.filter((cart) => cart.cartId !== cartId);
    },

    setFilteredProducts(state, selectedCategory) { // Mutation to set filteredProducts
      state.filteredProducts = state.products.filter((product) => {
        return product.category === selectedCategory || selectedCategory === "all";
      });
    },

    updateUser: (state, updatedUser) => {
      state.user = updatedUser;
    },
    //admin
    addProduct(state, product) {
      state.products.push(product); 
    },
  deleteProduct(state, productId) {
    state.products = state.products.filter((product) => product.id !== productId);
  },
  //update
  updateProduct(state, data) {
    const index = state.products.findIndex(product => product.id === data.id);
    if (index !== -1) {
      state.products[index] = data;
    }
  },
  
  updateUser(state, data) {
    const index = state.users.findIndex(user => user.id === data.id);
    if (index !== -1) {
      state.users[index] = data;
    }
  },
  //delete
  //delete user
deleteUser(state, userId) {
  state.users = state.users.filter((user) => user.id !== userId);
},

    clearCart(state) {
      state.cartItems = [];
    },
    setUserLoggedIn: (state, userLog) => {
      state.userLog = userLog;
    }
  },
  actions: {
    async fetchUsers(context) {
      try {
        let response = await fetch(`${apiUrl}users`);
        let { results } = await response.json();
        context.commit("setUsers", results);
      } catch (error) {
        alert(error.message);
      }
    },

    getUser: async (context, userId) => {
      try {
        const res = await get(`${apiUrl}user/${userId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by Id");
        }
        const user = await res.json();

        context.commit("setUser", user);
      } catch (error) {
        console.error(error);
      }
    },

    async fetchProducts(context) {
      try {
        let response = await fetch(`${apiUrl}products`);
        let { results } = await response.json();
        context.commit("SET_PRODUCTS", results);
      } catch (error) {
        alert(error.message);
      }
    },

    async fetchProduct(prodId) {
      try {
        let response = await fetch(`${apiUrl}product/${prodId}`);
        let { result } = await response.json();
        context.commit("SET_PRODUCT", result);
      } catch (error) {
        alert(error.message);
      }
    },




    async Register(context, payload) {
      try {
        const response = await axios.post(`${apiUrl}register`, payload);
        console.log('Result:', res);
        let { result, msg, err } = await response.data;
        if (msg) {
          context.commit("setUsers", msg)
          context.commit('spinner', false)
        }
        else {
          context.commit('setMsg', err)
        }
      }
      catch (err) {
        console.error(err);
      }
    },


    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${apiUrl}login`, payload)
        ).data;
        if (result) {
          console.log(result)
          context.commit("setUser", { result, msg });
          cookies.set("legitUser", { msg, token, result });
          authuser.applyToken(token);
          sweetAlert({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 1000,
          });
          this.$router.push('/userprofile');
        } else {
          sweetAlert({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 1000,
          });
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },





    // cookieCheck(context) {
    //   const token = cookies.get("userToken");
    //   if (token) {
    //     context.commit("setToken", token);
    //   }
    // },

    // init(context) {
    //   context.dispatch("cookieCheck");
    // },


    //logout
    async logout(context) {
      // context.commit("setToken", null);
      context.commit("setUser");
      location.reload()
      cookies.remove("legitUser");
    },




    //cart
    async getCart(context, id) {
      const res = await axios.get(`${apiUrl}users/${id}/cart`);
      context.commit("setCart", res.data);
      console.log(id);
    },
    async addToCart({ commit }, { userId, prodId }) {
      try {
        // Send a POST request to your server's API endpoint
        const response = await axios.post(`${apiUrl}users/${userId}/cart`, {
          userId,
          prodId,
        });

        // Handle the response as needed
        if (response.status === 200) {
          // The item was added to the cart successfully
          // You can commit a mutation to update the cart in your store if needed
          commit("addProductToCart", response.data); // Assuming the response contains the added product
        } else {
          // Handle other response statuses or errors
          // You can also use try-catch blocks to handle errors more precisely
        }
      } catch (error) {
        console.error(error);
        // Handle network errors or other exceptions
      }
    },



    async removeFromCart({ commit }, { userId, cartId }) {
      try {
        await axios.delete(`${apiUrl}users/${userId}/cart/${cartId}`);

        commit("removeFromCart", cartId);
      } catch (error) {
        console.error(error);
      }
    },

    async clearCart({ commit }, { userId }) {
      try {
        await axios.delete(`${apiUrl}users/${userId}/cart`);
        commit("clearCart", userId);
      } catch (error) {
        console.error(error);
      }
    },
  
  },

  //USERS
    //update user
    async updateUser(context, payload) {
      try {
        const { res } = await axios.put(
          `${apiUrl}users/${payload.userId}`,
          payload
        );
        const { msg, err } = res.data;
        if (msg) {
          context.commit("setUser", msg);
        }
        if (err) {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },

  //DELETE USER
  async deleteUser(context, id) {
    try {
      // Send a DELETE request to delete the user
      const response = await axios.delete(`${apiUrl}users/${id}`);

      if (response.status === 204) {
        // User deleted successfully
        context.commit("setUser", null); // Clear the user data in the store
        console.log("User deleted successfully");
      } else {
        // Handle other response statuses or errors
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error(error);
      // Handle network errors or other exceptions
    }
  },
   //add user
 



   //add product
   async addProduct(context, productData) {
    try {
      const res = await axios.post(`${apiUrl}products`, productData);
      if (res.status !== 200) {
        throw new Error("Failed to add product");
      }
  
      const product = res.data;
      context.commit("addProduct", product); // Pass the payload to the mutation
      context.commit("SET_PRODUCT", product); // Update the "product" state
    } catch (error) {
      console.error(error);
    }
  },
  
  
  async updateProduct(context, payload) {
    try {
      const { res } = await axios.put(
        `${apiUrl}products/${payload.prodId}`,
        payload
      );
      const { msg, err } = res.data;
      if (msg) {
        context.commit("setProduct", msg);
      }
      if (err) {
        context.commit("setMsg", err);
      }
    } catch (e) {
      context.commit("setMsg", "an error occured");
    }
  },
  async deleteProduct(context, id) {
    try {
      // Send a DELETE request to delete the user
      const response = await axios.delete(`${apiUrl}products/${id}`);

      if (response.status === 204) {
        // User deleted successfully
        context.commit("setProduct", null); // Clear the user data in the store
        console.log("Product deleted successfully");
      } else {
        // Handle other response statuses or errors
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error(error);
      // Handle network errors or other exceptions
    }
  },

  modules: {

  },
});