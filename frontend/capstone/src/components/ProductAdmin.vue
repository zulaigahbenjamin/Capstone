<template>
    <tr class="table-row">
      <th class="table-head text-black"> {{product.prodId}}</th>
     
      <td class="text-black ml-2">{{ product.prodName }}</td>
      <td class="text-black">{{ product.quantity }}</td>
      <td class="text-black">R{{ product.amount }}</td>
      <td class="text-black">{{ product.category }}</td>
      <td><img :src="product.prodUrl" alt="" class="prodImg m-5" /></td>
      <!-- <td class="text-white text-start w-25">
        {{ product.description }}
      </td> -->
      <td class="second-table-data">
        <div class="action">
          <button class="btn-edit">
            <router-link
              class="text-white text-decoration-none"
              :to="{ name: 'product-edit', params: { id: product.prodId } }"
            >
              Edit
            </router-link>
          </button>
          <button class="btn-delete text-white" @click="deleteProduct(product.prodId)">
            Delete
          </button>
        </div>
      </td>
    </tr>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    props: ["product"],
    methods: {
      async deleteProduct(id) {
        try {
          await axios.delete(`https://zulaigahcapstoneapi.onrender.com/products/${id}`);
          this.$store.dispatch("fetchProducts");
          alert("Product has been deleted");
        } catch (err) {
          alert(err);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .prodImg {
    width: 100px;
  }
  .table-row {
    font-size: 1.125rem;
    border-color: rgba(0, 0, 0, 0.1);
    border-bottom-width: 2px;
  }
  
  .table-head {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .second-table-data {
    gap: 1.25rem;
    align-items: center;
  }
  .action {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
  }
  .btn-edit {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: #d778c4;
    color: #fff;
    border-radius: 0.125rem;
  }
  .btn-delete {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: #da6fd1;
    border-radius: 0.125rem;
  }
  
  @media only screen and (min-width: 700px) {
    .prodImg {
      width: 100px;
    }
    .table-row {
      font-size: 1.125rem;
      border-color: rgba(0, 0, 0, 0.1);
      border-bottom-width: 2px;
      width: 1000px !important;
    }
  
    .table-head {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    .second-table-data {
      gap: 1.25rem;
      align-items: center;
    }
    .action {
      display: flex;
      justify-content: center;
      gap: 1.25rem;
    }
    .btn-edit {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      background-color: #7d4f7b;
      color: #fff;
      border-radius: 0.125rem;
    }
    .btn-delete {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      background-color: #e875dc;
      border-radius: 0.125rem;
    }
    .td {
      width: 500px !important;
      border: 2px solid white;
    }
  }
  
  @media screen and (max-width: 300px) {
    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
    .table-row {
      font-size: 1.125rem;
      border-color: rgba(0, 0, 0, 0.1);
      border-bottom-width: 2px;
      width: 600px !important;
    }
    .btn-delete {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      background-color: #e875dc;
      border-radius: 0.125rem;
    }
  }
  </style>