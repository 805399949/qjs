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
      <div class="news-content clearfix" ref="newsList">
        <div class="news-item" v-for="(item, index) in newsList" :key="index" ref="newsItem">
          <newsBox 
            :imgUrl="item.img"
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
import { setTimeout } from 'timers';

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
  methods: {
    waterFall() {
      let listRef = this.$refs.newsList, // 资讯列表整体包裹层
          itemRef = this.$refs.newsItem, // 获取每一个资讯的div
          len = itemRef.length, // 资讯个体的数量
          itemRefWidth = itemRef[0].offsetWidth, // 资讯个体的 宽度
          listRefWidth = 1160,
          col = Math.floor(listRefWidth / itemRefWidth); // 展示列数 = 整体宽度 / 个体宽度
      let img = itemRef[len - 1].getElementsByTagName('img')[0]; // 获取最后一个资讯里面的img
      // 执行 img.onload 事件
      img.onload = () => {
        // 以下是瀑布流代码
        let boxHeight = [];
        for (let i = 0; i < len; i++) {
          if (i < col) {
            boxHeight.push(itemRef[i].offsetHeight);
          } else {
            let minH = Math.min.apply(null, boxHeight),
                minIndex = boxHeight.indexOf(minH);
            itemRef[i].style.cssText = `position:absolute;top:${minH}px;left:${minIndex * (itemRefWidth + 32)}px;`;
            boxHeight[minIndex] += itemRef[i].offsetHeight;
          }
        }
        listRef.style.height = Math.max.apply(null, boxHeight) + 'px';
      }
    },
  },
  created() {
    store.dispatch('getNewsList', {page: 0, number: 8}).then(data => {
      if (data.status === 200) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.waterFall();
          }, 0) 
        });
      }
    });
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
    margin-bottom: 15px;
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
      position: relative;
      margin-top: 15px;
      .news-item {
        float: left;
        margin-left: 32px;
        padding-bottom: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>


