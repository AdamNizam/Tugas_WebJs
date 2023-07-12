import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsMakanan from '../views/FoodMakanan.vue'
import FoodDetail from '../views/FoodDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/FoodMakanan',
    name: 'FoodsMakanan',
    component: FoodsMakanan
  },
  {
    path: '/FoodDetail/:id',
    name: 'FoodsMakanan',
    component: FoodDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
