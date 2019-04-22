<template>
  <div class="header-wrap">
    <div class="logo">
        <slot name="logo"></slot>
    </div>
    <div class="nav">
      <Nav></Nav>
    </div>
    <div class="quick-menu" v-if="alreadyLogin">
      <div class="top-bar-box">
        <Button type="text" size="large">登录</Button>
        <Button shape="circle" size="large">注册</Button>
      </div>
    </div>
    <User :userName="userInfo.name" :userAvator="userInfo.avator" style="float: right" v-else/>
  </div>
</template>

<script>
import Nav from "_c/nav/Nav"
import User from "_c/User/User"
import { type } from "os"

export default {
  name: "Header",
  components: {
    Nav,
    User
  },
  data() {
    return {
      alreadyLogin: this.userInfo && this.userInfo.alreadyLogin // 在vuex中存的是否登陆属性
    };
  },
  computed: {
    userInfo() {
      if (Object.keys(this.$store.state.user.userInfo).length === 0) return {}
      else {
        return typeof this.$store.state.user.userInfo === "object"
          ? this.$store.state.user.userInfo
          : JSON.parse(this.$store.state.user.userInfo)
      }
    }
  },
  methods: {
  
  },
  created () {
     
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.header-wrap {
  width: 1000px;
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

