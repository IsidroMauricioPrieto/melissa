import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '../components/HelloWorld.vue'
import ListUser from '@/components/ListUser'
import UpUser from '@/components/UpUser'
import NotFound from '@/components/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListUser',
    component: ListUser
  },
  {
    path: '/alta_usuario',
    name: 'UpUser',
    component: UpUser
  },
  {
    path: '*',
    name: 'NoFound',
    component: NotFound
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
