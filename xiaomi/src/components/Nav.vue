<template>
  <div class="nav">
    <ul class="nav-list clearfix">
      <li class="item" v-for="(item,index) in navList" @click="tabClick(index)">
        <span  :class="{'active': nowIndex===index}">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
 <script >
  import Router from 'vue-router';
   export default {
    data() {
      return {
        navList: [
          {name: '我的服务'},
          {name: '我的设备'}
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
        this.nowIndex = this.$route.path === '/one' ? 0 : this.$route.path === '/two' ?  1: 0
      },
      tabClick(index) {
        this.nowIndex = index;
        this.$root.eventHub.$emit('changeTab', index);
      },
      slideTab(index) {
        this.nowIndex = index;
        let router = new Router();
        let href = index === 0 ? '/one' : index === 1 ? '/two':'/one' ;
       router.push(href)
      }
    }
  }
</script>
 <style lang="less">
 	.nav-list{
 		width: 100%;
 	display: flex;
 		li{
 		flex: 1;
	 		list-style: none;
 		}
 	}
 .active{
 	border-bottom: 0.1rem solid orange;
 	color: orange;
 }
</style>