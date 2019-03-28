<template>
  <div class="footer-wrap">
    <div class="sections clearfix">
      <section class="about-section">
        <h3>关于我们</h3>
        <div class="about-content">关于我们内容</div>
      </section>
      <section class="article-section">
        <h3>最火文章</h3>
        <a href="/" class="article-content">《第一篇文章》</a>
        <a href="/" class="article-content">《第二篇文章》</a>
        <a href="/" class="article-content">《第三篇文章》</a>
        <a href="/" class="article-content">《第四篇文章》</a>
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
        <div class="tag-content">
          <span class="tag-item">钱币</span>
          <span class="tag-item">科技</span>
          <span class="tag-item">生活</span>
          <span class="tag-item">美食</span>
          <span class="tag-item">科技</span>
          <span class="tag-item">钱币</span>
        </div>
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
    .article-section {
      .article-content {
        display: block;
        color: #ffffff;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
    .tag-section {
      .tag-content {
        .tag-item {
          display: inline-block;
          padding: 5px 10px;
          color: #ffffff;
          font-size: 12px;
          line-height: 14px;
          border: 1px solid #ffffff;
          border-radius: 5px;
          margin-right: 10px;
          margin-bottom: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
