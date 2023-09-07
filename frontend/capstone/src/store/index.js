import { createStore } from 'vuex';

const apiUrl = 'https://zulaigahcapstoneapi.onrender.com/';

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    filteredProducts: [],
    
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

    setSpinner(state, products) {
      state.showSpinner = products;
    },
    setFilteredProducts(state, selectedCategory) { // Mutation to set filteredProducts
      state.filteredProducts = state.products.filter((product) => {
        return product.category === selectedCategory || selectedCategory === "all";
      });
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
    
    async fetchProduct(context, id) {
      try {
        let response = await fetch(`${apiUrl}product/${id}`);
        let {result} = await response.json();
        context.commit("SET_PRODUCT", result[0]);
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
    filterProducts(context, selectedCategory) {
      const products = context.state.products;
      const filteredProducts = products.filter((product) => {
        return product.category === selectedCategory || selectedCategory === "all";
      });
      context.commit("setFilteredProducts", filteredProducts);
    },

    
  },
  modules: {
  }
})