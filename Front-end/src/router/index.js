import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import App from '../App'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '#',
      name: 'App',
      component: App
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/register',
      name: 'register',
      component: register
    }
    
  ]
})
