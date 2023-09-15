<template>
    <div class="con">
        <div class="container1">
            <h1 class="text-black">Products</h1>
            <button class="btn-add">
                <router-link to="/prod/add" class="text-black text-decoration-none">
                    Add Product
                </router-link>
            </button>
            <div class="table-container">
                <table class="responsive-table">
                    <thead class="table-header">
                        <tr>
                            <th class="text-black">ID</th>
                            <th class="text-black">Name</th>
                            <th class="text-black">Quantity</th>
                            <th class="text-black">Price</th>
                            <th class="text-black">Category</th>
                            <th class="text-black">Image</th>
                            <th class="text-black">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="table-body" v-if="products">
                        <AdminComp v-for="product of products" :key="product.prodId" :product="product" />
                    </tbody>

                    <SpinnerComp v-else />
                </table>
            </div>
            <div class="container">
                <h1 class="text-black">Users</h1>
                <button class="btn-add">
                    <router-link to="/users/add" class="text-black text-decoration-none">
                        Add User
                    </router-link>
                </button>
                <table>
                    <thead class="table-header">
                        <tr>
                            <th class="text-black">ID</th>
                            <th class="text-black">Name</th>
                            <th class="text-black">Surname</th>
                            <th class="text-black">Age</th>
                            <!-- <th class="text-white">Gender</th> -->
                            <th class="text-black">Role</th>
                            <th class="text-black">Email</th>
                            <th class="text-black password">Password</th>
                            <!-- <th class="text-white">Image</th> -->
                            <th class="text-black">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="table-body" v-if="users">
                        <UserAdminComp v-for="user of users" :key="user.userId" :user="user" />
                    </tbody>

                    <SpinnerComp v-else />
                </table>
            </div>
        </div>
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
        SpinnerComp
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
        this.$store.dispatch("fetchProducts"), this.$store.dispatch("fetchUsers");
    },
};
</script>
<style scoped>
.btn-add {
    background-color: #ef87ec;
    justify-content: center;
}

.container {
    background-color: rgb(248, 248, 212);
    color: black;
    text-decoration-color: black;
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
    padding: 10px;
    padding: 20px;
}

@media (max-width: 300px) {
    .table-header {
        max-width: 100%;
        display: grid;
        grid-template-columns: auto;
    }

}

.container1 {
    padding: 40px;
    background-color: rgba(245, 245, 220, 1);
    padding-left: 17%;
}

@media screen and (max-width: 768px) {
    .responsive-table {
        display: block;
        width: 100%;
    }

    .responsive-table thead {
        display: none;
        /* Hide the table header */
    }

    .responsive-table tbody {
        display: block;
    }

    .responsive-table tbody tr {
        margin-bottom: 10px;
        border: 1px solid #ddd;
    }

    .responsive-table td {
        display: block;
        text-align: left;
    }

    .responsive-table td::before {
        content: attr(data-label);
        font-weight: bold;
        float: left;
        text-transform: uppercase;
    }
}
</style>
  
 