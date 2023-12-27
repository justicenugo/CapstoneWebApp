import { createRouter, createWebHistory } from 'vue-router'
import Account from '../views/Account.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Operate from '../views/Operate.vue'
import Overview from '../views/Overview.vue'
import Register from '../views/Register.vue'
import Team from '../views/Team.vue'
import Alex from '../views/members/Alex.vue'
import Ezra from '../views/members/Ezra.vue'
import Daniel from '../views/members/Daniel.vue'
import Justice from '../views/members/Justice.vue'
import Nazar from '../views/members/Nazar.vue'
import Paul from '../views/members/Paul.vue'
import Callback from '../views/Callback.vue'

// import { useAuth0 } from '@auth0/auth0-vue'

// const { isAuthenticated } = useAuth0()

// const authGuard = (to, from, next) => {
//   const { isAuthenticated, loginWithRedirect } = useAuth0()

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     // Redirect to login instead of next route
//     loginWithRedirect({ appState: { targetUrl: to.fullPath } })
//   } else {
//     // Allow navigation
//     next()
//   }
// }

// if (!isAuthenticated) {
//   return next({
//     path: '/login'
//   });
// }

const routes = [
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/operate',
    name: 'Operate',
    component: Operate,
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/team/members/1',
    name: 'Justice',
    component: Justice
  },
  {
    path: '/team/members/2',
    name: 'Ezra',
    component: Ezra
  },
  {
    path: '/team/members/3',
    name: 'Alex',
    component: Alex
  },
  {
    path: '/team/members/4',
    name: 'Nazar',
    component: Nazar
  },
  {
    path: '/team/members/5',
    name: 'Paul',
    component: Paul
  },
  {
    path: '/team/members/6',
    name: 'Daniel',
    component: Daniel
  },
  {
    path: '/callback',
    name: 'callback',
    component: Callback
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  }
})

export default router
