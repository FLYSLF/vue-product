<template>
   <div class="swiper-box">
     <div class="swiper-container" id="h-tab">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(item, index) in list">
           <keep-alive>
             <component :is="item.component"></component>
           </keep-alive>
         </div>
       </div>
     </div>
   </div>
 </template>

 <script type="text/ecmascript-6">
   import Phone from './Phone';
   import Recoment from './Recoment';
   import Notebook from './Notebook';
   import Entertainment from './Entertainment';
   import Tv from './Tv';
   import Homele from './Homele';
   import '../../../assets/lib/swiper/js/swiper.js';
   import VueRouter from 'vue-router';
   export default {
     components: {
       Phone,
       Recoment,
       Notebook,
       Entertainment,
       Tv
     },
     data() {
       return {
         list: [
           {path: '/recoment', component: Recoment},
           {path: '/phone', component: Phone},
           {path: '/tv', component: Tv},
           {path: '/homele', component: Homele},
           {path: '/notebook', component: Notebook}
         ]
       }
     },
     mounted() {
       var mySwiper = new Swiper('#h-tab', {
       	resistanceRatio:0,
         // 设定初始化时slide的索引
         initialSlide: this.$route.path === '/one' ? 0 : this.$route.path === '/two' ? 1 : this.$route.path === '/three' ? 2 : this.$route.path === '/four' ? 3 : this.$route.path === '/five' ? 4 : 0
       });
       mySwiper.on('slideChangeEnd', () => { // 监控滑动后当前页面的索引，将索引发射到导航组件
         // 左右滑动时将当前slide的索引发送到nav组件
         this.$root.eventHub.$emit('slideTab',mySwiper.activeIndex);
       });
       // 接收nav组件传过来的导航按钮索引值，跳转到相应内容区
       this.$root.eventHub.$on('changeTab', (index) => { // 点击导航键跳转相应内容区
         mySwiper.slideTo(index, 0, false);
         let router = new VueRouter();
         let href = index === 0 ? 'home/recoment' : index === 1 ? 'home/phone' : index === 2 ? 'home/tv' : index === 3 ? 'home/homele' : index === 4 ? 'home/notebook' : 'home/recoment';
         // 利用路由的push方法更新路径地址
         router.push(href);
       });
     }
   }
 </script>

 <style lang="less" scoped>
 	@import url("../../../assets/lib/swiper/css/swiper.min.css");
	
	.swiper-slide{
		height: 3000px;
	}
 </style>