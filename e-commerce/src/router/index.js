import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/index.vue';
import CheckoutPage from '@/pages/Checkout/Checkout.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
