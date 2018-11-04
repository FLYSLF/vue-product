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

import Classify from '@/pages/classify/Classify';
import Detailsc from '@/pages/classify/children/Detailsc';


import Find from '@/pages/find/Find'
import ShoppingCart from '@/pages/shoppingCart/ShoppingCart'
import Mine from '@/pages/mine/Mine'
export default new Router({
  routes: [
    {
      path: '/',
      component: Home
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
      component: Classify,
    },
    {
    	path:'/Detailsc',
    	name:'Detailsc',
    	component:Detailsc,
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
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
