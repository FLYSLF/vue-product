<template>
    <div class="moreComment">
       <div class="m-header">
            <a @click="back()" class="left"><i class="iconfont">&#xe628;</i></a>
            <span class="title">商品评论</span>
            <a class="right">
              <i class="iconfont">&#xe62b;</i>
            </a>
        </div>
        <div class="comment-header">
            <i class="iconfont">&#xe629;</i>
        </div>
        <div class="comment-bar">
            <div class="nav">
                <a @click="hot()" :class="{active:activeFlag}">最热门</a>
                <span>|</span>
                <a @click="upDate()" :class="{active:!activeFlag}">最新</a>
            </div> 
            <div class="checkbox" @click="checkeds()" :class="{checked:!checked}">
                <label class="checkbox"><i class="iconfont">&#xe63f;</i></label>
                有图片
            </div>
        </div>
        <div class="comment-list">
          <div class="item-box" v-for="item in commentList">
              <div class="comment-headers">
                <div class="avatar-img-box">
                  <img v-lazy="item.user_avatar" :src="item.user_avatar" alt="">
                </div>
                <div class="user-info">
                  <p class="userName" >{{item.user_name}}</p>
                  <p>{{item.add_time}}</p>
                </div>
                  <div class="up_num" @click="item.up_num++">
                    <i class="iconfont">&#xe681;</i>{{item.up_num}}
                  </div>
              </div>
              <div class="comment-text">
                {{item.comment_content}}
              </div>
              <div class="comment-images">
                <div class="photos" v-for="imgItem in item.comment_images">
                  <img v-lazy="imgItem" :src="imgItem" alt="">
                </div>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      activeFlag: true,
      commentList: [],
      newArr:[]
    };
  },
  methods: {
    back() {
      history.back();
    },
    hot(){
      this.activeFlag = true;
      this.commentList.sort((a,b) => b.up_num - a.up_num);
    },
    upDate(){
      this.activeFlag = false;
      // this.commentList.sort((a,b) => a.add_time.substr(-3) - b.add_time.substr(-3));
      //按时间排序
      this.commentList.sort((a,b) => new Date(b.add_time).getTime() - new Date(a.add_time).getTime());

    },
    checkeds(){
      this.checked = !this.checked; 
      
    //  !this.checked ? this.commentList = this.commentList.filter((item,index)=>item.comment_images.length!=0):console.log(newArr);
     if(this.checked){
       this.commentList = [...this.newArr];
     }else{
       this.newArr = [...this.commentList];
       this.commentList = this.commentList.filter((item,index)=>item.comment_images.length!=0);

     }
      
    }
  },
  mounted() {
    this.axios.get("/api/detailsComment").then(res => {
      this.commentList = res.data.data.slice(5);
      this.commentList.sort((a,b) => b.up_num - a.up_num);
    });
  },
  computed:{

  }
};
</script>
<style lang="less" scoped>
.moreComment {
   img[lazy=loading]{
    background:#fff;
  }
  margin-top: -3rem;
  .m-header {
    position: fixed;
    z-index: 9999;
    height: 50/12.54rem;
    background: #f2f2f2;
    color: #666;
    line-height: 50/12.54rem;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 15/12.54rem;
    i {
      font-size: 20/12.54rem;
    }
    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
  .comment-header {
    margin-top: 88/12.54rem;
    height: 87/12.54rem;
    line-height: 87/12.54rem;
    background: #f37d0f;
    i {
      color: #fff;
      font-size: 50/12.54rem;
    }
  }
  .comment-bar {
    display: flex;
    height: 52/12.54rem;
    align-items: center;
    color: #afafaf;
    a {
      color: #afafaf;
    }
    .active {
      color: #f37d0f;
    }
    span {
      padding: 0 10/12.54rem;
    }
    .nav {
      width: 75%;
      text-align: left;
      text-indent: 2em;
    }
    .active {
      color: #f37d0f;
    }
    .checkbox {
      label {
        display: inline-block;
        width: 15/12.54rem;
        height: 15/12.54rem;
        position: relative;
        border: 1/12.54rem solid #e0e0e0;
        background: #eee;
        margin-right: 10/12.54rem;
        border-radius: 3/12.54rem;
        i {
          font-size: 13/12.54rem;
          color: #eee;
        }
      }
    }
    .checked {
      border-color: #ff6b00;
      label {
        background: #ff6b00;
      }
      i {
        color: #fff;
      }
    }
  }
  .comment-list {
    text-align: left;
    .item-box {
      color:rgba(0,0,0,.54);
      padding: 16/12.54rem;
      .comment-headers {
      display: flex;
      flex-wrap: nowrap;
    }
    .avatar-img-box {
      float: left;
      height: 34/12.5rem;
      width: 34/12.5rem;
      img {
        border-radius: 100%;
      }
    }
    .user-info {
      padding-left: 1em;
      width: 70%;
      .userName {
        color: #000;
      }
    }
    .up_num {
      float: right;
    }
    }
    .comment-text {
      color: #000;
      margin-top: 5/12.5rem;
    }
    .comment-images {
      display: flex;
      overflow: hidden;
      margin-top: 15/12.5rem;
      .photos {
        flex-shrink: 0;
        float: left;
        width: 80/12.5rem;
        height: 65/12.5rem;
        margin-right: 8/12.5rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10/12.5rem;
        }
      }
    }
  }
}
</style>


