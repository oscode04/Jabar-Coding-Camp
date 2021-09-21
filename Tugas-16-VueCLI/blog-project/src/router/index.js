import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Blogs.vue')
    }
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Blog.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
