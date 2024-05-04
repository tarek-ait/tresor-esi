import { createRouter, createWebHistory } from 'vue-router';

import Courses from '../views/Courses.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Courses',
    component: Courses
  },{
    path: '/Search',
    name: 'Search',
    component: Search
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
