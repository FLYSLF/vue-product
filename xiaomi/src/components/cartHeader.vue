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
  height: 80/2px;
  background: #f2f2f2;
  .back {
    position: absolute;
    left: 20/2px;
    img {
      width: 40/2px;
      height: 40/2px;
    }
  }
  .message {
    position: absolute;
    right: 20/2px;
    height: 100%;
    span {
      line-height: 80/2px;
      color: #000;
      padding: 0 18/2px;
    }
    i {
      position: relative;
      top: 5/2px;
      color: #939393;
      font-size: 40/2px;
    }
  }
  .title {
    font-size: 30/2px;
  }
}
</style>
