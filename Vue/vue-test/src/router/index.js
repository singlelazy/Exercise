import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/HelloWorld'
import RedApple from "@/components/RedApple"
import Yellow from "@/components/Yellow"
import Orange from "@/components/Orange"
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass:"",
  routes:[
    {
      path: '/',
      name: 'HelloWorld',
      component: Index,
      children:[
      	{path:'red',name:"red",component:RedApple},
      	{path:'yellow',name:"yellow",component:Yellow},
      	{path:'orange',name:"orange",component:Orange}
      ]
    }
  ]
})
