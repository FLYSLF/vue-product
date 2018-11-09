<template>
  <div class="two">
    <div class="loading" v-show="show">
      <p>内容加载中......</p>
    </div>
    <div class="content" v-show="toggleShow">
    </div>
 </div>
</template>
 <script >
  export default {
    data() {
      return {
        show: true,
        toggleShow: false,
        isLoad: false
      }
    },
    mounted() {
      this.initFunc();
    },
    methods: {
      initFunc() {
        if (!this.isLoad) {
          setTimeout(() => {
            this.show = false;
            this.toggleShow = true;
            this.isLoad = true;
          }, 2000)
        } else {
          this.show = false;
          this.toggleShow = true;
        }
      }
    }
  }
</script>
 <style >
.two{
	width: 100%;
}
</style>