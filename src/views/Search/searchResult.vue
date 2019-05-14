<template>
  <div>
    <div class="search-result-wrap clearfix">
      <div class="search-result-input clearfix">
        <input type="text" placeholder="请输入关键词" value="健康">
        <div class="search-btn">
          <span class="search-text weight-bold">站内搜索</span>
          <span class="search-icon"></span>
        </div>
      </div>
      <div class="search-result-list">
        <div class="loading-more">
          <ul class="search-result-list-main clearfix">
            <li class="search-result-list-item-article">
              <div class="flow-article-item">
                <div class="shadow-wrapper">
                  <div class="shadow-wrapper-card" style="width:720px;height:173px;top:-15px;left:-10px"></div>
                  <div class="shadow-content">
                    <a class="article-item-pic" href="/p/5194342" target="_blank" rel="noopener noreferrer">
                      <img class="scaleBig" src="https://img.36krcdn.com/20190413/v2_1555089368071_img_000" alt="闽系房企的冬天没过去">
                    </a>
                    <div class="article-item-info">
                      <p class="feed-title-wrapper ellipsis-2">
                        <span class="feed-wrapper"></span>
                        <a class="article-item-title weight-bold" href="/p/5194342" target="_blank" rel="noopener noreferrer">闽系房企的冬天没过去</a>
                      </p>
                      <a class="article-item-description ellipsis-2" href="/p/5194342" target="_blank" rel="noopener noreferrer">亿的负债压顶，不但偿债压力巨大，负债结构也以一年期的短期负债为主。短债压力爆表及不<em>健</em><em>康</em>的负债结构在去</a>
                      <div class="flow-bar">
                        <span class="flow-bar-time"><i class="flow-bar-time-icon"></i>23分钟前</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResult'
}
</script>

<style lang="less" scoped>
  @import '../../assets/style/common.less';
  .search-result-wrap {
    width: 1160px;
    margin: 0 auto;
    background-color: #fff;
    .search-result-input {
      background: #edf1f4;
      border-radius: 1px;
      height: 98px;
      margin: 0 auto;
      padding: 26px 0 26px 100px;
      input {
        background: #fff;
        border: 1px solid #ddd;
        border-right: none;
        color: #a7a7a7;
        float: left;
        font-size: 18px;
        height: 100%;
        text-indent: 15px;
        width: 650px;
        outline: none;
      }
      .search-btn {
        background: #4285f4;
        border-radius: 0 1px 1px 0;
        cursor: pointer;
        float: left;
        height: 100%;
        line-height: 46px;
        position: relative;
        width: 180px;
        .search-text {
          color: #fff;
          float: left;
          font-size: 16px;
          padding-left: 46px;
        }
      }
    }
    .search-result-list {
      float: left;
      padding-top: 40px;
      margin-left: 40px;
      width: 690px;
      .loading-more {
        .search-result-list-main {
          .search-result-list-item-article {
            margin-bottom: 30px;
            .flow-article-item {
              display: block;
              height: 143px;
              position: relative;
              .shadow-wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                &:hover {
                  .shadow-wrapper-card {
                    background: #fff;
                    box-shadow: 0 0 25px 2px rgba(0,0,0,.2);
                  }
                }
                .shadow-wrapper-card {
                  border-radius: 2px;
                  position: absolute;
                  transition: all .2s linear;
                }
                .shadow-content {
                  height: 100%;
                  left: 0;
                  position: absolute;
                  top: 0;
                  width: 100%;
                  .article-item-pic {
                    border-radius: 2px;
                    display: flex;
                    float: left;
                    height: 100%;
                    justify-content: center;
                    overflow: hidden;
                    width: 216px;
                    img {
                      height: 100%;
                    }
                  }
                  .article-item-info {
                    float: left;
                    height: 100%;
                    margin-left: 20px;
                    position: relative;
                    width: 454px;
                    .feed-title-wrapper {
                      line-height: 24px;
                      margin-top: 8px;
                      max-height: 48px;
                      overflow: hidden;
                      .article-item-title {
                        color: #262626;
                        font-size: 18px;
                        text-align: justify;
                        transition: .5s;
                      }
                    }
                    .article-item-description {
                      color: #787878;
                      font-size: 13px;
                      letter-spacing: 0;
                      line-height: 20px;
                      margin-top: 10px;
                      max-height: 40px;
                      overflow: hidden;
                      text-align: justify;
                    }
                    .flow-bar {
                      bottom: 2px;
                      color: #a7a7a7;
                      float: left;
                      font-size: 12px;
                      line-height: 18px;
                      position: absolute;
                      width: 100%;
                      .flow-bar-time {
                        padding-left: 5px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>

