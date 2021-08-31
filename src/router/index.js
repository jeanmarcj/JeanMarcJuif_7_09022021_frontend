import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    // Log into the app
    path: '/',
    name: 'Home',
    meta: { guest: true },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      guest: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // Create a new User
    path: '/signup',
    name: 'SignUp',
    meta: { guest: true },
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    // View all published Posts (list)
    path: '/bloglist',
    name: 'Bloglist',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "bloglist" */ '../views/BlogList.vue')
  },
  {
    // Create a post
    path: '/post/newpost',
    name: 'NewBlog',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "bloglist" */ '../views/BlogCreate.vue')
  },
  {
    // Read a sigle Post
    path: '/post/:id',
    name: 'BlogSingle',
    meta: { requiresAuth: true },
    component: () => import('../views/BlogSingle.vue')
  },
  {
    // Edit a single post
    path: '/blogedit/:id',
    name: 'Blogedit',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "bloglist" */ '../views/BlogEdit.vue')
  },
  {
    // View the user account
    path: '/account',
    name: 'Account',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },
]

const router = new VueRouter({
  routes
})

// Unauthorized Users
// Naviagtion guard to checks if a route has the meta: {requireAuth: true } key
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next('/');
  } else {
    next();
  }
});

// Authorized Users
// The meta: {guest: true} stops users that are logged in from accessing the routes with guest meta
router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/bloglist");
      return;
    }
    next();
  } else {
    next();
  }
})

export default router
