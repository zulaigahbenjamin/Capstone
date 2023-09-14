import { createStore } from "vuex";
import axios from 'axios'
const apiUrl = 'https://zulaigahcapstoneapi.onrender.com/';
import VueCookies  from "vue3-cookies/dist/interfaces";
const Cookies = VueCookies;
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
    // addProductToCart: null,
    // addProduct: null,
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
      state.setRegistrationStatus = status;
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

    async fetchProduct( prodId) {
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
        let {result, msg, err} = await response.data;
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
          context.commit("setUser", { result, msg });
          Cookies.set("user", { msg, token, result });
          authuser.applyToken(token);
          sweetAlert({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 1000,
          });
          router.push({ name: "home" });
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
    

    
 

    cookieCheck(context) {
      const token = Cookies.get("userTo  ken");
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
    
   fetchCart({commit}){
    
    const data = JSON.parse(localStorage.getItem('cart'))
    console.log(data);

    if(data){
      commit('setCart', data)
    }
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
        }
      } catch (error) {
        console.error(error);
      }
    },



    async removeProductFromCart(context, { userId, cartId }) {
      try {
        await axios.delete(`${apiUrl}users/${userId}/cart/${cartId}`);

        context.commit("removeFromCart", cartId);
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


  //USERS
  
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
  async updateUsers(context, payload) {
    try {
      const response = await axios.patch(`https://capstone-8rni.onrender.com/user/${payload.UserID}`, payload); 
      // const response = await axios.patch(`http://localhost:3000/user/${payload.UserID}`, payload); 
      const {msg} = response.data;
      if(msg) {
        context.dispatch("fetchUsers");
        sweet({
          title: "User Updated",
          text: msg,
          icon: "success",
          timer: 2000
        })
      }else {
        sweet({
          title: "error",
          text: msg,
          icon: "error",
          timer: 2000
        })
      }
    } catch (error) {
      console.error(error);
    }
  },
//DELETE USER
  deleteUser(context,UserID) {
      
    axios.delete(`https://capstone-8rni.onrender.com/user/${UserID}`)
    .then(response => {
     context.dispatch("fetchUsers");
    })
  .catch (err => {
   alert(err);
 })
},
  //add user
  addUser(context,payload) {
    axios.post("https://capstone-8rni.onrender.com/register", payload)
      .then(response => {
        console.log("User added:", response.data);
        context.dispatch("fetchUsers")
      })
      .catch(error => {
        console.error("Error adding user:", error);
        alert("An error occurred while adding the user.");
      });
      alert("New user has been added.")
  },
  


  //add product
  addProduct(context,payload) {
    axios.post(`${apiUrl}/product`, payload)
      .then(response => {
        console.log("Product added:", response.data);
        context.dispatch("fetchProducts")
      })
      .catch(error => {
        console.error("Error adding product:", error);
        alert("An error occurred while adding the product.");
      });
      alert("Item has been added.")
  },

  //edit
  async updateProducts(context, payload) {
    try {
      const response = await axios.post(`${apiUrl}product/${payload.prodId}`, payload);
      const productToEdit = response.data;
      context.dispatch("fetchProducts");
      sweet({
        title: "Product Updated",
        text: productToEdit.msg,
        icon: "success",
        timer: 2000
      })
    } catch (error) {
      console.error(error);
    }
  },


  //delete
  deleteProduct(context,ProdID) {
      
    axios.delete(`https://capstone-8rni.onrender.com/product/${ProdID}`)
    .then(response => {
     context.dispatch("fetchProducts");
    })
  .catch (err => {
   alert(err);
 })
},
  modules: {

  },
});