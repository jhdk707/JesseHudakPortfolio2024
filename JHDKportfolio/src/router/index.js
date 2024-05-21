import { createRouter, createWebHistory } from 'vue-router'
import Splash from '../views/SplashPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: Splash
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectPage.vue')
    },
    {
      path: '/tech',
      name: 'tech',
      component: () => import('../views/TechPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/MyBlog.vue')
    }
  ]
})

export default router
