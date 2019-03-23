<template>
  <div class="footer-wrap">
    <div class="sections">
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
        <div class="about-content">合作招商内容</div>
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
  position: fixed;
  bottom: 0;
  left: 0;
  height: auto;
  width: 100%;
  .sections {
    width: 1160px;
    margin: 0 auto;
    padding: 25px 0 15px;
    overflow: hidden;
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
    }
  }
}
</style>
