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
      <div class="news-content">
        <h1>资讯内容</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qjs",
  data() {
    return {
      value2: 0
    };
  }
};
</script>

<style lang="less" scoped>
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
  margin: 0 auto;
  margin-top: 10px;
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
</style>


