import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home.vue';
import UserDashboard from '@/pages/UserDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'UserDashboard',
    component: UserDashboard,
    // meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('userToken');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
