<template>
    <div class="detail">
    <!-- 头部back与更多按钮 -->
        <div class="d-header">
            <a @click="back()" class="left"><i class="iconfont">&#xe628;</i></a>
            <a class="right" @click="messageShareF($event)">
              <i class="iconfont">&#xe637;</i>
              <div class="messageShare" v-show="messageShareFlag">
                <i class="iconfont">&#xe666;</i>
                <p><i class="iconfont">&#xe763;</i>消息通知</p>
                <p><i class="iconfont">&#xe60c;</i>分享</p>
              </div>   
            </a>
        </div>
        <div class="imgDetail">
          <!-- 商品展示轮播 -->
          <div class="swiper-container" id="swiper1">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
               <img :src="json.image_url" alt="">
              </div>
              <div class="swiper-slide">
               <img :src="json.image_url" alt="">
              </div>
              <div class="swiper-slide">
               <img :src="json.image_url" alt="">
              </div>
            </div>
            <div style="text-align:center;" class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 标题 -->
        <div class="content">
          <div class="info">
            <div class="title">
              <h1>{{json.name}}</h1>
              <p>{{json.product_desc}}</p>
            </div>
            <div class="privce">
              ￥{{json.price}}
            </div>
            <div class="section-detail">
              <ul class="product_info">
                  <li>已选 <span>{{json.name}} x 1 </span><i class="iconfont icon-dayuhao1"></i></li>
                  <li>送至 <span>深圳市 南山区</span> <span class="haveGoods">有现货</span> <i class="iconfont icon-dayuhao1" ></i></li>
                  <li><i class="iconfont">&#xe654;</i>小米自营<i class="iconfont">&#xe654;</i>小米发货<i class="iconfont">&#xe654;</i>七天无理由退货</li>
              </ul>
            </div>
          </div>
          <div class="comment">
            <div class="swiper-container" id="swiper2">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in littleList">
                  <div class="swiper-box">
                    <div class="comment-header">
                      <div class="avatar-img-box">
                        <img :src="item.user_avatar" alt="">
                      </div>
                      <div class="user-info">
                        <p class="userName">{{item.user_name}}</p>
                        <p>{{item.add_time}}</p>
                      </div>
                       <div class="up_num">
                          <i class="iconfont">&#xe681;</i>{{item.up_num}}
                        </div>
                    </div>
                    <div class="comment-text">
                      {{item.comment_content}}
                    </div>
                    <div class="comment-images">
                      <div class="photos" v-for="imgItem in item.comment_images">
                       <img :src="imgItem" alt="">
                      </div>
                    </div>
                    <div class="replay" v-show="item.reply_content">
                      <span>官方回复</span>{{item.reply_content}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
</template>
<script>
import store from "@/store/store.js";
import "@/assets/lib/swiper/js/swiper.js";
import axios from "axios";

export default {
  data() {
    return {
      messageShareFlag: false,
      commentList: [],
      littleList: []
    };
  },
  computed: {
    tabbarFlag() {
      return store.state.tabbarFlag;
    },
    json() {
      return store.state.detailsJson;
    }
  },
  methods: {
    back() {
      window.history.back();
      store.state.tabbarFlag = true;
    },
    messageShareF(e) {
      // e.stopPropagation();
      this.messageShareFlag = true;
      document.onclick = () => {
        this.messageShareFlag = false;
      };
    }
  },
  mounted() {
    //隐藏底部导航
    store.state.tabbarFlag = false;
    //请求评论数据
    this.axios.get("/api/detailsComment").then(res => {
      this.commentList = res.data.data;
      var len = res.data.length;
      for (var i = 0; i < 5; i++) {
        this.littleList.push(res.data.data[i]);
      }
       setTimeout(() => { //只能在这里用定时器实例swiper 不然数据还未出现 siwper只能检测到一屏
          new Swiper("#swiper2", {
            autoplay: false,
          });
        });
    });
    //轮播
    new Swiper("#swiper1", {
      pagination: ".swiper-pagination",
      autoplay: false,
    });
   
  }
};
</script>
<style>
@import "../assets/css/details";
@import "../assets/lib/swiper/css/swiper.css";
</style>


