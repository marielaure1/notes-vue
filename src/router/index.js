import { createRouter, createWebHistory } from '@ionic/vue-router';
import {useApiStore} from '@/stores/apiStore.js';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import NotesPage from '../views/NotesPage.vue';
import ProfilPage from '../views/ProfilPage.vue';
import NotePage from '../views/NotePage.vue';
import CreatePage from '../views/CreatePage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
            requiresAuth: true,
            title: "Home"
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        meta: {
          requiresAuth: false,
          title: "Login"
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: {
        requiresAuth: false,
        title: "Register"
      }
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesPage,
      meta: {
        requiresAuth: true,
        title: "Notes"
      }
    },
    {
        path: '/logout',
        name: 'logout',
        meta: {
          requiresAuth: true,
          title: "Logout"
      },
    },
    {
      path: '/notes/:id',
      name: 'note',
      component: NotePage,
      meta: {
        requiresAuth: true,
        title: "Note"
      }
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePage,
      meta: {
        requiresAuth: true,
        title: "Create"
      }
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilPage,
      meta: {
        requiresAuth: true,
        title: "profil"
      }
    }
];



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = useApiStore().loggedIn;
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });

export default router;
