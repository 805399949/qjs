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
        <!-- hot_spots -->
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
          <rightHotNews></rightHotNews>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapActions, mapState } from "vuex";
import rightHotNews from '_c/news/rightHotNews';
import store from "@/store/index.js";

export default {
  name: 'NewsList',
  components: {
    rightHotNews,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      contentList: state => state.news.newsList,
    }),
  },
  methods: {
    ...mapActions(["handleHeaderPath", "handleSelected"]),

  },
  async beforeRouteEnter(to, from, next) {
    // store.commit('startRequest');
    store.dispatch('getNewsList', {
      page: 0,
      number: 10,
    });
    // store.commit('endRequest');
    next();
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
    }
  }
}
</style>

