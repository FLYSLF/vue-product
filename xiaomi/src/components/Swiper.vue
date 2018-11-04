<template>
  <div class="swiper-box">
    <div class="swiper-container swiper-wrap">
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
 <style>
 @import "../assets/css/swiper.css";
 </style>
 <script>
  import One from '../pages/mine/one/One';
  import Two from "../pages/mine/two/Two"
  import Swiper from '../assets/js/swiper';
  
   export default {
    components: {
      One,
      Two
    },
    data() {
      return {
        list: [
          {path: '/one', component: One},
          {path: '/two', component: Two}
        ]
      }
    },
    mounted() {
     var mySwiper = new Swiper('.swiper-wrap', {
        // 设定初始化时slide的索引
        initialSlide: this.$route.path === '/one' ? 0 : this.$route.path === '/two' ? 1 : 0
      })
      mySwiper.on('slideChangeEnd', () => {
        this.$root.eventHub.$emit('slideTab', mySwiper.activeIndex);
      })
      this.$root.eventHub.$on('changeTab', (index) => { 
        mySwiper.slideTo(index, 0, false);
        
      })
    }
  }
</script>
