import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import WorkMenu from '@/views/WorkMenu.vue'
import AboutMe from '@/views/AboutMe.vue'
import ContactMe from '@/views/ContactMe.vue'
import PortfolioItemDetails from "@/views/PortfolioItemDetails.vue";

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
    },
    {
      path: '/portfolio',
      children: [
        {
          path: '/work-menu',
          name: 'work',
          component: WorkMenu,
        },
        {
          path: '/portfolioId',
          name: 'portfolio-item-details',
          component: PortfolioItemDetails,
        }
      ]
    }
  ]
})

export default router
