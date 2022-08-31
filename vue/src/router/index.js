import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/index'
import aside from '../components/aside/aside'
import table from '../components/table/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/aside',
      name: 'aside',
      component: aside
    },
    {
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
