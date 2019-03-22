<template>
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
</style>


