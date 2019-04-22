<template>
  <div>
    <div class="news-list-wrap">
      <div class="news-head">
        <div class="news-title">
          <h3>新闻</h3>
        </div>
        <div class="tab-links"> <span>切换标签：</span>
          <a href="">新闻</a>,
          <a href="">科技</a>,
          <a href="">观点</a>
        </div>
      </div>
      <div class="main clearfix">
        <!--hot_spots-->
        <div class="news-left">
          <div class="hot-spots">
            <div class="classifyNav bannerbox">
              <a class="prev-btn" href="javascript:;" title="上一版" style="display: none;">&nbsp;</a>
                <div class="classifyBox">
                </div>
              <a class="next-btn" href="javascript:;" title="下一版" style="display: inline;">&nbsp;</a>
            </div>
            <div class="hot-news">
              <ul>
                <li v-for="(item, index) in contentList" :key="index">
                  <div class="news-content news-one">
                    <h1 class="news-title">
                      <a href="/news/news_detail">{{item.title}}</a>
                    </h1>
                    <div class="abs">{{item.des}}</div>
                    <div class="news-users">
                      <!-- <a :href="item.link">
                        <span class="comment"></span>{{item.comment}}
                      </a> -->
                      <a href="javascript:;">
                        <span class="read"></span>{{item.read}}
                      </a>
                      <!--这里有几个状态 分别为 独家dujia 热门remen 推广tuiguang 三个css-->
                      <span class="time dujia">{{item.createDate}}</span>
                    </div>
                  </div>
                  <div class="news-one-img">
                    <a :href="item.link">
                      <img :src="item.img" height="142" width="214" :alt="item.title">
                    </a>
                  </div>
                </li>				
              </ul>
              <div class="loading" id="loading" style="display:none"><i></i>加载更多</div>
            </div>
          </div>
        </div>
        <div class="news-right">
          <div class="today-news">
            <h2>今日<em>头条</em></h2>
          </div>
          <div class="hot-attention-news">
            <h2 class="title">热门<em>关注</em></h2>
            <ul>
              <li><span class="hot-attention-sortnum">1</span><p class="hot-attention-title"><a href="https://www.feng.com/iPhone/news/2019-04-04/Apple-HomePod-prices-worldwide-legal-channels-straight-down-500-yuan_701174.shtml" title="苹果HomePod全球范围降价 国行直降500元">苹果HomePod全球范围降价 国行直降500元</a></p></li>
              <li><span class="hot-attention-sortnum">2</span><p class="hot-attention-title"><a href="https://www.feng.com/iPhone/news/2019-04-04/Apple-stuck-again-embarrassed-Intel-chips-or-5-g-can-t-deliver-on-time_701172.shtml" title="苹果再陷尴尬 英特尔5G芯片或无法按时交货 ">苹果再陷尴尬 英特尔5G芯片或无法按时交货 </a></p></li>
              <li><span class="hot-attention-sortnum">3</span><p class="hot-attention-title"><a href="https://www.feng.com/iPhone/news/2019-04-05/IOS-12.1.4-validation-is-now-closing-you-haven-t-rise-to-12.2_701176.shtml" title="iOS 12.1.4验证现已关闭 你还没升到12.2吗？">iOS 12.1.4验证现已关闭 你还没升到12.2吗？</a></p></li>
              <li><span class="hot-attention-sortnum">4</span><p class="hot-attention-title"><a href="https://www.feng.com/iPhone/news/2019-04-09/Huawei-is-interested-in-foreign-sales-of-5-g-chips-but-only-sell-to-apple_701191.shtml" title="华为有兴趣对外销售5G芯片 但只卖给苹果">华为有兴趣对外销售5G芯片 但只卖给苹果</a></p></li>
              <li><span class="hot-attention-sortnum">5</span><p class="hot-attention-title"><a href="https://www.feng.com/iPhone/news/2019-04-09/2019-iPhone-broke-again-or-send-five-new-handsets-this-year_701195.shtml" title="2019 iPhone爆料又来了 今年或发五款新机？">2019 iPhone爆料又来了 今年或发五款新机？</a></p></li>
              <li><span class="hot-attention-sortnum">6</span><p class="hot-attention-title"><a href="https://www.feng.com/iPhone/news/2019-04-08/The-second-generation-AirPods-and-Beats-Powerbeats-Pro-you-which-to-choose_701187.shtml" title="二代AirPods和Beats Powerbeats Pro 你该选哪个？">二代AirPods和Beats Powerbeats Pro 你该选哪个？</a></p></li>
              <li><span class="hot-attention-sortnum">7</span><p class="hot-attention-title"><a href="https://www.feng.com/iPhone/news/2019-04-04/Beats-release-true-wireless-headset-H1-chip-support-Hey-Siri_701170.shtml" title="Beats发布真无线耳机：H1芯片 支持Hey Siri">Beats发布真无线耳机：H1芯片 支持Hey Siri</a></p></li>
              <li><span class="hot-attention-sortnum">8</span><p class="hot-attention-title"><a href="https://www.feng.com/iPhone/news/2019-04-06/Apple-Card-to-five-years-for-Apple-among-the-ten-big-Card-issuers_701178.shtml" title="Apple Card有望5年后让苹果跻身十大发卡方">Apple Card有望5年后让苹果跻身十大发卡方</a></p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'NewsList',
  data() {
    return {
      contentList: [
        {
          link: 'link1',
          title: '苹果取消Mac升级和维修时收的数据迁移费1',
          des: '自动同步工具和云备份早已取代手动数据迁移了。1',
          createDate: '1分钟前',
          comment: 10,
          read: 20,
          img: 'http://img1.feng.com/1/h062/h40/c453737cimg201904101709340_214__142.jpg',
        },
        {
          link: 'link2',
          title: '苹果取消Mac升级和维修时收的数据迁移费2',
          des: '自动同步工具和云备份早已取代手动数据迁移了。2',
          createDate: '2分钟前',
          comment: 10,
          read: 20,
          img: 'http://img1.feng.com/1/h062/h40/c453737cimg201904101709340_214__142.jpg',
        },
        {
          link: 'link3',
          title: '苹果取消Mac升级和维修时收的数据迁移费3',
          des: '自动同步工具和云备份早已取代手动数据迁移了。3',
          createDate: '3分钟前',
          comment: 10,
          read: 20,
          img: 'http://img1.feng.com/1/h062/h40/c453737cimg201904101709340_214__142.jpg',
        }
      ]
    }
  },
  methods: {
    ...mapActions(["handleHeaderPath", "handleSelected"])
  },
  created() {
    this.handleSelected("news_list");
  }
}
</script>

