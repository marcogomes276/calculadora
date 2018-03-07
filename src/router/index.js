import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Calc from '@/components/Calc'
import Calc2 from '@/components/Calc2'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    {
    	path: '/calc',
    	name: 'Calc',
    	component: Calc
    },
    {
        path:'/calc2',
        name:'Calc2',
        component:Calc2
    }
  ]
})
