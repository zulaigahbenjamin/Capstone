<template>
  <div class="color">
    <div class="col-md-12 mb-4">
      <div class="input-group">
        <i class="fa-solid fa-magnifying-glass" style="color: #000000;width: 50%; text-align:center;  "><input
            class="form-control search" placeholder="What are you looking for?"
            @keyup="search($event.target.value)" /></i>

      </div>
    </div>

    <div class="col-md-12 mb-4">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <label for="filter" class="filter-label">Filter by:</label>
          <select id="filter" v-model="selectedCategory" class="form-control filter-select">
            <option value="all">All Items</option>
            <option value="Roasted">Roasted</option>
            <option value="Arabica">Arabica</option>
            <option value="Lightly Roasted">Lightly Roasted</option>
          </select>
        </div>
        <div class="col-md-6 col-lg-4">
          <label for="sort" class="sort-label">Sort by:</label>
          <select id="sort" v-model="sortOrder" class="form-control sort-select">
            <option value="price-high">Price Low to High</option>
            <option value="price-low">Price High to Low</option>
          </select>
        </div>
      </div>
    </div>




    <div class="container-fluid">
      <div class="row gap-3 justify-content-center" v-if="products">
        <div v-for="product of products" :key="product.prodId" class="col-12 col-sm-6 col-md-4 col-lg-3 my-4">
          <div class="card coffee-card">
            <img :src="product.prodUrl" class="card-img-top" alt="Coffee" />
            <div class="card-body">
              <h5 class="card-title">{{ product.prodName }}</h5>
              <p class="card-text">{{ product.category }}</p>
              <p class="card-text">R {{ product.amount }}</p>
              <button style="border: none; padding: 5px; margin:;" class="btn_prod" @click="addToCart(product)">Add to cart</button>            </div>
            <div class="card-footer">
              <router-link :to="{ name: 'product', params: { id: product.prodId } }" class="btn btn-outline btn-sm">
                See More
              </router-link>

            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  props: ["products", "filters"],
  emits: ["set-filters"],
  setup(props, context) {
    const search = (s) => {
      const filtered = props.products.filter((product) =>
        product.prodName.toLowerCase().includes(s.toLowerCase())
      );
      context.emit("set-filters", {
        ...props.filters,
        s,
        page: 1,
      });
    };

    const sort = (sort) => {
      context.emit("set-filters", {
        ...props.filters,
        sort,
        page: 1,
      });
    };

    return {
      search,
      sort,
    };
  },
  data() {
    return {
      product: null,
      selectedProduct: null,
      sortOrder: "price-high",
      selectedCategory: "all",
      categories: ["Arabica", "Lightly Roasted", "Roasted"],
    };
  },
  methods: {
  addToCart(product) {
    if (localStorage.getItem('cart')) {
      const data = JSON.parse(localStorage.getItem('cart'));
      const newData = { product };
      data.push(newData);
      localStorage.setItem('cart', JSON.stringify(data)); // Use setItem to store data
    } else {
      const oldData = [{ product }];
      localStorage.setItem('cart', JSON.stringify(oldData)); // Use setItem for the initial data
    }
  },

  sort(sortOrder) {
    this.sortOrder = sortOrder;
    this.sortProducts(); // Call sortProducts to sort the products
  },
  
  sortProducts() {
    if (this.sortOrder === "price-high") {
      this.products = this.products.sort((a, b) => a.amount - b.amount);
    } else if (this.sortOrder === "price-low") {
      this.products = this.products.sort((a, b) => b.amount - a.amount);
    }
  },


  },
  watch: {
    selectedCategory: "filter",
    sortOrder: "sortProducts",
  },
  computed: {
    properties() {
      return this.$store.state.properties?.filter((property) => {
        let isMatch = true;
        if (
          !property.title.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (this.area !== "All" && this.area !== property.area) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  computed: {
    // Create a computed property to filter products by category
    filteredProducts() {
      if (this.selectedCategory === 'all') {
        return this.products; // Show all products if 'All Items' is selected
      } else {
        return this.products.filter((product) => product.category === this.selectedCategory);
      }
    },
  },
};
</script>


<style scoped>
.color {
  background-color: rgb(248, 248, 212);
}

/* Custom styling for coffee shop cards */
.coffee-card {
  background-color: #fff;
  border: 9px solid #eba75f79;
  border-radius: 9px;
  box-shadow: 1px 7px 9px rgba(212, 173, 90, 0.699);
  transition: transform 0.4s;
}

.coffee-card:hover {
  transform: scale(1.03);
}

.coffee-card .card-title {
  color: #b47d64;
  font-weight: bold;
}

.coffee-card .card-text {
  color: #aa91a6;
}

.coffee-card .btn-outline-primary {
  color: #ecabe7;

}

.coffee-card .btn-outline:hover {
  background-color: #eaa8df;
  color: #fff;
}

.coffee-card .btn-dark {
  background-color: #333;
  color: #fff;
}

.coffee-card .btn-dark:hover {
  background-color: #555;
}

.card-footer {
  white-space: 2px;
}

.search {
  width: 5rem;
  border-radius: 8px;
  padding: 10px;
  margin-left: 20px;
}

.search {
  width: 100%;
  border-radius: 8px;
  padding: 10px;
}

/* Custom styling for filter and sort containers */
.sort-filter-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

/* Custom styling for filter container */
.filter-container,
.sort-container {
  text-align: center;
}

/* Custom styling for filter label and select */
.filter-label,
.sort-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.filter-select,
.sort-select {
  width: 100%;
}
</style>

