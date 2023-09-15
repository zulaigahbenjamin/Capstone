<template>
  <!-- <div :to="{ name: 'user', params: { id: user.userId } }">
    <p class="m-0">{{ user.firstName }} {{ user.lastName }}</p>
    <p style="color: #bec6d3 !important">{{ user.userRole }}</p>
  </div> -->
  <table>
  <th class="table-head text-black">{{ user.userId }}</th>
      <td class="text-black">{{ user.firstName }}</td>
      <td class="text-black">{{ user.lastName }}</td>
      <td class="text-black">{{ user.userAge }}</td>
      <!-- <td class="text-white">{{ user.Gender }}</td> -->
      <td class="text-black">{{ user.userRole }}</td>
      <td class="text-black emailAdd">{{ user.emailAddress }}</td>
     </table> 
</template>
<script>
import axios from "axios";

export default {
  props: ["user"],
  methods: {
    async deleteProduct(userId) {
      try {
        await axios.delete(
          `https://zulaigahcapstoneapi.onrender.com/user/${userId}`
        );
        this.$store.dispatch("fetchUser");
        alert("User has been deleted");
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>
<style scoped>

</style>