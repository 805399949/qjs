<template>
  <div class="right-news-wrap">
    <div class="today-news">
      <h2>今日<em>头条</em></h2>
    </div>
    <div class="hot-attention-news">
      <h2 class="title">热门<em>关注</em></h2>
      <ul>
        <li v-for="(item, index) in hotAttentionList" :key="index">
          <span class="hot-attention-sortnum">{{index + 1}}</span><p class="hot-attention-title"><a :href="item.link" :title="item.title">{{item.title}}</a></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightHotNews',
  data() {
    return {
      hotAttentionList: [
        {
          title: '苹果HomePod全球范围降价 国行直降500元',
          link: 'id1',
        },
        {
          title: '苹果再陷尴尬 英特尔5G芯片或无法按时交货',
          link: 'id2',
        },
        {
          title: 'iOS 12.1.4验证现已关闭 你还没升到12.2吗？',
          link: 'id1',
        },
        {
          title: '二代AirPods和Beats Powerbeats Pro 你该选哪个？',
          link: 'id1',
        },
        {
          title: 'Apple Card有望5年后让苹果跻身十大发卡方',
          link: 'id1',
        },
      ],
    };
  },
}
</script>

<style lang="less" scoped>
.right-news-wrap {
  .today-news {
    h2 {
      font-size: 20px;
      border-left: 5px solid #000;
      line-height: 25px;
      padding-left: 10px;
      margin: 26px 0px 10px 0;
      height: 25px;
      em {
        color: #ed0000;
      }
    }
  }
  .hot-attention-news {
    border: 1px solid #ededed;
    border-top: 3px solid #000;
    margin-bottom: 20px;
    width: 100%;
    overflow: hidden;
    background-color: #ffffff;
    .title {
      font-size: 20px;
      width: 100%;
      height: 50px;
      background-color: #f6f6f6;
      line-height: 50px;
      text-align: center;
      em {
        color: #ed0000;
      }
    }
    ul {
      li {
        margin: 20px;
        height: 50px;
        .hot-attention-sortnum {
          float: left;
          font-family: Arial;
          width: 12%;
          font-size: 22px;
          color: #b4b4b4;
        }
        .hot-attention-title {
          float: left;
          font-size: 14px;
          line-height: 25px;
          height: 50px;
          width: 88%;
          border-bottom: 1px dotted #ededed;
        }
      }
    }
  }
}
</style>


