<template>
  <div id="app">
    <!-- <Public></Public> -->
    <!-- <div class="wrap"> -->
      <router-view></router-view>
    <!-- </div> -->
    
  </div>
</template>

<script>
import Public from "./views/Public";

export default {
  name: "app",
  components: {
    Public
  }
};
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
ul li {
  list-style-type: none;
}
.wrap {
  margin: 0 auto;
  width: 1000px;
  position: relative;
}
.clearfix:before,
.clearfix:after {
  display: block;
  content: "\200b";
  height: 0;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
img {
  border: 0;
  border: none;
}
</style>
