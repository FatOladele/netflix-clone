import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Watch from '../views/Watch.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import { requireAuth } from '../utils/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/watch',
    name: 'Watch',
    beforeEnter: requireAuth,
    component: Watch,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/:type',
    component: Home,
    beforeEnter: requireAuth,
    props: (route) => {
      return {
        type: route.params.type,
        genre: route.query.genre
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
