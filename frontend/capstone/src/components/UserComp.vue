<template>
  <div :to="{ name: 'user', params: { id: user.userId } }">
    <p class="m-0">{{ user.firstName }} {{ user.lastName }}</p>
    <p style="color: #bec6d3 !important">{{ user.userRole }}</p>
  </div>
</template>
<script>
export default {
  props: ["user"],
  methods: {
    async deleteUsers(userId) {
      try {
        await axios.delete(
          `https://zulaigahcapstoneapi.onrender.com/user/${userId}`
        );
        this.$store.dispatch("getUser");
        alert("Product has been deleted");
      } catch (err) {
        alert(err);
      }
    },
  },

};
</script>
<style scoped>

</style>