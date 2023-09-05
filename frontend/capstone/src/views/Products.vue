<template>
  <div class="tem">
    <h2 class="text-caro">Search Products</h2>
    <div class="sort-filter-container">
      <div class="filter-container">
        <label for="filter">Filter by:</label>
      
        <Products
          :products="filteredProducts"
          :filters="filters"
          @set-filters="filtersChanged"
          :lastPage="lastPage"
        />
      </div>
      <div class="sort-container">
        <label for="sort">Sort by:</label>
        <select id="sort">
          <option value="price-low">Price Low to High</option>
          <option value="price-high">Price High to Low</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/components/SortComp.vue";
import { onMounted, reactive, ref } from "vue";

export default {
  name: "Frontend",
  components: { Products },
  setup() {
    const allProducts = ref([]);
    const filteredProducts = ref([]);
    const filters = reactive({
      s: "",
      sort: "",
      page: 1,
    });
    const perPage = 9;
    const lastPage = ref(0);

    onMounted(async () => {
      const response = await fetch(
        "https://zulaigahcapstoneapi.onrender.com/products"
      );
      const responseData = await response.json();

      if (Array.isArray(responseData.results)) {
        allProducts.value = responseData.results;
        filteredProducts.value = responseData.results.slice(
          0,
          filters.page * perPage
        );
        lastPage.value = Math.ceil(responseData.results.length / perPage);
      } else {
        console.error("The response content is not an array:", responseData);
      }
    });

    const filtersChanged = (f) => {
      filters.s = f.s;
      filters.sort = f.sort;
      filters.page = f.page;

      let products = allProducts.value.filter((p) => {
        // Check if p.title and p.description are defined before using toLowerCase()
        const titleMatch =
          p.prodName &&
          p.prodName.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0;
        const descriptionMatch =
          p.category &&
          p.category.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0;

        return titleMatch || descriptionMatch;
      });

      if (filters.sort === "price-low") {
        products.sort((a, b) => a.amount - b.amount);
      } else if (filters.sort === "price-high") {
        products.sort((a, b) => b.amount - a.amount);
      }

      lastPage.value = Math.ceil(products.length / perPage);
      filteredProducts.value = products.slice(0, filters.page * perPage);
    };

    return {
      filteredProducts,
      filters,
      lastPage,
      filtersChanged,
    };
  },
};
</script>
