import { createStore } from 'vuex';

const apiUrl = 'https://zulaigahcapstoneapi.onrender.com/';

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    setToken(state, token) {
      state.token = token;
    },
    setUsers(state, users) {
      state.users = users;
    },

  },
  actions: {
    async fetchProducts(context) {
      try {
        let response = await fetch(`${apiUrl}products`);
        let { results } = await response.json();
        context.commit("SET_PRODUCTS", results);
      } catch (error) {
        alert(error.message);
      }
    },
    
      async fetchProduct(context) {
        try {
          let response = await fetch(`${apiUrl}product`);
          let { results } = await response.json();
          context.commit("SET_PRODUCT", results);
        } catch (error) {
          alert(error.message);
        }
      },
   
    async fetchUsers(context) {
      try {
        let response = await fetch(`${apiUrl}users`);
        let { results } = await response.json();
        context.commit("setUsers", results);
      } catch (error) {
        alert(error.message);
      }
    },
    
  },
  modules: {
  }
})
