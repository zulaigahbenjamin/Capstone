<template>
    <div class="container">
      <h1 class="text-white">Products</h1>
      <button class="btn-add">
        <router-link to="/prod/add" class="text-white text-decoration-none">
          Add Product
        </router-link>
      </button>
      <table>
        <thead class="table-header">
          <tr>
            <th class="text-white">ID</th>
            <th class="text-white">Name</th>
            <th class="text-white">Quantity</th>
            <th class="text-white">Price</th>
            <th class="text-white">Category</th>
            <th class="text-white">Image</th>
            <th class="text-white">Description</th>
            <th class="text-white">Actions</th>
          </tr>
        </thead>
        <tbody class="table-body" v-if="products">
          <AdminComp
            v-for="product of products"
            :key="product.prodId"
            :product="product"
          />
        </tbody>
  
        <SpinnerComp v-else />
      </table>
    </div>
    <div class="container">
      <h1 class="text-white">Users</h1>
      <button class="btn-add">
        <router-link to="/users/add" class="text-white text-decoration-none">
          Add User
        </router-link>
      </button>
      <table>
        <thead class="table-header">
          <tr>
            <th class="text-white">ID</th>
            <th class="text-white">Name</th>
            <th class="text-white">Surname</th>
            <th class="text-white">Age</th>
            <!-- <th class="text-white">Gender</th> -->
            <th class="text-white">Role</th>
            <th class="text-white">Email</th>
            <th class="text-white password">Password</th>
            <!-- <th class="text-white">Image</th> -->
            <th class="text-white">Actions</th>
          </tr>
        </thead>
        <tbody class="table-body" v-if="users">
          <UserAdminComp v-for="user of users" :key="user.userId" :user="user" />
        </tbody>
  
        <SpinnerComp v-else />
      </table>
    </div>
  </template>
  
  <script>
  import SpinnerComp from "@/components/spinnerComp.vue";
  import UserAdminComp from "@/components/UserAdmin.vue";
  import AdminComp from "@/components/ProductAdmin.vue";
  
  export default {
    components: {
      AdminComp,
      UserAdminComp,
      SpinnerComp,
    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      users() {
        return this.$store.state.users;
      },
    },
    mounted() {
      this.$store.dispatch("getProducts"), this.$store.dispatch("getUsers");
    },
  };
  </script>
  
 