<template>
  <div :to="{ name: 'user', params: { id: user.userId } }">
    <!-- <img width="150" height="150" :src="user.userProfile" alt="" class="employee-img" /> -->
    <p class="m-0">{{ user.firstName }} {{ user.lastName }}</p>
    <p style="color: #bec6d3 !important">{{ user.userRole }}</p>
  </div>
</template>
<script>
export default {
  props: ["user"],
};
</script>
<style scoped>

</style>