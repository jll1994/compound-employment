import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/taskList',
        name: 'taskList',
        component: () => import(/* webpackChunkName: "taskList" */ '../views/task/index.vue')
      },
      {
        path: '/addOrEditTask',
        name: 'addOrEditTask',
        component: () => import(/* webpackChunkName: "addOrEdit" */ '../views/task/addOrEdit.vue')
      },
      {
        path: '/taskTemplate',
        name: 'taskTemplate',
        component: () => import(/* webpackChunkName: "taskTemplate" */ '../views/task/template.vue')
      },
      {
        path: '/chargingPile',
        name: 'chargingPile',
        component: () => import(/* webpackChunkName: "chargingPile" */ '../views/chargingPile/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
