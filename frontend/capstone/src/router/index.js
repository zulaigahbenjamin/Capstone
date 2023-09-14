import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueCookies  from "vue3-cookies/dist/interfaces";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // beforeEnter: () => {
    //   if(!VueCookies.get ('userToken')) {
    //     router.push({name:"login"})
    //   }
    // }
    
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import ('../views/ContactView.vue')
  },

  {
    path: '/products/:id',
    name: 'product',
    component: () => import ('../views/Product.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import ('../views/Products.vue')
  },

  {
    path: "/admin/products/:id",
    name: "product-edit",
    component: () => import("../views/ProdEdit.vue"),
    props: true,
  },
{
  path: "/prod/add",
  name: "prod add",
  component: () => import("../views/ProdAdd.vue"),
  props: true,
},
{
  path: "/user/edit/:id",
  name: "user edit",
  component: () => import("../views/UserEdit.vue"),
  props: true,
},
{
  path: "/users/:id",
  name: "user profile",
  component: () => import("../views/userProfile.vue"),
  props: true,
},
{
  path: "/users/add",
  name: "userAdd",
  component: () => import("../views/UserAdd.vue"),
},

{
  path: "/users/add",
  name: "userAdd",
  component: () => import("../views/UserAdd.vue"),
},
  {
    path: '/cart',
    name: 'cart',
    component: () => import ('../views/CartView.vue')
  },
  {
    path: "/admin/product/:id",
    name: "product-edit",
    component: () => import("../views/ProdEdit.vue"),
    props: true,
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import ('../views/AdminTable.vue'),
    meta: {
      requiresAuth: true, // Requires authentication to access
      requiresAdmin: true, // Requires admin privileges to access
    },
  
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/LoginView.vue'),
    props: true,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
    props: true,
  },
  {
    path: "/checkout",
    name: "rcheckout",
    component: () => import("../views/checkoutView.vue"),
    
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
