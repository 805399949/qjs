<template>
  <div class="header-wrap">
    <div class="logo">
      <a href="">
        <img src="@/assets/img/logo.png" alt>
      </a>
    </div>
    <div class="nav">
      <Nav></Nav>
    </div>
    <div class="quick-menu">
      <div class="top-bar-box">
        <Button type="text" size="large">登录</Button>
        <Button shape="circle" size="large">注册</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '_c/nav/Nav';

export default {
  name: 'Header',
  components: {
    Nav,
  },
}
</script>

<style scoped lang="less">
  .header-wrap {
    width: 1160px;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
    .logo {
      float: left;
      width: 125px;
      height: 60px;
      margin-right: 40px;
      a {
        img {
          width: 125px;
          height: 60px;
        }
      }
    }
    .nav {
      float: left;
    }
    .quick-menu {
      float: right;
      .top-bar-box {
        font-weight: bold;
        height: 60px;
        line-height: 60px;
      }
    }
  }
</style>

