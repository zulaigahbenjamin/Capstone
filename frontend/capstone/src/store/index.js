import { createStore } from "vuex";
const apiUrl = 'https://zulaigahcapstoneapi.onrender.com/';
import axios from "axios";
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
    regStatus: null,
    logStatus: null,
    cart: [],
  },

  mutations: {
    setCart(state, cartData) {
      state.cart = cartData;
    },
    removeItemFromCart(state, index) {
      state.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addItemToCart(state, product) {
      state.cart.push(product);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

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
    setRegStatus(state, status) {
      state.regStatus = status;
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
  },
  actions: {

    getUsers: async (context) => {
      try {
        const res = await fetch(`${apiUrl}users`);
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const users = await res.json();
        context.commit("setUsers", users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },

    getUser: async (context, id) => {
      try {
        const res = await fetch(`${apiUrl}users/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user by ID");
        }
        const user = await res.json();

        context.commit("setUser", user);
      } catch (error) {
        console.error(error);
      }
    },
    
    async getProducts(context) {
      try {
        let response = await fetch(`${apiUrl}products`);
        let  results  = await response.json();
        context.commit("SET_PRODUCTS", results);
      } catch (error) {
        alert(error.message);
      }
    },

   
    async getProducts(context, id) {
      try {
        let response = await fetch(`${apiUrl}product/${id}`);
        let result = await response.json();
        context.commit("SET_PRODUCT", result[0]);
      } catch (error) {
        alert(error.message);
      }
    },

    async register(context, payload) {
      console.log("Reached");
      try {
        const res = await axios.post(`${apiUrl}users`, payload);
        console.log("Res: ", res.data);
        const { msg, err, token } = res.data;
        if (msg === "An error occured") {
          context.commit("setError", msg);
          context.commit("setRegStatus", "Not registered");
          return { success: false, error: msg };
        } else if (token) {
          context.commit("setToken", token);
          context.commit("setRegStatus", "Registered successfully");
          return { success: true, token };
        } else if (err) {
          console.error(err);
        }
      } catch (e) {
        context.commit("setError", e);
        console.log(e);
        context.commit("setRegStatus", "Not registered");
        throw e;
      }
    },

    async login(context, payload) {
      try {
        const res = await axios.post(`${apiUrl}users/login`, payload);
        const { msg, err, token, userData } = res.data;
        if (msg === "You are providing the wrong email or password") {
          console.log(msg);
          context.commit("setError", msg);
          context.commit("setLogStatus", "Not logged in");
          return { success: false, error: msg };
        }
        if (token) {
          context.commit("setUser", userData);
          context.commit("setToken", token);

          context.commit("setLogStatus", res.data.message);
          Cookies.set("userToken", token, {
            expires: 1,
          });
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
          console.log("An error occured: ", err);
        }
        context.commit("setError", "An error occured while trying to log in");
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
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        context.commit("setCart", JSON.parse(cartData));
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
  },
  modules: {},
});