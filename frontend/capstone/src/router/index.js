import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useCookies}  from "vue3-cookies";
const {cookies} = useCookies();
import { requireAuth } from '../service/auth.js';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: () => {
      if(!cookies.get("legitUser")){
        router.push({name:"login"})
      }
    }
    
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    beforeEnter: () => {
      if(!cookies.get("legitUser")){
        router.push({name:"login"})
      }
    }
  },
  
  {
    path: '/contact',
    name: 'contact',
    component: () => import ('../views/ContactView.vue'),
    beforeEnter: () => {
      if(!cookies.get("legitUser")){
        router.push({name:"login"})
      }
    }
  },
  {
    path: '/userprofile',
    name: 'userProfile',
    component: () => import ('../views/userProfile.vue'),
    beforeEnter: () => {
      if(!cookies.get("legitUser")){
        router.push({name:"login"})
      }
    }
  },

  {
    path: '/products/:id',
    name: 'product',
    component: () => import ('../views/Product.vue'),
    beforeEnter: () => {
      if(!cookies.get("legitUser")){
        router.push({name:"login"})
      }
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import ('../views/Products.vue'),
    beforeEnter: () => {
      if(!cookies.get("legitUser")){
        router.push({name:"login"})
      }
    }
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
  beforeEnter: () => {
    if(!cookies.get("legitUser")){
      router.push({name:"login"})
    }
  },
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
    component: () => import ('../views/CartView.vue'),
    beforeEnter: () => {
      if(!cookies.get("legitUser")){
        router.push({name:"login"})
      }
    }
  },
  {
    path: "/admin/product/:id",
    name: "product-edit",
    component: () => import("../views/ProdEdit.vue"),
   
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import ('../views/AdminTable.vue'),
    beforeEnter: () => {
      if(!cookies.get("legitUser")){
        router.push({name:"login"})
      }
    }
   
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
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach(async (to, from, next) => {
//   console.log(store.state); // Use the imported store object
//   if (!store.state.user && to.name === 'home') {
//     return next({ name: 'checkout' });
//   } else if (store.state.user && to.name === 'checkout') {
//     return next({ name: 'home' });
//   }
//   // Don't forget to call next() to continue the navigation
//   next();
// });


export default router
