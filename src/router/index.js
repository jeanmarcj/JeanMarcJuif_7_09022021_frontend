import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Log into the app
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: { layout: "no-sidebar"},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // Create a new User
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    // View all published Posts (list)
    path: '/bloglist',
    name: 'Bloglist',
    component: () => import(/* webpackChunkName: "bloglist" */ '../views/BlogList.vue')
  },
  {
    // Read a sigle Post
    path: '/post/:id',
    name: 'PostSingle',
    component: () => import(/* webpackChunkName: "bloglist" */ '../views/BlogSingle.vue')
  },
  {
    // Edit a single post
    path: '/blogedit/:id',
    name: 'Blogedit',
    component: () => import(/* webpackChunkName: "bloglist" */ '../views/BlogEdit.vue')
  },
  {
    // View the user account
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
