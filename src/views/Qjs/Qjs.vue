<template>
  <div class="qjs-wrap">
    <div class="carouse">
      <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
          <div class="one">1</div>
        </CarouselItem>
        <CarouselItem>
          <div class="one">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="one">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="one">4</div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="news-wrap">
      <div class="tit-wrap">
        <p class="tit">资讯</p>
        <span class="tit-line"></span>
        <p class="tit dec">我们将为您提供最新，最有价值的信息</p> 
      </div>
      <div class="news-content clearfix">
        <div class="news-item" v-for="(item, index) in newsList" :key="index">
          <newsBox 
            :title="item.title"
            :describe="item.describe"
            :author="item.author"
            :created="item.created"
          ></newsBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newsBox from "_c/news/boxNews";
import {
  mapState,
} from 'vuex';
import store from "@/store/index.js";

export default {
  name: "qjs",
  components: {
    newsBox,
  },
  data() {
    return {
      value2: 0,
    };
  },
  computed: {
    ...mapState({
      newsList: state => state.news.newsList,
    }),
  },
  created () {
    store.dispatch('getNewsList', {page: 0, number: 10});
  },
};
</script>

<style lang="less" scoped>
.qjs-wrap{
  height: auto;
  .carouse {
    .one {
      height: 300px;
      line-height: 300px;
      text-align: center;
      color: #fff;
      font-size: 20px;
      background: #506b9e;
    }
  }
  .news-wrap {
    width: 1160px;
    height: auto;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 30px;
    .tit-wrap {
      .tit {
        display: inline-block;
        margin-right: 20px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        &.dec {
          margin: 0 20px;
          font-size: 14px;
        }
      }
      .tit-line {
        display: inline-block;
        width: 1px;
        height: 20px;
        border-left: 1px solid #e1e1e1;
      }
    }
    .news-content {
      margin-top: 15px;
      .news-item {
        float: left;
        margin-left: 32px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>


