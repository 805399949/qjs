<template>
  <div class="footer-wrap">
    <div class="sections clearfix">
      <section class="about-section">
        <h3>关于我们</h3>
        <div class="about-content">关于我们内容</div>
      </section>
      <section class="article-section">
        <h3>最火文章</h3>
        <div class="about-content">最火文章内容</div>
      </section>
      <section class="partner-section">
        <h3>合作招商</h3>
        <div class="partner-content">
          <p>广告合作: </p>
          <p>电话：13100001111</p>
          <p>邮箱：13100001111</p>
          <p>wechat：13100001111</p>
        </div>
      </section>
      <section class="tag-section">
        <h3>合作招商</h3>
        <div class="about-content">合作招商内容</div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="less">
.footer-wrap {
  background: #2d3237;
  height: auto;
  width: 100%;
  .sections {
    width: 1160px;
    margin: 0 auto;
    padding: 25px 0 15px;
    section {
      width : 25%;
      float: left;
      h3 {
        font-size: 16px;
        color: #fff;
        font-weight: 600;
        margin-bottom: 20px;
        margin-top: 10px;
      }
      .partner-content {
        p {
          opacity: 0.75;
          font-size: 16px;
          color: #FFFFFF;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
