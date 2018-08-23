import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Classify from '@/view/classify'
import GoodList from '@/view/goodList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/goodList',
    name: 'GoodList',
    component: GoodList
  }]
})
