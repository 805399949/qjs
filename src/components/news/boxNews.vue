<template>
  <div class="box-news-wrap">
    <div class="pic">
      <img :src="imgUrl" alt="">
    </div>
    <div class="news-info">
      <div class="title">
        <a href="/" title=""><b>{{ title }}</b></a>
      </div>
      <div class="describe">{{ describe }}</div>
    </div>
    <div class="news-message">
      <span class="message-name">{{ author }}</span>
      <span class="message-time">{{ created | dateFormat }}</span>
    </div>
  </div>
</template>

<script>
import { dateFormat } from "@/lib/tools.js";

export default {
  name: 'BoxNews',
  props: {
    imgUrl: {
      type: [ Object, String, ],
      default: '@/assets/img/logo.png',
    },
    title: {
      type: [ Object, String, ],
      default: '文章标题',
    },
    describe: {
      type: [ Object, String, ],
      default: '文章简介',
    },
    author: {
      type: [ Object, String, ],
      default: '作者标签',
    },
    created: {
      type: [ Object, String, Number, ],
      default: null,
    }
  },
  filters: {
    dateFormat,
  },
}
</script>

<style scoped lang='less'>
.box-news-wrap {
  width: 250px;
  background: #fff;
  -webkit-box-shadow: 0 0 4px rgba(0,0,0,.2);
  box-shadow: 0 0 4px rgba(0,0,0,.2);
  .pic {
    width: 250px;
    // height: 158px;
    overflow: hidden;
    img {
      width: 250px;
      // height: 158px;
    }
  }
  .news-info {
    height: 162px;
    padding: 15px;
    line-height: 20px;
    background-color: #fff;
    color: #8E8E8E;
    // border-left: 1px solid #eee;
    // border-right: 1px solid #eee;
    .title {
      font-size: 14px;
      height: 42px;
      line-height: 18px;
    }
    .desc {
      margin-top: 10px;
      margin-bottom: 5px;
      padding-bottom: 8px;
      height: 80px;
      overflow: hidden
    }
  }
  .news-message {
    padding: 10px 15px;
    border-top: 1px solid #f2f2f2;
    font-size: 14px;
    color: #666;
    .message-time {
      float: right;
    }
  }
}
</style>

