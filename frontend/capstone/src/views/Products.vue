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
        />
      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/components/SortComp.vue";
import { onMounted, ref } from "vue";

export default {
  name: "Frontend",
  components: { Products },
  setup() {
    const allProducts = ref([]);
    const filteredProducts = ref([]);
    const filters = ref({
      s: "",
      sort: "",
      page: 1,
    });

    onMounted(async () => {
      const response = await fetch(
        "https://zulaigahcapstoneapi.onrender.com/products"
      );
      const responseData = await response.json();

      if (Array.isArray(responseData.results)) {
        allProducts.value = responseData.results;
        filteredProducts.value = responseData.results;
      } else {
        console.error("The response content is not an array:", responseData);
      }
    });

    const filtersChanged = (f) => {
      filters.s = f.s;
      filters.sort = f.sort;
      filters.page = f.page;

      let products = allProducts.value.filter((p) => {
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

      filteredProducts.value = products;
    };

    return {
      filteredProducts,
      filters,
      filtersChanged,
    };
  },
};
</script>
<style>
.form-control {
  width:20px; 
}
.tem {
 
  background-color: rgb(248, 248, 212);

}
</style>
