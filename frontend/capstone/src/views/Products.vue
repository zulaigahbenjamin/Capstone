<template>
  <input
    class="m-2"
    v-model="searchTerm"
    placeholder="Search for a product..."
  />
  <h1>Products</h1>
  <div class="container">
    <div class="filter-btns">
      <select id="sort-select" v-model="selectedSort">
        <option value="options">Sort options</option>
        <option value="alphabetical">Sort Alphabetically</option>
        <option value="price-high">Sort by Price (High to Low)</option>
        <option value="price-low">Sort by Price (Low to High)</option>
      </select>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'all' }"
        @click="selectFilter('all')"
      >
        all
      </button>
   
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'Roasted' }"
        @click="selectFilter('Roasted')"
      >
        Roasted Beans
      </button>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'Lightly Roasted' }"
        @click="selectFilter('Lightly Roasted')"
      >
        Lightly Roasted Beans 
      </button>
      <button
        type="button"
        class="filter-btn"
        :class="{ 'active-btn': selectedFilter === 'Arabica' }"
        @click="selectFilter('Arabica')"
      >
        Arabica Beans
      </button>
    </div>
  </div>
  <div
    v-if="filteredProducts.length > 0"
    class="products_container media-container row row-cols-4 m-0"
    id="products"
  >
    <CardComp
      v-for="product of filteredProducts"
      :key="product.prodId"
      :product="product"
    />
    <sort/>
  </div>
  <SpinnerComp v-else />
  <sort :products="products"/>
</template>


<script>
import CardComp from "@/components/CardComp.vue";
import sort from "@/components/SortComp.vue"
import SpinnerComp from "@/components/spinnerComp.vue";
import axios from 'axios'
export default {
  data() {
    return {
      selectedFilter: "all",
      selectedSort: "options",
      products: [],
      filter: [],
      searchTerm: "",
    };
  },
  computed: {
    sortedProducts() {
      let sorted = this.products;
//change 
      if (this.selectedFilter !== "all") {
        sorted = sorted.filter(
          (product) => product.category === this.selectedFilter
        );
      }

      if (this.selectedSort === "alphabetical") {
        sorted.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (this.selectedSort === "price-high") {
        sorted.sort((a, b) => b.amount - a.amount);
      } else if (this.selectedSort === "price-low") {
        sorted.sort((a, b) => a.amount - b.amount);
      }

      return sorted;
    },
    filteredProducts() {
      return this.sortedProducts.filter((product) =>
        product.prodName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
    },
  },
 
    created() {
    const prodId = this.$route.params.id;
    axios
      .get(`https://zulaigahcapstoneapi.onrender.com/products/${prodId}`)
      .then((response) => {
        this.product = response.data;
      })
      .catch((error) => {
        console.error(error);
        this.error = "An error occurred while fetching product details.";
      });
  },


  components: { CardComp, SpinnerComp,sort },
};
</script>


