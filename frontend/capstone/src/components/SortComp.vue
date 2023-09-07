<template>
 

  <div class="container-fluid">
    <div class="row gap-3 justify-content-center" v-if="products">
      <div
        v-for="product of products"
        :key="product.id"
        class="col-12 col-sm-6 col-md-3 col-lg-${product.size} my-4"
      >
        <div style="width: 100%; height: 100%" class="card">
          <img
            :src="product.prodUrl"
            class="card-img-top"
            style="padding: 0.6rem"
            height="390"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">{{ product.category }}</p>
            <p class="card-text">R {{ product.amount }}</p>
            <router-link
              :to="{ name: 'product', params: { id: product.prodId } }"
              >See more</router-link
            >
          </div>
        </div>
      </div>
    </div>
   

   
  </div>
</template>

<script>
export default {
  name: "products",

  // emits: ["set-filters"],
  // setup(props, context) {
  //   const search = (s) => {
  //     const filtered = props.products.filter((product) =>
  //       product.prodName.toLowerCase().includes(s.toLowerCase())
  //     );
  //     context.emit("set-filters", {
  //       ...props.filters,
  //       s,
  //       page: 1,
  //     });
  //   };

    // const sort = (sort) => {
    //   context.emit("set-filters", {
    //     ...props.filters,
    //     sort,
    //     page: 1,
    //   });
    // };

  //   return {
  //     search,
  //     sort,
  //   };
  // },

  // methods: {
  //   filter() {
  //     this.filteredProducts = this.products.filter((product) => {
  //       if (product.category == this.selectedCategory) {
  //         return this.selectedCategory;
  //       }
  //     });
  //   },
  //   sortProducts() {
  //     if (this.sortOrder === "price-high") {
  //       this.filteredProducts = this.products.sort(
  //         (a, b) => a.amount - b.amount
  //       );
  //     } else if (this.sortOrder === "price-low") {
  //       this.filteredProducts = this.products.sort(
  //         (a, b) => b.amount - a.amount
  //       );
  //     }
  //   },
  //   sortPrice() {
  //     this.$store.commit("sortPropertiesByPrice");
  //   },
  // },
  // watch: {
  //   selectedCategory: "filter",
  //   sortOrder: "sortProducts",
  // },
  // computed: {

  //   properties() {
  //     return this.$store.state.properties?.filter((property) => {
  //       let isMatch = true;
  //       if (
  //         !property.title.toLowerCase().includes(this.search.toLowerCase())
  //       ) {
  //         isMatch = false;
  //       }
  //       if (this.area !== "All" && this.area !== property.area) {
  //         isMatch = false;
  //       }
  //       return isMatch;
  //     });
  //   },
  // },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.input-group {
  margin-top: 20px;
  position: relative;
}
input {
  width: 200px;
}
</style>