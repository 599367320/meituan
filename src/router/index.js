import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import index from '@/page/index'
import changeCity from '@/page/changeCity'
import goodsList from '@/page/goodsList'
import login from '@/page/login'
import register from '@/page/register'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'default',
  component: defaultPage,
  // 重定向
  redirect: '/index',
  // 嵌套路由
  children: [{
    path: 's/:name',
    name: 'goods',
    component: goodsList
  }, {
    path: '/index',
    name: 'index',
    component: index
  }, {
    path: '/changeCity',
    name: 'changeCity',
    component: changeCity
  }]
}, {
  path: '/blank',
  name: 'blank',
  component: blankPage,
  children: [{
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/register',
    name: 'register',
    component: register
  }]
}]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
