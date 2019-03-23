<template>
  <div class="box-news-wrap">
    <div class="pic">
      <img src="@/assets/img/logo.png" alt="">
    </div>
    <div class="news-info">
      <div class="title">
        <a href="/" title=""><b>这个重量是什么？</b></a>
      </div>
      <div class="desc">你说是什么就是什么吧</div>
    </div>
    <div class="news-message">
      <span class="message-name">stone</span>
      <span class="message-time">2019-03-23</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxNews'
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

