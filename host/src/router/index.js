import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RemoteView from 'remote/App'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/host'
    },
    {
      path: '/host',
      name: 'host',
      component: HomeView
    },
    {
      path: '/remote',
      name: 'remote',
      component: RemoteView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
