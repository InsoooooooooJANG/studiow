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
  },
  {
    path:'/room',
    name : 'Room',
    component:() => import ('@/views/Room')
  },
  {
    path:'/portfolio',
    name : 'Portfolio',
    component:() => import ('@/views/Portfolio')
  },
  {
    path:'/reservation',
    name : 'Reservation',
    component:() => import ('@/views/Reservation')
  },
  {
    path:'/schedule',
    name : 'Schedule',
    component:() => import ('@/views/Schedule')
  }
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})