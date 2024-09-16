import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout.vue'

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
        path: '/taskDetail',
        name: 'taskDetail',
        component: () => import(/* webpackChunkName: "taskDetail" */ '../views/task/detail.vue')
      },
      {
        path: '/taskTemplate',
        name: 'taskTemplate',
        component: () => import(/* webpackChunkName: "taskTemplate" */ '../views/task/template.vue')
      },
      {
        path: '/formTemplate',
        name: 'formTemplate',
        component: () => import(/* webpackChunkName: "formTemplate" */ '../views/chargingPile/formTemplate.vue')
      },
      {
        path: '/cpTaskTemplate',
        name: 'cpTaskTemplate',
        component: () => import(/* webpackChunkName: "cpTaskTemplate" */ '../views/chargingPile/taskTemplate.vue')
      },
      {
        path: '/addOrEditTemplate',
        name: 'addOrEditTemplate',
        component: () => import(/* webpackChunkName: "addOrEditTemplate" */ '../views/chargingPile/addOrEdit.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
