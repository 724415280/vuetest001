import Vue from 'vue'
import Router from 'vue-router'
import emplist from '@/components/emplist'
import EmpAdd from '@/components/EmpAdd'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/emplist',
      name: 'emplist',
      component: emplist
    },{
      path: '/EmpAdd',
      name: 'EmpAdd',
      component: EmpAdd
    }
  ]
})
