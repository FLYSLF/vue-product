import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入五个主页面
import Home from '@/pages/home/Home'
//引入home下的子页面
import Phone from '@/pages/home/children/Phone';
import Recoment from '@/pages/home/children/Recoment';
import Notebook from '@/pages/home/children/Notebook';
import Entertainment from '@/pages/home/children/Entertainment';
import Tv from '@/pages/home/children/Tv';
import Homele from '@/pages/home/children/Homele';
//引入我的子页面
import Login from "@/pages/mine/login/Login"
import Password from "@/pages/mine/password/Password"
import HomeTo from "@/pages/mine/homeTo/HomeTo"
import Serice from "@/pages/mine/serice/Serice"
import Position from "@/pages/mine/position/Position"
import Much from "@/pages/mine/much/Much"
import ItemTo from "@/pages/mine/itemTo/ItemTo"
import One from "@/pages/mine/one/One"
import Two from "@/pages/mine/two/Two"

import Classify from '@/pages/classify/Classify'
import Find from '@/pages/find/Find'
import FindMifen from '@/pages/find/FindMifen'
import ShoppingCart from '@/pages/shoppingCart/ShoppingCart'
import Mine from '@/pages/mine/Mine'
export default new Router({
  routes: [
  	{
		path:"/one",
	  component:One
	  },
	  {
	  	path:"/two",
	  	component:Two
	  },
	  {
	  	path:"/one",
	  	component:One
	  },
	  {
	  	path:"/two",
	  	component:Two
	  },
	  {
	  	path:"/homeTo",
	  	component:HomeTo
	  },
	  {
	  	path:"/homeTo",
	  	component:HomeTo
	  },
	  {
	  	path:"/serice",
	  	component:Serice
	  },
	  {
	  	path:"/position",
	  	component:Position
	  },
	  {
	  	path:"/much",
	  	component:Much
	  },
	    {
	  	path:"/itemTo",
	  	component:ItemTo
	  },
    {
      path: '/',
      component: Home
    },
		{
	  	path:"/login",
	  	component:Login
		},
		{
	  	path:"/password",
	  	component:Password
  	},
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
           {path: 'phone', component: Phone},
           {path: 'recoment', component: Recoment},
           {path: 'notebook', component: Notebook},
           {path: 'entertainment', component: Entertainment},
           {path: 'tv', component: Tv},
           {path: 'Homele', component: Homele}
         ]
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
    	path:'/FindMifen',
    	name:'FindMifen',
    	component: FindMifen
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
  ]
})
