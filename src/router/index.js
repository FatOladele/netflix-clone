import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Watch from '../views/Watch.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/series',
    name: 'Series',
    component: Home,
    props: () => {
      return {
        type: 'Series',
        genre: null,
        list: []
      }
    }
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Home,
    props: () => {
      return {
        type: 'Movies',
        genre: null,
        list: []
      }
    }
  },
  {
    path: '/watch',
    name: 'Watch',
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
