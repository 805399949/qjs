<template>
  <div class="recommended-news-wrap">
    <div class="list-news-box clearfix">
      <ul>
				<li>
					<a href="https://www.feng.com/iPhone/news/2019-08-16/_702189.shtml" hidefocus="true" target="_blank" title="App Store Today故事终于能在网页上阅读了"><i></i>热帖 丨 App Store Today故事终于能在网页上阅读了</a>
					<a href="https://www.feng.com/view/2019-08-15/_702172.shtml" hidefocus="true" target="_blank" title="Apple Card 一记没有野心的「大招」"><i></i>热帖 丨 Apple Card 一记没有野心的「大招」</a>
					<a href="https://www.feng.com/iPhone/news/2019-08-14/_702170.shtml" hidefocus="true" target="_blank" title="保护壳厂商疑似泄露新 iPhone 命名"><i></i>热帖 丨 保护壳厂商疑似泄露新 iPhone 命名</a>
					<a href="https://www.feng.com/iPhone/news/2019-08-13/_702160.shtml" hidefocus="true" target="_blank" title="iPhone在欧洲的市场份额下降17％ 三星崛起"><i></i>热帖 丨 iPhone在欧洲的市场份额下降17％ 三星崛起</a>
					<a href="https://www.feng.com/iPhone/news/2019-08-13/_702158.shtml" hidefocus="true" target="_blank" title="Mac无法访问Windows共享服务器的解决方案"><i></i>热帖 丨 Mac无法访问Windows共享服务器的解决方案</a>
					<a href="https://www.feng.com/iPhone/news/2019-08-10/_702149.shtml" hidefocus="true" target="_blank" title="不要对折叠屏iPhone和iPad期待过早"><i></i>热帖 丨 不要对折叠屏iPhone和iPad期待过早</a>
				</li>
			</ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RecommendedNews',
}
</script>

<style scoped lang='less'>
  .recommended-news-wrap {
    margin: 0 auto;
    width: 1000px;
    position: relative;
    .list-news-box {
      margin: 30px 0;
      ul li {
        line-height: 20px;
        height: 50px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        word-wrap: break-word;
        a {
          -moz-transition: all .32s linear;
          -ms-transition: all .32s linear;
          -webkit-transition: all .32s linear;
          transition: all .32s linear;
          float: left;
          color: #333;
          height: 25px;
          width: 318px;
          margin-right: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          &:hover {
            color: #2d8cf0;
          }
        }
      }
    }
  }
</style>

