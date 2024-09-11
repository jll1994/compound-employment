import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/task',
    name: 'task',
    component: () => import(/* webpackChunkName: "task" */ '../views/task/index.vue')
  },
  {
    path: '/chargingPile',
    name: 'chargingPile',
    component: () => import(/* webpackChunkName: "chargingPile" */ '../views/chargingPile/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
