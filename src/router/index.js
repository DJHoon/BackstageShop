import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter) 

const LoginView = () => import('views/login/LoginView')
const routes = [
  {
    path: '',
    redirect: '/login'
  },
 {
   path: '/login',
  component: LoginView
 }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router