<template>
    <div class="item" >
        <div class="item_img">
            <img :src="json.imgSrc" alt="">
        </div>
        <h3>{{json.title}}</h3>
        <p class="comment">{{json.comment}}</p>
        <span><i>￥</i>{{json.price}}</span>
    </div> 
</template>
<script>
  export default {
    props:["json"]
  }
</script>
<style lang="less">
  .item_img{
    box-sizing: border-box;
    text-align: center;
    img{
      width: 365/2px;

    }
  }
</style>


