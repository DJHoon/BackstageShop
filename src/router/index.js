import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter) 

const LoginView = () => import('views/login/LoginView')
const HomeView = () => import('views/home/HomeView')
const WelcomeView = () => import('views/home/childComp/WelcomeView')
const UserView = () => import('views/home/childComp/UserView')
const routes = [
  {
    path: '',
    redirect: '/login'
  },
 {
   path: '/login',
  component: LoginView
 },
 {
   path: '/home',
   component: HomeView,
   children:[
     {
      path: '',
      redirect:'welcome'
     },
    {
      path: 'welcome',
      component: WelcomeView
    },
    {
      path: 'users',
      component: UserView
    }
   ]
 }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  if(to.path === '/login') return next()
  const hastoken = window.sessionStorage.getItem('token')?true:false
  if(!hastoken) return next('/login')
  next()
})
export default router