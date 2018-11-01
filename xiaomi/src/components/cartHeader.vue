<template>
	<div class="header">
		<div class="title">{{title}}</div>
		<div class="message"><span @click="deleteIcon()">编辑</span><i class="iconfont icon-xinxi"></i></div>
	</div>
</template>
<script>
export default {
  props: ["title"]
};
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 666;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80/2/12.5rem;
  background: #f2f2f2;
  .back {
    position: absolute;
    left: 20/2/12.5rem;
    img {
      width: 40/2/12.5rem;
      height: 40/2/12.5rem;
    }
  }
  .message {
    position: absolute;
    right: 20/2/12.5rem;
    height: 100%;
    span {
      color: #000;
      padding: 0 18/2/12.5rem;
    }
    i {
      position: relative;
      top: 5/2/12.5rem;
      color: #939393;
      font-size: 40/2/12.5rem;
    }
  }
  .title {
    font-size: 30/2/12.5rem;
  }
}
</style>
