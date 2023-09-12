import { createStore } from "vuex";
import axios from 'axios'
const apiUrl = 'https://zulaigahcapstoneapi.onrender.com/';

import Cookies from "js-cookie";
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
    addProductToCart: null,
  },

  getters: {
    cartTotalPrice(state) {
      return state.cart.reduce((total, product) => total + product.amount, 0);
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
      state.registrationStatus = status;
    },
    setLogStatus(state, status) {
      state.logStatus = status;
    },
    setToken(state, token) {
      state.token = token;
      Cookies.set("userToken", token, {
        expires: 1,
        path: "/",
        secure: true,
        sameSite: "None",
      });
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
    removeProductFromCart(state, prodId) {
      state.cart = state.cart.filter((product) => product.prodId !== prodId);
    },
    setFilteredProducts(state, selectedCategory) { // Mutation to set filteredProducts
      state.filteredProducts = state.products.filter((product) => {
        return product.category === selectedCategory || selectedCategory === "all";
      });
    },
   addProduct(state, product) {
      state.products.push(product); 
    },
    updateUser: (state, updatedUser) => {
      state.user = updatedUser;
    },

    clearCart(state) {
      state.cartItems = [];
    },
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
        const res = await fetch(`${apiUrl}user/${userId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
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
    async fetchProduct(context, prodId) {
      try {
        let response = await fetch(`${apiUrl}product/${prodId}`);
        let {result} = await response.json();
        context.commit("SET_PRODUCT", result[0]);
      } catch (error) {
        alert(error.message);
      }
    },

    async register({ commit }, userData) {
      try {
        const response = await axios.post(`${apiUrl}register`, userData);
        const { msg, token } = response.data;
  
        if (token) {
          commit('setRegistrationStatus', 'Registered successfully');
          return { success: true, token };
        } else if (msg === 'An error occurred') {
          commit('setError', msg);
          commit('setRegistrationStatus', 'Not registered');
          return { success: false, error: msg };
        }
      } catch (error) {
        commit('setError', error.message);
        commit('setRegistrationStatus', 'Not registered');
        throw error;
      }
    },

    
    async login(context, payload) {
      try {
        const res = await axios.post(`${apiUrl}login`, payload);
        const { msg, err, token, userData } = res.data;
        if (msg === "You are providing the wrong email or password") {
          console.log(msg);
          context.commit("setError", msg);
          context.commit("setLogStatus", "Not logged in");
          return { success: false, error: msg };
        }
        if (token) {
          // Save the token in local storage
          localStorage.setItem("userToken", token);
          localStorage.setItem("userData", JSON.stringify(userData));

          context.commit("setUser", userData);
          context.commit("setToken", token);

          // Log user details here
          console.log("User logged in:", userData);

          context.commit("setLogStatus", res.data.message);

          return { success: res.data.success, token };
        } else if (err) {
          context.commit("setToken", null);
          context.commit("setError", err);
          return { success: false, error: err };
        } else {
          context.commit("setError", "Unknown error during login");
          context.commit("setLogStatus", "not logged in");
          return { success: false, error: "Unknown error" };
        }
      } catch (err) {
        if (err.resp) {
          console.error(
            "Server gave an error: ",
            err.resp.status,
            err.resp.data
          );
        } else if (err.req) {
          console.error(
            "No response from the server. Check your internet connection"
          );
        } else {
          console.log("An error occurred: ", err);
        }
        context.commit("setError", "An error occurred while trying to log in");
        context.commit("setLogStatus", "Not logged in");
        return { success: false, error: "Network error" };
      }
    },

    cookieCheck(context) {
      const token = Cookies.get("userToken");
      if (token) {
        context.commit("setToken", token);
      }
    },

    init(context) {
      context.dispatch("cookieCheck");
    },
    async logout(context) {
      context.commit("setToken", null);
      context.commit("setUser", null);
      context.commit("setUserData", null);
      Cookies.remove("userToken");
    },
    
    async getCart(context, id) {
      const res = await axios.get(`${apiUrl}orders/${id}/cart`);
      context.commit("setCart", res.data);
      console.log(id);
    },

   
    async addProductToCart(context, { userId, prodId }) {
      try {
        const response = await axios.post(`${apiUrl}users/${userId}/cart`, {
          userId,
          prodId,
        });

        if (response.status === 200) {
          context.commit("addToCart", response.data);
        }
      } catch (error) {
        console.error("Error adding product to cart:", error);
        throw error;
      }
    },



    async removeProductFromCart(context, { userId, cartId }) {
      try {
        await axios.delete(`${apiUrl}users/${userId}/cart/${cartId}`);

        context.commit("removeFromCart", cartID);
      } catch (error) {
        console.error("Error removing product from cart:", error);
        throw error;
      }
    },
  },
  async clearCart({ commit }, { userId }) {
    try {
      await axios.delete(`${apiUrl}users/${userId}/cart`);
      commit("clearCart", userId);
    } catch (error) {
      console.error(error);
    }
  },


  //crud
  
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

  //update user
  async updateUser(context, payload) {
    try {
      const { res } = await axios.put(
        `${apiUrl}users/${payload.userID}`,
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

  //add product
  addProduct: async (context, payload) => {
    try {
      const res = await axios.post(`${apiUrl}products`, payload);
      if (res.status !== 200) {
        throw new Error("Failed to add product");
      }

      const product = res.data;
      context.commit("addProduct");
      context.commit("SET_PRODUCT", product);
    } catch (error) {
      console.error(error);
    }
  },
  async updateProduct(context, payload) {
    try {
      const { res } = await axios.put(
        `${apiUrl}products/${payload.prodID}`,
        payload
      );
      const { msg, err } = res.data;
      if (msg) {
        context.commit("SET_PRODUCT", msg);
      }
      if (err) {
        context.commit("setMsg", err);
      }
    } catch (e) {
      context.commit("setMsg", "an error occured");
    }
  },
  async deleteProduct(context, prodId) {
    try {
      // Send a DELETE request to delete the user
      const response = await axios.delete(`${apiUrl}product/${prodId}`);

      if (response.status === 204) {
        // User deleted successfully
        context.commit("SET_PRODUCT", null); // Clear the user data in the store
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
  modules: {},
});