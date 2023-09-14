<template>
    <tr class="table-row">
      <th class="table-head text-black">{{ user.userId }}</th>
      <td class="text-black">{{ user.firstName }}</td>
      <td class="text-black">{{ user.lastName }}</td>
      <td class="text-black">{{ user.userAge }}</td>
      <!-- <td class="text-white">{{ user.Gender }}</td> -->
      <td class="text-black">{{ user.userRole }}</td>
      <td class="text-black emailAdd">{{ user.emailAddress }}</td>
      <!-- <td><img :src="user.userProfile" alt="" class="prodImg" /></td> -->
  
      <td class="second-table-data">
        <div class="action">
          <button class="btn-edit">
            <router-link class="text-black text-decoration-none" :to="{ name: 'user edit', params: { id: user.userId } }">
              Edit
            </router-link>
          </button>
          <button class="btn-delete text-black" @click="deleteUser(user.userId )">
            Delete
          </button>
        </div>
      </td>
    </tr>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    props: ["user"],
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    async deleteUser(id) {
      try {
        await this.$store.dispatch("deleteUser", id);
        alert("User deleted successfully");
        // If the delete operation is successful, you can add any necessary code here.
      } catch (error) {
        // Handle the error here, for example, display an error message.
        alert("Error deleting user");
        console.error("Error deleting user:", error);
      }
    },
  },
};
 
  </script>
  
  <style scoped>
  .password,
  .emailAdd {
    font-size: 16px !important;
  }
  .prodImg {
    width: 100px;
  }
  .table-row {
    font-size: 1.125rem;
    border-color: rgba(0, 0, 0, 0.1);
    border-bottom-width: 2px;
  }
 
button {
    color: #ef87ec;
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
    background-color: #bf8fe9;
    color: #fff;
    border-radius: 0.125rem;
  }
  .btn-delete {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: #efa6cb;
    border-radius: 0.125rem;
  }
  </style>