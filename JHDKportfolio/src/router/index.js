import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectPage.vue')
    },
    // {
    //   path: '/photos',
    //   name: 'photos',
    //   component: () => import('../views/PhotosPage.vue')
    // },
    {
      path: '/tech',
      name: 'tech',
      component: () => import('../views/TechPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutMe.vue')
    }
  ]
})

export default router
