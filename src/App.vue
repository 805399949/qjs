<template>
  <div id="app">
    <!-- <div class="wrap"> -->
      <router-view v-if="isRouterAlive"></router-view>
    <!-- </div> -->
    
  </div>
</template>

<script>

export default {
  name: "app",
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      console.log('reload')
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
};
</script>

<style lang="less">
*{ word-wrap: break-word;   margin: 0; padding: 0; }
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
}
#app {
  .size;
}
ul li {
  list-style-type: none;
}
.wp,
.wrap {
  margin: 0 auto;
  width: 1000px;
  position: relative;
}
.cl:before,
.cl:after,
.clearfix:before,
.clearfix:after {
  content: "\200b";
  display: block;
  height: 0;
}
.cl:after,
.clearfix:after {
  clear: both;
}
.cl,
.clearfix {
  *zoom: 1;
}
.hide {
  display: none;
}
img {
  border: 0;
  border: none;
}

.bm_h .o {
  float: right;
  background: url(./assets/img/bg_hor.png) no-repeat -60px -322px;
  cursor: pointer;
  margin-top: 10px;
  height: 20px;
  width: 20px;
}
.bm_h .o_expand {
  background-position: -80px -322px;
}
.bm_h .o img {
  display: none;
}
.bm_h .i {
  padding-left: 10px;
}
.bm_h .pn {
  margin-top: 4px;
}
.bm_h h2 {
  font-size: 16px;
  font-weight: normal;
}
.bm_h a,
.bm_h a:hover {
  color: #fff;
}
.y {
  float: right;
}
.bm_h .y {
  font-size: 12px;
}
.bm_h {
  background: #74889b url(./assets/img/bg_hor.png) repeat-x 0 -346px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 1px 3px #bcbcbc;
  color: #fff;
  font-size: 14px;
  line-height: 42px;
  height: 42px;
  margin-bottom: 0;
  padding: 0 15px;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.32);
}
.bm_c {
  background: #fff;
  box-shadow: 0 1px 3px #bcbcbc;
}
.fl_tb {
  width: 100%;
}
</style>
