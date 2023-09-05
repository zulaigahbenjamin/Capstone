<template>
    <div class="col-md-12 mb-4 input-group">
      <input class="form-control search" placeholder="What are you looking for?" @keyup="search($event.target.value)"/>
      <div class="input-group-append">
        <select class="form-select" @change="sort($event.target.value)">
          <option>Select</option>
          <option value="asc">Price Ascending</option>
          <option value="desc">Price Descending</option>
        </select>
      </div>
    </div>
  
       <div class="container-fluid">
            <div class="row gap-3 justify-content-center" v-if="products">
              <div v-for="product of products" :key="product.id" class="col-12 col-sm-6 col-md-3 col-lg-${product.size} my-4">
                <div style="width:100%;height:100%;" class="card">
                  <img :src="product.prodUrl" class="card-img-top" style="padding: 0.6rem;" height="390">
                  <div class="card-body">
                    <h5 class="card-title">{{ product.prodName}}</h5>
                    <p class="card-text">{{ product.category}}</p>
                    <p class="card-text">R {{ product.amount }}</p>
                 <router-link :to ="{name: 'product', params: {id: product.prodId}}">See more
                 </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div style="text-align:center !important; margin-top:3rem;" v-else>
              Loading...
            </div>
          </div>
  
    
  </template>
  
  <script>
  export default {
    name: "products",
    props: ['products', 'filters', 'lastPage'],
    emits: ['set-filters'],
    setup(props, context) {
      const search = (s) => {
        context.emit('set-filters', {
          ...props.filters,
          s,
          page: 1
        })
      }
  
      const sort = (sort) => {
        context.emit('set-filters', {
          ...props.filters,
          sort,
          page: 1
        })
      }
  
      const loadMore = () => {
        context.emit('set-filters', {
          ...props.filters,
          page: props.filters.page + 1
        })
      }
  
      return {
        search,
        sort,
        loadMore
      }
    }
  }
  </script>

  <style scoped>
  .input-group {
    margin-top:20px;
    position:relative;
  }
 input{
    width:200px;
  } 
  </style>