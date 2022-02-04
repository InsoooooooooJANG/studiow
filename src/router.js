import {createWebHistory, createRouter} from 'vue-router';

const routes = [
  {
    path:'/',
    name: 'Home',
    component : () => import ('@/views/Home')
  },
  {
    path:'/guide',
    name : 'Guide',
    component:() => import ('@/views/Guide')
  }
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})