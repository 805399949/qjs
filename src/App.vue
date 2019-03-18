<template>
  <div id="app">
    <Public></Public>
    <div class="wrap">
      <router-view></router-view>
    </div>
    
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

<style>
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
