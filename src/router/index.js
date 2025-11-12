import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import AboutMe from '@/views/AboutMe.vue'
import ContactMe from '@/views/ContactMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMe,
    },
    {
      path: '/contact-me',
      name: 'contact-me',
      component: ContactMe,
    }
  ]
})

export default router
