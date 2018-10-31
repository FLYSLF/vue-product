<template>
   <div class="nav">
     <ul class="nav-list">
       <li class="item" v-for="(item,index) in navList" :class="{'active': nowIndex===index}" @click="tabClick(index)">
         {{item.name}}
       </li>
     </ul>
   </div>
 </template>

 <script>
   import VueRouter from 'vue-router';

   export default {
     data() {
       return {
         navList: [
           {name: '推荐'},
           {name: '手机'},
           {name: '电视'},
           {name: '家电'},
           {name: '笔记本'},
           {name: '智能'},
           {name: '影音娱乐'},
           {name: '生活周边'},
           {name: '新款游戏本'},
           {name: '大内存手机'},
         ],
         nowIndex: 0
       }
     },
     mounted() {
       this.$nextTick(() => {
         // 初始化，保证刷新页面后内容区和导航键一致
         this.initPage();
       });
       // 接收swiper组件发射的index进行导航按钮切换高亮和更新模板地址
       this.$root.eventHub.$on('slideTab', this.slideTab);
     },
     methods: {
       initPage() {
         this.nowIndex = this.$route.path === '/recoment' ? 0 : this.$route.path === '/phone' ? 1 : this.$route.path === '/tv' ? 2 : this.$route.path === '/homele' ? 3 : this.$route.path === '/notebook' ? 4 : 0;
       },
       tabClick(index) {
         this.nowIndex = index;
         // 点击导航按钮时向swiper组件发射index
         this.$root.eventHub.$emit('changeTab', index);
       },
       slideTab(index) {
         this.nowIndex = index;
         let router = new VueRouter();
         let href = index === 0 ? 'home/recoment' : index === 1 ? 'home/phone' : index === 2 ? 'home/tv' : index === 3 ? 'home/homele' : index === 4 ? '/notebook' : 'home/recoment';
         // 利用路由的push方法更新路径地址
         router.push(href);
       }
     }
   }
 </script>

 <style lang="less" scoped>
   .nav{
     	overflow: hidden;
     	overflow-x: auto;
     	position: fixed;
     	width:100%;
     	background-color: #fff;
     	top: 2.7rem;
     	z-index: 999;
    }
    .nav::-webkit-scrollbar {display:none}
    .nav-list{
       width: 200%;
	}
	.item{
        width: 10%;
        display: inline-block;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        color: #999;
    }
    .item.active{
    	background-color: orange;
    	color: #fff;
    }
 </style>