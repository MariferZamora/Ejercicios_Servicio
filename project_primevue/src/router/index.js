import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/tabmenu/baul',
    name: 'viewGratitude',
    component: () => import('../views/ViewGratitude.vue')
    
  },
  {
    path: '/tabmenu/rutina',
    name: 'Actividades',
    component: () => import('../components/Actividades.vue')
  },
  {
    path: '/tabmenu/chat',
    name: 'Chat',
    component: () => import('../components/chat.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
