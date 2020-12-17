import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('/Users/plwie/Desktop/Startup-proj/component/register.html')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('/Users/plwie/Desktop/Startup-proj/component/login.html')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('/Users/plwie/Desktop/Startup-proj/component/profile.html')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router