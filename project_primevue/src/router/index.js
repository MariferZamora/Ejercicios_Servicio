import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/tabmenu/agradecimientos',
    name: 'viewGratitude',
    component: () => import('../views/ViewGratitude.vue')
    
  },
  {
    path: '/tabmenu/actividades',
    name: 'Actividades',
    component: () => import('../components/Actividades.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
