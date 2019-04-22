<template>
  <div>
    <div class="news-detail-wrap">
      <div class="main clearfix">
        <!--hot_spots-->
        <div class="news-left">
          <div class="detail-title">
            <h1>iOS上的Siri快捷指令等功能也要搬上macOS</h1>
            <!-- <div class="operation">
              <div class="ico time"><i></i><span class="article_time">前天 00:08</span></div>
              <a href="https://bbs.feng.com/u.php?uid=3229498" target="_blank"><div class="ico user"><i></i>Ruins</div></a>					<div class="ico source"><i></i>威锋网</div>
              <a href="#comments"><div class="ico msg"><i></i><span id="comment_num">10</span></div></a>
              <div class="ico browse"><i></i><span id="hit_num">4779</span></div>
              <div id="fav">
                <a href="javascript:void(0)" class="fav" style=""><div class="ico praise"><i></i>收藏</div></a>
                <a href="https://bbs.feng.com/home.php?mod=space&amp;do=favorite&amp;type=news" class="faved" style="display:none" target="_blank"><div class="ico praise active"><i></i>已收藏</div></a>
              </div>
            </div> -->
          </div>
          <div class="detail-content">
            <p class="content-title"><i></i>看来未来的macOS和iOS势必走向融合。</p>
            <p></p><p align="center"><a href="https://resource.feng.com/resource/h062/h41/img201904200011210.jpg" title="iOS上的Siri快捷指令等功能也要搬上macOS"><img src="https://resource.feng.com/resource/h062/h41/img201904200011210.jpg"></a></p><br>随着 macOS 10.15 和 iOS 13 的临近，苹果已经做好 macOS 和 iOS 前期统合的准备，首先启动的是第一方应用系列跨平台移植。据外媒最新报道，预计今年 6 月份的&nbsp;WWDC 上会为 macOS 10.15 推出 Siri 快捷指令（Siri Shortcuts）和屏幕时间（Screen Time）等功能。<br><br>Siri 快捷指令和屏幕时间都是 iOS 12 中引入的主要功能：其中快捷指令允许用户为 Siri 创建自定义语音指令，并可以与第三方 App 组成指令宏。macOS 上，用户依然需要从 App Store 下载该应用。需要注意的是，只有采用 Marzipan（苹果跨平台框架）的应用才能获得 macOS 上的 Shortcuts 支持。<br><br>苹果将在这届 WWDC 提供针对 Shortcuts 的新 SDK，让 iOS 开发者尤其是 iPad App 开发者可以更轻松地将应用跨至 Mac 并适用最新功能。<br><br><p align="center"><a href="https://resource.feng.com/resource/h062/h41/img201904200011380.jpg" title="iOS上的Siri快捷指令等功能也要搬上macOS"><img src="https://resource.feng.com/resource/h062/h41/img201904200011380.jpg"></a></p><br>屏幕时间则可以供用户查看在各个应用中花费的时间，并且对特定应用或特定类别（比如社交类）设置限制时间，家长也可以使用屏幕时间为孩子设定限制。macOS 的屏幕将通过系统偏好设置实现。<br><br>另外，消息还称 macOS 10.15 还将带来 iOS 上的 iMessage 动画特效。<br><br>早前有关 macOS 10.15 的传闻还包括：一个重新设计的 Book 应用，独立的播客、音乐和电视应用，以及 Apple Watch for Mac 的身份识别扩展等等。就目前看来，下个版本的 macOS 和 iOS 主要变化方向之一就是走向融合。<br><br>&nbsp;<p></p>
            <p><strong>　　欢迎关注威锋网官方微信：威锋网（weiphone_2007) 汇聚最新Apple动态，精选最热科技资讯。</strong></p>
          </div>
          <div class="article-list">
            <div class="article-ul">
              <ul class="left-ul-news">
                <h3>相关文章</h3>
                <li v-for="(item, index) in relatedArticles" :key="index">
                  <a :href="item.link">{{item.title}}</a>
                </li>
              </ul>
              <ul>
                <h3>延伸阅读</h3>
                <li v-for="(item, index) in extendedRead" :key="index">
                  <a :href="item.link">{{item.title}}</a>
                </li>
              </ul>
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
  name: 'NewsDetail',
  data() {
    return {
      relatedArticles: [
        {
          title: '文章1',
          link: '文章1'
        },
        {
          title: '文章2',
          link: '文章2'
        },
        {
          title: '文章3',
          link: '文章3'
        },
        {
          title: '文章4',
          link: '文章4'
        },
        {
          title: '文章5',
          link: '文章5'
        },
      ],
      extendedRead: [
        {
          title: '文章1',
          link: '文章1'
        },
        {
          title: '文章2',
          link: '文章2'
        },
        {
          title: '文章3',
          link: '文章3'
        },
        {
          title: '文章4',
          link: '文章4'
        },
        {
          title: '文章5',
          link: '文章5'
        },
      ],
    };
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
  .news-detail-wrap {
    width: 1160px;
    margin: 0 auto;
    .main {
      .news-left {
        float: left;
        width: 734px;
        .detail-title {
          h1 {
            border-bottom: 3px solid #000;
            padding: 20px 0px;
            font-size: 28px;
          }
        }
        .detail-content {
          font-size: 16px;
          line-height: 30px;
          color: #333;
          .detail-title {
            padding: 15px 25px;
            font-size: 18px;
            font-style: italic;
            color: #111;
            position: relative;
            p {
              font-size: 16px;
              margin-bottom: 20px;
              line-height: 30px;
              color: #333;
            }
          }
          img {
            max-width: 600px;
          }
        }
        .article-list {
          width: 100%;
          border-top: 3px solid #000;
          height: auto;
          ul {
            &.left-ul-news {
              width: 320px;
            }
            &:first-child {
              border-left: none;
              padding-left: 0px;
            }
            float: left;
            width: 48%;
            margin: 30px 0;
            list-style-type: square;
            color: #d3d3d3;
            font-size: 12px;
            border-left: 1px solid #dedede;
            padding-left: 19px;
            h3 {
              font-style: 20px;
              font-weight: bold;
              padding: 5px 0;
              color: #000;
            }
            li {
              margin: 5px 0;
              font-size: 14px;
              margin-left: 20px;
              height: 20px;
              vertical-align: middle;
              line-height: 20px;
              a {
                display: inline-block;
                height: 100%;
                width: 98%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: break-word;
                vertical-align: top;
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