<style lang="less" scoped>
.news-list-wrap {
  width: 1160px;
  margin: 0 auto;
  position: relative;
  .news-head {
    margin-top: 25px;
    .news-title {
      h3 {
        font-size: 24px;
        color: #333333;
        margin-top: -5px;
      }
    }
    .tab-links {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: bold;
      margin: 12px 0;
    }
  }
  .main {
    .news-left {
      float: left;
      width: 734px;
      .hot-spots {
        .classifyNav {
          border-top: 3px solid #000;
          padding-top: 20px;
          margin-top: 20px;
          line-height: 28px;
          height: 28px;
          width: 100%;
          position: relative;
        }
      }
      .hot-news {
        float: left;
        width: 100%;
        margin-bottom: 100px;
        margin-top: 20px;
        ul {
          li {
            float: left;
            width: 100%;
            border-top: 1px dotted #c2c2c2;
            padding: 20px 40px;
            .news-content {
              float: left;
              &.news-one {
                width: 400px;
              }
              .news-title {
                color: #333;
                font-size: 20px;
                font-weight: 600;
                line-height: 30px;
                margin-bottom: 14px;
                height: 30px;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: break-all;
              }
              .abs {
                color: #757575;
                line-height: 22px;
                margin-bottom: 13px;
                max-height: 66px;
                width: 100%;
                overflow: hidden;
                text-align: justify;
              }
              .news-users {
                a {
                  float: left;
                  line-height: 22px;
                  padding-right: 10px;
                  margin-top: 1px;
                  height: 20px;
                  color: #646464;
                }
                .time {
                  float: right;
                  color: #999;
                  line-height: 23px;
                  text-align: right;
                }
              }
            }
            .news-one-img {
              float: right;
              img {
                width: 214px;
                height: 142px;
              }
            }
          }
        }
      }
    }
    .news-right {
      float: right;
      width: 385px;
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
  }
}
</style>

